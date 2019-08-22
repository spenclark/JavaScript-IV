// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello, my name is ${this.name} and I am from ${this.location}`
    }
}

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`)
    }
    pullRequest(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} started the sprint challenge for ${subject}`)
    }

};

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    ace(student, subject){
        return `${student.name} is given a perfect score on ${subject}`
    }
    grader(student){
        student.grade + Math.random(-100,100)
        if (student.grade < 70){
            return `${student.name} has passed the section!`
        }
        else{
            return `${student.name} has faild`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standup(channel){
        console.log(`${this.name} accounces to @${channel} standup in 5 mins`)
    }
    debug(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
    grader(student){
        student.grade + Math.random(-100,100)
        if (student.grade < 70){
            return `${student.name} has passed the section!`
        }
        else{
            return `${student.name} has faild`
        }
    }
}