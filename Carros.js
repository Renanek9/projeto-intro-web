// // Semana 1--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que pode ser descrita com características escritas.

// Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;

// *Carro*
// Marca
// Modelo
// Motor
// Ano
// Potencia Original
// Potencia Stg1
// Potencia Stg2
// Importado?

//Audi RS3 2.5 TFSI (8V.2)

const marcaAudi = ("Audi");
const modeloAudi = ("RS3 2.5 TFSI (8V.2)");
const motorAudi = ("5 cilindros 2.5 20v");
const anoAudi = 2018;
const cvAudi = 400;
const cv1Audi = 500;
const cv2Audi = 530;
const impAudi = true;
const maisInfosAudi = ["Turbo", "Injeção Direta", "Tração Integral Quattro", "Cambio DSG DQ500"];

// Porsche 911 Carrera S 3.0 (992)

const marcaPorsche = ("Porsche");
const modeloPorsche = ("911 Carrera S 3.0 (992)");
const motorPorsche = ("Boxer 3.0 24v");
const anoPorsche = 2020;
const cvPorsche = 450;
const cv1Porsche = 560;
const cv2Porsche = 580;
const impPorsche = true;
const maisInfosPorsche = ["Turbo", "Injeção Direta", "Tração Traseira", "Cambio PDK"];

// VW Jetta GLI

const marcaVW = ("VW");
const modeloVW = ("Jetta GLI");
const motorVW = ("4 cilindros 2.0 16v TFSI");
const anoVW = 2020;
const cvVW = 230;
const cv1VW = 320;
const cv2VW = 340;
const impVW = false;
const maisInfosVW = ["Turbo", "Injeção Direta", "Tração Dianteira", "Cambio DSG DQ250"];

// BMW M5 (F90)

const marcaBMW = ("BMW");
const modeloBMW = ("M5 (F90)");
const motorBMW = ("V8 4.4 32v");
const anoBMW = 2021;
const cvBMW = 600;
const cv1BMW = 780;
const cv2BMW = 820;
const impBMW = true;
const maisInfosBMW = ["BiTurbo", "Injeção Direta", "Tração Integral", "Cambio ZF8HP"];

// Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.

console.log("A média de ganhos entre Stg1 e Stg2 do Audi RS3 8V.2 é de:", (cv1Audi + cv2Audi) / 2, "cv");

console.log("A média de ganhos entre Stg1 e Stg2 do Porsche 911 Carrera S 3.0 (992) é de:", (cv1Porsche + cv2Porsche) / 2, "cv");

console.log("A média de ganhos entre Stg1 e Stg2 do VW Jetta GLI é de:", (cv1VW + cv2VW) / 2, "cv");

console.log("A média de ganhos entre Stg1 e Stg2 da BMW M5 (F90) é de:", (cv1VW + cv2BMW) / 2, "cv");

// Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificaNacionalidade = impAudi && impPorsche && impVW && impAudi;
console.log("Semana 1", verificaNacionalidade);
console.log("--------------------FIM---------------------------------");

// Semana 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

console.log("Semana 2 - Arrays de Strings criadas");
console.log("--------------------FIM---------------------------------");

// Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS.

console.log("---Relatório utilizando console.log() do Audi RS3 2.5 TFSI (8V.2)---");
console.log(marcaAudi.toUpperCase());
console.log(modeloAudi.toUpperCase());
console.log(motorAudi.toUpperCase());
console.log(anoAudi);
console.log(cvAudi);
console.log(cv1Audi);
console.log(cv2Audi);
console.log(impAudi.toString().toUpperCase());
console.log(maisInfosAudi.toString().toUpperCase());
console.log("--------------------FIM---------------------------------");

