'use babel';

import HeadersModel from "./models/headersModel"

class ObjectiveCProvider {
	constructor() {
		this.selector = '.source.objc';

		this.headersModel = new HeadersModel()

		this.initialize();
	}

	async initialize() {
		for (const projectPath of atom.project.getPaths()) {
			await this.headersModel.search(projectPath);
		}

		for (const searchPath of atom.config.get('autocomplete-objective-c.headerSearchPaths')) {
			await this.headersModel.search(searchPath)
		}
	}

	getSuggestions({ editor, bufferPosition, scopeDescriptor, prefix, activatedManually }) {
		const suggestions = this.headersModel.lookForSuggestion(prefix);
		return suggestions.map(x => x.value());
	}
}

module.exports = {
	config: {
    headerSearchPaths: {
			title: 'List of paths to search for Objective C headers',
			description: '',
      type: 'array',
      default: [],
			items: {
				type: 'string'
			}
		}
	},
  getProvider() {
    return new ObjectiveCProvider();
  }
}
