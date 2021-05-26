import * as crypto from 'crypto';

class RandomBytesGenerator {
  generate(size: number): Buffer {
    return crypto.randomBytes(size);
  }
}

export default new RandomBytesGenerator();
