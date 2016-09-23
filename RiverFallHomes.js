/** @author Meyerson, Gabe (gabemeyerson@gmail.com)
 *  @version 0.0.1
 *  @summary Calculates Total salary based on base salary and commission rate on total sales.
 *  @todo
 * Created by Gabe Meyerson on 9/20/2016.
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, numBedrooms, numBathrooms, garageNumCars, houseTotal;

const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const PRICE_PER_CAR = 6000;

function main() {
    setLotNumber();
    setNumBedrooms();
    setNumBathrooms();
    setGarageNumCars();
    setHouseTotal();
    printResults();
}

main();

function setLotNumber() {
    lotNumber = PROMPT.question('\nEnter Lot Number ');
}

function setNumBedrooms() {
    numBedrooms = PROMPT.question('\nHow many bedrooms do you want? ');
}

function setNumBathrooms() {
    numBathrooms = PROMPT.question('\nHow many Bathrooms do you want? ');
}

function setGarageNumCars() {
    garageNumCars = PROMPT.question('\nHow many cars in you garage do you want? ');
}

function setHouseTotal(){
    houseTotal = Number((numBedrooms * BEDROOM_PRICE) + (numBathrooms * BATHROOM_PRICE) + (garageNumCars * PRICE_PER_CAR) + BASE_PRICE);
}
function printResults(){
    console.log('\n Your house will cost $' + houseTotal +  ' total.');
    console.log('\n You chose lot number ' + lotNumber + '.');
    console.log('\n With ' + numBedrooms + ' bedrooms, ' + numBathrooms + ' bathrooms, and a  ' + garageNumCars + ' car garage.');
}