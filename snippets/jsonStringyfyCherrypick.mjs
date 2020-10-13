const JSONStringyfyCherrypick = () => {
  const user = {
    id: 459,
    name: 'JS snippets',
    age: 29,
    education:{
      degree: 'Masters'
    }
  };

  const str = JSON.stringify(user, ['name', 'age'], 2);
  console.log('str:', str);

  /*str: {
    "name": "JS snippets",
      "age": 29
  }*/

};

JSONStringyfyCherrypick();
