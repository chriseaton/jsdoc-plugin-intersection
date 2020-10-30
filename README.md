[![NPM](https://nodei.co/npm/jsdoc-plugin-intersection.png)](https://npmjs.org/package/jsdoc-plugin-intersection)

# JSDoc Intersection Plugin
Converts TypeScript intersection types (joined with an "&") to a JSDoc type union "|" allowing the file to be 
processed downstream. This allows you to use the amperstand "&" in your code.

Specifically, this creates a compatibility between Visual Studio Code's TypeScript documentation and JSDoc, as
Visual Studio Code's parser uses amperstands for type unions, and JSDoc uses pipes.

> You may find my other JSDoc plugins interesting:
>  - [jsdoc-plugin-typescript-new](https://github.com/chriseaton/jsdoc-plugin-typescript-new)


## Solving the Problem
Using JSDoc in Visual Studio code with their TypeScript-oriented intersection:
```js
/**
 * This is my favorite function!
 * @param {SomeClass & {abc: 123}}
 */
```
Results in...

> ERROR: Unable to parse a tag's type expression for source file ...: Invalid type expression "SomeClass & {abc: 123}": Expected "|" but "&" found.

Uh oh! JSDoc doesn't like this. It's a TypeScript thing and [won't be supported](https://github.com/jsdoc/jsdoc/issues/1285).   

## Resolution
Thankfully, this JSDoc plugin solves the problem by converting your intersecting types to compatible JSDoc union types.
There's no need to hack your code together with strange `@typedef`s.

### Just Install
```sh
yarn add jsdoc-plugin-intersection --dev
```
*or*
```sh
npm install jsdoc-plugin-intersection --save-dev
```

Update your JSDoc configuration, and include the plugin:
```json
...
    "plugins": [
        "jsdoc-plugin-intersection"
    ],
...
```

That's all! 