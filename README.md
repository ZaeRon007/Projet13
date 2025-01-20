# Poc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## How to login

Locate file src/assests/users.json. Two users are configured, you can define multiples users if needed. 

In the application, email and password are used to login.

## Improvements

### Setup database : 

To setup a database named "p13" run the script.sql located in the directory BDD. For example `mysql -u user -p p13 < BDD/schema.sql`

