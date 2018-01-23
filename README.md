# reason-workshop-gatsby

This repo contains the default gatsby boilerplate to get us started.
It is intended as a starting point for
the [reason-workshop](https://github.com/ryyppy/reason-workshop).


We will gradually introduce BuckleScript in this setting.
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

## Develop

```
yarn run develop
```
