function totalPhoneBill(data) {
    // split the string into an array of calls and sms's
    var dataArray = data.split(',');
  
    // create variables to keep track of the cost of calls and sms's
    var callCost = 0;
    var smsCost = 0;
  
  // split the string into an array of calls and sms's
    var dataArray = data.split(',');
  
    // create variables to keep track of the cost of calls and sms's
    var callCost = 0;
    var smsCost = 0;
  
    // loop through the array and calculate the cost of each call and sms
    for (var i = 0; i < dataArray.length; i++) {
      var item = dataArray[i].trim();
      if (item.startsWith('call')) {
        callCost += 2.75;
      } else if (item.startsWith('sms')) {
        smsCost += 0.65;
      }
    }
  
    // calculate the total bill and return it
    var totalBill = callCost + smsCost;
    return 'R' + totalBill.toFixed(2);
  }