function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];
}

    return {
        deposit(amount) {
            if (amount <= 0) {
                console.log("Invalid deposit amount");
                return "Invalid deposit amount";
            }
            balance += amount;
            transactionHistory.push({ type: "deposit", amount });
            console.log(`Deposited $${amount}. New balance: $${balance}`);
            return `Deposited $${amount}. New balance: $${balance}`;
        },
        withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount");
                return "Invalid withdrawal amount";
            }
            if (amount > balance) {
                console.log("Insufficient funds");
                return "Insufficient funds";
            }
            balance -= amount;
            transactionHistory.push({ type: "withdraw", amount });
            console.log(`Withdrew $${amount}. New balance: $${balance}`);
        },
        getBalance() {
            return balance;
        },
        getTransactionHistory() {
            return transactionHistory;
        }
    };


createBankAccount(600000); // Example usage
amount = 5000;









