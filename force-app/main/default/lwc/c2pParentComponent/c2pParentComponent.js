import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    isModalShow = false
    message
    clickHandler(){
        this.isModalShow = true
    }
    closeModal(event){
        console.log(event.detail);
        this.message = event.detail
        // this.message = event.detail.msg
        this.isModalShow = false  
    }
}