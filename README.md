# JSDoc Intersection Plugin
Converts TypeScript intersection types (joined with an "&") to a jsDoc type union "|" allowing the file to be 
processed downstream. This allows you to use the amperstand "&" in your code.

Specifically, this creates a compatibility between Visual Studio Code's TypeScript documentation and JSDoc, as
Visual Studio Code's parser uses amperstands for type unions, and JSDoc uses pipes.

# Why
Uh oh! JSDoc won't like this. It's a TypeScript thing and [won't be supported](https://github.com/jsdoc/jsdoc/issues/1285).    
But it's the only way to get Visual Studio Code to union the objects!
```js
/**
 * This is my favorite function!
 * @param {SomeClass & {abc: 123}}
 */
```

# Resolution
This JSDoc plugin solves the problem by converting your intersecting types to compatible JSDoc union types. There's
no need to hack your code together.