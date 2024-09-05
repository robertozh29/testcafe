import { Selector } from 'testcafe';

/*
LOGIN CREDENTIALS
    User: robertozh
    Password: 12345
*/

fixture('Demoblaze')
    .page('https://www.demoblaze.com/index.html');

test('Login', async t => {
    const submintBtn = Selector('button').withText('Log in').withAttribute('class', 'btn btn-primary');
    await t
        .click('#login2')
        .typeText('#loginusername', 'robertozh')
        .typeText('#loginpassword', '12345')
        .click(submintBtn)
        .wait(1000);   
});

test('Add Product', async t => {
    const homeBtn = Selector('a').withText('Home').withAttribute('class', 'nav-link');
    const cartBtn = Selector('a').withText('Cart').withAttribute('class', 'nav-link');
    const prod1Link = Selector('a').withAttribute('href', 'prod.html?idp_=1');
    const addToCart = Selector('a').withText('Add to cart');
    await t
        .click(prod1Link)
        .setNativeDialogHandler(() => true)
        .click(addToCart)
        .click(cartBtn)
        .wait(1000)
});

const user = {
    name: "Roberto",
    country: "Mexico",
    city:   "Guadalajara",
    creditCard: "1111222233334444",
    month: "01",
    year: "01"
}


test('Purchase', async t => {
    const cartBtn = Selector('a').withText('Cart').withAttribute('class', 'nav-link');
    const placeOrderBtn = Selector('button').withText('Place Order').withAttribute('class', 'btn btn-success');
    const purchaseBtn = Selector('button').withText('Purchase').withAttribute('class', 'btn btn-primary');
    const alertBtn = Selector('button').withText('OK').withAttribute('class', 'confirm btn btn-lg btn-primary');
    
    await t
        .click(cartBtn)
        .click(placeOrderBtn)
        .typeText('#name', user.name)
        .typeText('#country', user.country)
        .typeText('#city', user.city)
        .typeText('#card', user.creditCard)
        .typeText('#month', user.month)
        .typeText('#year', user.year)
        .setNativeDialogHandler(() => true)
        .click(purchaseBtn)
        .click(alertBtn)
        .wait(1000);
});