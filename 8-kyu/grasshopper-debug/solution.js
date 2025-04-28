function weatherInfo (temp) {
    function convertToCelsius (temperature) {
      let celsius = (temperature - 32)  * (5/9)
      return celsius
    
    }
      let c =  convertToCelsius(temp)
      if (c < 0)
        return (c + " is freezing temperature")
      else
        return (c + " is above freezing temperature")
  }