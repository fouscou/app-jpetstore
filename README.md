# K6-tutorial

This repo contains files that are meant to help anyone understand K6 scripting usage. 
It is just an example with a script and data set file working together to simulate workload on an application.

## Content

- [Installation](#installation)
  - [Installation of K6](#installation-of-k6)
  - [Installation of a sample web application](#installation-of-sample-web-application)

- [Run the test on your local machine](#run-the-test-on-your-local-machine)
  - [Download files on your local machine](#download-files-on-your-local-machine)
  - [Run the test](#run-the-test) 

## Installation

### Installation of K6
Depending on platform you are on, the installation of K6 is detailed on https://k6.io/docs/getting-started/installation/

### Installation of a sample web application
In the application folder there is a jar package file. It represents the application that you have to deploy to run your test agains't.
The app will run on port 8080

```shell
$ java -jar mybatis-spring-boot-jpetstore-2.0.0-SNAPSHOT.jar
```

## Run the test on your local machine

### Download files on your local machine
The js file is the result of har file generated from the web browser after recording all requests.
The har-to-k6 tool then allows to generate a js script that you can modify as you see fit.

- Browse.js => this script is written in javascript containing
- data.json => It contains an example of file containing test data set


### Run the test
```shell
$ k6 run browse.js
```
