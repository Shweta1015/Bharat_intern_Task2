let celsiusInput= document.querySelector('.celsius > input')
let fahrenheitInput= document.querySelector('.fahrenheit > input')
let kelvinInput= document.querySelector('.kelvin > input')

let btn= document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

//celsius to fahrenheit/kelvin
celsiusInput.addEventListener('input', function(){
    let cel= parseFloat(celsiusInput.value)
    let fahr= (cel*(9/5))+32
    let kel= cel+ 273.15

    fahrenheitInput.value= roundNumber(fahr);
    kelvinInput.value= roundNumber(kel);
})

//fahrenheit ro celsius/kelvin
fahrenheitInput.addEventListener('input',function(){
    let fahr= parseFloat(fahrenheitInput.value)
    let cel=(fahr-32)*(5/9)
    let kel=(fahr-32)*(5/9)+273.15

    celsiusInput.value= roundNumber(cel);
    kelvinInput.value= roundNumber(kel);
})

//kelvin to celsius/fahrenheit
kelvinInput.addEventListener('input', function(){
    let kel= parseFloat(celsiusInput.value)
    let cel= kel-273.15
    let fahr= (kel-273.15)*(9/5)+32

    celsiusInput.value= roundNumber(cel);
    fahrenheitInput.value= roundNumber(fahr);
})

btn.addEventListener('click',()=>{
    celsiusInput.value= ""
    fahrenheitInput.value= ""
    kelvinInput.value= ""
})