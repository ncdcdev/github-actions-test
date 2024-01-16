/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("http://localhost:3000/ncdc");
});

it("ncdcの紹介画面であること", () => {
  cy.get("h1").contains("NCDC");
});

it("ncdcの紹介メッセージが表示されること", () => {
  const stub = cy.stub();

  cy.on("window:alert", stub);

  cy.get("#alert-message")
    .click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWith("こんにちは ncdcです");
    });
});
