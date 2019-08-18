import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import gOPD from 'object-get-own-property-descriptor-x';
import call from 'simple-call-x';

const stubTrue = function stubTrue() {
  return true;
};

/**
 * @param {Function|!object} creator - A creator function or a created object.
 * @returns {!object} - An attempt object.
 */
const getResult = function getResult(creator) {
  return typeof creator === 'function'
    ? attempt(creator)
    : {
        threw: false,
        value: creator,
      };
};

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * @param {!object} descriptor - A descriptor object.
 * @param {!object} context - A created object.
 * @param {Function} [validator] - A function to validate the result.
 * @returns {Function|null} - The getter function or null.
 */
// eslint-enable jsdoc/check-param-names
const getter = function getter(descriptor, context) {
  /* eslint-disable-next-line prefer-rest-params */
  const validator = typeof arguments[2] === 'function' ? arguments[2] : stubTrue;
  const res = attempt(function attemptee() {
    return call(descriptor.get, context);
  });

  return res.threw === false && validator(res.value) ? descriptor.get : null;
};

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * Get a getter.
 *
 * @param {Function|!object} creator - A creator function or a created object.
 * @param {string} getterName - The getter name.
 * @param {Function} [validator] - A function to validate the result.
 * @returns {Function|null} The target.
 */
// eslint-enable jsdoc/check-param-names
const getGetter = function getGetter(creator, getterName) {
  const resTest1 = getResult(creator);

  if (resTest1.threw === false && isObjectLike(resTest1.value)) {
    const descriptor = gOPD(resTest1.value.constructor.prototype, getterName);

    if (descriptor && typeof descriptor.get === 'function') {
      /* eslint-disable-next-line prefer-rest-params */
      return getter(descriptor, resTest1.value, arguments[2]);
    }
  }

  return null;
};

export default getGetter;
