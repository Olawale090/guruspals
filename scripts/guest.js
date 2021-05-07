"use strict";

const guestAccount = function(){

    this.phoneNumber = document.querySelector(".guest_phone_number");
    this.password = document.querySelector(".guest_password");
    this.examType = document.querySelector(".guest_exam_type");
    this.guestLogin = document.querySelector(".guest_login");
    this.data = [2345,7454,1523,8463,1637];
    this.alert = document.querySelector(".form_notification");

};

guestAccount.prototype = {

    verifyGuestData(){
        
        try {
            
            this.guestLogin.addEventListener('click',(e)=>{
                e.preventDefault();

                try {
                    
                    let phoneNo = Number(this.phoneNumber.value);
                    let mobileResponse = navigator.vibrate([200,50,400]);
                    if(this.phoneNumber.value === "" || this.password.value === "" || this.examType === ""){
                            
                        this.alert.textContent = " Please enter value in the empty field ";
                        mobileResponse
                    }else if(typeof(phoneNo) !== Number){
        
                        this.alert.textContent = "Enter correct Phone number" ;
                        mobileResponse
                    }else if(this.data.includes(phoneNo)){
        
                        this.alert.textContent = "You're logged in" ;
                        this.alert.style.color = "blue";
                        
                    }else{
        
                        alert("Please try again");
                        mobileResponse
                    }
        
              

                } catch (error) {
                    console.error("Error occurred while rendering event", error);
                }  
            
            });
                

        } catch (error) {
            console.error("Error in executing method verifyGuestData ", error);
        }
        
        
    }

};

const guest = new guestAccount();
guest.verifyGuestData();

