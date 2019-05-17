// https://www.codewars.com/kata/53c235e4d5cd9c397200021d/

function deepCompare(o1, o2) {
  let result = true;
  for (var key in o1) {
    if (
      typeof o1[key] === "object" &&
      o1[key] !== null &&
      o1[key] !== undefined
    ) {
      result = result && deepCompare(o1[key], o2[key]);
    } else {
      o1Keys = Object.keys(o1);
      o2Keys = Object.keys(o2);
      if (o1Keys.length != o2Keys.length) return false;

      result = result && o1[key] === o2[key];
    }
  }
  if (key === undefined) return o1 === o2;
  return result;
}
