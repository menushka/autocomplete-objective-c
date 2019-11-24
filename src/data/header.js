'use babel';

import Property from './property';
import Method from './method';
import Argument from './argument';

import Regex from './regex';
import FileReader from '../util/fileReader';

export default class Header {
  constructor(path) {
    this.name = "";
    this.properties = [];
    this.methods = [];

    const rawText = FileReader.read(path)

    this.name = this.parseName(rawText)
    this.properties = this.parseProperties(rawText)
    this.methods = this.parseMethods(rawText)
  }

  match(prefix) {
    return this.name.toLowerCase().includes(prefix.toLowerCase());
  }

  // Private
  parseName(text) {
    for (const match of Regex.match(text, Regex.OBJECTIVE_C_INTERFACE_NAME)) {
      return match[1];
    }
    return ''
  }

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
