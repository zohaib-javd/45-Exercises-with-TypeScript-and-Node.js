// 1. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let name1: string = "Eric";
console.log(`Hello ${name1}, would you like to learn some python today?`);
// must use back ticks for variable to appear. 

// 2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name2: string = "Zohaib Javed";
// in lowercase
console.log("lowercase:", name2.toLowerCase());

// in UPPERCASE
console.log("UPPERCASE:", name2.toUpperCase());

// Title case
console.log("Titlecase:", name2.replace(/\b\w/g,c=> c.toUpperCase()));

// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote: string = "A person who never made a mistake never tried anything new.";
let author: string = "Albert Einstein";

console.log(`${author} once said, "${quote}"`);

// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, "${quote}"`;

console.log(message);

// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName: string = "\t\n   Zohaib Javed \n\t";
console.log("original:", personName);
console.log("stripped:", personName.trim());

// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// 8. You should create four lines that look like this:

console.log(5 + 3);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);

// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favoriteNumber: number = 5;
console.log (`My favorite number is ${favoriteNumber}.`);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// author: [Zohaib Javed]
// date: [Monday, February 26, 2024]

// task 9: printing my favorite number.

// revealing my favorite number in a message format.

// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names : string [] = ["Zohaib","Javed","Kashif","Karim"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let message1 : string =  "do you like to eat ice cream?";
console.log(names[0] +" "+ message1);
console.log(names[1] +" "+ message1);
console.log(names[2] +" "+ message1);
console.log(names[3] +" "+ message1);

// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehicles :  string [] = ["Toyota Hilux Revo GRS", "Kawasaki Ninja H2R", "Tesla Cybertruck", "Tesla Model X"];
vehicles.map((items) => console.log(`I would like to own a ${items}`));

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArr : string [] = ["Zohaib","Javed","Kashif","Karim"];

