# reason-workshop-gatsby

This repo is built on the default gatsby boilerplate and contains a
challenge the workshop attendees are supposed to solve. More details on
the workshop can be found [here](https://github.com/ryyppy/reason-workshop).


We will gradually introduce BuckleScript in this setting. To do so run

```
yarn add --dev bs-platform
# or
npm install --save-dev bs-platform
```

To make things easier, here is a simple `bsconfig.json`
boilerplate (place this code in `./bsconfig.json`):

```
{
  "name": "reason-workshop-gatsby",
  "version": "0.1.0",
  "reason": { "react-jsx": 2 },
  "refmt": 3,
  "sources": {
    "dir": "src",
    "subdirs": true
  },
  "package-specs": {
    "module": "commonjs",
    "in-source": true
  },
  "suffix": ".js",
  "bs-dependencies": [
  ],
  "bsc-flags": ["-bs-no-version-header", "-bs-super-errors"]
}
```

Add a script to compile the Reason files: e.g. `"bs:watch": "bsb -make-world -w"`

## Install

```
npm install
# or
yarn
```

## Develop

```
npm run develop
# or
yarn run develop
```
