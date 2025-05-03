function howMuchWater(water, load, clothes){
    let total = water * 1.1 ** (clothes - load )
    
    if(clothes > load * 2 ) {
      return 'Too much clothes'
    } else if (clothes < load){
      return 'Not enough clothes'
    } else {
      return +(total).toFixed(2)
    }
}