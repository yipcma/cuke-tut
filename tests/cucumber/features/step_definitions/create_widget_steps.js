module.exports = function() {
  this.Given(/^I am logged in$/, function () {
    // Write the automation code here
    browser.url(process.env.ROOT_URL);
    browser.waitForExist('body *');
    browser.waitForVisible('body *');
    browser.waitForExist('#login-sign-in-link');
    browser.click('#login-sign-in-link');
    browser.setValue('#login-email', 'bob@example.com');
    browser.setValue('#login-password', 'testtest');
    browser.click('#login-buttons-password');
    pending();
  });

  this.When(/^I fill in the name with "([^"]*)"$/, function (arg1) {
    // Write the automation code here
    pending();
  });
  this.When(/^I click the button "([^"]*)"$/, function (arg1) {
    // Write the automation code here
    pending();
  });

  this.Then(/^I should see a widget named "([^"]*)"$/, function (arg1) {
    // Write the automation code here
    pending();
  });
}
