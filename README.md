# React Notes

React is a popular open-source JavaScript library used for building user interfaces. It was created by Facebook and is now maintained by Facebook and a community of developers.

## Why React over vanilla JS?
  
* Makes it easy to create complex and dynamic UIs by breaking them down into reusable components.  

* Provides a virtual DOM (Document Object Model) which enables efficient updating of the UI by only re-rendering the parts that have changed, rather than the whole page.

* Performance

* Simplicity


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
const jsx = <h1>This is JSX</h1>
```

### Why JSX?

* Easier insertion of HTML code in JS
* Code reusability
* Code organisation

## Components

A JS function that returns JSX.

```javascript
// A component
const GetNameComponent = () => {
  return <h1>MARTIALEAGLE</h1>;
};
```

* Has to start with Capital 
* App component is the first component to be displayed in the website.
