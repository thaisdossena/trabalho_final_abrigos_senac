let listaDeAbrigos = []
let menu
let codigoAbrigo = 0

while (menu !== 4) { 
    menu = Number(prompt(`
        Abrigos temporários      

        1. Cadastrar abrigo
        2. Listar abrigos
        3. Procurar abrigo
        4. Sair

        Selecione a opção desejada:
        `)
    )

    switch(menu) {
        case 1:
            cadastrarAbrigo();
            break;
        case 2:
            listarAbrigos();
            break;
        case 3:
            procurarAbrigo();
            break;    
        case 4:
            alert(`Obrigado por acessar o nosso sistema!`);
        default:
            alert(`Opção inválida, digite uma opção válida!`);
            break
    }
}

// Função para cadastrar um novo abrigo
function cadastrarAbrigo() {
    const nome = prompt(`Digite o nome do abrigo`);
    const endereco = prompt(`Digite o endereço do abrigo(rua, número e bairro)`);
    const cidade = prompt(`Digite a cidade onde se encontra o abrigo`);
    const telefone = prompt(`Digite um telefone para contato (00) 00000-0000`);
    const capacidade = Number(prompt(`Quantas pessoas esse lugar comporta?`));
        
    //Objeto
    const abrigo = {
        código: codigoAbrigo += 1,
        nome, 
        endereco, 
        cidade, 
        telefone,
        capacidade,
    };

    listaDeAbrigos.push(abrigo);
    alert(`Obrigado, seu cadastro foi realizado com sucesso! `);
}

function listarAbrigos() {
    if (listaDeAbrigos === 0) {
        alert(`Não há abrigos cadastrados!`)
    } else {
        //imprime lista de abrigos
        let mensagem = `
        -------------------- LISTA DE ABRIGOS --------------------

         CÓDIGO | NOME | CIDADE | ENDEREÇO| TELEFONE | CAPACIDADE 
        `
        for (let abrigo of listaDeAbrigos) {
            mensagem += `\n         
            ${abrigo.código}  |  ${abrigo.nome}  |  ${abrigo.endereco}  |  ${abrigo.cidade}  |  ${abrigo.telefone}  |  ${abrigo.capacidade}`
        }
        alert(mensagem)    
    }
}

function procurarAbrigo() {
    if (listaDeAbrigos.length === 0 ) {
        alert(`Não há abrigos cadastrados!`);
        return;
    }

    const buscaPorCidade = prompt(`Digite a cidade onde você gostaria de fazer a procura`)

    let abrigosEncontrados = [];//variavel temporária

    for(let abrigo of listaDeAbrigos) {
        if(abrigo.cidade.includes(buscaPorCidade)) {
            abrigosEncontrados.push(abrigo)
        }
    }

    if (abrigosEncontrados.length === 0) {
        alert (`Não há nenhum abrigo resgistrado nessa cidade`)
    } else {
        //imprime lista de abrigos
        let mensagem = `
        -------------------- LISTA DE ABRIGOS --------------------

         CÓDIGO | NOME | CIDADE | ENDEREÇO| TELEFONE | CAPACIDADE 
        `
        for(let abrigo of abrigosEncontrados) {
            mensagem += `\n         
            ${abrigo.código}  |  ${abrigo.nome}  |  ${abrigo.endereco}  |  ${abrigo.cidade}  |  ${abrigo.telefone}  |  ${abrigo.capacidade}`
        }
        alert(mensagem)    
    }
}