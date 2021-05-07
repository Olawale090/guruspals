"use strict";

const guestAccount = function(){

    this.phoneNumber = document.querySelector(".guest_phone_number");
    this.password = document.querySelector(".guest_password");
    this.examType = document.querySelector(".guest_exam_type");
    this.guestLogin = document.querySelector(".guest_login");


};

guestAccount.prototype = {

    verifyGuestData(){
        let phoneNo = Number(this.phoneNumber.value);
        if(this.phoneNumber.value === "" || this.password.value === "" || this.examType === ""){
                
            alert(" Please enter value in the empty field ");

        }else if(typeof(this.phoneNumber.value) !== Number){
            alert("Enter correct Phone number");
        }else{
            alert("You're logged in")
        }
    }

};