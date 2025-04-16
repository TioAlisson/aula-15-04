function tchau() {
    let nome = "Alisson";
    console.log((`Até ${nome}`));
};

function somar(n1, n2) { return n1 + n2; };

function subtrar() {
    let n1 = 8;
    let n2 = 3;
    return n1 - n2;
}

let nome = "Guilherme";
function mostrarNome() { console.log(nome); }

let frutas = ["Banana", "Morango", "Maracujá", "Laranja"];

frutas.push("Arroz");
frutas.pop();

alert(frutas.splice(1)); // Retira o primeiro do indice

frutas.forEach(fruta => {
    console.log(fruta);
});

function print() {
    console.log("Aula 15/04")
    tchau();
    console.log(somar(2, 10));
    console.log(subtrar());

    mostrarNome();
    console.log(frutas[2])
}

print();
