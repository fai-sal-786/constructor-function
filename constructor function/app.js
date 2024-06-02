// var student1 ={
    // name: "Abdullah",
    // fatherName: "Ahmed",
    // age: 14,
    // attendance: 50,
    // total classes: 60,

// };

// var student2 ={
    // name: "Asim",
    // fatherName: "Muneer",
    // age: 20,
    // attendance: 55,
    // total classes: 60,

// };
// var student3 ={
    // name: "Usman",
    // fatherName: "Qadir",
    // age: 14,
    // attendance: 60,
    // total classes: 60,

// };

//Constructor function
function Student(name, fatherName, age, attendance, totalClasses){
    this.name = name; //object kie property add ki this ke through
    this.fatherName = fatherName;
    this.age = age;
    this.attendance = attendance;
    // this.isStudentPunctual = 
    // this.totalClasses = totalClasses 
} 



Student.prototype.totalClasses = 60;
Student.prototype.isStudentPunctual= function() {
    var userAttendance = this.attendance / this.totalClasses;
    if(userAttendance >= 0.9) {
        return true;
    } else {
        return false;
    }
};


var student1 = new Student("Abdullah" , "Ahmad", 14, 56, 60);
var student2 = new Student("ASIM" , "Muneer", 20, 50, 60);
var student3 = new Student("Usman" , "Qadir", 14, 55, 60);
var student4 = new Student("Ubaid" , "Shahid", 24, 60, 60);






console.log("Student1=>", student1.isStudentPunctual());
console.log("Student2=>", student2.isStudentPunctual());
console.log("Student3=>", student3.isStudentPunctual());
console.log("Student4=>", student4.isStudentPunctual());