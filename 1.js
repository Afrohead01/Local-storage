function Student(firstName, lastName, rollNo, sex, age){
    this.firstName = firstName
    this.lastName =lastName
    this.rollNo = rollNo
    this.sex = sex
    this.age = age
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
Student.prototype.findEligibleOrNot = function findEligibleOrNot(minAge){
    if (this.age>minAge){
        console.log(this.firstName + ' is eligible');
    }else{
        console.log(this.firstName + ' is not eligible');
    }
};
const s1 = new Student("subham", "Deb", "01", "male", "9")
const s2 = new Student("sashi", "sharde", "02", "male", "25")
if (s1.age>s2.age){
    console.log(s1)
}
else{
    console.log(s2)
}
console.log(s1.getFullName())
s1.findEligibleOrNot(18)
s2.findEligibleOrNot(10)