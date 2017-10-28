/**
 * Created by amarsoft on 2017/10/28.
 */

import ie from './ie/ie'
import $ from 'jquery'
import {infoTplData, infoData} from './simulate/demo-PersonInfo'

// let thisContainer, thisDono, thisOwArgs, thisHasCodeParam, domObject
class IEInfoObject {
  constructor (_objectId, _vm) {
    this.objectId = _objectId
    this.template = {}
    this.data = {}
  }
  run (container = $('.content-router-view'), dono, owArgs, hasCodeMap, _hasCodeParam) {
    ie.block('正在加载', container)
    // 模拟异步加载
    const promise = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(infoTplData)
      }, 2000)
    })
    return promise.then(tplData => {
      tplData = tplData.data || tplData
      const elements = tplData.elements
      const formUIHint = tplData.formUIHint
      formUIHint.columnNumber = formUIHint.columnNumber || 1
      this.template = {}
      elements.forEach((item, index) => {
        item.elementUIHint.colspan = item.elementUIHint.colspan || 1
        item.elementUIHint.layoutCols = (item.elementUIHint.colspan / formUIHint.columnNumber) * 12
        if (item.group) {
          const info = item.group.split(':')
          const sortNo = info[0].trim()
          const name = info[1].trim()
          this.template[sortNo] = this.template[sortNo] || {}
          const group = this.template[sortNo]
          group.sortNo = sortNo
          group.name = name
          group.items = group.items || []
          group.items.push(item)
        } else {
          const group = this.template['default'] = this.template['default'] || {}
          group.items = group.items || []
          group.items.push(item)
        }
      })
      this.data = infoData
      ie.unblock(container)
    })
  }
}

export {
  IEInfoObject
}
