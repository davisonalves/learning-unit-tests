const calculator = require('../calculator/script')

//Criando o elemento do front-end que será manipulado e necessário nos testes
document.body.innerHTML =
		'<p id="resultado"></p>'

describe('Funções da calculadora', () => {
	afterEach(() => {
		calculator.clean()  
})
	describe('Função de inserção', () => {
		
		describe('Adicionando números', () => {
		
				it('Um número do conjunto natural(N) selecionado, deve ser inserido', () => {
					expect(calculator.insert('1')).toEqual('1')
				})
	
				it('Um número do conjunto inteiro(Z) selecionado, deve ser inserido', () => {
					expect(calculator.insert('-1')).toEqual('-1')
				})
	
				it('Um número do conjunto racional(Q) selecionado, deve ser inserido', () => {
					expect(calculator.insert('1,1')).toEqual('1,1')  
				})
		})
	
		describe('Adicionando operações', () => {
				it('A operação de soma selecionada, deve ser inserida', () => {
					expect(calculator.insert('+')).toEqual('+')
				})
	
				it('A operação de subtração selecionada, deve ser inserida', () => {
					expect(calculator.insert('-')).toEqual('-')
				})
	
				it('A operação de multiplicação selecionada, deve ser inserida', () => {
					expect(calculator.insert('*')).toEqual('*')
				})
	
				it('A operação de divisão selecionada, deve ser inserida', () => {
					expect(calculator.insert('/')).toEqual('/')
				})
		})
	})

	describe('Função de voltar', () => {
		it('Ao voltar, o ultimo elemento inserido deve ser apagado', () => {
			calculator.insert('123')
			expect(calculator.back()).toEqual('12')
		})
	})

	describe('Função de limpar', () => {
		it('Ao limpar, todos os elementos devem ser apagados', () => {
			calculator.insert('123')
			expect(calculator.clean()).toEqual('')
		})
	})

	describe('Função de cálculo', () => {
		describe('Operação de soma', () => {
			it('Um número somado ao outro, deve retornar o seu resultado', () => {
				calculator.insert('1+2')
				expect(calculator.calc()).toEqual('3')
			})
		})
		
		describe('Operação de subtração', () => {
			it('Um número subtraido do outro, deve retornar o seu resultado', () => {
				calculator.insert('2-1')
				expect(calculator.calc()).toEqual('1')
			})
		})

		describe('Operação de multiplicação', () => {
			it('Um número multiplicado ao outro, deve retornar o seu resultado', () => {
				calculator.insert('2*3')
				expect(calculator.calc()).toEqual('6')
			})
		})

		describe('Operação de divisão', () => {
			it('Um número dividido pelo outro, deve retornar o seu resultado', () => {
				calculator.insert('6/2')
				expect(calculator.calc()).toEqual('3')
			})
		})

	})
})
