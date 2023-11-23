export default class User {
  // atributos privados
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;

  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  get nome() {
    return this.#nome;
  }

  get email() {
    return this.#email;
  }

  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }

  get ativo() {
    return this.#ativo;
  }

  set nome(nome) {
    if (nome === "") {
      throw new Error("Formato não válido");
    }
    this.#nome = nome;
  }

  set email(email) {
    this.#email = email;
  }

  set nascimento(nascimento) {
    this.#nascimento = nascimento;
  }

  set role(role) {
    this.#role = role;
  }

  set ativo(ativo) {
    this.#ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo},`;
  }

  // #montaObjUser() {
  //   return ({
  //     nome: this.#nome,
  //     email: this.#email,
  //     nascimento: this.#nascimento,
  //     role: this.#role,
  //     ativo: this.#ativo,
  //   });
  // }

  // exibirInfos() {
  //   const objUser = this.#montaObjUser();
  //   return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo},`;
  // }
}

// const novoUser = new User("Juliana", "j@j.com", "2021/01/01");
// console.log(novoUser);
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser));
