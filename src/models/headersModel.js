'use babel';

import fs from 'fs';
import path from 'path';
import glob from 'glob';

import Header from '../data/header';

export default class HeadersModel {
  constructor() {
    this.headers = [];
  }

  async search(searchPath) {
    return new Promise((resolve) => {
      glob(path.join(searchPath, '**/*.h'), {}, (error, files) => {
        for (const file of files) {
          this.headers.push(new Header(file))
        }
        resolve()
      });
    })
  }

  lookForSuggestion(prefix) {
    let suggestions = []
    for (const header of this.headers) {
      if (header.name.includes(prefix)) {
        suggestion.push(header.name)
      }

      for (const property of header.properties) {
        if (property.name.includes(prefix)) {
          suggestion.push(property.name)
        }
      }

      for (const method of header.methods) {
        if (method.name.includes(prefix)) {
          suggestion.push(method.name)
        }
      }
    }
    return suggestions;
  }
}
