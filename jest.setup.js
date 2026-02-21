// jest.setup.js
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


// Testing Libraryのカスタムマッチャーを読み込む
require("@testing-library/jest-dom");
