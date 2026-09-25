@mitchallen/demand
===============================

A module to throw errors if conditions aren't met.
----------------------------------------------------

<p align="left">
  <a href="https://github.com/mitchallen/demand/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/mitchallen/demand/ci.yml?branch=main" alt="CI">
  </a>
  <a href="https://github.com/mitchallen/demand/actions/workflows/ci.yml?query=branch%3Amain">
    <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Coverage: 100%">
  </a>
  <a href="https://github.com/mitchallen/demand/pkgs/npm/demand">
    <img src="https://img.shields.io/github/package-json/v/mitchallen/demand?label=GitHub%20Packages" alt="Version">
  </a>
  <a href="https://github.com/mitchallen/demand/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  </a>
</p>

* * *

## Installation

As of __0.2.0__ this package is published to __GitHub Packages__, not the public npm
registry. Versions __0.1.3 and earlier__ remain on npmjs.org and are no longer updated
there.

Requires __Node.js 18__ or higher.

Add an `.npmrc` next to your `package.json`:

    @mitchallen:registry=https://npm.pkg.github.com

GitHub Packages requires authentication even for public packages, so you also need a
personal access token with the `read:packages` scope. Keep it in an environment
variable rather than committing it:

    //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

Then:

    $ npm init
    $ npm install @mitchallen/demand

This package has __no dependencies__.

* * *

## Usage

    var demand = require('@mitchallen/demand');

 	database.connect(uri, function(err,db) {

 		demand.notError(err);

		demand.notNull(db,"ERROR: db is null");
 	});


* * * 

## Methods

### notNull(object, message)

Will throw an error containing the *message* parameter if the *object* parameter is null;

### notError(err)

Will throw an error if the *err* object is not null. The error will use the string from __err.message__.

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [github.com/mitchallen/demand.git](https://github.com/mitchallen/demand.git)
 
* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.2.0 release notes

* now published to __GitHub Packages__ instead of npmjs.org (see Installation)
* replaced __unit.js__ with __should.throws__ in the test suite
* removed the Grunt toolchain
* mocha is now a devDependency -- `npm test` previously fell back to a global install
* upgraded __should__ to 13.x
* replaced the __.npmignore__ blocklist with a __files__ allowlist
* added an __engines__ field (Node.js 18+)

#### Version 0.1.3 release notes

* __notNull__ now distinguishes between null and zero

#### Version 0.1.2 release notes

* Added pushTo to Gruntfile

#### Version 0.1.1 release notes

* Fixed type-o in README example

#### Version 0.1.0 release notes

* Initial release