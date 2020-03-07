let tabNombres = [];
let tabLettres = [];

//random numbers array
//Nombres aléatoires 65 à 90
numeroAleatorio = function() {
for (let i = 0; i < 1000; i++) {
      tabNombres.push(Math.floor(Math.random() * ((90 - 65) + 1) + 65));
    }
}

// turning numbers into letters
// characters table
letraAleatorio = function() {
for (let j = 0; j <tabNombres.length; j++) {
    tabLettres.push(String.fromCharCode(tabNombres[j]));
}
}
const filtroDAD = (arr) => {
    let totalD = 0
    let posicao = 0
    for(i=0;i<arr.length;i++) {
        if(arr[i] == "D" && arr[i+1] == "A" && arr[i+2] == "D") {
            totalD +=1
            posicao =i
        }
        
    }

    return `Total DAD ${totalD} sua posição é ${posicao}`
}

numeroAleatorio()
letraAleatorio()
console.log(tabLettres)
console.log(filtroDAD(tabLettres))