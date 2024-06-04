//Given
const obj=[
    { key: 'key1', data: 'data1' },
    { key: 'key2', data: 'data2' },
    { key: 'key1', data: 'data1' },
    { key: 'key2', data: 'data1' },
    { key: 'key3', data: 'data1' },
    { key: 'key4', data: 'data1' }
  ]

  //Target Output
//   {
//     key1: [ { key: 'key1', data: 'data1' }, { key: 'key1', data: 'data1' } ],
//     key2: [ { key: 'key2', data: 'data2' }, { key: 'key2', data: 'data1' } ],
//     key3: [ { key: 'key3', data: 'data1' } ],
//     key4: [ { key: 'key4', data: 'data1' } ]
//   }

//using reduce() method
const obj2 = obj.reduce((acc, cur) => {
    acc[cur.key] = acc[cur.key] || [];
    acc[cur.key].push(cur);
    return acc;
  }, {});
console.log("OBJ 2", obj2)

  //using basic approach without any method()
  let obj3={}

obj.forEach(x=>{
  if(obj3[x.key]){
    obj3[x.key].push(x);
  }else{
    obj3[x.key]=[x]
  }
})
  console.log("OBJ 3",obj3)