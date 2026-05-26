const fs = require('fs');

const dados = fs.readFileSync('dados.json','utf8');
const usuarios = JSON.parse(dados);

console.log("usuarios cadastrados");
console.log(usuarios)