document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
  	let cat = params['cat']
	let proj = params['proj']

	let db = coDesConnect('https://portif-27880.firebaseio.com/')

	let descricao = document.querySelector('a1')
	let materiais = document.querySelector('a2')
	let grupo = document.querySelector('a3')
	let titulo = document.querySelector('a4')

	db.download('/', function(data) {

		context = data['portfolio'][cat]['projetos'][proj]
	    coDesReplace('.title', context)

	    context = data['portfolio'][cat]['projetos'][proj]
	    coDesReplace('.proj-txt', context)

		descricao.addEventListener('click', function(){

			let informacao = document.querySelector('p')
			context = data['portfolio'][cat]['projetos'][proj]['descricao']
			informacao.innerHTML = context

		})		

		materiais.addEventListener('click', function(){

			let informacao = document.querySelector('p')
			context = data['portfolio'][cat]['projetos'][proj]['materiais']
			informacao.innerHTML = context

		})	

		grupo.addEventListener('click', function(){

			let informacao = document.querySelector('p')
			context = data['portfolio'][cat]['projetos'][proj]['grupo']
			informacao.innerHTML = context

		})	

		titulo.addEventListener('click', function(){

			let informacao = document.querySelector('p')
			context = data['portfolio'][cat]['projetos'][proj]['titulo']
			informacao.innerHTML = context

		})

	})

})

