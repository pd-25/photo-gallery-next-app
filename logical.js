//The question ---
/*You are given an initial function names promisify, and it receives two arguments: fn(type: function) and hasCallback(type: Boolean, default: true).Originally the function returns another function that receives the args object(containing the argument) from the parent function. The promisify function needs to be updated in order to satisfy the following requirements:
1. It must convert the function passed in the parameter fn into a promise object(thus it can resolve / reject)
2. When the has Casllback parameter is true, fn is a function implementing the callback pattern(Error, response) =& gt; { }
3. When the hasCallback parameter is false, fn is a regular function.
4. If a non - function type is passed as the fn argument, invalid(String) should be returned.
5. When a function is promisified, it can receive any number of arguments. */
//approach-------
function promisify(fn, hasCallback = true) {
    return function (...args) {
      console.log('...args', args);
      return new Promise((resolve, reject) => {
        const callback = hasCallback ? (error, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        } : resolve;
  
        console.log('...args, callback', ...args, callback);
        fn(...args, callback);
      });
    };
  }
  
  const promisifiedFunction = promisify(getData, true);
  function getData(callback) {
    setTimeout(() => {
      const error = null;
      const data = { message: "Success res" };
      callback(error, data);
    }, 1000);
  }
  
  
  promisifiedFunction()
    .then(data => {
      console.log("Data:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  
  
