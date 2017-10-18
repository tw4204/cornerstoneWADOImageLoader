import $ from 'jquery';
import * as dicomParser from 'dicom-parser';

let cornerstone;

function setCornerstone (cs) {
  cornerstone = cs;
}

function getCornerstone () {
  return cornerstone;
}

export { $, cornerstone, setCornerstone, getCornerstone, dicomParser };
