// https://www.codewars.com/kata/merged-objects/train/javascript

function objConcat(objects) {
  result = {};
  objects.forEach(object => {
    for (var key in object) {
      result[key] = object[key];
    }
  });

  return result;
}
