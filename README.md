<a
  href="https://travis-ci.org/Xotic750/util-get-getter-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/util-get-getter-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/util-get-getter-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/util-get-getter-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/util-get-getter-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/util-get-getter-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/util-get-getter-x"
  title="npm version">
<img src="https://badge.fury.io/js/util-get-getter-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/util-get-getter-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/util-get-getter-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/util-get-getter-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/util-get-getter-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/util-get-getter-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/util-get-getter-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_util-get-getter-x"></a>

## util-get-getter-x

Utility to get a getter.

<a name="exp_module_util-get-getter-x--module.exports"></a>

### `module.exports` ⇒ <code>Function</code> ⏏

Utility to get a getter.

**Kind**: Exported member  
**Returns**: <code>\*</code> - The target.

| Param       | Type                            | Description                             |
| ----------- | ------------------------------- | --------------------------------------- |
| creator     | <code>Function or object</code> | A creator function or a created object. |
| getterName  | <code>string</code>             | The getter name.                        |
| [validator] | <code>Function</code>           | A function to validate the result.      |

**Example**

```js
import getGetter from 'util-get-getter-x';

const creator = function() {
  return new Map();
};

const validator = function(value) {
  return typeof value === 'number';
};

const getter = getGetter(creator, 'size', validator);
```
