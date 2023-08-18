var username="Ahmed";
var age=25;
var output=`I'm ${username} and Iam ${age} years old`
console.log(age)
console.log(output)




function getname(x)
{
console.log(x)
}
console.log("hllo")
const get_name = x =>console.log(x);
get_name("mohammmed")




/*const get_even = number =>{
    for (let i=1; i<=number; i++)
    {if (i%2==0)
    {
        console.log( );
    }
    else{
        console.log()
    }
}
}
console.log(get_number(50))*/







const number1=[1,2,3,4]
const number2=[...number1]
 number1.push(20)
console.log(number2)





const user={
username:"ali",
age:30,
address:"oman"
}
const{username,...x}=user
console.log(x)




const user=[
{
username:"ahmed",
age:50,
mobile:["0875782","68902768"]
}
           ]
const[{mobile}]=user
const[m1,m2]=mobile
console.log(mobile[1])




const number=[1,2,3,4,5,6,7,8,9,10]
number.forEach(function(el,idx){
    console.log(idx)

})






const name=["Ahmed","Ali","sara","Fatma"]
 name.forEach(el=> console.log(el))    

 const name1=["Ahmed","Ali","sara","Fatma"]
 name1.map(el=> console.log(el))   






 const user=[{
    username:"ahmed",
    age:50,
    mobile:["55880938","4553781928"]

 }]
 user.map(el=> console.log(el.username))





const x=[,2,3,4,5,6,7,8,9,10]
const newx=x.map(el =>el>5)
console.log(newx)

const x=[,2,3,4,5,6,7,8,9,10]
const newx=x.filter(el =>el>5)
console.log(newx)





   const number=(num1,num2,num3)=>{


    if(num1>num2&& num2>num3){
   
       console.log(`${num1}is max number and ${num3} is min number`) ;
}
    else if(num2>num1&&num1>num3){
        console.log(`${num2} is max number and${num3}is min number`);
    }
    else if(num3>num2&&num2>num1){
        console.log(`${num3}is max number and ${num1}is min number`);
    }
    else if(num3>num2&&num1>num2){
        console.log(`${num3}is max number and ${num2}is min number`);
    }
    else if(num2>num1&&num3>num1){
        console.log(`${num2} is max number and ${num1}is min number`);}
    
     else if  (num1>num2&& num3>num2){
        console.log(`${num1} is max number and ${num2}is min number`);
    }
    else{
        console.group("all number are equal")
    }
}
number(3,5,2)







 const marks=(n1,n2,n3,n4,n5)=>{

total=n1+n2+n3+n4+n5;
avarge=total/5
percentage=avarge*0.8
console.log(`total is ${total}`)
console.log(`avrage is ${avarge}`)
console.log(`percentage is ${percentage}`)

}
marks(90,80,88,76,78)



const month=(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12)=>{
switch(month)
case m1:
case m3:
case m5:
case m7:
case m8 :
case m10:
case m12:
    console.log('30 days')  
case m4:
case m6:
 case m9:
    console.log('29 days')  
case m2:
    console.log('28 days')  

}
console.log(8)