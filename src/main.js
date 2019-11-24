'use babel';

import HeadersModel from "./models/headersModel"

class BasicProvider {
	constructor() {
		this.selector = '.source.objc';

		this.headersModel = new HeadersModel()

		this.initialize();
	}

	async initialize() {
		for (const projectPath of atom.project.getPaths()) {
			await this.headersModel.search(projectPath);
		}
	}

	getSuggestions({ editor, bufferPosition, scopeDescriptor, prefix, activatedManually }) {
		const suggestions = this.headersModel.lookForSuggestion(prefix);
		console.log(suggestions);
		return suggestions.map(x => x.value());
	}
}

module.exports = {
  getProvider() {
    return new BasicProvider();
  }
}
