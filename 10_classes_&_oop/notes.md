# JavaScript and Classes

JavaScript is prototype-based language and classes are syntactic sugar (matalb ke sirf syntax h behind the scene sab protype hi h)

## OOP (programming paradigm hai matalab style of langauge )

### Object
-   Collection of properties and methods  
-   toLowerCase

### Why use oop
-   code phle mess up ho jaata tha isliye

## Parts of OOP
### Object Literal
-   An object literal is a way to create objects in JavaScript by defining them directly in your code. It's a simple and intuitive way to create objects on the fly.  
-Example 
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    getInfo: function() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    }
};
```

### Constructor function 
- Constructor functions are a way to create object templates in JavaScript. You can use them to create multiple objects with the same structure.   
-Example 
```javascript
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getInfo = function() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    };
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);
```

### Prototypes 
- Prototypes are a way to share methods and properties among objects. Instead of creating a new copy of a method for each object, you can define it once in the prototype.   
-Example
```javascript
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getInfo = function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
};

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);
```

### Classes
- Classes are a more recent addition to JavaScript for defining objects and their behavior. They provide a more structured and syntactic way to create and manage objects.

- Example
```javascript
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    }
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);

```

### Instances(new,this)
- Instances are individual objects created from a class or constructor function. The new keyword is used to create instances, and this refers to the current instance within object methods.

## 4 pillars
### Abstraction 
- Abstraction involves simplifying complex reality by modeling classes based on the essential properties and behaviors they share, while hiding irrelevant details. It allows you to work with objects at a higher level of understanding.

- For example, consider a TV remote control. You don't need to know the intricate details of how it works; you just need to know how to use it. The remote control abstracts the complexity of the TV's internal workings.

```javascript
class TVRemoteControl {
    powerOn() {
        // Turn on the TV
    }

    changeChannel(channel) {
        // Change the channel
    }

    volumeUp() {
        // Increase the volume
    }

    volumeDown() {
        // Decrease the volume
    }
}
```

### Encapsulation 
- Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on the data into a single unit, known as a class. This helps protect data from unauthorized access and modification.

- 
### Inheritance
- Inheritance is the mechanism by which one class can inherit the properties and methods of another class. It allows for code reusability and the creation of a hierarchy of classes.

-
### Polymorphism
Polymorphism allows objects of different classes to be treated as objects of a common base class. It enables you to write code that can work with objects in a generic way, adapting to the specific characteristics of each object at runtime.

# Prototypal behavious

javascript ko yadi kuch dhundna hai toh uppar tak jaat rehta h matlab ke parent,grand parent or jab tak null value na mile tab tak vo chalta rhega

```javascript 
this, new, class, etc sab isi se ho rha h.
```  