"use strict";

export const auth = function(){
    this.pin = document.querySelector(".pin_input");
    this.submit_btn = document.querySelector(".pin_submit");
    this.data = [245,263,523,749];
};

auth.prototype = {

    verifyPin(){

            let pinData = Number(this.pin.value);

            if (this.data.includes(pinData) === true) {
                
                alert("You're logged in " + this.pin.value);
            
            }else if(this.pin.value === ''){

                alert("please enter your pin ", this.pin.value);
                navigator.vibrate([200,50,400]);

            }else{

                alert(" Please enter correct PIN " + this.pin.value);
                navigator.vibrate([200,50,400]);

            }        
    }

};

const pinVerification = function(){

    auth.call(this);

};


pinVerification.prototype = {

    submitPin(){
        
        this.submit_btn.addEventListener('click',(e)=>{

            e.preventDefault();
            const authenticate = new auth();
            authenticate.verifyPin();
            
        });
    }


};

const loginPin = new pinVerification();
loginPin.submitPin();

