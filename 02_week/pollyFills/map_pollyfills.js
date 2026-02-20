/* ******************************************************************************************
                        MAP POLLYFILLS
***************************************************************************************** */ 

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        let arr = [];
        let originalArr = this;

        for (let i = 0; i < originalArr.length; i++) {
            let value = userFn(originalArr[i], i, originalArr);
            arr[i] = value
        }

        return arr;
    }
}



let arr = [1, 2, 3, 4, 5];
let res = arr.myMap((item, index, arr) => {
        console.log(`item ${item} index ${index} array ${arr}`);
        return item *2;
});
console.log(res);
console.log(arr);

