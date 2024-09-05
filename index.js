import { Selector } from 'testcafe';

const user = {
    user: "robertozh",
    password: "12345",
    name: "Roberto",
    country: "Mexico",
    city:   "Guadalajara",
    creditCard: "1111111111111111",
    month: "11",
    year: "11"
}

fixture('Demoblaze')
    .page('https://www.demoblaze.com/index.html');

test('Login', async t => {
    var textValidation = `Welcome ${user.user}`
    const submintBtn = Selector('button').withText('Log in').withAttribute('class', 'btn btn-primary');
    const loginStatus = Selector('#nameofuser');
    await t
        .click('#login2')
        .typeText('#loginusername', 'robertozh')
        .typeText('#loginpassword', '12345')
        .click(submintBtn)
        .expect(loginStatus.innerText).eql(textValidation, 'The element does not contain the expected text')
        .wait(1000);  
});

test('Add Product', async t => {
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


test('Purchase', async t => {
    const homeBtn = Selector('a').withText('Home').withAttribute('class', 'nav-link');
    const cartBtn = Selector('a').withText('Cart').withAttribute('class', 'nav-link');
    const prod1Link = Selector('a').withAttribute('href', 'prod.html?idp_=2');
    const addToCart = Selector('a').withText('Add to cart');
    const placeOrderBtn = Selector('button').withText('Place Order').withAttribute('class', 'btn btn-success');
    const purchaseBtn = Selector('button').withText('Purchase').withAttribute('class', 'btn btn-primary');
    const alertBtn = Selector('button').withText('OK').withAttribute('class', 'confirm btn btn-lg btn-primary');
    
    await t
        .click(homeBtn)
        .click(prod1Link)
        .setNativeDialogHandler(() => true)
        .click(addToCart)
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