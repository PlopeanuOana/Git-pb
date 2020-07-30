function suming(no1,no2){
    return no1*no2;
}
//console.log(suming(2,3));
document.getElementById("sum_numbers").innerHTML = " 2,3 ";
document.getElementById("sum_function").innerHTML = suming(2,3);

function division(no1,no2){
    return (no1/no2);
}
//console.log(division(10,2));
document.getElementById("division_numbers").innerHTML = " 10,2 ";
document.getElementById("division_function").innerHTML = division(10,2);

function average(array){
    var sum = 0;
    var i=0;
    while(i < array.length){
        if(i+1 == array.length) 
        sum+=suming(array[i],0);
        else
        sum+=suming(array[i],array[i+1]);
        
        i+=2;
    }
    var avr = division(sum,array.length);
    //console.log(sum);
    //console.log(array.length);
    //console.log(avr);
    return "Media aritmetica este:" + avr;
}
var numbers = new Array(2,3,12,5,8);
document.getElementById("average_numbers").innerHTML = numbers;
document.getElementById("average_function").innerHTML = average(numbers);

function prodNo(array){
    var prod = 1;
    for(var i=0;i<array.length;i++){
        prod *=array[i];
    }
    return prod;
}

document.getElementById("product_numbers").innerHTML = numbers;
document.getElementById("product_function").innerHTML = prodNo(numbers);

