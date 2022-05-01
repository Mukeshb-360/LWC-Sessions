import { LightningElement,api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20
    
    @api reset(){
        this.val = 60 
    }
}
// PRINTING DATE AND TIME
// import datetime
// todays_date = datetime.datetime.now()
// print(todays_date)
// Day = todays_date.strftime('%d')
// Month = todays_date.strftime('%m')
// Year = todays_date.strftime('%Y')
// print(Day,Month,Year)


// o/p
// 2022-05-01 11:13:44.664407
// 01 05 2022