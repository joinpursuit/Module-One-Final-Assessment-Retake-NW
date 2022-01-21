//calculate the angle between the hour hand and the minute hand of an analog clock if given a time

//input: time [string]
//output: angle [number]

//a circle has 360 degs. the max angle between the hands is 180 degs. min is 0 degs.
//every minute is 6 degs
//assume that the hour hand clicks over to the next minute before the next hour number
//so really all i have to do is count the amount of minutes between the hour and minute hands
//every 12 minutes the hour hand moves 1 minute



const timeAngle = (time)=> {
    let degreeHour = 
        Number(time) > 1200 
            ? 5 * (Math.floor(Number(time[0] + time[1]) /12)) * 6 
            : 5 * (Number(time[0] + time[1])) * 6
    let degreeMinute = (Number(time[2]+time[3]))*6
    
    return Math.abs(degreeHour - degreeMinute)
}

console.log(timeAngle('1145'))
