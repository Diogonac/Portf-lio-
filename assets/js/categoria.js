document.addEventListener('DOMContentLoaded', function() {

	let params = coDesExtract()
	let cat = params['key']

	let db = coDesConnect('https://portif-27880.firebaseio.com/')

	db.download('/', function(data) {
		context = data['portfolio'][cat]
		coDesReplace('.categoria', context)

		context = data['portfolio'][cat]
		context['ckey'] = cat
		coDesReplace('.proj-container1', context)

    /*
      Sim, abaixo estamos usando "in" em vez de "of", pois
      "of" você usa para iterar em listas. Para iterar nas
      chaves de um dicionário, usamos "in", como em Python.
      Sim, é confuso. Sinto muito.
      */
      for(let key in data) {

      /*
        O resultado deste loop pode ser visto no console.
        */
        console.log(data[key])
    }
})
})