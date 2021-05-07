"use strict";

const guestAccount = function(){

    this.phoneNumber = document.querySelector(".guest_phone_number");
    this.password = document.querySelector(".guest_password");
    this.examType = document.querySelector(".guest_exam_type");
    this.guestLogin = document.querySelector(".guest_login");
    this.data = [2345,7454,1523,8463,1637];


};

guestAccount.prototype = {

    verifyGuestData(){
        this.guestLogin.addEventListener('click',()=>{

            let phoneNo = Number(this.phoneNumber.value);
            let mobileResponse = navigator.vibrate([200,50,400]);
            if(this.phoneNumber.value === "" || this.password.value === "" || this.examType === ""){
                    
                alert(" Please enter value in the empty field ");
                mobileResponse
            }else if(typeof(phoneNo) !== Number){

                alert("Enter correct Phone number");
                mobileResponse
            }else if(this.data.includes(phoneNo)){

                alert("You're logged in");
                
            }else{

                alert("Please try again");
                mobileResponse
            }

        });
        
    }

};

const guest = new guestAccount();
guest.verifyGuestData();

