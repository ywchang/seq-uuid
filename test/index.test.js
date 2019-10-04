const test = require('tape')
const sinon = require('sinon')
const { format, generate } = require('../')

test('#format', t => {
  t.test('should format from bytes to stardard uuid string', q => {
    q.equal(format([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
      '01020304-0506-0708-090a-0b0c0d0e0f10')
    q.end()
  })
})

test('#generate', t => {
  t.test('should generate one seq byte if interval is 1 ms and length is 1 byte', q => {
    sinon.stub(Date, 'now').returns(0xabcd)
    q.deepEqual(generate(1, 1).slice(0, 1), [0xcd])
    sinon.restore()
    q.end()
  })
})
