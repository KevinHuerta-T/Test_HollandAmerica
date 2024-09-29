import { $ } from '@wdio/globals'
import Page from './page.js';

class FindPage extends Page {
    public get btnDestinations() {
        return $("//a[@aria-label='Destinos']/span[@class='cmp-list__item-title']");
    }

    public get btnDate() {
        return $("//a[@aria-label='Fecha de salida']/span[@class='cmp-list__item-title']")
    }

    public get btnSpecificDestination() {
        return $("//button[contains(@aria-label, 'ALASKA')]")
    }

    public get btnSpecificDate() {
        return $("//div[@class='calendar'][2]//button[@data-automation-id='find-a-cruise-abr']")
    }

    public get btnViewIntinerary() {
        return $("//div[@class='search-results__card-wrapper'][1]//a[@data-automation-id='find-a-cruise-view-itinerary-btn']")
    }

    public async selectDestination() {
        await this.btnDestinations.click();
        await this.btnSpecificDestination.click();
    }

    public async selectDate() {
        await this.btnDate.click();
        await this.btnSpecificDate.click();
    }

    public async viewIntinerary() {
        await this.btnViewIntinerary.click();
    }

    public open () {
        return super.open();
    }

}

export default new FindPage();