Global Dependencies:
* ts-globber
* typescript
* browserify
* tsd

Scaffolding:
 Create a tsconfig.json with:
```
 "compilerOptions": { 
   "module": "commonjs",
   "target": "es5" // or ES6 if you're feeling devious
   },
   "filesGlob": [ "./src/**/*.ts", ... ] // include any other folders you want compiled
}
```

A typical npm build script will look like:  
`tsglob && tsc` -- Add browserify if required
`tsglob`: Populates the 'files' propery in tsconfig.json
`tsc`: Compiles the typescript into javascript

 Copy the .settings/tasks.json from a previous project for the VSCode build task (ctrl+shift+B) 