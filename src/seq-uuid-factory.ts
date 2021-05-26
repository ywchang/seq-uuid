class SeqUuidFactory {
  create(): Buffer {
    return Buffer.alloc(16);
  }
}

export default new SeqUuidFactory();
