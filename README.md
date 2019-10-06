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



