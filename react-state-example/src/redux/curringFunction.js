const add = (a) => {
  return (b) => {
    return (c) => {
      return a * (b + c);
    };
  };
};

const level = add(5);
console.log(level(4)(5));
console.log(level(2)(8));
console.log(level(1)(10));
console.log(level(2)(2));
