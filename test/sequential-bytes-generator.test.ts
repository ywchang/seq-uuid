import sequentialBytesGenerator from '../src/sequential-bytes-generator';

describe('SequentialBytesGenerator', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('#generate', () => {
    it('should return sequential bytes when duration is 1 and size is 2', () => {
      jest.spyOn(Date, 'now').mockReturnValue(0xabcd);
      const buffer = sequentialBytesGenerator.generate(2, 1);
      expect(buffer.length).toEqual(2);
      expect(buffer[0]).toEqual(0xab);
      expect(buffer[1]).toEqual(0xcd);
    });

    it('should return sequential bytes when duration is 1 and size is 1', () => {
      jest.spyOn(Date, 'now').mockReturnValue(0xabcd);
      const buffer = sequentialBytesGenerator.generate(1, 1);
      expect(buffer.length).toEqual(1);
      expect(buffer[0]).toEqual(0xcd);
    });

    it('should return sequential bytes when duration is 0xff and size is 2', () => {
      jest.spyOn(Date, 'now').mockReturnValue(0xabcdef);
      const buffer = sequentialBytesGenerator.generate(2, 0x100);
      expect(buffer.length).toEqual(2);
      expect(buffer[0]).toEqual(0xab);
      expect(buffer[1]).toEqual(0xcd);
    });
  });
});
