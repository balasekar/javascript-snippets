const sortSnippet = () => {
  let arr = [3, 1, 2, 22, 12, 5];
  console.log('arr:', arr);
  console.log('sorted array:', arr.sort((a, b) => a - b));
};
sortSnippet();
