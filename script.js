let btnAddName = document.getElementById('btn-add-name');
let btnRemove = document.getElementById('btn-remove');
let nameInput = document.getElementById('name-list');
let names = [];

window.addEventListener('DOMContentLoaded', () => {
    let namesLocal = JSON.parse(localStorage.getItem('nomes'));
    if (namesLocal) {
        names = namesLocal;
        atualizarNome();
    }
});

btnAddName.addEventListener('click', () => {
    adicionarNome();
});

btnRemove.addEventListener('click', () => {
    retirarTodos();
});

function adicionarNome() {
    let name = nameInput.value.trim();

    if(name) {
        names.push(name);
        nameInput.value = "";

        atualizarNome();
    }
}

function atualizarNome() {
    let list = document.getElementById('listNames');
    list.innerHTML = ""; 

    localStorage.setItem('nomes', JSON.stringify(names)); 

    names.forEach((name, i) => {
        let li = document.createElement('li');
        
        li.textContent = `${i + 1} . ${name} `;
        
        let removeBtn = document.createElement('span');
        removeBtn.textContent = "x";
        removeBtn.style.color = 'red';
        removeBtn.style.cursor = 'pointer';
        removeBtn.style.marginLeft = '10px'; 

        removeBtn.addEventListener('click', () => {
            names.splice(i, 1);
            localStorage.setItem('nomes', JSON.stringify(names));
            atualizarNome();
        });

        li.appendChild(removeBtn);
        list.appendChild(li);
    });
}


function retirarTodos() {
    names = [];
    atualizarNome();
}