"use strict";

export const auth = function(){

    this.pin = document.querySelector(".pin_input");
    this.submit_btn = document.querySelector(".pin_submit");
    this.data = [245,263,523,749];
    this.notificationBox = document.querySelector(".form_notification");

};

auth.prototype = {

    verifyPin(){

            let pinData = Number(this.pin.value);

            if (this.data.includes(pinData) === true) {
                
                this.notificationBox.textContent = "You're logged in ";
                this.notificationBox.style.color = 'blue';
            
            }else if(this.pin.value === ''){

                this.notificationBox.textContent = "please enter your pin ";
                navigator.vibrate([200,50,400]);

            }else{

                this.notificationBox.textContent = " Please enter correct PIN ";
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

