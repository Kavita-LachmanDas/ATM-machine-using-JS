var pin = 1234;
var currentBalance = 500000;

function enter(){
   
var enterpin = Number(document.getElementById('enter_pin').value);

var wrongg = document.getElementById('wrong')
var withdraww = document.getElementById('withdraw');
var depositee = document.getElementById('deposite');
var checkBalance = document.getElementById('balance');
var exitt = document.getElementById('exit');
var chooose = document.getElementById('choose');




    if(enterpin === pin){
          wrongg.innerText="Correct PIN. "
    
    withdraww.style.display='block'
   wrongg.style.display='block';
   exitt.style.display='block';
   checkBalance.style.display='block';
   depositee.style.display='block';
chooose.style.display='block';

    } else{
        wrongg.innerText="Incorrect PIN. Please try again."
    }
}

///balance check button functinality

function checkk(){
  
    var chooose = document.getElementById('choose');
     ///current balance

// checkBalance = currentBalance;
chooose.innerText=`Your current balance is: $${currentBalance}`
currentBalance = current;
 
}


///withdraw button functinality

function withdraw() { 
    var choose = document.getElementById('choose');
    var useramount = parseInt(prompt("Enter amount you want to withdraw"));

   
    if (isNaN(useramount)) {
        choose.innerText = "Invalid input. Please enter a valid number.";
        return;
    }else if(useramount > currentBalance){
   choose.innerText='insufficient balance'

}
else if(useramount <= currentBalance){
    currentBalance -= useramount; // Update the current balance
        choose.innerText = `You have withdrawn: $${useramount}. Remaining balance is: $${currentBalance}`;
}


   
}




///deposite button functinality

function deposite(){
    var chooose = document.getElementById('choose');
    var user =parseInt( prompt("amount to deposite"));
    if (isNaN(user) || user <= 0) { 
        chooose.innerText = "Invalid input. Please enter a positive number.";
        return;
    }

    currentBalance += user; // Update current balance with the deposit amount
    chooose.innerText = `You have deposited: $${user}. New balance is: $${currentBalance}`;
}

///exit button functinality
function Exit(){
    var deleteAll = document.getElementById('main');
    deleteAll.innerHTML = " ";

    deleteAll.innerText="byeee byeee thankuu for using my ATM machine feel free to come again"
}


