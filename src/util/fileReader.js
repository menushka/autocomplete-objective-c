'use babel';

import fs from 'fs';
import path from 'path';

export default class FileReader {
  static read(...pathComponents) {
    return fs.readFileSync(path.join(...pathComponents), 'utf8');
  }
}
