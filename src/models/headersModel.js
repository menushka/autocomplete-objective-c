'use babel';

import fs from 'fs';
import path from 'path';
import glob from 'glob';

import Header from '../data/header';
import Suggestion from '../data/suggestion';

export default class HeadersModel {
  constructor() {
    this.headers = [];
  }

  async search(searchPath) {
    return new Promise((resolve) => {
      glob(path.join(searchPath, '**/*.h'), {}, (error, files) => {
        for (const file of files) {
          this.headers.push(new Header(file));
        }
        resolve();
      });
    })
  }

  lookForSuggestion(prefix) {
    let suggestions = [];
    for (const header of this.headers) {
      if (header.match(prefix)) {
        suggestions.push(new Suggestion(header.name, Suggestion.Type.Class));
      }

      for (const property of header.properties) {
        if (property.match(prefix)) {
          suggestions.push(new Suggestion(property.name, Suggestion.Type.Property, property.type));
        }
      }

      for (const method of header.methods) {
        if (method.match(prefix)) {
          suggestions.push(new Suggestion(method.name, Suggestion.Type.Method, method.type));
        }
      }
    }
    return suggestions;
  }
}
