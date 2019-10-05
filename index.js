const getSeqBytes = (interval, length) => {
  const seqBytes = []
  let base = Date.now() / interval
  for (let i = 0; i < length; i++) {
    seqBytes.push(base & 0xff)
    base >>>= 8
  }
  return seqBytes.reverse()
}

exports.format = (byteList) => {
  const part1 = Buffer.from(byteList.slice(0, 4)).toString('hex')
  const part2 = Buffer.from(byteList.slice(4, 6)).toString('hex')
  const part3 = Buffer.from(byteList.slice(6, 8)).toString('hex')
  const part4 = Buffer.from(byteList.slice(8, 10)).toString('hex')
  const part5 = Buffer.from(byteList.slice(10, 16)).toString('hex')
  return `${part1}-${part2}-${part3}-${part4}-${part5}`
}

exports.generate = (interval, length) => {
  return getSeqBytes(interval, length)
}
