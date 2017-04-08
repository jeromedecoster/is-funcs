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

  t.equals(fn(img),           true,  'img')
  t.equals(fn(bub),           true,  'bub')
  t.equals(fn(span),          true,  'span')
  t.equals(fn(ecomm),         true,  'ecomm')
  t.equals(fn(style),         true,  'style')
  t.equals(fn(style, true),   false, 'style true')
  t.equals(fn(style, false),  true,  'style false')
  t.equals(fn(svg),           true,  'svg')
  t.equals(fn(textarea),      true,  'textarea')
  t.equals(fn(div),           true,  'div')
  t.equals(fn(script),        true,  'script')
  t.equals(fn(script, true),  false, 'script true')
  t.equals(fn(script, false), true,  'script false')
  t.equals(fn(head),          true,  'head')
  t.equals(fn(head, true),    false, 'head true')
  t.equals(fn(head, false),   true,  'head false')

  var canvas = document.createElement('canvas')
  t.equals(fn(canvas),        true,  'canvas')
  t.equals(fn(canvas, true),  false, 'canvas true')
  t.equals(fn(canvas, false), true,  'canvas false')
  document.body.parentElement.appendChild(canvas)
  t.equals(fn(canvas),        true,  'canvas parent appended')
  t.equals(fn(canvas, true),  false, 'canvas parent appended true')
  t.equals(fn(canvas, false), true,  'canvas parent appended false')
  document.body.appendChild(canvas)
  t.equals(fn(canvas),        true,  'canvas body appended')
  t.equals(fn(canvas, true),  true,  'canvas body appended true')
  t.equals(fn(canvas, false), true,  'canvas body appended false')

  // created
  var com = document.createComment('a comment')
  var txt = document.createTextNode('a text')
  var bib = document.createElement('bib')
  var scr = document.createElement('script')
  t.equals(fn(com),        false, 'com')
  t.equals(fn(com, true),  false, 'com true')
  t.equals(fn(com, false), false, 'com false')
  t.equals(fn(txt),        false, 'txt')
  t.equals(fn(txt, true),  false, 'txt true')
  t.equals(fn(txt, false), false, 'txt false')
  t.equals(fn(bib),        true,  'bib')
  t.equals(fn(bib, true),  false, 'bib true')
  t.equals(fn(bib, false), true,  'bib false')
  t.equals(fn(scr),        true,  'scr')
  t.equals(fn(scr, true),  false, 'scr true')
  t.equals(fn(scr, false), true,  'scr false')

  var frag = document.createDocumentFragment()
  t.equals(fn(frag),       false, 'frag')
  var li = document.createElement('li')
  t.equals(fn(li),         true, 'li')
  frag.appendChild(li)
  t.equals(fn(frag.firstChild),        true,  'frag child')
  t.equals(fn(frag.firstChild, true),  false, 'frag child true')
  t.equals(fn(frag.firstChild, false), true,  'frag child false')

  // fake
  var fak = {nodeName:'FAKE', nodeType:1}
  t.equals(fn(fak),        false, 'fak')
  t.equals(fn(fak, true),  false, 'fak true')
  t.equals(fn(fak, false), false, 'fak false')

  // wrong
  t.equals(fn([]), false)
  t.equals(fn([1]), false)
  t.equals(fn({}), false)
  t.equals(fn({a:1}), false)
  t.equals(fn('abc'), false)
  t.equals(fn(0), false)
  t.equals(fn(1), false)
  t.equals(fn(Infinity), false)
  t.equals(fn(/./), false)
  t.equals(fn(Math), false)
  t.equals(fn(function() {}), false)
  t.equals(fn(new Date), false)
  t.equals(fn(arguments), false)
  t.end()
})
