class SequentialBytesGenerator {
  generate(size: number, durationPerUnitInMilliSeconds: number): Buffer {
    const buffer = Buffer.alloc(size);
    let base = Date.now() / durationPerUnitInMilliSeconds;
    for (let index = size - 1; index >= 0; index--) {
      buffer[index] = base & 0xff;
      base >>>= 8;
    }
    return buffer;
  }
}

export default new SequentialBytesGenerator();
