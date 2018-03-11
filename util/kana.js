const m = new Map()
const NUMBER = 'わぬふあうえおやゆよ'
const HIRAGANA = 'ちこそしいはきくにまのりもみらせたすとかなひてさんつ'

NUMBER.split('').forEach((c, i) => m.set('Digit' + i, c))
HIRAGANA.split('').forEach((c, i) => m.set('Key' + String.fromCodePoint(i + 65), c))

m.set('Minus', 'ほ')
m.set('Equal', 'へ')
m.set('BracketLeft', '゛')
m.set('BracketRight', '゜')
m.set('Semicolon', 'れ')
m.set('Quote', 'け')
m.set('Backslash', 'む')
m.set('Comma', 'ね')
m.set('Period', 'る')
m.set('Slash', 'め')
m.set('IntlRo', 'ろ')

const sm = new Map([
  ['Digit3', 'ぁ'],
  ['KeyE',   'ぃ'],
  ['Digit4', 'ぅ'],
  ['Digit5', 'ぇ'],
  ['Digit6', 'ぉ'],
  ['Digit7', 'ゃ'],
  ['Digit8', 'ゅ'],
  ['Digit9', 'ょ'],
  ['Digit0', 'を'],
])

const DAKUTENABLE = new Set('かきくけこさしすせそたちつてとはひふへほ'.split(''))
const HANDAKUTENABLE = new Set('はひふへほ'.split(''))

function getKana (event) {
  const code = event.code
  if (event.shiftKey) {
    return sm.get(code)
  } else {
    return m.get(code)
  }
}

function addVoiceMark (c, dakuten) {
  if (dakuten === '゛' && DAKUTENABLE.has(c)) {
    return String.fromCodePoint(c.codePointAt(0) + 1)
  } else if (dakuten === '゜' && HANDAKUTENABLE.has(c)) {
    return String.fromCodePoint(c.codePointAt(0) + 2)
  }
  return c
}

export { getKana, addVoiceMark }
