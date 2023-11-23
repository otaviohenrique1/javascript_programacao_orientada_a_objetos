import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User("Juliana", "j@j.com", "2021/01/01");
// console.log(novoUser.exibirInfos());
// console.log(novoUser.exibirInfos());
// console.log(User.prototype.isPrototypeOf(novoUser));

const novoDocente = new Docente("Mariana", "m@m.com", "2021/01/01");
console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovaEstudante("Juliana", "JS"));

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2021/01/01");
// console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);
novoAdmin.nome = "André";
console.log(novoAdmin.nome);
// console.log(novoAdmin.criarCurso("JS", 20));