const { createMenu, returnConsumption } = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu, a qual tem como valor uma função.
    const teste = Object.keys(createMenu());
    expect(teste).toContain('fetchMenu');
  })
});

describe('teste1', () => {
  it('// No arquivo tests/restaurant.spec.js, escreva um teste que verifica se  retorna um objeto cujas chaves são somente food e drink, considerando que a função createMenu foi chamada com o objeto: { food: {}, drink: {} }', () => {

    const teste1 = Object.keys(createMenu({ food: {}, drink: {} }).fetchMenu());
    expect(teste1).toContain('food', 'drink');
  })
})

describe('teste2', () => {
  it('testando2', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {} });
  })
})

describe('teste3', () => {
  it('testando3', () => {
    // N o arquivo tests/restaurant.spec.js, escreva um teste que verifica se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    expect(createMenu().consumption).toEqual([]);
  })
})

describe('teste4', () => {
  it('testando4', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {} });
  })
})

describe('teste5', () => {
  it('testando5', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {} });
  })
})

describe('teste6', () => {
  it('testando6', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica se ao chamar uma função associada à chave order no objeto retornado, passando uma string como parâmetro (como objetoRetornado.order('coxinha')), tal string é adicionada ao array retornado em objetoRetornado.consumption.
    const testeando = createMenu();
    testeando.order('coxinha');
    expect(testeando.consumption).toEqual(['coxinha']);
  })
})

describe('teste7', () => {
  it('testando7', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica se ao adicionar três pedidos, dentre bebidas e comidas, o array objetoRetornado.consumption contém os itens pedidos.
    let b = returnConsumption('coca');
    let c = returnConsumption('cerveja');
    expect(c).toEqual(['coxinha', 'coca', 'cerveja']);

  })
})

describe('teste8', () => {
  it('testando8', () => {
    const iguais = createMenu();
    iguais.consumption = [];
    iguais.order('coxinha');
    iguais.order('agua');
    iguais.order('coxinha');
    expect(iguais.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
  })
})

describe('teste8', () => {
  it('testando8', () => {
    // No arquivo tests/restaurant.spec.js, escreva um teste que verifica que, ao chamar objetoRetornado.pay(), retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em objetoRetornado.consumption.
    let meuRestaurante = createMenu({ food: { coxinha: 3, sopa: 9 }, drink: { agua: 3, cerveja: 6 } });
    meuRestaurante.consumption = [];
    meuRestaurante.order('coxinha');
    meuRestaurante.order('agua');
    meuRestaurante.order('coxinha');
    meuRestaurante.order('cerveja');
    expect(meuRestaurante.pay()).toBe(16.5);
  });
});