'use babel';

export default class Regex {
  static OBJECTIVE_C_INTERFACE_NAME = /@interface\s*(.*)/g
  static OBJECTIVE_C_PROPERTIES = /@property\s*\((.*)\)\s*(.* \*?)(\S*);/g
  static OBJECTIVE_C_METHODS = /([-+])\((.*?)\)([^:\n]*)((?:\:\(.*?\)*?)*?);/g
  static OBJECTIVE_C_METHODS_ARGUMENTS = /([^ \n]*)*?\:\((.*?)\)([^ \n]*)/g
}
