import { getNumberString,
         getNumberValue,
         getNumberValues,
         getValue,
         metaDataProvider,
         addMetaDataProvider } from './metaData/index.js';

import findIndexOfString from './findIndexOfString.js';
import getPixelData from './getPixelData.js';
import { metaDataManager } from './metaDataManager.js';
import { loadImage, registerImageLoaders } from './loadImage.js';

const metaData = {
  getNumberString,
  getNumberValue,
  getNumberValues,
  getValue,
  metaDataProvider
};

export {
  metaData,
  findIndexOfString,
  getPixelData,
  loadImage,
  metaDataManager,
  addMetaDataProvider,
  registerImageLoaders
};
