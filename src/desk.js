class Desk {
  //   - should accept the following arguments: length, width, height, isWhiteboard
  //   - should have properties by the same name
  //   - should have a property of `content` which defaults to an empty string
  constructor(length, width, height, isWhiteboard) {
    this.length = length
    this.width = width
    this.height = height
    this.isWhiteboard = isWhiteboard
    this.content = '';
  }

// .write()
//   - should add the inputted string to the `content` property
//   - should allow for multiple writes
  write(content) {
    this.content += content;

  }
// .wipe()
//   - should clear the `content` if `isWhiteboard` is set to true
//   - should *not* clear the `content` if `isWhiteboard` is set to false
  wipe() {
    if (this.isWhiteboard) {
      this.content = '';
    }
  }
}

module.exports = Desk
