'use strict';
const a = 10;

{
  const a = 15;
  let c = {
    abc: 15,
  };
  console.dir(c);
}
console.log(a);
