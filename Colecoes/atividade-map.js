/*
1 Crie uma função getAdmins que rece um Map
2 Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. ex luiz => admin
3 Dentro de getAdmins utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores
*/

function getAdmins(map) {
    let admins = []
    for ([chave, valor] of map) {
        if(valor === 'Admin'){
            admins.push(chave)
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('Yuna', 'Admin');
usuarios.set('Sonic', 'User');
usuarios.set('Mickey', 'Admin');
usuarios.set('Minnie', 'Admin');

console.log(getAdmins(usuarios))



