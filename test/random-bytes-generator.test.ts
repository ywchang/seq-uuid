import randomBytesGenerator from '../src/random-bytes-generator';
import * as crypto from 'crypto';

describe('RandomBytesGenerator', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('#generate', () => {
    it('should allocate random bytes with specified size', () => {
      const buffer = randomBytesGenerator.generate(16);
      expect(buffer.length).toEqual(16);
    });

    it('should delegate to crypto#randomBytes', () => {
      const buffer = Buffer.from([1, 2, 3]);
      jest.spyOn(crypto, 'randomBytes').mockReturnValue(buffer as any);
      expect(randomBytesGenerator.generate(3)).toEqual(buffer);
      expect(crypto.randomBytes).toHaveBeenCalledWith(3);
    });
  });
});
