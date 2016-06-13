
const isNode = require('../is-node')

const body = document.querySelector('body')

function colored(msg) {
  console.log('%c-- ' + msg + ' --', 'color:green; background-color:yellow')
}

function test(el) {
  console.log(el.nodeName, 'isNode:', isNode(el))
}

function onload() {
  colored('body.children')
  var els = body.children
  for (var i = 0, n = els.length; i < n; i++) {
    test(els[i])
  }

  colored('not body.children')
  test(document.head)

  var canvas = document.createElement('canvas')
  document.body.parentElement.appendChild(canvas)
  test(canvas)

  colored('created')
  test(document.createComment('a comment'))
  test(document.createTextNode('a text'))
  test(document.createElement('bib'))

  colored('fake')
  test({nodeName:'FAKE', nodeType:1})
}

setTimeout(onload, 25)
