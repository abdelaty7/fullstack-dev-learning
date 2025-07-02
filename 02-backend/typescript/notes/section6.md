# Type Annotations vs Type Inference
### The Difference
```ts
let username: string = "Muhammad";
```
so TypeScript knows that the variable `username` will be always a string. it's right but there is no need, and this is the difference!
### Type Annotations
```ts
let username: string //you tell TS this will always be string
username * 3 //and here is an error!
```
***
### Type Inference
```ts
let username = "Muhammad";
username * 3 //TS knows it's a string not number by default
```
***
### Examples
```ts
// Fetch via API
const apiResponse = {
  id: 1,
  username: "John Doe",
  birthDate: "1990-05-15",
};

const userProfile = apiResponse;
userProfile.birthDate //that's all avilable after dot
userProfile.id        //that's all avilable after dot
userProfile.username      //that's all avilable after dot
```
So,
```ts
const userProfile: {
  id: number; //can't change it because it's a number in apiResponse!
  username: string;
  birthDate: string;
} = apiResponse
```
it understands that this is the structure! you can also write it like this:
```ts
const {id, username, birthDate}: {
  id: number;
  username: string;
  birthDate: string;
} = apiResponse;
```
***
###### last update: 2-7-2025