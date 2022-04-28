import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    heading = "Parent to child using primitive"

    caroselDetails = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."  
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description."
        }
    ]

    resetHandler(){
       this.template.querySelector('c-p2c-slider-component').reset();
    }
}