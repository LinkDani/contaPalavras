const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { contaPalavras } = require('../contaPalavras');

lab.experiment('Quando informa a frase', () => {
  lab.test('Deve retornar com o número de palavras:', (done) => {
    expect(contaPalavras('Meu nome é James')).to.equal(4);
    done();
  });
});
