/**************************************************
                SHALLOW COPY
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
                account1: "somewhere@gmial.com"
            },
            paid: {
                account1: "somewhere@gmial.com"
            }
        }
    }
}


let obj2 = {...obj};
obj2.social.facebook.account1 = "changed";
console.log(obj);
console.log(obj2);
