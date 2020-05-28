class Expenses {
    
    constructor(cashFlow, amount){
        this.cashFlow = cashFlow;
        this.amount = amount;
    }

    getCashFlow() {
        return(this.cashFlow);
    }

    setCashFlow(cashFlow) {
        this.cashFlow = cashFlow;
    }

    getAmount() {
        return(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }

}

export default Expenses;