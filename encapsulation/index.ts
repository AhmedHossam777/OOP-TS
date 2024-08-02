// BankAccount
// Depositing
// Withdraw
// Balance - Hidden and Encapsulated

class BankAccount {
	constructor(private balance: number) {}

	// Getter to get the balance of the bank account
	get Balance(): number {
		return this.balance;
	}

	deposit(amount: number): void {
		if (amount < 0) {
			console.log('invalid deposit amount');
			return;
		}
		this.balance += amount;
	}

	withdraw(amount: number): void {
		if (amount < 0) {
			console.log('invalid withdraw amount');
			return;
		}
		if (amount > this.balance) {
			console.log('You have not enough money!');
			return;
		}
		this.balance -= amount;
	}
}

const bankAccount = new BankAccount(5000);
bankAccount.deposit(2000);
bankAccount.withdraw(1000);
console.log(bankAccount.Balance);