const isNodeLanded = require('../is-node-landed')
const isNode = require('../is-node')
const test = require('tape')

function qs(selector) {
  return document.querySelector('#test').querySelector(selector)
}

function qi(index) {
  return document.querySelectorAll('#test > *')[index]
}

test('is-node', function(t) {
  var img = qs('img')
  var bub = qs('bub')
  var span = qs('span')
  var ecomm = qi(3)
  var style = qs('style')
  var svg = qi(5)
  var textarea = qs('textarea')
  var div = qs('div')
  var script = qs('script')
  var head = document.head

  t.equals(isNode(img), true, 'img')
  t.equals(isNodeLanded(img), true, 'img landed')
  t.equals(isNode(bub), true, 'bub')
  t.equals(isNodeLanded(bub), true, 'bub landed')
  t.equals(isNode(span), true, 'span')
  t.equals(isNodeLanded(span), true, 'span landed')
  t.equals(isNode(ecomm), true, 'ecomm')
  t.equals(isNodeLanded(ecomm), true, 'ecomm landed')
  t.equals(isNode(style), true, 'style')
  // false because not visual
  t.equals(isNodeLanded(style), false, 'style landed')
  t.equals(isNode(svg), true, 'svg')
  t.equals(isNodeLanded(svg), true, 'svg landed')
  t.equals(isNode(textarea), true, 'textarea')
  t.equals(isNodeLanded(textarea), true, 'textarea landed')
  t.equals(isNode(div), true, 'div')
  t.equals(isNodeLanded(div), true, 'div landed')
  t.equals(isNode(script), true, 'script')
  // false because not visual
  t.equals(isNodeLanded(script), false, 'script landed')
  t.equals(isNode(head), true, 'head')
  // false because not visual
  t.equals(isNodeLanded(head), false, 'head landed')

  var canvas = document.createElement('canvas')
  t.equals(isNode(canvas), true, 'canvas')
  // false because not landed yet
  t.equals(isNodeLanded(canvas), false, 'canvas landed')
  document.body.parentElement.appendChild(canvas)
  t.equals(isNode(canvas), true, 'canvas parent appended')
  // false because not landed inside body
  t.equals(isNodeLanded(canvas), false, 'canvas parent appended landed')
  document.body.appendChild(canvas)
  t.equals(isNode(canvas), true, 'canvas body appended')
  t.equals(isNodeLanded(canvas), true, 'canvas body appended landed')

  // created
  var com = document.createComment('a comment')
  var txt = document.createTextNode('a text')
  var bib = document.createElement('bib')
  var scr = document.createElement('script')
  t.equals(isNode(com), false, 'comment')
  t.equals(isNodeLanded(com), false, 'comment landed')
  t.equals(isNode(txt), false, 'text')
  t.equals(isNodeLanded(txt), false, 'text landed')
  t.equals(isNode(bib), true, 'bib')
  t.equals(isNodeLanded(bib), false, 'bib landed')
  t.equals(isNode(scr), true, 'script')
  t.equals(isNodeLanded(scr), false, 'script landed')

  var frag = document.createDocumentFragment()
  t.equals(isNode(frag), false, 'frag')
  t.equals(isNodeLanded(frag), false, 'frag landed')
  var li = document.createElement('li')
  t.equals(isNode(li), true, 'li')
  t.equals(isNodeLanded(li), false, 'li landed')
  frag.appendChild(li)
  t.equals(isNode(frag.firstChild), true, 'frag child')
  // false because not landed inside body
  t.equals(isNodeLanded(frag.firstChild), false, 'frag child landed')

  // fake
  var fake = { nodeName: 'FAKE', nodeType: 1 }
  t.equals(isNode(fake), false, 'fake')
  t.equals(isNodeLanded(fake), false, 'fake')

  // wrong
  t.equals(isNode([]), false)
  t.equals(isNode([1]), false)
  t.equals(isNode({}), false)
  t.equals(isNode({ a: 1 }), false)
  t.equals(isNode('abc'), false)
  t.equals(isNode(0), false)
  t.equals(isNode(1), false)
  t.equals(isNode(Infinity), false)
  t.equals(isNode(/./), false)
  t.equals(isNode(Math), false)
  t.equals(isNode(function() {}), false)
  t.equals(isNode(new Date()), false)
  t.equals(isNode(arguments), false)
  t.end()
})
