import HomePage from '../page-objects/home_page';
import LoginPage from '../page-objects/login_page';

describe('DuckDuckGo Search Test', { testIsolation: false }, () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    loginPage.visit();
  });

  it('Test Case 1: perform login', () => {
    cy.fixture('firstTestCase').then((login_string) => {
      loginPage
        .login(login_string.username, login_string.password)
        .verifyLogin();
    })
  });

  it('Test Case 2: add random product to the cart and checkout', () => {
    cy.fixture('secondTestCase').then((user_info) => {
      homePage
        .addRandomProductToCart()
        .verifyRemoveButtonExists()
        .goToCart()
        .clickCheckoutButton()
        .fillInUserInformation(user_info.firstName, user_info.lastName, user_info.zip)
        .clickContinueButton()
        .clickOnFinish()
        .verifyOrderComplete();
      });
  });

});
