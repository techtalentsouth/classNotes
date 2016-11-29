## React Router


## Intro & Recap

- Last class, we discussed the React Component LifeCycle. 
- This includes:
	- Component Instantiation
	- Updates to State
	- Updates to Props
	- Unmounting Components 
- Which leads us into tonight's topic: React Router

## Agenda

- Understand the purpose of React Router
- When to use React Router
- How to implement React Router

## The Purpose of React Router 

Due to the fact that React is a library (not a complete framework), it does not aim to solve all an application's needs. 

While React does a great job at creating components and providing a system for managing state in Single Page Applications, you still need a way of changing URL's and rendering new components (based on User Interaction)

The best solution for this is the React Router Library.

According to the React Router Documentation:

> React Router is a powerful routing library built on top of React that helps you add new screens and flows to your application incredibly quickly, all while keeping the URL in sync with what's being displayed on the page.

In short, React Router takes care of rendering components for us. 

Let's dig in:

### Install and Import React Router

You'll need to install React Router through NPM

`npm install react-router --save-dev`

Next, you'll want to import the appropriate variables. 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route } from 'react-router';

```

That's it for setup!


### Component Configuration

We're going to utilize 3 components 

Starting with a NavBar component

```javascript
class NavBar extends React.Component{
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
      </div>
    )
  }
}
```
You'll notice here that we've used the `<Link>` component. This has been pulled directly from the React-Router library. 

- `<Link to="">` replaces `<a href="">` 
- This provides a standard HTML anchor tag when the DOM renders
- Using `<Link>` is **necessary** for React Router to implement the routing magic that we are looking for.



Next, we'll create a Welcome Component, asking the user to Login

```javascript
class Welcome extends React.Component{
  render() {
    return (
      <div>
        <NavBar />
        <h3> Press Login To Continue </h3>
      </div>
    );
  }
}
```

In the above example, we've brought our NavBar component in as a child component. 


Finally, we'll create a Login Component (for when the User is Logged In)

```javascript
class Login extends React.Component{
  render() {
    return(
      <div>
        <NavBar/>
        <h1>You are now Logged In</h1>
      </div>
    );
  }
}
```

### Configure the Routes

While on the surface, this appears to be difficult, it's surprisingly simple

Step one is creating the Router

```javascript
let routes = (
	<Router></Router>
)
```
We've assigned the `<Router>` component to a variable named `routes`


Next, we'll nest `<Route>`'s as children of the `<Router>`

```javascript
let routes = (
  <Router>
    <Route path="/" component={Welcome}/>
    <Route path="/login" component={Login}/>
  </Router>
);
```

### Render the Router

In our ReactDOM.render method, we'll just need to pass in the `routes` variable as our first argument

```javascript
let mountPoint = document.getElementById("root");
ReactDOM.render(routes, mountPoint)
```

This allows React Router to handle rendering the appropriate components. 

### History

You've probably noticed that the URL bar has really random strings appended to the end of your URI. This is through a concept known as hashHistory. Essentially, the `#` is used to manage routing performed on the client side.

Currently, The React Router documentation recommends using `browserHistory` to address this issue, and clean up the URL's. 

```javascript
import { Router, Link, Route, browserHistory } from 'react-router';
 
 ...
 
let routes = (
<Router history={browserHistory}>
	...
</Router>
);			  
```

With browserHistory implemented, your `<Router>` component knows which *history tracking* stragety to use, making the URL looks significantly better.


## Exercise and Homework

- Work with your partner to complete the [React Router Tutorial](https://github.com/ttsJavaScriptAppDevelopmentSummer16/react-router-tutorial)
    - Clone the repo
    - Create a new branch
    - Push the changes back up to the class GitHub repo
- Study [Delcrative Routing for React](https://react-router-website-uxmsaeusnn.now.sh/quick-start)
    - Write about the example you find most interesting


### Full Code Sample: 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Route, browserHistory } from 'react-router';

class NavBar extends React.Component{
  render(){
    return(
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="login">Login</Link>
      </div>
    )
  }
}

class Welcome extends React.Component{
  render() {
    return (
      <div>
        <NavBar />
        <h3> Press Login To Continue </h3>
      </div>
    );
  }
}


class Login extends React.Component{

  render() {
    return(
      <div>
        <NavBar/>
        <h1>You are now Logged In</h1>
      </div>
    );
  }
}


let routes = (
  <Router history={browserHistory}>
    <Route name="welcome" path="/" component={Welcome}/>
    <Route name="login" path="/login" component={Login}/>
  </Router>
);


let mountPoint = document.getElementById("root");
ReactDOM.render(routes, mountPoint)
```
