///Creating a constructor function called BankAccount that takes accountNumber, name, type, and balance as argument

function Bank_account(ac_number,name,type,balance)
{
  this.ac_number=ac_number;
  this.name=name;
  this.type=type;
  this.balance=balance;
}
let p1=new Bank_account(123,"Raj","Savings",12000);
let p2=new Bank_account(456,"Anju","Current",15000);
let p3=new Bank_account(789,"Bharat","Savings",200000);
//console.log(p1)
//console.log(p2)

///Creating a function called deposit that takes amount as argument and adds the amount to the balance
function deposit(amount){
  this.balance = this.balance + amount;
}
deposit.call(p1,50000)
deposit.call(p2,20000)
deposit.call(p3,30000)

//Withdraw function
function withdraw(amount){
  if(this.balance > amount) {
    this.balance = this.balance - amount;
  }
  else{
    alert("Insufficient balance अपर्याप्त शेषराशि")
  }
}
withdraw.call(p1,200000)

//check balance function
function check_balance(){
  alert("Your balance is: "+this.balance)
}
check_balance.call(p1)

//function isactive
function isactive(){
  if (this.balance > 0){
    alert("Your account is active")
  }
  else{
    alert("Your account is inactive आपके खाते में पर्याप्त धन नहीं होने के कारण आपका खाता **अपर्याप्त शेषराशि** के कारण निष्क्रिय हो गया है")
    
  }
}
    


