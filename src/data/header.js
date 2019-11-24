'use babel';

import Class from './class';
import Regex from './regex';
import FileReader from '../util/fileReader';

export default class Header {
  constructor(path) {
    this.name = path;
    this.classes = []

    const rawText = FileReader.read(path)

    this.classes = this.parseClasses(rawText)
  }

  // Private
  parseClasses(text) {
    let classes = [];
    for (const match of Regex.match(text, Regex.OBJECTIVE_C_CLASS)) {
      classes.push(new Class(match[1], match[2], match[3], match[4]));
    }
    return classes;
  }
}
