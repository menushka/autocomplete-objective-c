'use babel';

import path from 'path';
import HeadersModel from '../src/models/headersModel';

describe("Header Model Tests", () => {
  beforeEach(() => {
    this.headersModel = new HeadersModel();
  })

  it("Initalize to empty list", () => {
    expect(this.headersModel.headers).toEqual([])
  })

  it("Load single header file", () => {
    this.headersModel.searchFile(path.join(__dirname, 'testFiles/Test.h'));
    expect(this.headersModel.headers[0].classes[0].name).toEqual('Test')
  })

  it("Ensure all classes are loaded", () => {
    this.headersModel.searchFile(path.join(__dirname, 'testFiles/Test.h'));
    expect(this.headersModel.headers[0].classes[0].name).toEqual('Test')
  })
})
