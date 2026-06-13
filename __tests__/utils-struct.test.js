const {
    concatenarArrays,
    mesclarObjetos,
    contemChave,
    contarOcorrencias,
    inverterObjeto
} = require('../utils-struct');

describe('utils-struct', () => {

    test('concatenarArrays deve concatenar os arrays conforme implementação atual', () => {
        expect(
            concatenarArrays([1, 2], [3, 4])
        ).toEqual([1, 2, [3, 4]]);
    });

    test('mesclarObjetos deve unir objetos', () => {
        expect(
            mesclarObjetos(
                { nome: 'João' },
                { idade: 23 }
            )
        ).toEqual({
            nome: 'João',
            idade: 23
        });
    });

    test('contemChave deve retornar true para chave existente', () => {
        expect(
            contemChave({ nome: 'João' }, 'nome')
        ).toBe(true);
    });

    test('contemChave deve retornar false para chave inexistente', () => {
        expect(
            contemChave({ nome: 'João' }, 'idade')
        ).toBe(false);
    });

    test('contarOcorrencias deve contar corretamente', () => {
        expect(
            contarOcorrencias([1, 2, 1, 1, 3], 1)
        ).toBe(3);
    });

    test('inverterObjeto deve inverter chave e valor', () => {
        expect(
            inverterObjeto({
                a: 'x',
                b: 'y'
            })
        ).toEqual({
            x: 'a',
            y: 'b'
        });
    });

});