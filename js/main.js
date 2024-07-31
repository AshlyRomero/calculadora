import { teclas } from "./teclado.js";
import { pantalla } from "./panta.js";

let div_root = document.querySelector(".root");

let bloque_principal = `
    <div class="pantalla" id="screen">${pantalla}</div>
    <div class="teclado">${teclas}</div>
`;

div_root.innerHTML = bloque_principal;

const screen = document.getElementById('screen');
const buttons = Array.from(document.querySelectorAll('.teclado button'));

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const key = e.target.getAttribute('data-key');
        handleInput(key);
    });
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    handleInput(key);
});

function handleInput(key) {
    const validKeys = '0123456789/*-+.=';
    if (validKeys.includes(key)) {
        if (key === '=') {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = 'Error';
            }
        } else {
            screen.textContent += key;
        }
    } else if (key === 'Backspace') {
        screen.textContent = screen.textContent.slice(0, -1);
    } else if (key === 'Escape' || key === 'C') {
        screen.textContent = '';
    }
}