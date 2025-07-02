// Type Annotations: ( you as developer )
// Type Inference: ( TS job )


let username1: string = "Muhammad"; //there is no need to type :string
let username2 = "Muhammad"; //✔
const username3 = "Muhammad"; //if you used const there no need also to type :string


// Fetch via API
const apiResponse = {
  id: 1,
  username: "John Doe",
  birthDate: "1990-05-15",
}; // دا مش متغير دا اللي هيرجع من الايي بي اي

const userProfile1 = apiResponse;
userProfile1.birthDate //that's all avilable after dot
userProfile1.id        //that's all avilable after dot
userProfile1.username      //that's all avilable after dot


const userProfile2: {
  id: number; //can't change it because it's a number in apiResponse!
  username: string;
  birthDate: string;
} = apiResponse;


const {id, username, birthDate}: {
  id: number;
  username: string;
  birthDate: string;
} = apiResponse;