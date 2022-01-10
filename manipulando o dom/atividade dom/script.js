/**
 * Selecione os elementos h1,button, footer e body
 * se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original. 
 */

// Function tem que ter responsabilidade única
function changeMode() {
    // console.log('cliquei');
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
// getElementsByTagName retorna uma coleção, precisa informar o index que deseja pegar
const body = document.getElementsByTagName('body')[0]; 
const footer = document.getElementsByTagName('footer')[0];
console.log(button)
console.log(h1)
console.log(body)
console.log(footer)

//Adicionar o evento, 1 informa qual é o tipo de evento, 2 function
button.addEventListener('click', changeMode);


