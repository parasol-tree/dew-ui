/* eslint-disable prefer-promise-reject-errors */

function select (element) {
  let selectedText

  if (element.nodeName === 'SELECT') {
    element.focus()

    selectedText = element.value
  } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
    const isReadOnly = element.hasAttribute('readonly')

    if (!isReadOnly) {
      element.setAttribute('readonly', '')
    }

    element.select()
    element.setSelectionRange(0, element.value.length)

    if (!isReadOnly) {
      element.removeAttribute('readonly')
    }

    selectedText = element.value
  } else {
    if (element.hasAttribute('contenteditable')) {
      element.focus()
    }

    const selection = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(element)
    selection.removeAllRanges()
    selection.addRange(range)

    selectedText = selection.toString()
  }

  return selectedText
}

function copyTextFn (text = '') {
  return new Promise((resolve, reject) => {
    const container = document.body
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    const fakeElem = document.createElement('textarea')
    fakeElem.style.fontSize = '12pt'
    fakeElem.style.border = '0'
    fakeElem.style.padding = '0'
    fakeElem.style.margin = '0'
    fakeElem.style.position = 'absolute'
    fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'
    const yPosition = window.pageYOffset || document.documentElement.scrollTop
    fakeElem.style.top = `${yPosition}px`
    fakeElem.setAttribute('readonly', '')
    fakeElem.value = text
    container.appendChild(fakeElem)

    // fakeElem.select()
    select(fakeElem)

    let succeeded
    try {
      succeeded = document.execCommand('copy')
      document.body.removeChild(fakeElem)
      resolve({ status: succeeded, text: '复制成功' })
    } catch (err) {
      succeeded = false
      document.body.removeChild(fakeElem)
      reject({ status: succeeded, text: '复制失败' })
    }
  })
}

export default {
  install (Vue) {
    Vue.prototype.$_copyTextFn = copyTextFn
  }
}
