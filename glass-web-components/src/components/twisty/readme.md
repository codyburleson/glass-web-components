# gls-twisty

Creates a collapsible section of content that can be toggled open and closed (expanded/collapsed) with a click / tap, 
or programmatically.

Twisty may also eventually be used as a base component used in an Accordion and a Tree (at least, that's the plan for 
now unless I run into some reason that reveals it to be a dumb idea).

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                   | Type      | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `href`   | `href`    | Allows the twisty header text to be a hyperlink                                                               | `string`  | `"#"`       |
| `label`  | `label`   | Label for the twisty header; defaults to `"More..."`                                                          | `string`  | `'More...'` |
| `opened` | `opened`  | When `true`, the twisty state will be opened by default.                                                      | `boolean` | `undefined` |
| `target` | `target`  | The target of the link when the href attribute is used. One of _blank, _self, _top, _parent; default is _self | `string`  | `"_self"`   |


## Methods

### `close() => Promise<void>`

Close (collapse) the twisty.

#### Returns

Type: `Promise<void>`



### `getState() => Promise<string>`

Get the current  state (`"opened"` or `"closed"`)

#### Returns

Type: `Promise<string>`



### `open() => Promise<void>`

Open (expand) the twisty.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name        | Description                                                                                                                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--primary` | Defines the color of the twisty's arrow box and, when the twisty is open, the arrow. In a global style sheet or in the style element of a page, for example, use: `:root { --primary: #006494; }`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
