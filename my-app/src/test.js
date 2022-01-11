const avg = function (arr) {
  let sum = 0 ; 
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum/arr.length + '%'; 
} 


console.log(avg(['78', '100', '92', '86', '89', '88', '91', '87'])); 
