# dynamic-strings

This is a package dedicated to having an organized data structure that is consisted of static strings, meant to be dynamic.

## Installation

Use the package manager [NPM](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install dynamic-strings.

### NPM

```bash
npm install dynamic-strings --save
```

### Yarn

```bash
yarn add dynamic-strings
```

## Usage

### Importing package

Javascript
```js
require("dynamic-strings");
```

### Features

- No dependencies
- Lightweight
- Minimal vulnerabilities
- Only variable property support
- Supports "dot" indexing as well as bracket indexing

### Dynamifying Strings

```js
require("dynamic-strings");

let site = {
    name: "example.com"
};

let user = {
    username: "User"
};

let welcomeMessage = "Hello, {{user.username}}! Welcome to {{site.name}}!";
console.log(welcomeMessage.dfy({ user: user, site: site }));
```

#### Outputs to the console

```js
Hello, User! Welcome to example.com!
```

### Dynamifying Objects

```js
require("dynamic-strings");

let company = {
    employees: [
        {
            firstName: "John",
            lastName: "Doe",
            message: "Welcome, you have a message: {{notes['John Doe']}}"
        },
        {
            firstName: "Anna",
            lastName: "Smith",
            message: "Welcome, you have a message: {{notes['Anna Smith']}}"
        },
        {
            firstName: "Peter",
            lastName: "Jones",
            message: "Welcome, you have a message: {{notes['Peter Jones']}}"
        }
    ]
};
console.log(company.dfy({
    notes: {
        "John Doe": "Finish frontend.",
        "Anna Smith": "Come to my office.",
        "Peter Jones": "Organize the interview.",
    }
}));
```

#### Outputs to the console

```js
{
  employees: [
    {
      firstName: 'John',
      lastName: 'Doe',
      message: 'Welcome, you have a message: Finish frontend.'
    },
    {
      firstName: 'Anna',
      lastName: 'Smith',
      message: 'Welcome, you have a message: Come to my office.'
    },
    {
      firstName: 'Peter',
      lastName: 'Jones',
      message: 'Welcome, you have a message: Organize the interview.'
    }
  ]
}
```

## License
#### Licensed under [MIT](https://choosealicense.com/licenses/mit/).