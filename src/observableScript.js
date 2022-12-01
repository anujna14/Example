const { Observable, fromEvent, forEach } = rxjs;

var button = document.getElementById("button");
var clicks = fromEvent(button, "click");

const subscription = clicks.subscribe({
  next(e) {
    alert("logged");
    subscription.unsubscribe()
  },
  error() {
    console.log(error);
  },
  complete() {
    console.log("done");
  },
});
 