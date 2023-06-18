function fromWhere(regNo){
    if(regNo.includes("CY")){
      return "Bellville";
    }
    else if(regNo.includes("CJ")){
      return "Paarl";
    }
    else if(regNo.includes("CA")){
      return "Cape Town";
    }
    else if(regNo.includes("ZN")){
      return "Some other place!";
    }
  }
  
//   console.log(fromWhere('CY 567489'))