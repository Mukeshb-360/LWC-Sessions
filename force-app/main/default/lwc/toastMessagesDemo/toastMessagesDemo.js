import { LightningElement } from 'lwc';

export default class ToastMessagesDemo extends LightningElement  {
    sucessHandler(){
        // const events = new ShowToastEvent({
        //     title : "Success",
        //     message : "Account Created Sucessfully !",
        //      variant : "success"
        // });
        // this.dispatchEvent(events);
        this.showToast("Success","Account Created Sucessfully !","success");
    }
    errorHandler(){
        // const events = new ShowToastEvent({
        //     title : "Error!",
        //     message : "Account Creation Failed !",
        //     variant : "error"
        // });
        // this.dispatchEvent(events);
        this.showToast("Error!","Account Creation Failed !","error");
    }
    warningHandler(){
        // please do comment the below and try to put into above structure
        const events = new ShowToastEvent({
            title : "Warning!",
            message : "Password must conatains 1 uppercase letter !",
            variant : "warning"
        });
        this.dispatchEvent(events);
    }

    showToast(title,message,variant){
        const events = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(events);
    }
}