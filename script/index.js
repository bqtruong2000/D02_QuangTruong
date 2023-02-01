/*let secretNumber = 1 + Math.ceil(Math.random() *100);
console.log(secretNumber)


while(true){
    let input = prompt("Hay doan so bi mat");
    if(input == secretNumber){
        alert("Ban da doan dung!");
        alert("So bi mat la: " + secretNumber);
        break;
    }else{
        if(input < secretNumber)
            alert("So bi mat lon hon so cua ban");
        else
            alert("So bi mat nho hon so cua ban");
    }
}
*/

let choice =  ["Keo", "Bua", "Bao"]
let x = choice[Math.floor(Math.random()*choice.length)]
console.log(x)
while(true){
    let input = prompt("Nhap: Keo Bua Bao");
    if(input === x){
        alert("Ra: " + x + ", Hoa");
    }
    else if(input === "Keo" && x === "Bao" || input === "Bua" && x === "Keo" || input === "Bao" && x === "Bua"){
        alert("Ra: " + x + ", Thang");
        break;
    }
    else if(input === "Keo" && x === "Bua" || input === "Bua" && x === "Bao" || input === "Bao" && x === "Keo"){
        alert("Ra: " + x + ", Thua")
    }
}