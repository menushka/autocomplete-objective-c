'use babel';

export default class Property {
  constructor(attributes, type, name) {
    this.attributes = attributes.split(",").map(x => x.trim());
    this.type = type;
    this.name = name;
  }
}