guestArr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner.`)));

// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let canNotAttend : string = "Karim";
console.log(canNotAttend +" "+"can not attend the dinner.");

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let newGuest : string = "Ali";
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

// • Print a second set of invitation messages, one for each person who is still in your list.

guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));

// 16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

guestArr.map((items) => console.log(`Dear ${items}, I have found a bigger table so I am inviting more people.`));

// • Add one new guest to the beginning of your array.

let guestBeg : string = "Farhan";
guestArr.unshift(guestBeg);
console.log(guestArr);

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestName = "Faisal";
let middleIndex = Math.floor(guestArr.length / 2);
guestArr.splice(middleIndex, 0, guestName);
console.log(guestArr);

guestArr.push("Omar")
console.log(guestArr);

guestArr.map(items => 
console.log(`Dear ${items}, you are invited to the dinner.`));

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("Due to limited space, only two people can be invited for the dinner.");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while (guestArr.length > 2) {
    const removedName = guestArr.pop();
    console.log(`Sorry. ${removedName}, you are no longer invited to the dinner.`);
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

guestArr.forEach((guestArr) => {
    console.log(`Dear ${guestArr}, you are still invited to the dinner.`);
});

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("Final guest list:", guestArr);

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

let places2visit: string [] = ["England", "Italy", "America", "Japan", "France"];
console.log("Original order:", places2visit);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...places2visit].sort());

// • Show that your array is still in its original order by printing it.
console.log("Original order after sorting:", places2visit);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order:", [...places2visit].sort().reverse());

// • Show that your array is still in its original order by printing it again.
console.log("Original order after sorting:", places2visit);

// • Reverse the order of your list. Print the array to show that its order has changed.
places2visit.reverse();
console.log("Reversed order:", places2visit);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
places2visit.reverse();
console.log("back to original order:", places2visit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places2visit.sort();
console.log("sorted in alphabetical order:", places2visit);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places2visit.sort((a,b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", places2visit);

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let invitations : string [] = ["Farhan", "Zohaib"];
let count_invitations : number = invitations.length

console.log(`${count_invitations} people who will come to the dinner.`);

// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let country: string [] = ["England", "Italy", "America", "Japan", "France"]
console.log("List of countries:");
console.log(country);

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let person: {name: string, fname: string, age: number} = {name: "Zohaib", fname: "male", age: 38}
console.log(person);

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const days : string [] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log(days{7})
// There will be error if I will use curly brackets.
console.log(days[6]);

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = "subaru";

console.log("is car == 'subaru'? I predict true");
console.log(car == 'subaru');

console.log("is car != 'tesla'? I predict true");
console.log(car == 'subaru');

console.log("is car.length == 6? I predict true");
console.log(car.length == 6);

console.log("is car.length != 10? I predict true");
console.log(car.length != 10);

console.log("is car == 'subaru' && car.length == 6? I predict true");
console.log(car == 'subaru' && car.length == 6);

console.log("is car == 'Subaru'? I predict false");
console.log(car == 'Subaru');

console.log("is car == 'SUBARU'? I predict false");
console.log(car == 'SUBARU');

console.log("is 11 > 25? I predict false");
console.log(11 > 25);

console.log("is 2 <= 1 I predict false");
console.log(2 <= 1);

console.log("is 72 < 63 I predict false");
console.log(72 < 63);

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let name_1 : string = "Zohaib";
let name_2 : string = "Zohaib Javed";
let name_3 : string = "Muhammad Zohaib Javed";

if (name_1 == name_3){
    console.log("names are equal")
} else {
    console.log("names are not equal")
};

if (name_1 != name_2){
    console.log("true names are not equal")
};

if (name_1 != name_3){
    console.log("true names are not equal")
};

let age_1 : number = 18
let age_2 : number = 21

if (age_1 == 18){
    console.log("eligible for driving.")
};

if (age_1 != 17){
    console.log("eligible for driving.")
};

if (age_1 <= age_2){
    console.log("younger")
};

if (age_2 >= age_1){
    console.log("older")
};

if (age_1 == 18 && age_2 == 21){
    console.log("person is eligible for driving")
};

if (age_1 == 18 || age_2 != 17){
    console.log("person is eligible for driving")
};

// Array from task number 20
if (country.includes("Japan")){
    console.log("Japan is in the country list")
};

if (!country.includes ("Saudi Arabia")){
    console.log("Saudi Arabia is not included in the list of countries")
};


// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color : string = "green";

if (alien_color == "green")
console.log("You have earned 5 points.");

let alien_color2 : string = "red";

if (alien_color2 == "green")
console.log("no output");

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

if (alien_color == "green") {
console.log("player just earned 5 points for shooting the alien.")
} else {
    console.log("player just earned 10 points.")
};


if (alien_color == "red") {
    console.log("player just earned 5 points for shooting the alien.")
    } else {
        console.log("player just earned 10 points.")
    };
    
    // 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

    if (alien_color == "green") {
        console.log("player just earned 5 points.")
    } else if (alien_color == "yellow") {
        console.log("player just earned 10 points.")
    } else {
        console.log("player just earned 15 points.")
    }

    // 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

    let age : number = 18

    if (age < 2) {
        console.log ("If the person is less than 2 years old, that the person is a baby.")
    }

    // 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favorite_fruits : string [] = ["Oranges", "Pineapples", "Strawberries", "Mangoes","Grapes"]

if (favorite_fruits.includes("Oranges")) {
    console.log("Oranges")
}

if (favorite_fruits.includes("Pineapples")) {
    console.log("Pineapples")
}

if (favorite_fruits.includes("Strawberries")) {
    console.log("Strawberries")
}

if (favorite_fruits.includes("Mangoes")) {
    console.log("Mangoes") 
}
if (favorite_fruits.includes("Grapes")) {
    console.log("You really like Bananas") 
}

// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let users : string [] = ["Admin", "Eric", "Zohaib", "Kashif", "Karim"];

for(let user of users) {
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?")
    } else {
        console.log (`Hello ${user}, Thank you for logging in again`)
    }
}

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

if (users.length === 0){
    console.log ("We need to find some users!")
} else {
    for (let user of users) {
        if (user === "Admin") {
            console.log("Hello admin, would you like to see a status report?")
        } else {
            console.log (`Hello ${user}, Thank you for logging in again`)
        }
    }
}

users = []
if (users.length === 0) {
    console.log ("We need to find some users!")
}

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

let current_users : string [] = ["ADMIN", "ERIC", "ZOHAIB", "KASHIF", "KARIM"]
let new_users : string [] = ["ADMIN", "ZOHAIB", "JAVED", "FARHAN", "FAISAL"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users) {
    if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
    } else {
        console.log(`Yes ${new_user}, is still in available list`)
    }
}

// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers) {

if (number === 1) {
    console.log (`${number}st`)
} else if (number === 2) {
    console.log (`${number}nd`)
} else if (number === 3) {
    console.log (`${number}rd`)
} else {
    console.log (`${number}th`)
} 
}

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let favorite_pizza : string [] = ["Pepperoni","Margherita","Hawaiian","Chicago Deep Dish","Sicilian"]

for (let pizza of favorite_pizza) {
    console.log(pizza)
}

console.log ("\n")

for (let pizza of favorite_pizza){
    console.log(`I really like ${pizza} pizza!`)
}

console.log ("\n I really love pizza!")

// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let Animals : string [] = ["cat", "dog", "sheep"]

for (let animal of Animals) {
    console.log(animal)
}
console.log ("\n")

for (let animal of Animals){
    console.log(`A ${animal} has a tail`)
}

console.log ("\n all of these are great pets! but I love dogs more")

// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size: string, text: string): void {
    console.log(`you ordered a ${size} shirt that says ${text}`)
}
make_shirt('large','"I love python"')
make_shirt('medium','"I love typescript"')

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size: string = 'large', text: string = '"I love typescript"'): void {
    console.log(`you have ordered a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('medium')

// Different Message
makeShirt('small', 'I need a big shirt to wear')

// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
}

describe_city('Karachi') //Default Sentence 
describe_city('New York', 'America')
describe_city('London', 'UK')

// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city: string, country: string): string {
    return `${city}, ${country}`
}

let c1 = city_country('Lahore', 'Pakistan')
let c2 = city_country('Ottawa', 'Canada')
let c3= city_country('Canberra', 'Australia')

console.log(c1)
console.log(c2)
console.log(c3)

// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album (artist: string, title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1), 
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}

let album = make_album("Incubus", "Morning View")
console.log(album)

album = make_album("Linkin Park", "Hybrid Theory")
console.log(album)

album = make_album("Nirvana", "Nevermind")
console.log(album)

album = make_album("Creed", "Weathered")
console.log(album)

// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["Criss Angel", "David Blaine", "Harry Houdini"];
show_magicians(magician)

// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicians: string[]): void {
    for (let i =0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great'
    }
}

make_great(magician)
show_magicians(magician)

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["Criss Angel", "David Blaine", "Harry Houdini"];

const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);


// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich(...items: string[]): void{
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`)
    }
}

console.log("enjoy your sandwiches Zohaib Javed")

sandwich('Chicken', 'Cheese', 'Bread')
sandwich('Peanut Butter', 'Jelly', 'Bread')
sandwich('Boiled Eggs', 'Mayonnaise', 'Bread')


// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type car= {
    manufacturer: string
    model: string
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, optional: Record <string, any>): car {
    return{
        manufacturer,
        model,
        ...optional
    }
}

const mycar: car = createCar("Toyota", "Hilux Revo GRS", {color: "Black", year: "2024"})
console.log(mycar)