console.log("---Relatório utilizando console.log() do Porsche 911 Carrera S 3.0 (992)---");
console.log(marcaPorsche.toUpperCase());
console.log(modeloPorsche.toUpperCase());
console.log(motorPorsche.toUpperCase());
console.log(anoPorsche);
console.log(cvPorsche);
console.log(cv1Porsche);
console.log(cv2Porsche);
console.log(impPorsche.toString().toUpperCase());
console.log(maisInfosPorsche.toString().toUpperCase());
console.log("--------------------FIM---------------------------------");

console.log("---Relatório utilizando console.log() do VW Jetta GLI---");
console.log(marcaVW.toUpperCase());
console.log(modeloVW.toUpperCase());
console.log(motorVW.toUpperCase());
console.log(anoVW);
console.log(cvVW);
console.log(cv1VW);
console.log(cv2VW);
console.log(impVW.toString().toUpperCase());
console.log(maisInfosVW.toString().toUpperCase());
console.log("--------------------FIM---------------------------------");

console.log("---Relatório utilizando console.log() do BMW M5 (F90)---");
console.log(marcaBMW.toUpperCase());
console.log(modeloBMW.toUpperCase());
console.log(motorBMW.toUpperCase());
console.log(anoBMW);
console.log(cvBMW);
console.log(cv1BMW);
console.log(cv2BMW);
console.log(impBMW.toString().toUpperCase());
console.log(maisInfosBMW.toString().toUpperCase());
console.log("--------------------FIM---------------------------------");

// Semana 3--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Transforme os itens que criamos nas últimas semanas em objetos.

const audiRS3 = {
    marca: "audi",
    modelo: "rs3 2.5 tfsi (8v.2)",
    motor: "5 cilindros 2.5 20v",
    ano: 2018,
    potenciaOriginal: 400,
    stg1: 500,
    stg2: 530,
    isImport: true,
    section: "section1",
    imagem: "./Media/RS3.jpg",
    link: "https://armadaperformance.com.br/reprogramacao-de-ecu-audi-rs3-2-5-tfsi-8v-2/",
    maisInfos: [" Turbo", " Injeção Direta", " Tração Integral Quattro", " Cambio DSG DQ500"]
};
console.log(audiRS3);

const porsche911 = {
    marca: "porsche",
    modelo: "911 carrera s 3.0 (992)",
    motor: "Boxer 3.0 24v",
    ano: 2020,
    potenciaOriginal: 450,
    stg1: 560,
    stg2: 580,
    isImport: true,
    section: "section2",
    imagem: "./Media/911.JPG",
    link: "https://armadaperformance.com.br/reprogramacao-de-ecu-porsche-911-carrera-s-3-0-992/",
    maisInfos: [" Turbo", " Injeção Direta", " Tração Traseira", " Cambio PDK"]
};
console.log(porsche911);

const vwJetta = {
    marca: "vw",
    modelo: "jetta gli",
    motor: "4 cilindros 2.0 16v TFSI",
    ano: 2020,
    potenciaOriginal: 230,
    stg1: 320,
    stg2: 340,
    isImport: false,
    section: "section3",
    imagem: "./Media/GLI.jpg",
    link: "https://armadaperformance.com.br/reprogramacao-de-ecu-vw-jetta-gli/",
    maisInfos: [" Turbo", " Injeção Direta", " Tração Dianteira", " Cambio DSG DQ250"]
};
console.log(vwJetta);

const bmwM5 = {
    marca: "bmw",
    modelo: "m5 (f90)",
    motor: "V8 4.4 32v",
    ano: 2021,
    potenciaOriginal: 600,
    stg1: 780,
    stg2: 820,
    isImport: true,
    section: "section4",
    imagem: "./Media/M5.jpg",
    link: "https://armadaperformance.com.br/reprogramacao-de-ecu-bmw-m5-f90/",
    maisInfos: [" BiTurbo", " Injeção Direta", " Tração Integral", " Cambio ZF8HP"]
};
console.log(bmwM5);

// Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const carrosAlemaes = [];

// Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()´

