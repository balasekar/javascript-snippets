const objectActions = () => {
  const obj = {
    name: "JSsnippets",
    age:29,
    address:{
      street : 'JS'
    }
  };

  const frozenObject = Object.freeze(obj);

  // frozenObject.name = 'weLoveJS'; // Uncaught TypeError

//Although, we still can change a property’s value if it’s an object:

  frozenObject.address.street = 'React'; // no error, new value is set


  // delete frozenObject.name // Cannot delete property 'name' of #<Object>


//We can check if an object is frozen by using
  Object.isFrozen(obj) //true
};

objectActions();
