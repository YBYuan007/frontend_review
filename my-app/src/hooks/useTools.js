export default function useTools () {

  const avg = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    return sum / arr.length + "%";
  };

  return {avg};

}