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

            }else{

                alert(" Please enter correct PIN " + this.pin.value);

            }        
    }

};

