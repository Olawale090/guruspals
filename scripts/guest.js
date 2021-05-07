"use strict";

const guestAccount = function(){

    this.phoneNumber = document.querySelector(".guest_phone_number");
    this.password = document.querySelector(".guest_password");
    this.examType = document.querySelector(".guest_exam_type");
    this.guestLogin = document.querySelector(".guest_login");
    this.alert = document.querySelector(".form_notification");

    this.data = [{
                        phone_number: '08168612448',
                        password: 'asdf'
                    },

                    {
                        phone_number: '08050967907',
                        password: 'I am a man'
                    }
                ];
    

};

guestAccount.prototype = {

    verifyGuestData(){
        
        try {

            let mobileResponse = navigator.vibrate([200,50,400]);
            this.guestLogin.addEventListener('click',(e)=>{

                e.preventDefault();

                try {
                    for (const i in this.data) {

                        if(this.phoneNumber.value === this.data[i].phone_number && this.password.value === this.data[i].password) {
                            
                            this.alert.textContent = " Logged in successfully ";
                            this.alert.style.color = " blue ";

                        } else if(this.phoneNumber.value === "" || this.password.value === "" || this.examType === ""){
                            
                            this.alert.textContent = " Please enter value in the empty field ";
                            mobileResponse

                        }else{
            
                            this.alert.textContent = " Please enter correct phone number or password ";
                            mobileResponse
                        }
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

