'use babel';

export default class Method {
  constructor(plusOrMinus, returnType, name, arguments) {
    this.static = plusOrMinus == "+";
    this.returnType = returnType;
    this.name = name;
    this.arguments = this.processArguments(arguments);
  }

  processArguments(arguments) {
    let args = [];
    while ((match = Regex.OBJECTIVE_C_METHODS_ARGUMENTS.exec(arguments)) != null) {
      args.push(new Argument(match[1], match[2], match[3]));
    }
    return args;
  }
}
