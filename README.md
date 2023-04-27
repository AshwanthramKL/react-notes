# React Notes

React is a popular open-source JavaScript library used for building user interfaces. It was created by Facebook and is now maintained by Facebook and a community of developers.

## Why React over vanilla JS?

- Makes it easy to create complex and dynamic UIs by breaking them down into reusable components.

- Provides a virtual DOM (Document Object Model) which enables efficient updating of the UI by only re-rendering the parts that have changed, rather than the whole page.

- Performance

- Simplicity

## Setting up a React app

```bash
npx create-react-app my-app
```

## Running the React app

```
npm start
```

Opens on `localhost:3000`

## JSX

JSX = JS + HTML

```javascript
const jsx = <h1>This is JSX</h1>;
```

### Why JSX?

- Easier insertion of HTML code in JS
- Code reusability
- Code organisation

## Components

A JS function that returns JSX.

```javascript
// A component
const GetNameComponent = () => {
  return <h1>MARTIALEAGLE</h1>;
};
```

- Has to start with Capital
- App component is the first component to be displayed in the website.

### Using a component

```javascript
function App() {
  return (
    <div className="App">
      <GetNameComponent />
    </div>
  );
}
```

## Props

An object that acts as Argument / Parameter for components.

```javascript
function App() {
  return (
    <div className="App">
      <User name="ash" age={20} email="ash@ash.com" />
      <User name="bash" age={20} email="bash@ash.com" />
      <User name="cash" age={20} email="cash@ash.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};
```

props object looks like this:

```javascript
props = {
  name: "ash",
  age: 20,
  email: "ash@ash.com",
};
```

## CSS in React

### With App.css

Adding css in the `App.css` file and importing it into the `App.js` file is one way of doing it.

### With App.module.css

Using `App.module.css` turns the css file into a Css module style sheet.

Import it into the `App.js` file.

```javascript
import styles from "./App.module.css";
```

And treat it as objects and use css in class names.

```javascript
function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.name}>MARTIALEAGLE</h1>
    </div>
  );
}
```

### Inline Css

Add styling to the JSX elements where they are written.

```javascript
function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.name} style={{color: "brown"}}>MARTIALEAGLE</h1>
    </div>
  );
}
```


## Conditional Rendering

Uses the ternary operator(**?**).

```javascript
{age > 18? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
```

**&&** - used as a if statement

```javascript
{isGreen && <button>This is a button</button>}
```

## Lists in React

```javascript
function App() {
  const names = ["Pedro", "Jake", "Mike", "Jack", "Kyle"]

  return (
    <div className="App">
      {names.map((name, key) => {
        return <h1 className="name" key={key}>{name}</h1>
      })}
    </div>
  );
}
```

* necessary to use the `key` property, else it will show warning.

## Lists and components

`App.js`
```javascript
import "./App.css";
import { User } from "./User.js";

function App() {
  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
```

We create a new file in the name of the component and export the component to the main file.  

`User.js`

```javascript
export const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  );
};
```

## State

```javascript
function App() {
  
  let age = 0;

  const updateAge = () => {
    age += 1;
    console.log(age);
  };

  return (
    <div className="App">
      {age}
      <br />
      <button onClick={updateAge}>Increment</button>
    </div>
  );
}
```

No change is reflected in the website as React first renders once and displays the value of the variable at that time.

Hence we are going to use states.

* We use states using a hook called `useState`.
* First, we have to import it.  

  ```javascript
  import { useState } from "react";
  ```
* Initialize with variable name, and a function used to update the variable and a value to set initally inside the `useState()`.
 
  ```javascript
  function App() {
    
    let [age, setAge] = useState(0); // Initializing a state

    const updateAge = () => {
      setAge(age++);
    };

    return (
      <div className="App">
        <h1>{age}</h1>
        <br />
        <button onClick={updateAge}>Increment</button>
      </div>
    );
  }
  ```
