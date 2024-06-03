//complete memoize function for add


//using object literal
const memoize = (func) => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (cache[key]) {
        console.log('Result from cache:', cache[key]);
        return cache[key];
      } else {
        const result = func(...args);
        cache[key] = result;
        console.log('Result calculated:', result);
        return result;
      }
    };
  };
  
  const add = memoize((a, b) => a + b);
  
  console.log(add(2, 3)); // Result calculated: 5
  console.log(add(2, 3)); // Result from cache: 5
  console.log(add(4, 5)); // Result calculated: 9
  console.log(add(4, 5)); // Result from cache: 9
  

  //using Map object

  const memoize2 = (func) => {
    const cache = new Map();
  
    return (...args) => {
      // Generate a unique key for the cache based on arguments
      const key = JSON.stringify(args);
  
      // Check if the result is in the cache
      if (cache.has(key)) {
        console.log('Result from cache:', cache.get(key));
        return cache.get(key);
      } else {
        // Calculate the result
        const result = func(...args);
  
        // Store the result in the cache
        cache.set(key, result);
        console.log('Result calculated:', result);
  
        // Return the result
        return result;
      }
    };
  };
  
  // Example usage with the add function
  const add2 = (a, b) => a + b;
  const memoizedAdd = memoize2(add2);
  
  console.log(memoizedAdd(2, 3)); // Result calculated: 5
  console.log(memoizedAdd(2, 3)); // Result from cache: 5
  console.log(memoizedAdd(4, 5)); // Result calculated: 9
  console.log(memoizedAdd(4, 5)); // Result from cache: 9
  