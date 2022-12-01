const { fromEvent, takeUntil, concatAll, forEach } = rxjs;
const { filter, map } = rxjs.operators;

var parent = document.getElementById("parent-container");
var widget = document.getElementById("child-container");

var mouseDowns = fromEvent(widget, "mousedown");

var parentMouseMoves = fromEvent(parent, "mousemove");

var parentMouseUps = fromEvent(parent, "mouseup");

var drags = mouseDowns.pipe(
  map(function (e) {
    return parentMouseMoves.pipe(takeUntil(parentMouseUps));
  }),
  concatAll()
);

const subscription = drags.subscribe({
  next(e) {
    widget.style.left = e.clientX + "px";
    widget.style.top = e.clientY + "px";
  },
  error(error) {
    console.log("ERROR:", error);
  },
  complete() {
    console.log("DONE!!!");
  },
});
