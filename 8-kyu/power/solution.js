function numberToPower(number, power){
    let total = 1;
    for(let i = 1; i <= power; i++){
      total = number * total;
    }
    return total
}