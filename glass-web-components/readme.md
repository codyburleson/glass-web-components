# Glass Web Components

A library of W3C standards-basewd web components. For now, these are designed for use with the Rock Mountain Platform, 
but they are just Web Components, so they work in any major framework or with no framework at all.

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## About Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Publishing and Using the Components

There are three strategies we recommend for using web components built with Stencil.

The first step for all three of these strategies is to publish to NPM:

- CD into the `glass-web-components` directory.
- Execute `npm login` (and enter credentials)
- To publish your public package to the npm registry, run: `npm publish`
- To see your public package page, visit https://www.npmjs.com/package/glass-web-components
- For more information on the publish command, see the [CLI documentation](https://docs.npmjs.com/cli/publish).

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc

## Naming Components

When creating new component tags, we recommend _not_ using `stencil` in the component name (ex: `<stencil-datepicker>`). This is because the generated component has little to nothing to do with Stencil; it's just a web component!

Instead, use a prefix that fits your company or any name for a group of related components. For example, all of the Ionic generated web components use the prefix `ion`.

## Useful References

- [Passing an Object or Array to Stencil through markup](https://dev.to/teamhive/passing-an-object-or-array-to-stencil-through-markup-5657)
- [Stencil Style Guide](https://github.com/ionic-team/stencil/blob/master/STYLE_GUIDE.md)
- [Quick Tip — Using Prop() Context in Stencil](https://gilfink.medium.com/quick-tip-using-prop-context-in-stencil-6764f6e2e981)
- [Quick Tip — Dynamic Stencil Component Names with JSX](https://gilfink.medium.com/quick-tip-dynamic-stencil-component-names-with-jsx-cf7687a418e6)
- [Using Refs in Stencil](https://gilfink.medium.com/using-refs-in-stencil-3a709467f5c7)
- [Render Props in Stencil](https://gilfink.medium.com/render-props-in-stencil-d9ce7f9d343b)
- [Consuming a Stencil Component in React App](https://medium.com/hackernoon/consuming-a-stencil-component-in-react-app-aa3f37f9e49a)
- [Creating Shared State in Stencil](https://gilfink.medium.com/creating-shared-state-in-stencil-3beac77477e8)
- [Using Objects/Arrays as Props in Stencil Components](https://gilfink.medium.com/using-complex-objects-arrays-as-props-in-stencil-components-f2d54b093e85)
- [Creating a Simple Login Form Using Stencil](https://gilfink.medium.com/creating-a-simple-login-form-using-stencil-537098742b4e)
- [Getting to Know Stencil Decorators](https://gilfink.medium.com/getting-to-know-stencil-decorators-350c13ce6d38)
- [User Interface Design patterns](http://ui-patterns.com/)
- [Welie.com - Patterns in Interaction Design](http://www.welie.com/patterns/index.php)
