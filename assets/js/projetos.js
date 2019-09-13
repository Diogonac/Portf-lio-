document.addEventListener('DOMContentLoaded', function() {

	let descricao = document.querySelector('a1')
	let materiais = document.querySelector('a2')
	let grupo = document.querySelector('a3')
	let titulo = document.querySelector('a4')

	descricao.addEventListener('click', function(){

		let informacao = document.querySelector('p')
		informacao.innerHTML = 'informacao1'

	})		

	materiais.addEventListener('click', function(){

		let informacao = document.querySelector('p')
		informacao.innerHTML = 'informacao2'

	})	

	grupo.addEventListener('click', function(){

		let informacao = document.querySelector('p')
		informacao.innerHTML = 'informacao3'

	})	

	titulo.addEventListener('click', function(){

		let informacao = document.querySelector('p')
		informacao.innerHTML = 'informacao4'

	})	


})

