# angularjs-seed [![Build Status](https://travis-ci.org/Sibiraj-S/angularjs-seed.svg?branch=master)](https://travis-ci.org/Sibiraj-S/angularjs-seed) [![Maintenance](https://img.shields.io/badge/maintained%20%3F-no-red.svg)](https://github.com/Sibiraj-S/angularjs-seed)

This repository is an application skeleton for a typical AngularJS  web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular framework and a bunch of development and testing tools for instant web development gratification.

## Getting Started

To get you started you can simply clone the `angularjs-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `angularjs-seed` repository. You can get git from [here][git].

You must have Node.js and its package manager (npm) installed. You can get them from [here][node].

### Install Dependencies

This project has two type of dependencies

* Dependencies are installed via [npm][npm] or [yarn][yarn], the Node.js package managers.
* Angular is served via CDN.
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on [end-to-end testing](#running-end-to-end-tests) for more info.

To install dependencies simply run

```bash
npm install
```

### Run the Application

This seed is preconfigured with a simple development web server. The simplest way to start this server is:

```bash
npm start
```

Behind the scenens, this will execute `grunt connect`

Now browse to the app at [`localhost:4000/index.html`][local-app-url].

## Testing

There are two kinds of tests in the `angularjs-seed` application: Unit tests and end-to-end tests.

### Running Unit Tests

The `angularjs-seed` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine], which runs with the [Karma][karma] test runner. It needs to be provided with a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found in `tests/unit` they are testing and have an `.spec.js` suffix (e.g.
  `app.spec.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```bash
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start watching the source and test files for changes and then re-run the tests whenever any of them changes.

This is the recommended strategy; if your unit tests are being run every time you save a file then you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to check that a particular version of the code is operating as expected. The project contains a predefined script to do this:

```bash
npm run test:single-run
```

### Running End-to-End Tests

The `angularjs-seed` app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has special features for Angular applications.

* The configuration is found at `protractor-conf.js`.
* The end-to-end tests are found in `tests/e2e/e2e-test.js`.

Protractor simulates interaction with our web app and verifies that the application responds correctly. Therefore, our web server needs to be serving up the application, so that Protractor can interact with it.

**Before starting Protractor, open a separate terminal window and run:**

```bash
npm start
```

In addition, since Protractor is built upon WebDriver, ensure that it is installed and up-to-date. The `angularjs-seed` project is configured to do this automatically before running the end-to-end tests, so you don't need to worry about it. If you want to manually update the WebDriver, you can run:

```bash
npm install -g webdriver-manager # if webdriver-manager not installed

npm run update-webdriver
```

Run `webdriver-manager` to start Selenium Server

Once you have ensured that the development web server hosting our application is up and running, you
can run the end-to-end tests using the supplied npm script:

```bash
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the development server.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running `java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].

## Updating Angular and other dependencies

Since the Angular framework library code and tools are acquired through package manager `npm`. Simply run the preconfigured script to update dependencies:

```bash
npm run update-deps
```

## Further Help

For more information on AngularJS please check out [angularjs.org][angularjs]

If you are looking for a seed with angularjs+requirejs, check this repo [angularjs_requirejs-seed][angularjs_requirejs-seed]

[angularjs]: https://angularjs.org/
[angularjs_requirejs-seed]:https://github.com/Sibiraj-S/angularjs_requirejs-seed
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:4000/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[yarn]:https://yarnpkg.com/en/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
