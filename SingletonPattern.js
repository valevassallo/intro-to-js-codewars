// https://www.codewars.com/kata/534fcca5edb124cfe6000f60

var Singleton = function() {
  if (!!Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  return this;
};
