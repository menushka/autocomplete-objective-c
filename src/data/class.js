'use babel';

import Property from './property';
import Method from './method';
import Regex from './regex';

export default class Class {
  constructor(name, body) {
    this.name = name;
    this.properties = [];
    this.methods = [];

    this.properties = this.parseProperties(body);
    this.methods = this.parseMethods(body);
  }

  match(prefix) {
    return this.name.toLowerCase().includes(prefix.toLowerCase());
  }

  // Private
  parseProperties(text) {
    let properties = [];
    for (const match of Regex.match(text, Regex.OBJECTIVE_C_PROPERTIES)) {
      properties.push(new Property(match[1], match[2], match[3]));
    }
    return properties;
  }

  parseMethods(text) {
    let methods = [];
    for (const match of Regex.match(text, Regex.OBJECTIVE_C_METHODS)) {
      methods.push(new Method(match[1], match[2], match[3], match[4]));
    }
    return methods;
  }
}
