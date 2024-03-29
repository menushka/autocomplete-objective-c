'use babel';

import Argument from './argument';
import Regex from './regex';

export default class Method {
  constructor(plusOrMinus, type, name, arguments) {
    this.static = plusOrMinus == "+";
    this.type = type;
    this.name = name;
    this.arguments = this.processArguments(arguments);
  }

  match(prefix) {
    return this.name.toLowerCase().includes(prefix.toLowerCase());
  }

  processArguments(arguments) {
    let args = [];
    for (const match of Regex.match(arguments, Regex.OBJECTIVE_C_METHODS_ARGUMENTS)) {
      args.push(new Argument(match[1], match[2], match[3]));
    }
    return args;
  }
}
