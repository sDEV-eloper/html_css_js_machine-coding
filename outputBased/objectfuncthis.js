//guess output
const obj={
    func: function(){
      return 'hello '+ this.name;
    },
    name:'obj'
  }
  const obj2={
    func:obj.func,
    name:'obj2'
  }
  console.log(obj2.func());  //hello obj2
  
  //2. Update code for output: hello obj
  const boundFunc = obj.func.bind(obj); 
   //obj.func.bind(obj) creates a new function where this is permanently bound to obj.
//   By assigning this bound function to obj2.func, we ensure that when obj2.func is called, this refers to obj, not obj2
  obj2.func = boundFunc;
  console.log(obj2.func()); //hello obj
