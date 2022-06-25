function Student(name, surname, indexNumber, gradesArray){
    this.name = name;
    this.surname = surname;
    this.indexNumber = indexNumber;
    this.gradesArray = gradesArray;

    this.average = arr => arr.reduce((a,b) => a + b, 0) / arr.length

    this.getInfo = function(){
        console.log(`${this.name} ${this.surname} ${this.average(this.gradesArray)}`);
    }
}

let student1 = new Student("Marek", "Mostowiak", "696", [1, 2, 3, 4, 5]);
student1.getInfo();