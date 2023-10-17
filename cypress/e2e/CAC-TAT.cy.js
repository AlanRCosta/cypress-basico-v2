/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => cy.visit("./src/index.html"));

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText =
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    cy.get("#firstName").type("Alan");
    cy.get("#lastName").type("Costa");
    cy.get("#email").type("alan@exemplo.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Alan");
    cy.get("#lastName").type("Costa");
    cy.get("#email").type("alan@exemplo,com");
    cy.get("#open-text-area").type("Teste", { delay: 0 });
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });
});

describe("segunto describe", () => {
  beforeEach(() => cy.visit("./src/index.html"));
  it("campo de telefone continua vazio com quando for preenchido com valor não-numérico", () => {
    cy.get("#phone").type("dffgflfsiu").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Alan");
    cy.get("#lastName").type("Costa");
    cy.get("#email").type("alan@exemplo.com");
    cy.get("#phone-checkbox").check();
    cy.get("#open-text-area").type("Teste", { delay: 0 });
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .type("Alan")
      .should("have.value", "Alan")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Costa")
      .should("have.value", "Costa")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("alan@exemplo.com")
      .should("have.value", "alan@exemplo.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("95643258")
      .should("have.value", "95643258")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("envia um formulário com sucesso utilizando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();

    cy.get(".success").should("be.visible");
  });

  it("seleciona um produto (YouTube) por seu texto", () => {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("seleciona um produto (Mentoria) por seu valor", () => {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it("seleciona um produto (Blog) por seu índice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it("marca o tipo de atendimento 'Feedback'", () => {
    cy.get("input[type='radio'][value='feedback']")
      .check()
      .should("have.value", "feedback");
  });

  it("marca cada tipo de atendimento", () => {
    cy.get("input[type='radio']")
      .should("have.length", 3)
      .each((radio) => {
        cy.wrap(radio).check();
        cy.wrap(radio).should("be.checked");
      });
  });

  it("marca ambos checkboxes, depois desmarca o último", () => {
    cy.get("input[type='checkbox']")
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.be.checked");
  });

  it("seleciona um arquivo da pasta fixtures", () => {
    cy.get("input[type='file']#file-upload")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json")
      .should((input) => expect(input[0].files[0].name).equal("example.json"));
  });

  it("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get("input[type='file']#file-upload")
      .should("not.have.value")
      .selectFile("./cypress/fixtures/example.json", { action: "drag-drop" })
      .should((input) => expect(input[0].files[0].name).equal("example.json"));
  });

  it("seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("samplefile");
    cy.get('input[type="file"]')
      .selectFile("@samplefile")
      .should((input) => expect(input[0].files[0].name).equal("example.json"));
  });

  it("verifica que a política de privacidade abre em outra aba sem a necessidade de um clique", () => {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  it("acessa a página da política de privacidade removendo o target e então clicando no link", () => {
    cy.get("#privacy a").invoke("removeAttr", "target").click();
    cy.contains("Talking About Testing").should("be.visible");
  });
});
