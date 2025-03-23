const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function loadEnv(environment) {
  // Load base environment
  const baseEnv = dotenv.parse(fs.readFileSync(path.resolve(__dirname, 'base.env')));
  
  // Load environment specific config
  const envPath = path.resolve(__dirname, `${environment}.env`);
  const envConfig = fs.existsSync(envPath) 
    ? dotenv.parse(fs.readFileSync(envPath))
    : {};

  // Merge configurations
  return { ...baseEnv, ...envConfig };
}

module.exports = { loadEnv };
