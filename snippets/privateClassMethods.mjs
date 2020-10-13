const privateClassMethodsandFields = () => {
  class Students {
    #name;

    constructor(){
      this.#name = "JS snippets";
    }

    #privateMethod() {
      return 'Come and learn Js with us';
    }

    getPrivateMessage() {
      return this.#privateMethod();
    }
  }

  const instance = new Students();
  console.log(instance.name); //=> undefined
  console.log(instance.privateMethod); //=> undefined
  console.log(instance.getPrivateMessage()); //=> Come and learn Js with us
};

privateClassMethodsandFields();
