import $ from 'jquery';
import * as dicomParser from 'dicom-parser';

let cornerstone;

const external = {
  set cornerstone (cs) {
    cornerstone = cs;
  },
  get cornerstone () {
    return cornerstone;
  }
};

export { $, dicomParser, external };
