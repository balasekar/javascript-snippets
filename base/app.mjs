const reduceSnippet = () => {
  let arr = [3, 1, 2, 22, 12, 5];
  const generatedOptions = arr.reduce((result, obj) => {
    let option = { label: obj, value: obj };
    result.options.push(option);
    if(arr.length === 1){
      result.selected = option;
    }
    return result;
  }, { options: [] });
  console.log('options::', generatedOptions);
};
reduceSnippet();
