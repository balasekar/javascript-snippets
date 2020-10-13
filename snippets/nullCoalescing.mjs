const nullCoalescing = () => {
// an equality check against nullary values (e.g. null or undefined). Whenever the expression to the left of the ?? operator evaluates to either //undefined or null, the value defined to the right will be returned.

  const foo = undefined ?? 'default string';
  console.log(foo);
// expected output: "default string"


  const age = 0 ?? 30;
  console.log(age);
// expected output: "0"
};

nullCoalescing();
