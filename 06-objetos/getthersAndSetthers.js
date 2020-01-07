 // Definindo gets and setthers em javascript.
 const sequencia = {
     _valor:1,
     get valor(){return this._valor++},
     set valor(valor){
         if(valor > this._valor) {
             this._valor = valor
         }
        }
 }

 console.log(sequencia.valor)
 console.log(sequencia.valor)
 sequencia.valor = 1580
 console.log(sequencia.valor)
 console.log(sequencia.valor)

