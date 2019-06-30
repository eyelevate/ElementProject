# ElementProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## Check your npm dependencies
run `npm install` in your project root to ensure your project has all of the correct dependencies

## Setup New Project
1. run `npm run build:deps`
2. open `./refactor-project.js` and update the `newProjectName` and the `oldProjectName` variables to match your projects needs.
3. run `npm run refactor` to change your projects namespaces and settings.
4. create your first base component with `ng g c component-name` replacing component-name with the name of your new component
5. Update your `./src/app/app.module.ts` with your new base component.
6. rinse and repeat steps 4-5 for any new sub components you wish to add to your custom element


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
