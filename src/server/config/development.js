const fs = require('fs');
const path = require('path');

module.exports = {
  httpsOptions: {
    key: fs.readFileSync(path.join(__dirname, 'ssl-certificate/192.168.6.148+3-key.pem'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, 'ssl-certificate//192.168.6.148+3.pem'), 'utf8'),
  },
  auth: {
    secretKey:
      'AaGo1geNFElMTBNH4IRbiEd5AA4NvM0hD9-UiajLcFmbQYrEeTvVlQH-ijWptmV2TrAd19fN7BdmFWQmu0IjVmXJzeWYhchbH4E-E8xmY55m3A2QY0YVwFKGs7uYaJzVu4tidbPzOWoBkr4xG_xli8_QLalAjQiSx3fKau40sFTR-ocFM4npf4Azk66BzSz_DG1DF8U19TG6rxhJTxXYH110LT6n383OtiOh-dSAsUn7jrFTwt5elqw1ZS0KO4YtxmuyFML0Hni2-hXYcYuH4gHNLuW-AWSujuei8cGCRh5Dk8mtaQpuV8jRrZYIks9F-4KfRmu7Ws4LDYObT9fQyQ',
    refreshSecretKey:
      'AfGo1geNFElMTBNH4IRbiEd5AA4NvM0hD9-UiajLcFmbQYrEeTvVlQH-ijWptmV2TrAd19fN7BdmFWQmu0IjVmXJzeWYhchbH4E-E8xmY55m3A2QY0YVwFKGs7uYaJzVu4tidbPzOWoBkr4xG_xli8_QLalAjQiSx3fKau40sFTR-ocFM4npf4Azk66BzSz_DG1DF8U19TG6rxhJTxXYH110LT6n383OtiOh-dSAsUn7jrFTwt5elqw1ZS0KO4YtxmuyFML0Hni2-hXYcYuH4gHNLuW-AWSujuei8cGCRh5Dk8mtaQpuV8jRrZYIks9F-4KfRmu7Ws4LDYObT9fQyQ',
  }
};
