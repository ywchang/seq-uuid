const test = require('tape')
const { format } = require('../')

test('should format from bytes to stardard uuid string', (t) => {
  t.equal(format([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
    '01020304-0506-0708-090a-0b0c0d0e0f10')
  t.end()
})
