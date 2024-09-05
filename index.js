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

