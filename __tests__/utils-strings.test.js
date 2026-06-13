const {
    validarEmail,
    contarCaracteres,
    inverterString,
    converterParaMaiusculas,
    ehPalindromo,
    contarOcorrenciasSubstring,
    removerEspacosExtras,
    terminaCom
} = require('../utils-strings');

describe('utils-strings', () => {

    test('validarEmail deve aceitar email válido', () => {
        expect(validarEmail('teste@email.com')).toBe(true);
    });

    test('validarEmail deve rejeitar email inválido', () => {
        expect(validarEmail('teste.com')).toBe(false);
    });

    test('contarCaracteres deve retornar quantidade correta', () => {
        expect(contarCaracteres('Jest')).toBe(4);
    });

    test('inverterString deve inverter a string', () => {
        expect(inverterString('abc')).toBe('c b a');
    });

    test('converterParaMaiusculas deve converter corretamente', () => {
        expect(converterParaMaiusculas('teste')).toBe('TESTE');
    });

    test('ehPalindromo deve retornar true para palíndromo', () => {
        expect(ehPalindromo('ovo')).toBe(true);
    });

    test('ehPalindromo deve retornar false para não palíndromo', () => {
        expect(ehPalindromo('casa')).toBe(false);
    });

    test('contarOcorrenciasSubstring deve contar corretamente', () => {
        expect(
            contarOcorrenciasSubstring('banana', 'na')
        ).toBe(2);
    });

    test('removerEspacosExtras deve remover espaços duplicados', () => {
        expect(
            removerEspacosExtras('  Olá    Mundo  ')
        ).toBe('Olá Mundo');
    });

    test('terminaCom deve validar sufixo', () => {
        expect(terminaCom('javascript', 'script')).toBe(true);
    });

});