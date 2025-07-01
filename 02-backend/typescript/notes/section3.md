# Watch Mode
### To make sure the `tsc` is working
> `tsc` is TypeScript Compiler
```
npx tsc --help
```
***
### To execute the file
First write in terminal
```
npx tsc --init
```
Then
```
npx ts-node index.ts
```
It will execute your code in `index.ts`
***
### Compile JavaScript file
If you Type now
```
npx tsc index.ts
```
it will compile your TypeScript file into JavaScript one!
***
### Watch mode
If you type in your terminal
```
npx tsc index.ts -w
```
it means any change you do in `index.ts` will automatically change in `index.js` to avoid repeating the step of compiling the file.
***
###### last update: 1-7-2025