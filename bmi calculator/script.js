class Person {
    Bmi;
    constructor(fullname, mass, height) {
        this.fullname = fullname;
        this.mass = mass;
        this.height = height;
    }
    
    calcBmi() {
        this.Bmi = this.mass / this.height**2;
        return this.Bmi;
    }

}

const Mark = new Person("MARK", 78, 1.69);
let marksBmi = Mark.calcBmi();
const Jacob = new Person("JACOB", 92, 1.95);
let jacobsBmi = Jacob.calcBmi();

console.log(marksBmi>jacobsBmi ? `Mark's Bmi (${marksBmi}) is higher than Jacob's (${jacobsBmi})` : `John's Bmi (${jacobsBmi}) is higher than Mark's (${marksBmi})`);