// https://www.codewars.com/kata/59557b2a6e595316ab000046

function convertHashToArray(hash) {
  let array = [];

  for (const aaa in hash) {
    array.push([aaa, hash[aaa]]);
  }

  return array.sort();
}
