/*
LOGIN CREDENTIALS
    User: robertozh
    Password: 12345
*/

fixture('Demoblaze')
    .page('https://www.demoblaze.com/index.html');

test('Login', async t => {
    await t
        .click('#login2')
        .wait(5000);   
});