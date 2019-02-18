# Showcase demo app

Written to use latest features or typescript + react/redux + nodejs + DI (InversifyJS)

## Installation

The project uses typescript for both server and client applications.

```console
npm install -g typescript
```

Then install required packages
```console
npm i
```


Install redis with default settings

- Linux: https://redis.io/download
- Windows: https://github.com/MicrosoftArchive/redis/releases
- Docker: https://redis.io/download

modify Redis conf line from:
`notify-keyspace-events ""`
to
`notify-keyspace-events AKE`

#### https certificate

There are untrusted cert in dev config. One can generate trusted certificate and use it for %localhostIP% dev(replace with default one).
Instruction can be found here: https://github.com/FiloSottile/mkcert.

## Development

To allow self-signed https - go to both front and backend pages and allow unsafe connections
(i.e. https://localhost:3001/ and https://localhost:3040/)

Pushing to git(checked by git hooks):

- Code must pass linter (tslint) and tests
- Commit message must be validated according to rules https://gist.github.com/stephenparish/9941e89d80e2bc58a153

### Run webpack hot-reload server

Next command runs both server and client with hot reloading

```console
npm run dev
```

## Testing

### Unit tests

Unit tests are written in Jest

To run all scenarios run `npm run test:unit`

### E2E

E2E tests are written in Cucumber
To run all scenarios run `npm run test:e2e`
To run single scenario run `npx wdio --spec ./tests/features/githubLogin.feature`

Config file : `wdio.conf.js`
Comment top lines to run scenarios on local machine(by default scenarious run in segrid instance)
