# seq-uuid [![Build Status](https://travis-ci.org/ywchang/seq-uuid.svg?branch=master)](https://travis-ci.org/ywchang/seq-uuid)
This is an utility function to generate sequential uuid, a node.js re-implementation based on timestamp approach referring to this post https://www.2ndquadrant.com/en/blog/sequential-uuid-generators/ and this github repo, https://github.com/tvondra/sequential-uuids. The credit goes to the original author.

Below are examples of how to use this lib.

```javascript
const sequuid = require('seq-uuid');

sequuid();
// '5db3df8e-1dfc-9e45-97e8-c5098c3be982'
sequuid();
// '5db32a77-e337-9dc4-d425-48908cc092c1'
sequuid();
// '5db4e76e-584b-e573-5ca2-13a5833af521'
```

## Configurable Options

Parameter | Meaning | Default Value | Unit
--- | --- | --- | --- 
interval | The duration within which the uuid generated will share the same sequential segment, the unit is ms. For example, if the value is 60 * 1000, that means within 1 minute, all uuid being generated will share the same sequential segment, which means, the uuids are not sorted, but out of 1 minute, the order is sorted | 60 * 1000 <br />(1 minute) | millisecond
length | The unit is byte, meaning how many bytes are used to genrate the sequential segment, while rest are ramdom to make user uniqueness. This will decide how long the sequential segment will wrap around. | 2 | byte (8 bits)

By default, the interval is 60 * 1000 ms and the length is 2 bytes, that means every 60 * 1000 * 2^16 ~ 45.5 days, the uuid sequential segment will wrap around once.


