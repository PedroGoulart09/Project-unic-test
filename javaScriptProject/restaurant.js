// / No arquivo src/restaurant.js, crie uma função createMenu() que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.
// No arquivo src/restaurant.js, adicione ao objeto retornado por createMenu uma chave consumption que, como valor inicial, tem um array vazio.
let returnObj = {
    fetchMenu: () => { },
    consumption: [],
    order: '',
};
function criaLista(string) {
    returnObj.consumption.push(...string);
}
function somaTotal(valueObj, arr) {
    let option = Object.values(valueObj);
    let optionFood = Object.entries(option[0]);
    let optionDrinks = Object.entries(option[1]);
    let menu = [...optionFood, ...optionDrinks].flat();
    let total = 0;
    for (let i = 0; i < arr.length; i += 1) {
        total += menu[menu.indexOf(arr[i]) + 1];
    }
    return 1.1 * total;
}
const createMenu = (objeto) => {
    returnObj.fetchMenu = () => objeto;
    returnObj.order = (...string) => criaLista(string);
    returnObj.pay = () => somaTotal(objeto, returnObj.consumption);
    return returnObj;
};
function returnConsumption(string) {
    createMenu().order(string);
    return returnObj.consumption;
}

module.exports = { createMenu, returnConsumption };