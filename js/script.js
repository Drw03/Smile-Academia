function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("active");
}

function hideSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("active");
}

const botaoMenu = document.querySelector(".botao-menu");

botaoMenu.addEventListener("click", showSidebar);

const botaoFechar = document.querySelector(".botao-fechar");
botaoFechar.addEventListener("click", hideSidebar);

const idade = 35;
 if (idade < 18) {
    console.log("Plano juvenil");
} else if ( idade >= 18 && idade <= 59) {
    console.log("Plano adulto");
} else {
    console.log("Melhor idade");
}

function temCarterinha(idade, possuiCarterinha) {
    if (idade < 25 && possuiCarterinha) {
        console.log("Desconto concedido");
    } else {
        console.log("Desconto não concedido")
    }
}

function calcularPlano(precoMensal, meses) {
    const total = precoMensal * meses;
    const valorFinal = total - 50;
    return valorFinal;
}

const resultadoPlano = calcularPlano(100, 6);
console.log(resultadoPlano);

const planos = [100, 150, 200];
console.log(planos[1]); 


function calcularPreco(idade, temCarteirinha, preco) {
    if (idade < 25 && temCarteirinha) {
        const precoFinal = preco - 20;
        return precoFinal;
    } else {
        return preco;
    }
}

function calcularPreco(idade, temCarteirinha, preco) {

    if ((idade < 25 && temCarteirinha) || idade >= 60) {

        const precoFinal = preco - 20;

        return precoFinal;

    } else {

        return preco;

    }

}


//ana
console.log(calcularPreco(20, true, 200));

//BRUNO
console.log(calcularPreco(30, false, 200));

//CARLA
console.log(calcularPreco(65, true, 200));

//Davi
console.log(calcularPreco(24, false, 200));
