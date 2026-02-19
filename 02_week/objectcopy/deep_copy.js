/**************************************************
                DEEP COPY 1st WAY
**************************************************/

let obj = {
    name: "Yuvraj Kumar",
    age: 25,
    social: {
        facebook: {
            account1: "somewhere@gmail.com",
            account2: "somewhere2@gmail.com",
        },
        twitter: {
            free: {
                account1: "freewhere@gmial.com"
            },
            paid: {
                account1: "paidwhere@gmial.com"
            }
        }
    }
}


let obj2 = JSON.parse(JSON.stringify(obj));
obj2.social.twitter.free.account1 = "changed";
// console.log(obj.social.twitter.free.account1);
// console.log(obj2.social.twitter.free.account1);


/**************************************************
                DEEP COPY 2nd WAY
**************************************************/

function makeDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let copiedval = Array.isArray(obj) ? [] : {};
    let keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }

    return copiedval;
}

let copy = makeDeepCopy(obj);
copy.social.twitter.free.account1 = "Yuvrajkumar@gmail.com";
console.log(obj.social.twitter.free.account1);
console.log(copy.social.twitter.free.account1);
// console.log(copy);
