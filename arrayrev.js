const arr = [7, 2, 3, 4, 5, 7, 8, 12, -12, 43, 6];
const reverse =(arr) => {
   const duplicate = arr.slice();
   const reversedArray = [];
   const { length } = arr;
   for(let i = 0; i < length; i++){
      reversedArray.push(duplicate.pop());
   };
   return reversedArray;
};
console.log(reverse(arr));