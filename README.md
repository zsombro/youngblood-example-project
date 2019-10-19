# youngblood-example-project
An example project using Youngblood.js

### See it working here: https://zsombro.github.io/youngblood-example-project/

If you want to run the code, all you have to do is check out the codebase using

```
npm install
```

and then host it on a local HTTP server. If you are not sure how to do that, just open the project folder using a command line and

```
npm install -g http-server && http-server
```

to start a local server. After that, just navigate your browser to the link displayed on the command line tool.

*NOTE: The server is necessary because the example code uses async calls to load assets in order to illustrate the built-in batch loader provided by youngblood.js. It's entirely possible to create games that don't require serving assets through HTTP.*
