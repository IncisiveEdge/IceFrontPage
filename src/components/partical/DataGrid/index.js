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
  vm.tplData = []
  vm.listData = []
  vm.globalConfig = {
    loading: true,
    selectedMode: 'multiple',
    height: undefined,
    customizeElements: [],
    buttonsList: [],
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

  function renderOnly (listData, tplData) {
    fillTemplate(tplData)
    vm.globalConfig.pagination.total = listData.length || 0
    fillData(listData)
    vm.globalConfig.loading = false
    vm.created = true
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
        fillData(res.body)
      }
    })

    return $.when(listTplPromise, listPromise).then(() => {
      vm.globalConfig.loading = false
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

  function setElement (element) {
    vm.globalConfig.customizeElements.push(element)
  }

  function setWrapperMode (bool) {
    vm.globalConfig.height = bool ? undefined : 300
  }

  function setSelectedMode (selectedType) {
    vm.globalConfig.selectedMode = selectedType || 'single'
  }

  function getSelectedMode () {
    return vm.globalConfig.selectedMode
  }

  function setItemsPerPage (counts) {
    vm.globalConfig.pagination.perPage = counts
    if (vm.globalConfig.pagination.sizeOptions.indexOf(counts) === -1) {
      vm.globalConfig.pagination.sizeOptions.push(counts)
      vm.globalConfig.pagination.sizeOptions.sort((a, b) => {
        return a - b
      })
    }
  }

  return {
    render,
    renderOnly,
    search,
    setElement,
    setWrapperMode,
    setSelectedMode,
    getSelectedMode,
    setItemsPerPage,
    vm
  }
}
export default {
  builder: dataGridBuilder,
  component: DataGrid
}
