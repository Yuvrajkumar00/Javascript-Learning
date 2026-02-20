/* ******************************************************************************************
                        FILTER POLLYFILLS
***************************************************************************************** */ 

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFn) {
        const result = [];
        
        for (let i = 0; i < this.length; i++) {
            let retValue = userFn(this[i], i, this);
            if (retValue) {
                result.push(this[i]);
            }
        }

        return result;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let filterResult = arr.myFilter((item) => item>3);
console.log(filterResult);
