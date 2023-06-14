function countAllPaarl(regNumbers) {
    var regNumArray = regNumbers.split(',');
    var count = 0;
  
    for (var i = 0; i < regNumArray.length; i++) {
      if (regNumArray[i].trim().startsWith('CJ')) {
        count++;
      }
    }
    return count;
  }