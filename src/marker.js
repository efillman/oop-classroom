class Marker {
  constructor (size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }

  write(words) {
    let wordsToWrite = Array.from(words)
    let wordsWritten = ''
    for (let i = 0; i < wordsToWrite.length; i++) {
      if (wordsToWrite[i] !== " ") {
        if (this.remainingInk > 0) {
          this.remainingInk--;
          wordsWritten += wordsToWrite[i]
        }
      } else if (wordsToWrite[i] === " ") {
        wordsWritten += wordsToWrite[i];
      }
    }
    return wordsWritten;
  }
  // Marker
  //   new Marker()
  //     - should accept the following arguments: size, color, remainingInk
  //     - should have properties by the same name
  //   .write()
  //     - should decrement `remainingInk` by the number of characters written
  //     - should not decrement any characters that are spaces
  //     - should return the word that is inputted
  //     - if the marker runs out of ink, it should only return the number of characters equal to remaining ink
  //     - if the marker runs out of ink, it can still write spaces

}

module.exports = Marker
