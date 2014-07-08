# bump-tag [![Build Status](https://travis-ci.org/danielhusar/bump-tag.svg)](https://travis-ci.org/danielhusar/bump-tag)

Increment version in your package.json and add git tag to the repo.

I have created this cli mainly because I keep forgetting to add tag when I bump the version.

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
  $ bump -t=major -i=4 -g=0
  $ bump --type=major --indentation=4
  $ bump --type=major --indentation=tab
  $ bump --type=major --indentation=tab --git=0
  $ bump major
  $ bump minor
```


## Options

#### type

Type: `String`  
Default: 'patch'

Major, Minor or Patch.
Check [node-semver](https://github.com/isaacs/node-semver#functions) inc release parameter.

#### indentation

Type: `String`  
Default: 2

Indentation for the package.json

#### git

Type: `Number`  
Default: 1

Enable/disable adding git tags

## License

MIT © Daniel Husar
