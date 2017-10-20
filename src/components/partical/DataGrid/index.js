/**
 * Created by amarsoft on 2017/10/18.
 */
import DataGrid from './DataGrid'
import {resta} from '../../../assets/rest'
import $ from 'jquery'

function dataGridBuilder (objectId, scope) {
  if (!objectId) {
    console.warn('DataGrid objectId is not defined')
    return
  }

  // if (!scope) {
  //   console.warn('DataGrid scope is not defined')
  //   return
  // }

  // let vm = scope[objectId] || {}
  // scope[objectId] = vm

  let vm = scope ? scope[objectId] : {}
  vm.globalConfig = {
    pagination: {
      total: 0,
      currentPage: 1,
      perPage: 10,
      sizeOptions: [10, 15, 20, 30, 50, 100],
      async: false,
      onChange (curPage) {
        console.warn(curPage)
      },
      onSizeChange (pageSize) {
        console.warn(pageSize)
      }
    }
  }

  vm.listOptions = {

  }

  // const queryCache = {
  //
  // }

  function queryListTplData (api) {
    return queryData(api)
  }

  let api_src = ''

  function queryData (api, query = {}) {
    if (!api) {
      console.error('query args exception !')
      return
    }
    api_src = api
    const defer = $.Deferred()
    resta.get(api, query).done((res) => {
      defer.resolve(res)
      console.log('get data success from ' + api)
    }).fail((res) => {
      defer.reject(res)
      console.error('get data error !', JSON.stringify(res))
    })
    return defer.promise()
  }

  function queryListData (api, query) {
    if (api) {
      api_src = api
    }
    return queryData(api, query)
  }

  function queryFilterData (query) {
    return queryData(api_src, query)
  }

  function render (queryListTplConfig, queryListConfig) {
    if (!queryListTplConfig || !queryListConfig) {
      return
    }
    const listTplPromise = queryListTplData(queryListTplConfig.api, queryListTplConfig.query).done(res => {
      fillTemplate(res.body)
    })
    const listPromise = queryListData(queryListConfig.api, queryListConfig.query).done(res => {
      if (res.body) {
        vm.globalConfig.pagination.total = res.body.length || 0
        console.log(res.body.length)
        fillData(res.body)
      }
    })

    return $.when(listTplPromise, listPromise).then(() => {
      vm.created = true
    })
  }

  function fillTemplate (data) {
    vm.tplData = []
    data.forEach((item, index) => {
      let temp = {}
      temp.key = item.field
      temp.title = item.name
      delete item.field
      delete item.name
      $.extend(temp, item)
      vm.tplData.push(temp)
    })
    // console.log(11111111, vm.tplData)
  }

  function fillData (data) {
    // console.log('data', data, data instanceof Array)
    vm.listData = []
    data.forEach((item, index) => {
      vm.listData.push(item)
    })
    // vm.listData = data
  }

  function search (query) {
    queryFilterData(query)
  }

  // btn: [name, onclick, id, type, icon, size] || {...}
  function addBtn (btn) {
    vm.buttonsList = vm.buttonsList || []
    if (btn instanceof Array) {
      let btnObject = {}
      if (!btn[0]) {
        console.error('button name is required !')
        return
      } else {
        btnObject.name = btn[0]
      }

      if (!btn[1] || !(btn instanceof Function)) {
        console.error('button onclick event is required, need Function type anyway !')
        return
      } else {
        btnObject.onclick = btn[1]
      }
      btnObject.id = btn[2] || 'data-list-btn' + Math.uuid()
      btnObject.type = btn[3] || 'default'
      btnObject.icon = btn[4] || ''
      btnObject.size = btn[5] || ''
      btnObject.disabed = btn[6] || false
      // 未做查重处理
      vm.buttonsList.push(btnObject)
    } else if (btn instanceof Object) {
      if (!btn.name) {
        console.error('button name is required !')
        return
      }
      if (!btn.onclick) {
        console.error('button onclick event is required, need Function type anyway !')
        return
      }
      let btnObject = {
        name: '',
        onclick: null,
        id: 'data-list-btn-' + Math.uuid(),
        type: '',
        icon: '',
        size: ''
      }
      $.extend(btnObject, btn)
      vm.buttonsList.push(btnObject)
    }
    return
  }

  return {
    render,
    addBtn,
    search,
    vm
  }
}
export default {
  builder: dataGridBuilder,
  component: DataGrid
}
