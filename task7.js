// Task 1: Traffic Signal Management
let trafficLight = "red";

switch(trafficLight){
    case "red":
        console.log("!!! STOP VEHICLE !!!");
        break;
    case "yellow":
        console.log("!!! START VEHICLE !!!");
        break;
    case "green":
        console.log("!!! GO VEHICLE !!!");
        break;
    case "default":
        console.log("!!! BON VOYAGE !!!");
        break;
}

// Task 2: Employee Attendance Report

let a = 0;

for(a= 1; a<=30; a++){
    console.log("Employee:" + a + "Present");
}

// Task 3: ATM Cash Withdrawal
let value = 10000;
const withdrawalAmount = 500;
while (value > 0){
    value -= withdrawalAmount;
     console.log("withdrew: " +  withdrawalAmount + ", Remaining Balance: " + value);
}

// Task 4: College Admission Eligibility

let Age = 18;
let Percentage = 50;

if (Age >= 17) {
    if (Percentage >= 70) {
        console.log("Congrats !!! You passed in your Entrance Exam");
    } else {
        console.log("You are not Eligible because your percentage is not Enough");
    }
} else {
    console.log("You are not eligible due to Age");
}
// Task 5: Food Delivery Status

function deliveryStatus(customerName, foodItem, deliveryAddress){
    console.log("delivery Confirmation:" + "Hello !!" + customerName +", Your order of " + foodItem + "is on the way to ," +  deliveryAddress);
}
deliveryStatus("Tharun", "Double cheese Burger", "23 Raja Street, salem-636502" );

// Task 6: Salary Processing System

function calculateSalary(hourlyRate, hoursworked){
    return hourlyRate* hoursworked;
}
function calculateBonus(salary){
    return salary * 0.1;
}

const mySalary = calculateSalary(50,160);
const myBonus = calculateBonus(mySalary);

console.log("Total Salary:" + mySalary);
console.log("Bonus:" + myBonus);
console.log("Total Salary:" + (mySalary + myBonus));

// Task 7: E-commerce Discount Engine

function generateInvoice(finalPrice) {
  console.log("Total Amount Due:" + finalPrice);
}
function applyDiscount(originalPrice, discountPercentage, callback) {
  const discountAmount = originalPrice * (discountPercentage / 100);
  const finalPrice = originalPrice - discountAmount;
    callback(finalPrice);
}
applyDiscount(200, 15, generateInvoice);

// Task 8: Promotional Offers

function* offerGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}
const getOffer = offerGenerator();
console.log(getOffer.next().value); 
console.log(getOffer.next().value); 
console.log(getOffer.next().value); 
console.log(getOffer.next().value); 

// Task 9: Student Database Merge

let obj1 = ["scienceStudents"]
let obj2 = ["commerceStudents"]


let totalObj = [...obj1,...obj2]
console.log(totalObj);

// Task 10: Online Exam System

function calculateTotalMarks(studentName,...marks){
    const total = marks.reduce((sum, currentMark) => sum + currentMark, 0);
    console.log("Student Name: " + studentName + ", Total Marks: " + total);
}
calculateTotalMarks("Ram", 90, 85, 97);
calculateTotalMarks("Rajiv", 89, 78, 100);

// Task 11: Employee Profile

let studentDetails = {
    name : "Guru",
    department : "ECE",
    salary : 50000,
    experience : "5 years"
}
let {name, department, salary, experience} = studentDetails
console.log(name, department, salary, experience);

// Task 12: Product Inventory Filter

let Products = [
    {name: "Mobile", price:40000, category:"Electronics"},
    {name: "Shirt", price:2000, category:"Cloths"},
    {name: "Milk", price:100, category:"Grocery"},
    {name: "LED Bulb", price:6000, category:"Electronics"},
    {name: "Car", price:1000, category:"Toys"},
]
let expensiveProducts = Products.filter(Products => Products.price >5000);

console.log("Product price above 5000:" + expensiveProducts.map(p => p.name).join(", "));

//  Task 14: Company Expense Tracker

let Expenses = [2000, 1000, 8000, 10000, 4000]

let totalExpenses = Expenses.reduce((accumulator, currentExpenses) => {
    return accumulator + currentExpenses;}, 0);
console.log("Total Expenses:" + totalExpenses);

// Task 15: Gaming Tournament Verification

let Ages = [18,24,17,30,29,38]

let AllPlayerAges = Ages.every(age => age => 18);
console.log("All the players ages are above 18:" + AllPlayerAges);

// Task 16: Job Portal Search

const candidates = [
    {name : "Rahul", skills :["HTML", "CSS","Java Script"]},
    {name : "Rajiv", skills :["PYTHON","DJANGO"]},
    {name : "Reena", skills :["HTML","CSS"]},
    {name : "Ravi", skills :["HTML", "CSS","Java Script", "REACT"]}
];
const ReactCandidates = candidates.some(candidates => candidates.skills.includes("REACT"));
console.log("Any one candidates has know the REACT?" + ReactCandidates);

// Task 17: Mobile Number Validator

function validateMobileNumber(phoneNumber) {

    const validLength = phoneNumber.length === 10;
    const validStart = /[6, 7, 8, 9]/.test(phoneNumber);

    if (validLength && validStart) {
        return "Valid Mobile Number";
    } else {
        return "Invalid Mobile Number";
    }
}

console.log("9876543210:", validateMobileNumber("9876543210"));
console.log("5555555555:", validateMobileNumber("5555555555"));
console.log("98765:",       validateMobileNumber("98765"));
console.log("7012345678:", validateMobileNumber("7012345678"));

// Task 18: URL Slug Generator

let words = "Learn JavaScript Complete Course";
console.log(words.split(" ").join("-"));

// Task 19: Employee Sorting Dashboard

let employeeDetails = [
    {empName : "Arun", salary : 50000},
    {empName : "Adhan", salary : 70000},
    {empName : "Balu", salary : 35000},
    {empName : "Brain", salary : 60000}
];
let highestToLowest = [...employeeDetails].sort((a,b) => b.salary - a.salary);
console.log(highestToLowest);

let lowestToHighest = [...employeeDetails].sort((a,b) => a.salary - b.salary);
console.log(lowestToHighest);

// Task 20: Movie Booking System

let movies = ["Leo", "Mr.X", "Dude", "Blast", "Beast"];
let bookings = movies.map((movie, index) => {
    return {
        bookingID: 101 + index,
        moviename: movie
    };
});
console.log(bookings);





