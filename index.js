const crypto = require('crypto')

const getSeq = (interval, length) => {
  const seqBytes = []
  let base = Date.now() / interval
  for (let i = 0; i < length; i++) {
    seqBytes.push(base & 0xff)
    base >>>= 8
  }
  return seqBytes.reverse()
}

const fillRandom = (byteStream) => {
  const randomBytes = crypto.randomBytes(16)
  for (let j = 0, i = byteStream.length; i < 16; i++) {
    byteStream[i] = randomBytes[j++]
  }
}

const format = (byteStream) => {
  const part1 = Buffer.from(byteStream.slice(0, 4)).toString('hex')
  const part2 = Buffer.from(byteStream.slice(4, 6)).toString('hex')
  const part3 = Buffer.from(byteStream.slice(6, 8)).toString('hex')
  const part4 = Buffer.from(byteStream.slice(8, 10)).toString('hex')
  const part5 = Buffer.from(byteStream.slice(10, 16)).toString('hex')
  return `${part1}-${part2}-${part3}-${part4}-${part5}`
}

const resetVersion = (byteStream) => {
  byteStream[6] = byteStream[6] & 0x0f
}

const generate = (interval, length) => {
  const byteStream = getSeq(interval, length)
  fillRandom(byteStream)
  resetVersion(byteStream)
  return byteStream
}

module.exports = (interval = 60 * 1000, length = 2) => {
  return format(generate(interval, length))
}

module.exports.format = format
module.exports.generate = generate
