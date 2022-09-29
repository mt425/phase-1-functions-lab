
function distanceFromHqInBlocks(location){
    return location > 42 ? location - 42 : 42 - location
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination){
    return start > destination ?
        (start - destination) * 264 : (destination - start) * 264
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400){
        return 0
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02
    } else if (distance <= 2500){
        return 25
    } else {
        return 'cannot travel that far'
    }
}