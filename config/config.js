const {Config} = require('../lib/config');
const {wdioconf} = require('./wdioconf');

const config = new Config(wdioconf);
exports.config = config.get();
