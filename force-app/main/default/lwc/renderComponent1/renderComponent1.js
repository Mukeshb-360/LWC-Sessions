import { LightningElement } from 'lwc';

import signupTemplate from './signupTemplate.html'
import signinTemplate from './signinTemplate.html'
import renderTemplate from './renderComponent1.html'
export default class RenderComponent1 extends LightningElement {
    selectedBtn = ''
    render(){
        return this.selectedBtn === 'SignUp' ? signupTemplate :
               this.selectedBtn === 'SignIn' ? signinTemplate : renderTemplate

    }
    handleClick(event){
        console.log(event.target.label);
        this.selectedBtn = event.target.label
    }
    submitHandler(event){
        alert(`${event.target.label} successfull !!`);
    }
}