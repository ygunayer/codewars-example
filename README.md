# Example Codewars Solution Project
This repository demonstrates the project structure I use for my Codewars kata solutions. To put simply, each solution has a source file located under the `src/` folder, and a test file located under the `test/` folder. As the names imply, the former is used for the actual implementation of the solution, and the latter is used to test that solution.

While these files can be created manually, I use my own [Yeoman](https://yeoman.io) generator found at [ygunayer/generator-ygcodewars](https://github.com/ygunayer/generator-ygcodewars) as a scaffolding tool.

## How to Run
The project uses Mocha and Chai to test the output instead of relying on the tests found on Codewars. While you can run `mocha` to run all tests (assuming you have mocha installed globally), you can also use the `--grep <id or part of name>` option to run them individually. Here's an example:

```
mocha --grep IP
```

or

```
mocha --grep 515decfd9dcfc23bb6000006
```
