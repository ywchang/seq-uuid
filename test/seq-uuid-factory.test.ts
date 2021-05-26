import seqUuidFactory from '../src/seq-uuid-factory';

describe('SeqUuidFactory', () => {
  describe('#create', () => {
    it('should return a buffer with length of 16', () => {
      const buffer = seqUuidFactory.create();
      expect(buffer.length).toEqual(16);
    });
  });
});
