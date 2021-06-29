class Student {
  constructor(name, skillLevel) {
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = [];
  }

  study() {
    if (this.skillLevel < 100) {
      this.skillLevel++;
    } else {
      return 'skill level is already 100';
    }
    //chainable
    return this;
  }

  //  - accepts an object that includes a `skillLevel` key and marks it as complete (i.e. adds a key of `completed` with a value of `true` to the homework) if the student's skill level is above the inputted homework's `skillLevel`
  // - marks homework as incomplete (i.e. `complete: false`) if the skillLevel is too high
  // - adds the homework to the `assignments` array whether or not it is completed
  // - does not add the homework to the `assignments` array if it does not have a `skillLevel`
  // - does not add the homework to the `assignments` array if it's `skillLevel` is below 1
  // - does not add the homework to the `assignments` array if it's `skillLevel` is above 100
  // - if no argument is added, attempts to complete all incomplete homework and will complete it if the `skillLevel` is higher
  // - if no argument is added, attempts to complete all incomplete homework but it will stay incomplete if `skillLevel` is still not enough
  //title: 'Crushing Candy Code', skillLevel: 38
  /**
   * I
   * O
   * C
   * E
   * @param {} assignmentToDo
   */
  doHomework(assignmentToDo) {
    if (assignmentToDo !== undefined) {
      let outputAssignment = {};
      //outer check
      if (assignmentToDo.skillLevel !== undefined && assignmentToDo.skillLevel > 0 && assignmentToDo.skillLevel < 100) {
        outputAssignment['title'] = assignmentToDo.title;
        outputAssignment['skillLevel'] = assignmentToDo.skillLevel;
        if (this.skillLevel > assignmentToDo.skillLevel) {
          outputAssignment['completed'] = true;
        } else {
          outputAssignment['completed'] = false;
        }
        this.assignments.push(outputAssignment);

      }
    } else {
      //there was no variable passed in
      console.log(this);
      for (let i = 0; i < this.assignments.length; i++) {
        if (this.assignments[i].completed === false && this.skillLevel > this.assignments[i].skillLevel) {
          this.assignments[i].completed = true;

        }
      }
    }
  }
}


module.exports = Student
