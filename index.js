exports.format = (bytes) => {
  const part1 = Buffer.from(bytes.slice(0, 4)).toString('hex')
  const part2 = Buffer.from(bytes.slice(4, 6)).toString('hex')
  const part3 = Buffer.from(bytes.slice(6, 8)).toString('hex')
  const part4 = Buffer.from(bytes.slice(8, 10)).toString('hex')
  const part5 = Buffer.from(bytes.slice(10, 16)).toString('hex')
  return `${part1}-${part2}-${part3}-${part4}-${part5}`
}
