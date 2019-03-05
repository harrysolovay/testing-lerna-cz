import test from 'ava'
import a from 'testing-lerna-cz-a'
import b from 'testing-lerna-cz-b'

test('works', t => {
  console.log('some change')
  t.plan(2)
  t.is(a(), 'a')
  t.is(`${b()}c`, 'bc')
})
