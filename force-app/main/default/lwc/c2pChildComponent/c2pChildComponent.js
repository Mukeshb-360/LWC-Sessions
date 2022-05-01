import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {

    closeHandler(){
        const myEvent = new CustomEvent('close',{
            // 'detail' is mandatory keyword
            detail:"Modal Closed Succesfully !"
            // detail: {
            //     msg:"Modal Closed Succesfully !"
            // }
        });
        this.dispatchEvent(myEvent);
    }
}