const fn = require('../is-node')
const test = require('tape')

function qs(selector) {
  return document.querySelector('#test').querySelector(selector)
}

function qi(index) {
  return document.querySelectorAll('#test > *')[index]
}

test('is-node', function (t) {

  var img      = qs('img')
  var bub      = qs('bub')
  var span     = qs('span')
  var ecomm    = qi(3)
  var style    = qs('style')
  var svg      = qi(5)
  var textarea = qs('textarea')
  var div      = qs('div')
  var script   = qs('script')
  var head     = document.head

  t.equals(fn(img),      true)
  t.equals(fn(bub),      true)
  t.equals(fn(span),     true)
  t.equals(fn(ecomm),    true)
  t.equals(fn(style),    false)
  t.equals(fn(svg),      true)
  t.equals(fn(textarea), true)
  t.equals(fn(div),      true)
  t.equals(fn(script),   false)
  t.equals(fn(head),     false)

  var canvas = document.createElement('canvas')
  document.body.parentElement.appendChild(canvas)

  t.equals(fn(canvas),        false)
  t.equals(fn(canvas, true),  false)
  t.equals(fn(canvas, false), true)

  // created
  var com = document.createComment('a comment')
  var txt = document.createTextNode('a text')
  var bib = document.createElement('bib')
  var scr = document.createElement('script')
  t.equals(fn(com),        false)
  t.equals(fn(com, true),  false)
  t.equals(fn(com, false), false)
  t.equals(fn(txt),        false)
  t.equals(fn(txt, true),  false)
  t.equals(fn(txt, false), false)
  t.equals(fn(bib),        false)
  t.equals(fn(bib, true),  false)
  t.equals(fn(bib, false), true)
  t.equals(fn(scr),        false)
  t.equals(fn(scr, true),  false)
  t.equals(fn(scr, false), true)

  var frag = document.createDocumentFragment()
  var li = document.createElement('li')
  frag.appendChild(li)
  t.equals(fn(frag.firstChild),        false)
  t.equals(fn(frag.firstChild, true),  false)
  t.equals(fn(frag.firstChild, false), true)

  // fake
  var fak = {nodeName:'FAKE', nodeType:1}
  t.equals(fn(fak),        false)
  t.equals(fn(fak, true),  false)
  t.equals(fn(fak, false), false)
  t.end()
})
