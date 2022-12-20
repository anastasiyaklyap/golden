
# Golden

This is a demo project with a task runner


## Init project

To initialize the project run

```bash
  npm run init-project
```

It will install all dev dependencies, create basic set of files and directories and create a sample `gitignore` file from github
## Build

To build a project run 

```bash
  npm run build
```

This command will compile `sass` to `css`, parse `css` and add vendor prefixes when needed. Also this command will validate HTML markup. 
## Build `DEV`

To build a project run 

```bash
  npm run build-dev
```

This command will compile `sass` to `css`, add vendor prefixes when needed and it will create source map for CSS 
## Watch

To work on a project on local environment run command

```bash
  npm run watch
```
This command will perform actions same as for build, build dev and test and additionaly it will open your project on localhost and it will refresh it automatically after changes made to the project
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

This task validates HTML markup