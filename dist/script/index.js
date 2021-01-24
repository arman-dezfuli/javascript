// var names = [
//     "Arman",
//     "Admin",
//     "Kakashi"
// ];
// // names[0] = "6";
// console.log(names);
// var person = {
//     name: "Arman",
//     gmail: "arman0dh@gmail.com",
//     age: 21,
//     job: "Developer"
// };
// var show = person.gmail;
// var show2 = person["job"] = "Front End Engineer";
// console.log(show);
// console.log(show2);
var person = {
    FirstName: "Arman",
    lastName: "Dezfuli",
    age: 21 ,
    job: "Front-End Engineer",
    skills: [
        "HTML 5",
        "CSS 3",
        "JavaScript",
        "SASS",
        "Git",
    ],
    rank: function () {
        if (skills.length >= 2) {
            var y;
            y = "Bronze";
        }else if (skills.length > 4){
            y = "Silver";
        }else if (skills.length > 6) {
            y = "Golden";
        }else if (skills.length > 8) {
            y = "Master"
        }else if (skills.length < 2) {
            y = "No rating";
        }else{
            y = "???";
        }
        return console.log(y);
    },

}
console.log(person.rank);