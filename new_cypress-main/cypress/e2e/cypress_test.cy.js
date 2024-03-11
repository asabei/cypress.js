describe('Тестирование https://login.qa.studio', function () {
   it('Проверка ввода правильного пароля и правильного логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form').should('be.visible').contains('Форма логина');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Проверка забыли пароль?', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#forgotForm').should('be.visible').contains('Восстановите пароль');
        cy.get('#mailForgot').type('xxxxxxx@xxxxxx.ru');
        cy.get('#restoreEmailButton').should('be.enabled');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').should('be.visible').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
   it('Проверка ввода неправильного пароля и неправильного логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form').should('be.visible').contains('Форма логина');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov1.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
   it('Проверка ввода неправильного пароля и правильного логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form').should('be.visible').contains('Форма логина');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Проверка ввода правильного пароля и неправильного логина', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form').should('be.visible').contains('Форма логина');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru1');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Проверка ввода правильного пароля и неправильного логина без @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form').should('be.visible').contains('Форма логина');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   it('Проверка ввода правильного пароля и неправильного логина  GerMan@Dolnikov.ru', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#form').should('be.visible').contains('Форма логина');
        cy.get('#mail').should('be.visible');
        cy.get('#pass').should('be.visible');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.get('#message').should('be.visible').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
