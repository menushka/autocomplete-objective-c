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

  searchFile(searchPath) {
    this.headers.push(new Header(searchPath));
  }

  async search(searchPath) {
    return new Promise((resolve) => {
      glob(path.join(searchPath, '**/*.h'), {}, (error, files) => {
        for (const file of files) {
          this.searchFile(file);
        }
        resolve();
      });
    })
  }

  lookForSuggestion(prefix) {
    let suggestions = [];
    for (const header of this.headers) {
      for (const headerClass of header.classes) {
        if (headerClass.match(prefix)) {
          suggestions.push(new Suggestion(headerClass.name, Suggestion.Type.Class));
        }

        for (const property of headerClass.properties) {
          if (property.match(prefix)) {
            suggestions.push(new Suggestion(property.name, Suggestion.Type.Property, property.type));
          }
        }

        for (const method of headerClass.methods) {
          if (method.match(prefix)) {
            suggestions.push(new Suggestion(method.name, Suggestion.Type.Method, method.type));
          }
        }
      }
    }
    return suggestions;
  }
}
