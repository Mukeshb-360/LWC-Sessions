import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationDemo extends NavigationMixin(LightningElement) {

    navigateToHome(){
        console.log("inside home");
        this[NavigationMixin.Navigate]({
            type :'standard__namedPage',
            attributes :{
                pageName:'home'
            }
        })
    }
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes :{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }
}