import getGetter from '../src/util-get-getter-x';

const MyClass = function() {};

Object.defineProperties(MyClass.prototype, {
  size: {
    configurable: true,
    get() {
      return 1;
    },
  },
  value: {
    configurable: true,
    value: 1,
  },
});

const creator = function() {
  return new MyClass();
};

const validator = function(value) {
  return typeof value === 'number';
};

const badValidator = function() {
  return false;
};

describe('getGetter', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof getGetter).toBe('function');
  });

  it('should return null if no arguments provided', function() {
    expect.assertions(1);
    expect(getGetter()).toBeNull();
  });

  it('should return null if not found', function() {
    expect.assertions(1);
    expect(getGetter(creator)).toBeNull();
  });

  it('should return null is not a getter', function() {
    expect.assertions(1);
    expect(getGetter(creator, 'value')).toBeNull();
  });

  it('should return a getter without a validator', function() {
    expect.assertions(1);
    expect(getGetter(creator, 'size')).toBeInstanceOf(Function);
  });

  it('should return a getter with a good validator', function() {
    expect.assertions(1);
    expect(getGetter(creator, 'size', validator)).toBeInstanceOf(Function);
  });

  it('should return a null with a bad validator', function() {
    expect.assertions(1);
    expect(getGetter(creator, 'size', badValidator)).toBeNull();
  });

  it('should accept and instance', function() {
    expect.assertions(1);
    const instance = creator();
    expect(getGetter(instance, 'size')).toBeInstanceOf(Function);
  });
});
