# ElementProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Check your npm dependencies
run `npm install` in your project root to ensure your project has all of the correct dependencies

## Rename Project
Rename the project so that it does not conflict with other components in your root project

To do so please refactor the project and include these files in your refactoring:
1. `./angular.json`
  - Line(s) Pascal casing: 6, 20, 69, 73, 80, 121, 128 
2. `./package.json`
  - Line(s) kebab-case: 2, 
3. `./src/app/app.module.ts`
  - create your custom component name replacing: `**placeholder**` 
4. `./src/index.html`
  - replace the tag `<app-root></app-root>` with the name of the component you used in step 3.
5. `./stage-component.js`
  - on line 5 ensure that your destination path is set to the correct project destination source. 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

run `npm run build:component` to create a production build and have it create a copy of the build files in the proper destination source. Please ensure that you have the correct destination source in `./stage-component.js` before running this command. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
