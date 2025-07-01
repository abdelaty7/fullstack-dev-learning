# TypeScript Setup
### Installing TypeScript

To install the TypeScript using `yarn` write in terminal:
```
yarn add typescript ts-node -g
```
or using `npm` like:
```
npm i -g typescript ts-node
```
***
### In the file called `package.json`
It appears like this:
```
{
  "dependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3"
  }
}
```
So,
```
{
  "dependencies": {
    //any package written here will upload while deploying
  },
  "devDependencies": {
    //any package written here won't upload while deploying
  }
}
```
now we want to put the `ts-node` and `typescript` in `devDependencies`. so, open your terminal and write:
```
yarn remove typescript ts-node
```
or
```
npm uninstall typescript ts-node
```
***
### Multiple Commands
> `-D` means inside `devDependencies`
```
yarn remove typescript ts-node && yarn add typescript ts-node -D
```
the `package.json` file will be like that:
```
{
  "dependencies": {},
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.8.3"
  }
}
```
***
###### last update: 1-7-2025