function positions(firstPlace,secondPlace,lastPlace) {
    let lugar = []
    let aux;

    if(secondPlace === 'Daniel') {
        aux = firstPlace 
        firstPlace = secondPlace
        secondPlace = aux
        lugar[0] = firstPlace
        lugar[1] = secondPlace
        lugar[2] = lastPlace
    } else if('Daniel' == lastPlace) {
        aux = secondPlace
        secondPlace = 'Daniel'
        lastPlace = aux
        lugar[0] = firstPlace
        lugar[1] = secondPlace
        lugar[2] = lastPlace
    } else {
        lugar[0] = firstPlace
        lugar[1] = secondPlace
        lugar[2] = lastPlace
    }
    return `1º Colocado: ${firstPlace} 2º Colocado: ${secondPlace} 3º Colocado: ${lastPlace}` 
    
}
console.log(positions('Rafael','Daniel','Manoel'))

