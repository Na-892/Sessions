var num1=5
var num2=10
var x='+'
switch(x)
{
    case '+':
        console.log(num1+num2);
        break;
     case '*':
            console.log(num1*num2);
      break;   
     case '-':
        console.log(num1-num2);
     break;
     defult:
      console.log("error")
}

var y=1
while(y<= 50)
{
    console.log(y)
    y++;

}

var v=1
do{
    console.log(v)
    y++;
}
while(y<= v)


var number=[1,2,3,4,5,6,7,8,9,10]
var count=0
while(count<= number.length)
{
    console.log(number[count])
   count++;

}*/

for(var x=1; x<=20; x++){
    console.log(x)
}


var name=["ahmed","ali","fatma","hafsa","maryam"]
for(var i=0; i<name.length; i++){
    console.log(name[i])
}


function getsum(num1, num2,x){
    switch(x)
    {
        case '+':
            return num1+num2;
            break;
         case '*':
            return num1*num2;
          break;   
         case '-':
            return num1-num2;
         break;
         defult:
        return"error";
        
    }
}
console.log(getsum(10,20,'+'));



var promp =prompt("enterthe number")
function getsum(){
if (promp% 3==0 && promp% 4==0){
    return"yes"
}
else
{
    return"no"
}
}
console.log(getsum(90))



function max(num1,num2)
{
    if (num1>num2){
        return"num1 is max number"+num1;
    }
else if (num2>num1){
    return "num2 is max number"+num2;
}
else{
    return" num=num2";
}
}
console.log(max(20,9))



function get(number){
    if (number>0)
    {
        return "positive";
    }
else if(number<0){
    return "negative";
}
else{
    return "equal zerro";
}

}
console.log(get(-1))








function get(num1,num2,num3){
if(num1>num2&&num1>num3&& num2>3){
    return num1+" is max number and "+num3 +"is min number";
}
else if(num2>num1&&num1>num3&& num2>num3){
    return num2+" is max number and"+num3+"is min number";
}
else if(num3>num2&&num2>num1&& num3>num1){
    return num3+" is max number and "+num1+"is min number";
}
else if(num3>num2&&num1>num2&& num3>num1){
    return num3+" is max number and "+num2+"is min number";
}
else if(num2>num1&&num3>num1&& num2>3){
     return num2+" is max number and"+num1+"is min number";}

 else if  (num1>num2&&num1>num3&& num3>num2){
    return num1+" is max number and "+num3 +"is min number";
}
else{
    return "error"
}

}

console.log(get(4,2,3))










function getsum(x){
if (x% 2==0 ){
    return"even"
}
else
{
    return"odd"
}
}
console.log(getsum(90))



function getvowe(x[0])
{
    switch(x)
    {
        case "a":
            console.log("vowel")
            break
            case "a":
        console.log("vowel")
                break
        case "l":
              console.log("vowel")
                break
        case "o":
         console.log("vowel")
              break
        case "u":
                console.log("vowel")
                break
        defult:
            console.log("not vowel")
    }
   

}

console.log(getvowe("ahmed"))





function print(x)
{
for(var y=1; y<=x;y++){
    console.log(y)
}

}

console.log(print(6))





function even(x){
    for (var i=1;i<=x; i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
console.log(even(10))