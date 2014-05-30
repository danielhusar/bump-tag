# bump-tag [![Build Status](https://travis-ci.org/danielhusar/bump-tag.svg)](https://travis-ci.org/danielhusar/bump-tag)

Increment version in your package.json and add git tag to the repo.

## Install

```
npm install --global bump-tag
```

### Sample usage

```bash
$ nmq --help

Usage:
  $ bump

Options:
  $ bump -t=major -i=4
  $ bump --type=major --indentation=4
  $ bump --type=major --indentation=tab
```


## Options

#### type

Type: `String`  
Default: 'patch'

Major, Minor or Patch.
Check (node-semver)[https://github.com/isaacs/node-semver#functions] inc release parameter.

#### indentation

Type: `String`  
Default: 2
Indentation for the package.json

## License

MIT © Daniel Husar
