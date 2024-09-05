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
    const cartBtn = Selector('a').withText('Cart').withAttribute('class', 'nav-link');
    const prod1Link = Selector('a').withAttribute('href', 'prod.html?idp_=1');
    const addToCart = Selector('a').withText('Add to cart');
    await t
        .click(prod1Link)
        .setNativeDialogHandler(() => true)  // 'true' indicates that you accept the alert
        .click(addToCart)
        .click(cartBtn)
        .wait(1000);
});

// <a href="#" onclick="addToCart(1)" class="btn btn-success btn-lg">Add to cart</a>