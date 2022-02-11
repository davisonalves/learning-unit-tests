const calculator = require('../calculator/script')

document.body.innerHTML =
    '<p id="resultado"></p>'

describe('Insert function', () => {
    afterEach(() => {
      calculator.clean()  
    })
    it('Um número selecionado deve ser inserido', () => {
        expect(calculator.insert('1')).toEqual('1')
    })
    it('Um operador selecionado deve ser inserido', () => {
        expect(calculator.insert('+')).toEqual('+')
    })
});
