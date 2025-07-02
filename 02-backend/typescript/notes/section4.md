# Compiler Options
### Create Config File
Write in terminal:
```
npx tsc --init
```
will appear in terminal like:
```
Created a new tsconfig.json with:                                                         
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```
and will create a `tsconfig.json` file!
***
### The `rootDir` for TypeScript
In the `tsconfig.json` got to this line
```json
// "rootDir": "./",
```
make it like this:
```json
"rootDir": "./src", 
```
then make a folder with name of `src` and put inside it this file `index.ts`
***
### The `outDir` for JavaScript
In the `tsconfig.json` got to this line
```json
// "outDir": "./",
```
make it like this:
```json
"outDir": "./dist",
```
then make a folder with name of `dist`
***
### Let's Try
> The target is to compile any TypeScript file inside the `src` folder and compiler compile a JavaScript one inside the `dist` folder!
now if you type in your terminal
```
npx tsc
```
it will compile the TypeScript file inside `src` into JavaScript one inside `dist`!
***
###### last update: 2-7-2025