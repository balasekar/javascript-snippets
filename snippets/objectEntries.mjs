const entries = () => {
  const obj = {
    name: "JSsnippets",
    age:29,
  };

  Object.entries(obj).forEach(([key, value]) => console.log(`${key}::${value}`));
};

entries();
