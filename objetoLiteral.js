const user = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  // role: "admin",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  }
};

// user.exibirInfos();
// const exibir = user.exibirInfos();
// exibir();

// const exibir = function() {
//   console.log(this.nome);
// };

// const exibirNome = exibir.bind(user); // Prende ao contexto de user
// exibirNome();

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log("Curso criado!");
  }
};

// Herança de protótipo
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos()