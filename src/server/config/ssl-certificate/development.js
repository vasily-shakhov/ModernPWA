const fs = require('fs');
const path = require('path');

module.exports = {
  httpsOptions: {
    passphrase: '12345',
    key: fs.readFileSync(path.join(__dirname, 'ssl-certificate/server.key'), 'utf8'),
    cert: fs.readFileSync(path.join(__dirname, 'ssl-certificate//server.crt'), 'utf8'),
  },
  auth: {
    credentials: {
      username: 'administrator',
      password: 'Voh9paix'
    },
    secretKey:
      'ArGo1geNFElMTBNH4IRbiEd5AA4NvM0hD9-UiajLcFmbQYrEeTvVlQH-ijWptmV2TrAd19fN7BdmFWQmu0IjVmXJzeWYhchbH4E-E8xmY55m3A2QY0YVwFKGs7uYaJzVu4tidbPzOWoBkr4xG_xli8_QLalAjQiSx3fKau40sFTR-ocFM4npf4Azk66BzSz_DG1DF8U19TG6rxhJTxXYH110LT6n383OtiOh-dSAsUn7jrFTwt5elqw1ZS0KO4YtxmuyFML0Hni2-hXYcYuH4gHNLuW-AWSujuei8cGCRh5Dk8mtaQpuV8jRrZYIks9F-4KfRmu7Ws4LDYObT9fQyQ',
    refreshSecretKey:
      'AAGo1geNFElMTBNH4IRbiEd5AA4NvM0hD9-UiajLcFmbQYrEeTvVlQH-ijWptmV2TrAd19fN7BdmFWQmu0IjVmXJzeWYhchbH4E-E8xmY55m3A2QY0YVwFKGs7uYaJzVu4tidbPzOWoBkr4xG_xli8_QLalAjQiSx3fKau40sFTR-ocFM4npf4Azk66BzSz_DG1DF8U19TG6rxhJTxXYH110LT6n383OtiOh-dSAsUn7jrFTwt5elqw1ZS0KO4YtxmuyFML0Hni2-hXYcYuH4gHNLuW-AWSujuei8cGCRh5Dk8mtaQpuV8jRrZYIks9F-4KfRmu7Ws4LDYObT9fQyQ',
    sso: {
      Set2Meet: {
        client_id: 'Set2Meet',
        url: 'https://sso.webrtc-dev.competentum.com',
        client_secret: '95de982b-b400-4e95-8f5e-98ccdb3521ed',
      },
      Competentum: {
        client_id: 'Set2Meet',
        url: 'https://sso.webrtc-dev.competentum.com',
        client_secret: '975fbf74-45b5-464c-9f32-3c97759e8740',
      },
    },
  },
  webrtc: {
    tokbox: {
      API_KEY: '46209222',
      API_SECRET: 'b804aee096b87b3638676803508dc36d4ef0b677'
    }
  }
};
