# interpres

## What is interpes?

Versatile Markdown parser designed to seamlessly convert Markdown files (.md) into HTML or ANSI Codes format. The result of parsing and converting can be displayed in the console or saved in the file. 

With a user-friendly Command-Line Interface (CLI), Interpres simplifies the process of transforming Markdown documents, making it an essential tool for content creators and developers.

## Getting started

### Environment

To activate Interpres you need next programs installed on your computer:

* [NodeJS](https://nodejs.org/en)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [git](https://git-scm.com/)

### Installation

After setting up the environment, you have to clone repository locally.

Firstly, clone the repository by the link:

```shell
git clone https://github.com/kol-oss/interpres.git
```

After that, install the dependencies via the next command:

```shell
npm install
```

## Usage

### Command

When the project is installed on your computer, you can use it via next way:

```shell
node main.js <path> [-o, --out <output>] [-f, --format <format>] 
```

Description:

* `<path>` - path from the root main.js file to .md file
* `<output>` - redirect output to the .html (html) or .txt (ansi) file
* `<format>`: `html` / `ansi` - select the output mode

### Examples

You can test the application on prepared examples:

* output in the console:

```shell
node main.js ./examples/1-simple.md
```

* output in the `.html` file:

```shell
node main.js ./examples/7-converted.md -o ./examples/7-converted.html
```

* output in the `ansi` format:

```shell
node main.js ./examples/1-simple.md -f ansi
```

## Testing

### Running tests

You can run testing files of Interpres via **npm** or directly via **jest**:

* production mode:

```shell
npm run test
```

* development mode:

```shell
npm run test:dev
```

Also you can use jest framework to execute test files by yourself:

* execute `utils.test` file:

```shell
jest utils
```

### Testing experience

Implementation of unit tests in this program was exciting and (what is more important) very productive idea that helps to update code and check the main functional. Using tests, programmer can concentrate on code, not on testing and checking is everything working correctly.

To sum up, automatic tests is very powerful tool to maintain and expand your app. I also felt it as testing workflow helps me find several bugs in program logic and fix them before releasing dev version into production.

## Commits

* [Revert commit](https://github.com/kol-oss/interpres/commit/4d21429a28d1ec00599c07fee7f3cd198176f484)
* [Failed tests commit](https://github.com/kol-oss/interpres/commit/24bbb51a25dd761e1035e10fcf92e5a5e8c28fd1)

## License

This project is licensed under the [MIT License](https://github.com/kol-oss/interpres/blob/main/LICENSE).