console.log("Adicionando Objetos ao Array de Objetos");
carrosAlemaes.push(audiRS3, porsche911, vwJetta, bmwM5);

console.log("Semana 3", carrosAlemaes);
console.log("--------------------FIM---------------------------------");

// Semana 4--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

// Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

console.log("Verificando booleano antes do PUSH no item anterior"); //Comentado, porque estava irritando dar "OK" no ALERT a cada REFRESH!!!

// audiRS3.isImport === true ? carrosAlemaes.push(audiRS3) : alert(`Este ${audiRS3.modelo} não é importado`);
// porsche911.isImport === true ? carrosAlemaes.push(porsche911) : alert(`Este ${porsche911.modelo} não é importado`);
// vwJetta.isImport === true ? carrosAlemaes.push(vwJetta) : alert(`Este ${vwJetta.modelo} não é importado`);
// bmwM5.isImport === true ? carrosAlemaes.push(bmwM5) : alert(`Este ${bmwM5.modelo} não é importado`);

console.log("Semana 4 - Inclui comentario no codigo sobre o ALERT", carrosAlemaes);
console.log("--------------------FIM---------------------------------");

// Semana 5--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração

// Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

// const maisInfo = carrosAlemaes.map(function(obj){
//     return Object.keys(obj).map(function(key){
//         return obj[key];
//     })
// })

// 5.1
let stringRS3 = "";
for (i in audiRS3.maisInfos) {
    stringRS3 += `${audiRS3.maisInfos[i]}, `;
}
console.log("Semana 5.1 RS3 - Refatoração de array p/ String", stringRS3);

let porsche911String = "";
for (i in porsche911.maisInfos) {
    porsche911String += `${porsche911.maisInfos[i]}, `;
}
console.log("Semana 5.1 Porsche 911 - Refatoração de array p/ String", porsche911String);

let vwJettaString = "";
for (i in vwJetta.maisInfos) {
    vwJettaString += `${vwJetta.maisInfos[i]}, `;
}
console.log("Semana 5.1 Jetta GLI- Refatoração de array p/ String", vwJettaString);

let bmwM5String = "";
for (i in bmwM5.maisInfos) {
    bmwM5String += `${bmwM5.maisInfos[i]}, `;
}
console.log("Semana 5.1 BMW M5 - Refatoração de array p/ String", bmwM5String);

// 5.2
for (let i in carrosAlemaes) {
    console.log("Semana 5.2", carrosAlemaes[i]);
}

console.log("--------------------FIM---------------------------------");

// Semana 6--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

console.log("Semana 6.1");

function imprimeObjeto(objeto) {
    let stringCarrosAlemaes = "";
    stringCarrosAlemaes = objeto;
    console.log(stringCarrosAlemaes);
};

imprimeObjeto(audiRS3);
imprimeObjeto(porsche911);
imprimeObjeto(vwJetta);
imprimeObjeto(bmwM5);

// Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.

console.log("Semana 6.2");

// function retornaObjeto (arrayObjeto,string){
//     let retornaObjeto = {};
//     for (let i in arrayObjeto){
//         for (let j in arrayObjeto[i]){
//             if (arrayObjeto[i][j]===string){
//                 retornaObjeto = arrayObjeto[i];
//             }
//         }
//     }
//     console.log(retornaObjeto);
// };

