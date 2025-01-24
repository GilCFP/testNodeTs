# Project Instructions

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Compile the TypeScript files

To compile the TypeScript files, run:
```sh
npm run build
```

This will compile the TypeScript files and output the JavaScript files in the `dist` directory.

## Run the scripts

To run all the compiled scripts, use:
```sh
npm start
```

This will execute all the scripts located in the `dist` directory.

## Individual Scripts

If you want to run an individual script, you can use:
```sh
node dist/<script-name>.js
```

For example, to run `2.js`:
```sh
node dist/2.js
```
