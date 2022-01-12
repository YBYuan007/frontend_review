
export const avg = function (arr) {
  let sum = 0;
  if (arr.length > 0 && Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    return sum / arr.length + "%";
  } else  {
    return null; 
  }
};