const retornaObjeto = (arrayObjeto, input) => {
    for (i in arrayObjeto) {
        for (j in arrayObjeto[i]) {
            if (arrayObjeto[i][j] === input) {
                console.log("Relatório impresso no console com as informações de cada item", arrayObjeto[i]);
                let main = document.getElementById("main")
                let div = document.createElement("div");
                let section = document.createElement("section");
                let picture = document.createElement("img");
                let ul = document.createElement("ul");
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                let li3 = document.createElement("li");
                let li4 = document.createElement("li");
                let li5 = document.createElement("li");
                let li6 = document.createElement("li");
                let li7 = document.createElement("li");
                let li8 = document.createElement("li");
                let a = document.createElement("a");

                div.setAttribute("id", "container")
                section.setAttribute("id", arrayObjeto[i].section);
                picture.src = arrayObjeto[i].imagem;
                a.setAttribute("href", arrayObjeto[i].link);
                a.setAttribute("target", "_blank");
                a.innerHTML = arrayObjeto[i].modelo.toUpperCase();
                li1.innerHTML = `Modelo: `;
                li2.innerHTML = `Marca: ${arrayObjeto[i].marca}`;
                li3.innerHTML = `Motorização: ${arrayObjeto[i].motor}`;
                li4.innerHTML = `Potência Original: ${arrayObjeto[i].potenciaOriginal} cv`;
                li5.innerHTML = `Potência com preparação Stg1: ${arrayObjeto[i].stg1} cv`;
                li6.innerHTML = `Potência com preparação Stg2: ${arrayObjeto[i].stg2} cv`;
                li7.innerHTML = `É importado? ${arrayObjeto[i].isImport}`;
                li8.innerHTML = `Mais informações: ${arrayObjeto[i].maisInfos}`;

                main.appendChild(div)
                div.appendChild(section);
                section.appendChild(picture);
                section.appendChild(ul);
                ul.appendChild(li1);
                ul.appendChild(li2);
                ul.appendChild(li3);
                ul.appendChild(li4);
                ul.appendChild(li5);
                ul.appendChild(li6);
                ul.appendChild(li7);
                ul.appendChild(li8);
                li1.appendChild(a);
            }
        }
    }
}

// retornaObjeto(carrosAlemaes, "Audi");
// retornaObjeto(carrosAlemaes, "Porsche");
// retornaObjeto(carrosAlemaes, "VW");
// retornaObjeto(carrosAlemaes, "BMW");

console.log("--------------------FIM---------------------------------");

// Semana 11--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (i in carrosAlemaes) {
for (let i=0; i<carrosAlemaes.length; i++){
    let div = document.getElementById("container");
    let section = document.createElement("section");
    let picture = document.createElement("img");
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");
    let li6 = document.createElement("li");
    let li7 = document.createElement("li");
    let li8 = document.createElement("li");
    let a = document.createElement("a");

    picture.src = carrosAlemaes[i].imagem;
    section.setAttribute("id", `section${i+1}`);
    // picture.setAttribute("id", `img${i+1}`)
    ul.setAttribute("id", `ul${i+1}`)
    a.setAttribute("href", carrosAlemaes[i].link);
    a.setAttribute("target", "_blank");
    a.innerHTML = carrosAlemaes[i].modelo.toUpperCase();
    li1.innerHTML = `Modelo: `;
    li2.innerHTML = `Marca: ${carrosAlemaes[i].marca}`;
    li3.innerHTML = `Motorização: ${carrosAlemaes[i].motor}`;
    li4.innerHTML = `Potência Original: ${carrosAlemaes[i].potenciaOriginal} cv`;
    li5.innerHTML = `Potência com preparação Stg1: ${carrosAlemaes[i].stg1} cv`;
    li6.innerHTML = `Potência com preparação Stg2: ${carrosAlemaes[i].stg2} cv`;
    li7.innerHTML = `É importado? ${carrosAlemaes[i].isImport}`;
    li8.innerHTML = `Mais informações: ${carrosAlemaes[i].maisInfos}`;

    div.appendChild(section);
    section.appendChild(picture);
    section.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);
    ul.appendChild(li8);
    li1.appendChild(a);
}

// Semana 12--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function search(event) {
    event.preventDefault();
    let input = document.getElementById("input").value.toLowerCase();
    if (input === "") {
        alert("Preencha algo para realizar a busca");
    } else {
        document.getElementById("container").remove();
        retornaObjeto(carrosAlemaes, input);
    };
};