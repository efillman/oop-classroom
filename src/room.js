class Room {
  //   new Room()
  //   - should accept the following arguments: name, description
  //   - should have properties by the same name
  //   - should have a property of `contents` which defaults to an empty array
  // .add()
  //   - should add the given item to the room
  //   - should be chainable (e.g. room.add(1).add(2).add(3))
  // .has()
  //   - should return true if the given reference is in the array
  //   - should return false if the given reference is not in the array
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.contents = [];
  }

  add(item) {
    this.contents.push(item);
    //make is chainable?
    return this
  }

  has(item) {
    let search = this.contents.indexOf(item)
    if (search !== -1) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Room
