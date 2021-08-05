// Code your solution in this file!
function distanceFromHqInBlocks(num){
  let hq = 42
  if (num > 42){
      return num - 42;
    }
  else {
   return  42- num;
  }
}

function distanceFromHqInFeet(num){
   return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
         return (num1 - num2) * 264
    }
    else{
        return (num2 - num1) * 264;
    }
}

function calculatesFarePrice(start, destination){
   let distance = distanceTravelledInFeet(start, destination)
   
   if (distance > 400 && distance < 2000){
     return  .02* (distance - 400);
   }
   else if  (distance > 2000 && distance < 2500){
       return 25;
   }
  else if (distance > 2500){
        return "cannot travel that far";
    }
    else {
        return 0;
    }
}