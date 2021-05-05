"use strict";
import { auth  } from "./authentication.js";

const widget = function(){
    this.menu_btn = document.querySelector(".mobile_view_menu");
    this.menu_list = document.querySelector(".mobile_menu_list");
};

widget.prototype = {
    openMenu(){
        this.menu_btn.addEventListener('click',()=>{

            if(this.menu_list.classList.contains('show')){

                this.menu_list.classList.replace('show','hide');

            }else if(this.menu_list.classList.contains('hide')){

                this.menu_list.classList.replace('hide','show');
            }

        },false);
    }
};

const widget_controller = new widget();

widget_controller.openMenu();

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
