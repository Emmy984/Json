const fs = require ('fs') //Guarda o sistema de arquivo
const dados = fs.readFileSync('dados.json', 'utf-8');//
const usuarios = JSON.parse(dados) //transforma o json
console.log("usuarios cadastrados no .json", usuarios)
usuarios.push({ id: 5, nome: 'Patrocnio', idade: 29})
console.log("usuarios cadastrados no .json", usuarios)
fs.writeFileSync('dados.json',JSON.stringify(usuarios,null,2))
console.log('usuario cadastrados')