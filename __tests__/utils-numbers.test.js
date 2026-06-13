const {
    ehPar,
    ehImpar,
    calcularFatorial,
    fibonacci,
    calcularMediaPonderada,
    calcularMediaAritmetica,
    ordenarNumeros,
    calcularPotencia
} = require('../utils-numbers');

describe('utils-numbers', () => {

    test('ehPar deve retornar true para números pares', () => {
        expect(ehPar(4)).toBe(true);
    });

    test('ehImpar deve retornar true para números ímpares', () => {
        expect(ehImpar(5)).toBe(true);
    });

    test('calcularFatorial de 5 deve ser 120', () => {
        expect(calcularFatorial(5)).toBe(120);
    });

    test('fibonacci de 7 deve ser 13', () => {
        expect(fibonacci(7)).toBe(13);
    });

    test('fibonacci negativo deve retornar null', () => {
        expect(fibonacci(-1)).toBeNull();
    });

    test('calcularMediaPonderada deve funcionar corretamente', () => {
        expect(
            calcularMediaPonderada([8, 6], [2, 1])
        ).toBeCloseTo(7.33, 2);
    });

    test('calcularMediaAritmetica deve retornar média correta', () => {
        expect(calcularMediaAritmetica([2, 4, 6])).toBe(4);
    });

    test('calcularMediaAritmetica de array vazio deve retornar null', () => {
        expect(calcularMediaAritmetica([])).toBeNull();
    });

    test('ordenarNumeros deve ordenar em ordem crescente', () => {
        expect(ordenarNumeros([5, 1, 3])).toEqual([1, 3, 5]);
    });

    test('calcularPotencia deve calcular potência corretamente', () => {
        expect(calcularPotencia(2, 3)).toBe(8);
    });

});