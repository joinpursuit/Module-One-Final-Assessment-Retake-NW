//calculate the angle between the hour hand and the minute hand of an analog clock if given a time

//input: time [string]
//output: angle [number]

//a circle has 360 degs. the max angle between the hands is 180 degs. min is 0 degs.
//every minute is 6 degs
//assume that the hour hand clicks over to the next minute before the next hour number
//so really all i have to do is count the amount of minutes between the hour and minute hands
//every 12 minutes the hour hand moves 1 minute

//if time = 1305 -> 6*5 = 30degs 
//if time = 1515 ->  


//at 1540 -> minute hand is 3 mins past 3 and minute hand is at 40
const timeAngle = (time)=> {
    let hour
    let minute
    if (time.length > 3) {
        hour = Math.floor(Number (time[0].concat(time[1])) / 12)
        console.log(hour)
    } else hour = time[0]
    

}

console.log(timeAngle('1345'))
