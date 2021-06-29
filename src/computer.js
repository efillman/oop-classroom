class Computer {
  //sould accept the following arguments: name, operatingSystem, processor, memory, graphics
  constructor(name, operatingSystem, processor, memory, graphics) {
    this.name = name;
    this.operatingSystem = operatingSystem;
    this.processor = processor;
    this.memory = memory;
    this.graphics = graphics;
    this.on = false;
  }

  power() {
    this.on ? this.on = false : this.on = true
  }
}

module.exports = Computer
