# interpres

## What is interpes?

Versatile Markdown parser designed to seamlessly convert Markdown files (.md) into HTML format or display parsed content directly in the console. With a user-friendly Command-Line Interface (CLI), Interpres simplifies the process of transforming Markdown documents, making it an essential tool for content creators and developers.

## Getting started

### Environment

To activate Interpres you need next programs installed on your computer:

* [NodeJS](https://nodejs.org/en)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [git](https://git-scm.com/)

### Installation

To start interacting with Interpres you have to clone repository and install dependencies:

```shell
git clone https://github.com/kol-oss/interpres.git
npm install
```

## Usage

### Command

After the setting up project, you can use it via next way:

```shell
node main.js <path> [options] 
```

Description:

* `<path>` - path from the root main.js file to .md file
* `[options]`:
  * `-o <name>` - redirect output to the .html file
  * `--out <name` - the same as `-o`

### Examples

You can test the application on prepared examples:

* output in the console:

```shell
node main.js ./examples/1-simple.js
```

* output in the .html file:

```shell
node main.js ./examples/7-converted.js -o ./examples/7-converted.html
```

## Commits

* [Revert commit](https://github.com/kol-oss/interpres/commit/4d21429a28d1ec00599c07fee7f3cd198176f484)

## License

This project is licensed under the [MIT License](https://github.com/kol-oss/interpres/blob/main/LICENSE).