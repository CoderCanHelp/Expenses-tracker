// Expenses tracker example

let myAccount = {
    name: 'Peter Morris',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    // account = {}
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}


addIncome(myAccount, 20000)
addIncome(myAccount, 555)
addExpense(myAccount, 2500)
addExpense(myAccount, 360)
addExpense(myAccount, 8600)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))