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
      <h1 className={styles.name} style={{ color: "brown" }}>
        MARTIALEAGLE
      </h1>
    </div>
  );
}
```

## Conditional Rendering

Uses the ternary operator(**?**).

```javascript
{
  age > 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>;
}
```

**&&** - used as a if statement

```javascript
{
  isGreen && <button>This is a button</button>;
}
```

## Lists in React

```javascript
function App() {
  const names = ["Pedro", "Jake", "Mike", "Jack", "Kyle"];

  return (
    <div className="App">
      {names.map((name, key) => {
        return (
          <h1 className="name" key={key}>
            {name}
          </h1>
        );
      })}
    </div>
  );
}
```

- necessary to use the `key` property, else it will show warning.

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

- We use states using a hook called `useState`.
- First, we have to import it.

  ```javascript
  import { useState } from "react";
  ```

- Initialize with variable name, and a function used to update the variable and a value to set initally inside the `useState()`.

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

  ## Use case of State

  With an input value we can actively display as it is changed.

  ```javascript
  function App() {
    const [inputValue, setinputValue] = useState("");

    const handleInputchange = (event) => {
      setinputValue(event.target.value);
    };

    return (
      <div className="App">
        <input type="text" onChange={handleInputchange} />
        <h1>{inputValue}</h1>
      </div>
    );
  }
  ```

  ### Show and hide a div on the click of a button.

  ```javascript
  function App() {
    const [showText, setShowText] = useState(true);

    return (
      <div className="App">
        <button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          Show/Hide
        </button>
        {showText && <h1>This is a secret text</h1>}
      </div>
    );
  }
  ```

## CRUD Operations in React

We'll be doing this by creating a to-do list.

Refer to the following [repository](https://github.com/AshwanthramKL/toDoList-react) for the code.

![Website Preview](./public/website_preview.png)
![Website Preview 2](./public/website_preview2.png)

## Component Lifecycle

Lifecycle refers to the stages that a component goes through.

**3 Stages**:

- **Mounting** - The component appearing in the screen or starting to exist in the project.
- **Updating** - The component is changing something such as the UI, etc...
- **UnMounting** - The component stop appearing from the screen

## useEffect Hook

`useEffect` is a hook in React that allows you to perform side effects in functional components.

Side effects include tasks like fetching data from a server, modifying the DOM, or setting up event listeners.

```javascript
useEffect(() => {
  console.log("COMPONENT MOUNTED");
});
```

Console's log when the component is **mounted**.

```javascript
useEffect(() => {
  console.log("COMPONENT MOUNTED");

  return () => {
    console.log("COMPONENT UNMOUNTED");
  };
});
```

The console log inside the return statement will be executed when the component unmounts.

The `useEffect()` also take another parameter.

This parameter contains an array of dependencies that determines when the side effect should be executed.

```javascript
useEffect(() => {
  console.log("COMPONENT MOUNTED");

  return () => {
    console.log("COMPONENT UNMOUNTED");
  };
}, [text]);
```

In the above example the statement will be logged only if a change is made to the text variable.

## React Strict mode

`<StrictMode>` lets you find common bugs in your components early during development.

Use StrictMode to enable additional development behaviors and warnings for the component tree inside.

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## How To Fetch Data From an API

Using `fetch`:

```javascript
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

Using `Axios`:

```javascript
Axios.get("https://catfact.ninja/fact").then((res) => {
  console.log(res.data);
});
```

## React Router DOM

### React Router DOM v6

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

We first import the BrowserRouter, Routes, and Route component.

```javascript
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
```

Then we set routes and elements to be displayed.

The file usually auto-imports the components fromt their locations.

```javascript
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
```

Now we create an error page to show up if the route doesn't exist.

```javascript
<Route path="*" element={<h1>Error 404: Page not found</h1>} />
```

Creating a navbar component with `Link`

```javascript
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};
```

Place the component within Router and above Routes

```javascript
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<h1>Error 404: Page not found</h1>} />
  </Routes>
</Router>
```

Video Exercise: Watch this [video](https://www.youtube.com/watch?v=z0vaVoxMoSA) on Router DOM.

### React Router DOM v6.4+

Import the following components from the `react-router-dom` library.

```javascript
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
```

Assign the `createBrowserRouter` to router variable.

Embed the `createRoutesFromElements` inside it.  
Inside it goes all the `Route` components.  
`index` means that route will load first.

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/data" element={<Data />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
```

Creat Root Component with `Link`.

```javascript
const Root = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
```

Outlet - All of the remaining routes will display the outlets. It is a placeholder for all the other routes.

Finally while returning, pass the `RouteProvider` component with `router` as a prop.

```javascript
return (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);
```

### Data Fetching

Import the following hooks.

```javascript
import { useLoaderData, useNavigation } from "react-router-dom";
```

We fetch data from the component using `useLoaderData`.

We use `useNavigation` to check the state of the image being loaded.

```javascript
export const Data = () => {
  const dogUrl = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img src={dogUrl} alt="doggy" />
    </div>
  );
};
```

`Dataloader` component is used to fetch the data from the api.

```javascript
export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  return dog?.url;
};
```

`App.js`

```javascript
<Route path="/data" element={<Data />} loader={dataLoader} />
```

## State Managment - useContext Hook

Objective is to have a username displayed in home and profile.

Have a ChangeProfile component that changes the username.

`App.js`

```javascript
function App() {
  const [username, setUsername] = useState("martialeagle");

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Error 404: Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
```

`Profile.js`

```javascript
import { ChangeProfile } from "../component/ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      PROFILE, user is {props.username}
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};
```

`ChangeProfile.js`

```javascript
import { useState } from "react";

export const ChangeProfile = (props) => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setUsername(newUserName);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
```

We pass the `chagneUsername` state through `Profile.js` and then to `ChangeProfile.js` where it is required. But it is not used in the `Profile.js` component.  

This is called `prop drilling` - the process of passing data from one component via several interconnected components to the component that needs it.  

We fix this using 
