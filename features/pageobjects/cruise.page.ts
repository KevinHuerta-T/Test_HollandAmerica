import { $ } from '@wdio/globals'
import Page from './page.js';

class CruisePage extends Page {
    public get Title() {
        return $("//div[@class='search-results__card-wrapper'][1]//a[@data-automation-id='find-a-cruise-view-itinerary-btn']")
    } 
    
    public get dropDownDay() {
        return $("//div[contains(@id, 'accordion-')][1]/div[@class='caret']//span")
    }

    public async viewActivitiesOfTheDay(){
        await this.dropDownDay.click();
    }


    public open () {
        return super.open();
    }
}

export default new CruisePage()