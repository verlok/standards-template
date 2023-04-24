const foo = 2;

var i = 2;

log(i, foo);

setTimeout((a) => {
  log(a);
});

function log(str) {
  // eslint-disable-next-line no-console
  console.log(str);
}
