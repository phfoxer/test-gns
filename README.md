# Webpack 4 Typescript/Sass with build-in option to change preprocessor (less/stylus)

This Webpack comes with 2 builds:

--> <code>npm run build:dev</code><br>
  starts dev server on <code>localhost:8080</code> with livereload, sourcemap

--> <code>npm run build:prod</code><br>
  creates prod files to <code>/dist</code> with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for vendor prefixes (browser compability)<br>
  3. compiles typescript to ES5 <br>
  4. minifying for css/js <br>
  5. uglyfing js code <br>
  6. hash css and js file (file versioning for browser caching -> cache busting)<br>

# Setup
```sh
cd Webpack-4-boilerplate-Typescript
npm install
//start dev mode
npm start
```
