'use babel';

export default class Regex {
  static OBJECTIVE_C_CLASS = /@interface\s*(\S*)\s*(?:\:\s*(\S*)\s*{([\s\S]*)})?([\s\S]*?)@end/g
  static OBJECTIVE_C_PROPERTIES = /@property\s*\((.*)\)\s*(.* \*?)(\S*);/g
  static OBJECTIVE_C_METHODS = /([-+])\((.*?)\)([^:\n]*)((?:\:\(.*?\)*?)*?);/g
  static OBJECTIVE_C_METHODS_ARGUMENTS = /([^ \n]*)*?\:\((.*?)\)([^ \n]*)/g

  static match(text, regex) {
    let matches = []
    while ((match = regex.exec(text)) != null) {
      matches.push(match);
    }
    regex.lastIndex = 0;
    return matches;
  }
}
