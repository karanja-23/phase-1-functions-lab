// Code your solution in this file!
function distanceFromHqInBlocks (someValue){
    if (someValue < 42){
        return (42- someValue);
    }
    else{
        return (someValue-42);
    }
}

function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start, end){
    if (end > start){
        return (end - start)*264;
    }
    else{
        return (start -end)*264;
    }

}
function calculatesFarePrice(start, end){
    const distanceInFeet = distanceTravelledInFeet(start, end);

    if (distanceInFeet <= 400){
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet <= 2000){
        return (distanceInFeet -400 )* 0.02;
    }
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }


}
