
let num=Math.round(Math.random()*10);
console.log(num);
let gnum=prompt('guess number');
if (gnum==num)
    console.log('Matched');
else{
let gnumm=prompt('Try again');
if (gnumm==num)
    console.log('Matched');
else{
let numm=prompt('Try again');
if (numm==num)
    console.log('Matched');
else
    console.log('Failed');
}
}






   
