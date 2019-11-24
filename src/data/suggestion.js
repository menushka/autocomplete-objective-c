'use babel';

export default class Suggestion {
  static Type = {
    Variable: "variable",
    Constant: "constant",
    Property: "property",
    Value: "value",
    Method: "method",
    Function: "function",
    Class: "class",
    Type: "type",
    Keyword: "keyword",
    Tag: "tag",
    Snippet: "snippet",
    Import: "import",
    Require: "require"
  };

  constructor(text, type, returnValue = "") {
    this.text = text;
    this.type = type;
    this.returnValue = returnValue
  }

  value() {
    return {
      text: this.text,
      type: this.type,
      leftLabel: this.returnValue
    }
  }
}
