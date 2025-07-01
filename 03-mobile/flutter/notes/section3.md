# Data Types
> Dart use OOP 'Object Oriented Programming'
- Any software has start/end points.
- Starts from up to bottom, left to right.
```dart
void main(){
  
}
```
The Curly Braces `{ }` are the start/end points of `main`.
The compiler starts executing the program from the **main** function.
***
### Numbers
```dart
void main(){
  // The compiler won't understand it's a number unless i give him a keyword!
  myAge = 14;     //✘
  int myAge= 14;  //✔
}
```
***
### Letters
```dart
void main(){
  myName = 'Muhammad';        //✘
  String myName= 'Muhammad';  //✔
  String myName= "Muhammad";  //✔
}
```
***
### Print
```dart
// To get the value of a variable we print it
int x = 11;
print(x); //11
```
***
### Declaration vs Initialization
```dart
int x;     //declaration
x = 7;     //initialization
int x = 7; //declaration & initialization
```
***
### Comment
```dart
// This is Single line comment

/*
  This is
  Multiple
  line comment
*/
```
***
###### last update: 1-7-2025