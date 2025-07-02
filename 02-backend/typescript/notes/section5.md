# Catch Errors
### String Options
if you type in your TypeScript file
```ts
const username = "Muhammad";
username.
```
after the dot `.` you can see the options on **string only**
***
### Compile Error
if you go to the `dist` foler and create a `index.html` file like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello world!</h1>

  <script src="./index.js"></script>
</body>
</html>
```
then edit your `index.ts` file like this:
```ts
const username = "Muhammad";
username * 3
```
and write in your terminal
```
npx tsc
```
to compile the TypeScript into JavaScript it will appear like:
```
src/index.ts:2:1 - error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

2 username * 3
  ~~~~~~~~

Found 1 error in src/index.ts:2
```
and if you see the difference between `index.ts` and `index.js` you could see there is an underline under the error in the TypeScript only and this is called **Catching errors in development mode**.
***
###### last update: 2-7-2025