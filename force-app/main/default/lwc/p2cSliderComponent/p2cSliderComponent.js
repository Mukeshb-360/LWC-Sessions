import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20
    
    @api reset(){
        this.val = 60 
    }
}