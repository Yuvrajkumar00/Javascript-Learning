/* ******************************************************************************************
                        FOREACH POLLYFILLS
***************************************************************************************** */ 

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const originalArr = this;

        for (let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i], i, originalArr);
        }
    }
}

const arr = [1, 2, 3, 4, 5];

arr.myForEach((item, index, arr) => {
    console.log(`Value - ${item} Index - ${index} Array - ${arr}`);
})