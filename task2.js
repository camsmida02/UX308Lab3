function clothing (temp, relHumidity){
    if (temp > 30 && relHumidity == 100){
        return("Rain Jacket");
    }
    if (temp < 5 && relHumidity < 20){
        return("Winter Coat")
    }
}


console.log(clothing(31, 100)); // rain jacket
console.log(clothing(3, 15)); // winter coat