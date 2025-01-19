function foo(a,b){return a+b;}console.log(foo(2,3)); //5
function foo(a,b){return a-b;}console.log(foo(2,3)); //-1
This code will throw an error because the variable foo is redefined. The second time the function foo is defined, it overwrites the first definition. This can lead to unexpected behavior and errors.