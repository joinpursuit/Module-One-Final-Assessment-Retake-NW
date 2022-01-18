//goal is to provide change to all customers provided i have no starting bank.
//Return: boolean
//Input: billsay -> of 5$, 10$, || 20$

function lemonadeStand (bills){
    // let bank = 0;
   
    let [five, ten, twenty] = [0,0,0]
    for (let i = 0, len = bills.length; i < len; i++){
        
        if (bills[i] === 5){            
            five++
        }
        else if (bills[i] === 10){
            five--
            ten++
        }
        else if (bills[i] === 20){
            if (ten > 0){
                ten--
                five--
            } else { 
                five-=3
            }
        }
        else {
            return false
        }

        if (five < 0){
            return false
        }
    }
    return true
}

console.log(lemonadeStand([5,10,20]))
console.log(lemonadeStand([5,5,5]))
console.log(lemonadeStand([10,10]))