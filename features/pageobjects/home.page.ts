import { $ } from '@wdio/globals'
import Page from './page.js';


class HomePage extends Page {

    public get btnBookCruises() {
        return $("//a[@data-id='Bookacruise']");
    }

    public get btnFindCruises() {
        return $("//a[@data-automation-id='es-col-one-nav-item-0']");
    }

    public get btnAgreeCookies() {
        return $('#onetrust-accept-btn-handler');
    }

    public async findCruises() {
        await this.btnBookCruises.click();
        await this.btnFindCruises.click();
    }

    public async agreeCookies (){
        await this.btnAgreeCookies.click();
    }

    public open () {
        return super.open();
    }
}

export default new HomePage();
