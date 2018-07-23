// refactor process.argv to determine the app entry point and remove the interceptor parameter
var appFile;
var newArgs = [];
process.argv.forEach(function (item, index) {
  if (index === 2)
    appFile = item;
  if (index !== 1)
    newArgs.push(item);
});

process.argv = newArgs;

// run the original application entry point
require(process.argv[1]);
