const flattenArray = () => {
  const myArray = [2, 3, [4, 5],[7,7, [8, 9, [1, 1]]]];
  console.log(myArray.flat());
  console.log(myArray.flat(1));
  console.log(myArray.flat(2));
  console.log(myArray.flat(Infinity));
};
flattenArray();
