//Some-> Condition check : To get true or false based on a condition
//it will return true if 1 or more that 1 element satisfies the condition -

const transactions = [-1000, 3000, 4000, 2000, -898, 3800, -4500];

let anyDeposit = transactions.some(function (n) {
    return n > 0
})
//return true - agar ek bhi element n>0 vali condition ko satisfy karega toh

console.log(anyDeposit)