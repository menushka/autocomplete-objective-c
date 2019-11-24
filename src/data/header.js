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

  parseName(text) {
    const match = Regex.OBJECTIVE_C_INTERFACE_NAME.exec(text);
    if (match.length > 0) {
      return match[1];
    } else {
      return '';
    }
  }

  parseProperties(text) {
    let properties = [];
    while ((match = Regex.OBJECTIVE_C_PROPERTIES.exec(text)) != null) {
      properties.push(new Property(match[1], match[2], match[3]));
    }
    return properties;
  }

  parseMethods(text) {
    let methods = [];
    while ((match = Regex.OBJECTIVE_C_METHODS.exec(text)) != null) {
      methods.push(new Method(match[1], match[2], match[3], match[4]));
    }
    return methods;
  }
}
