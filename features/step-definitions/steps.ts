import { Given, When, Then, } from '@wdio/cucumber-framework';


import HomePage from '../pageobjects/home.page.js';
import FindPage from '../pageobjects/find.page.js'
import CruisePage from '../pageobjects/cruise.page.js';

Given("I m on the Home Page of Holland America", async () => {
    await HomePage.open()
    await HomePage.agreeCookies()
});

When("I select a destination and date for the cruise", async () =>{
    await HomePage.findCruises()
    await FindPage.selectDestination()
    await FindPage.selectDate()
});

Then("I view the intinerary of the cruise to know more", async () => {
    await FindPage.viewIntinerary()
});

Then("View the activities for one day", async () => {
    await CruisePage.viewActivitiesOfTheDay()
})