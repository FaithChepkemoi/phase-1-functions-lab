// Code your solution in this file!
// Function to calculate distance from Scuber headquarters (42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber headquarters is at 42nd Street
    return Math.abs(pickupLocation - hqLocation); // Return the absolute distance in blocks
}

// Function to convert blocks to feet
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Get distance in blocks
    return blocks * 264; // Convert blocks to feet (1 block = 264 feet)
}

// Function to calculate the distance travelled in feet between two block locations
function distanceTravelledInFeet(startBlock, endBlock) {
    const blockDistance = Math.abs(endBlock - startBlock); // Calculate the number of blocks travelled
    return blockDistance * 264; // Convert blocks to feet
}

//calculate the fare price
function calculatesFarePrice(start, destination) {
    const distanceInBlocks = Math.abs(destination - start); // Calculate the distance in blocks

    // Calculate fare based on the distance
    if (distanceInBlocks <= 1) {
        return 0; // Free for the first block
    } else if (distanceInBlocks > 1 && distanceInBlocks <= 5) {
        return (distanceInBlocks - 1) * 2; // $2 for each block after the first
    } else if (distanceInBlocks > 5 && distanceInBlocks <= 10) {
        return (distanceInBlocks - 5) * 3 + 8; // $8 for first 5 blocks + $3 for each additional block
    } else {
        return 25; // Flat rate for distances over 10 blocks
    }
}


function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination); // Calculate total feet travelled

    if (distanceInFeet > 2500) {
        return 'cannot travel that far'; // Return message for distances over 2500 feet
    } else if (distanceInFeet > 2000) {
        return 25; // Flat rate for distances over 2000 feet
    } else if (distanceInFeet > 400) {
        return ((distanceInFeet - 400) * 0.02); // Charge $0.02 per foot after the first 400 feet
    } else {
        return 0; // First 400 feet are free
    }
}

// Function to calculate the distance travelled in feet between two block locations
function distanceTravelledInFeet(startBlock, endBlock) {
    const blockDistance = Math.abs(endBlock - startBlock); // Calculate the number of blocks travelled
    return blockDistance * 264; // Convert blocks to feet
}

