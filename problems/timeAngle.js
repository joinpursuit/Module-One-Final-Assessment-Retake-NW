//calculate the angle between the hour hand and the minute hand of an analog clock if given a time

//input: time [string]
//output: angle [number]

//a circle has 360 degs. the max angle between the hands is 180 degs. min is 0 degs.
//every minute is 6 degs
//assume that the hour hand clicks over to the next minute before the next hour number
//so really all i have to do is count the amount of minutes between the hour and minute hands
//every 12 minutes the hour hand moves 1 minute

const timeAngle = (time)=> {
    let correction = Math.floor(Number(time[2] + time[3]) /12) /*without correction we assume that the hour hand skips to ea hour number on the clock */
    let degreeHour = 
        Number(time) > 1200 /*this solves the AM/PM problem*/
            ? (5 * (Math.floor(Number(time[0] + time[1]) /12)) * 6) + correction /*since ea minute = 6degs and past 1200 we need to 'start over' the clock */ 
            : 5 * (Number(time[0] + time[1])) * 6 + correction /*we just calc degree per hour here as before but no need to div by 12 */
    let degreeMinute = (Number(time[2] + time[3])) * 6 /*same deal here just calc the degrees per each minute */
    console.log(degreeHour)
    let angle = Math.abs(degreeHour - degreeMinute) /*sometimes the hour may be bigger than the minute resulting in a neg int*/
    console.log(angle)
    let result
    if (angle > 180 && angle !== 360){
        result = angle - 180
    }
    else if (angle === 360){
        result = 0
    } else result = angle
    return result
}

console.log(timeAngle('1145'))
console.log(timeAngle('1245'))
console.log(timeAngle('1811'))
console.log(timeAngle('1200'))
console.log(timeAngle('1230'))
