### Proxy for Screen.colorDepth in 3D Secure v2


### Description

The problem is that while the CSSOM specification says that Screen.colorDepth is an unsigned long (so can have any value between zero and four billion), the 3D Secure v2 specification says that this value is a string enum and may only have the values of 1, 4, 8, 15, 16, 24, 32, or 48. According to the 3D Secure specification, 30 is not a valid bit depth.

The 3D Secure specification is not clear on what should happen if the value is not one of the allowed values. It is possible that the value is ignored, or that the transaction is rejected. It is also possible that the value is rounded to the nearest allowed value, in which case 30 would be rounded to 32.

### Usage

Just import the `screen-color-depth-proxy.js` file in your project and use the `screen.colorDepth` property as usual.

### Article 

Propblem: https://medium.com/@mikehall314/the-strangest-bug-i-ever-encountered-e7d570e06ee7
