const test = require('tape')
const sinon = require('sinon')
const crypto = require('crypto')
const { format, generate } = require('../')
const sequuid = require('../')

test('#sequuid', t => {
  t.test('should return a formatted sequential uuid', q => {
    sinon.stub(Date, 'now').returns(0xabcd)
    sinon.stub(crypto, 'randomBytes').withArgs(16).returns(
      Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    )
    q.deepEqual(sequuid(1, 1), 'cd010203-0405-0607-0809-0a0b0c0d0e0f')
    sinon.restore()
    q.end()
  })
})

test('#format', t => {
  t.test('should format from bytes to stardard uuid string', q => {
    q.equal(format([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
      '01020304-0506-0708-090a-0b0c0d0e0f10')
    q.end()
  })
})

test('#generate', t => {
  t.test('should generate one seq byte if interval is 1ms and length is 1 byte', q => {
    sinon.stub(Date, 'now').returns(0xabcd)
    q.deepEqual(generate(1, 1).slice(0, 1), [0xcd])
    sinon.restore()
    q.end()
  })

  t.test('should generate one seq byte if interval is 1ms and length is 1 byte with decimal', q => {
    sinon.stub(Date, 'now').returns(0xabcd + 0.12345)
    q.deepEqual(generate(1, 1).slice(0, 1), [0xcd])
    sinon.restore()
    q.end()
  })

  t.test('should generate two seq bytes if interval is 1ms and length is 2 bytes', q => {
    sinon.stub(Date, 'now').returns(0xabcd)
    q.deepEqual(generate(1, 2).slice(0, 2), [0xab, 0xcd])
    sinon.restore()
    q.end()
  })

  t.test('should generate one seq byte if interval is 60s and length is 1 byte', q => {
    sinon.stub(Date, 'now').returns(0xabcd * 60 * 1000)
    q.deepEqual(generate(60 * 1000, 1).slice(0, 1), [0xcd])
    sinon.restore()
    q.end()
  })

  t.test('should generate two seq bytes if interval is 60s and length is 2 bytes', q => {
    sinon.stub(Date, 'now').returns(0xabcd * 60 * 1000)
    q.deepEqual(generate(60 * 1000, 2).slice(0, 2), [0xab, 0xcd])
    sinon.restore()
    q.end()
  })

  t.test('should generate tail bytes randomly', q => {
    sinon.stub(Date, 'now').returns(0xabcd)
    sinon.stub(crypto, 'randomBytes').withArgs(16).returns(
      Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    )
    q.deepEqual(generate(1, 1).slice(1, 16),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    sinon.restore()
    q.end()
  })

  t.test('should generate version hex', q => {
    sinon.stub(Date, 'now').returns(0xabcd)
    sinon.stub(crypto, 'randomBytes').withArgs(16).returns(
      Buffer.from([1, 2, 3, 4, 5, 22, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    )
    q.deepEqual(Buffer.from(generate(1, 1).slice(6, 7)).toString('hex'), '06')
    sinon.restore()
    q.end()
  })
})
