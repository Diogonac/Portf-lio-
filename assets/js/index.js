document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://portif-27880.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.cat-container', context)

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