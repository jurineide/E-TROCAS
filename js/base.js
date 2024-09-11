// console do browser
console.log('Olá, sou o console');
console.log('Outro mensagem');

// variável em JS não tem tipo
// temos uma tipagem automática
let nomeUsuario = 'Israel Marques';
let emailUsuario = 'profisrael.copi@fiap.com.br';
let idUsuario = 789456;
let logado = true;
const DATA_NASCIMENTO = '02/12';

//tipagem automática
console.log(nomeUsuario, typeof nomeUsuario);
console.log(emailUsuario, typeof emailUsuario);
console.log(idUsuario, typeof(idUsuario));
console.log(logado, typeof(logado));
console.log(DATA_NASCIMENTO, typeof(DATA_NASCIMENTO));

//Gera um erro pois é uma constante 
// DATA_NASCIMENTO = '02/11'

// Template String - criar uma string de algo que irá para a página
// Iniciar e terminar com sinal de crase `aqui vem o conteúdo`
// placeholder - ${variável, método, cálculo, processo}

console.log(`Usuário: ${nomeUsuario} email: ${emailUsuario} - ${10*10+10}`);

//comparar com três iguais
const primeiroNumero = 10;
const segundoNumero = '10';
console.log(primeiroNumero == segundoNumero);
console.log(primeiroNumero === segundoNumero);

// arrays
const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
console.log(pessoas);

console.table(pessoas);

// inserindo uma nova pessoa no início do array
pessoas.unshift('Eu Mesmo');
console.table(pessoas);

//excluir o primeiro valor do array - CUIDADO POIS ELE EXCLUI MESMO
pessoas.shift();
console.table(pessoas);

//inserir na última posição do array
pessoas.push('Eu mesmo');
console.table(pessoas);

//excluir o último valor - CUIDADO
pessoas.pop();
console.table(pessoas);

//excluir partindo de um índice
pessoas.splice(2,2);
console.table(pessoas);

// Inserindo em qualquer índice
pessoas.splice(2,0,'Ele', 'Nós',345, 789, true, 'oi', 'Eu mesmo');
console.table(pessoas);

//pegando elementos pelo id
const getId1 = document.getElementById('navbarNav');
console.log(getId1);

// Pega apenas o primeiro que encontrar
const getId2 = document.querySelector('#navbarNav');
console.log(getId2);

// pegando class
const getClass1 = document.getElementsByClassName('nav-link');
console.log(getClass1);

const getClass2 = document.querySelectorAll('.nav-link')
console.log(getClass2);

//pegando pela tag 
const getTag1 = document.getElementsByTagName('a');
console.log(getTag1);
console.log(getTag1[2]);
console.log(getTag1[2].textContent);
getTag1[2].textContent = 'Carrinho de bebê';

const getTag2 = document.querySelectorAll('li');
console.log(getTag2);
