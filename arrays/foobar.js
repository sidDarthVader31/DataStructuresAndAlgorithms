/**
 * @param{number}
 * @returns{number[]}
 **/
function foobar(area){
  let areasArray = [];
  while (area > 0) {
    let largestSide = Math.floor(Math.sqrt(area));
    let largestArea = Math.pow(largestSide, 2);
    areasArray.push(largestArea);
    area = area - largestArea;
  }
  return areasArray;
};
console.log(foobar(15324));
