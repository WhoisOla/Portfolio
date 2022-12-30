const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};
----clock------
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

//initialize the clock in a self-invoking function
(function clock() {
  var hour = document.getElementById("hour"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");
  //set up a loop
  (function loop() {
    requestAnimFrame(loop);
    draw();
  })();

  //position the hands
  function draw() {
    var now = new Date(), //now
      then = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0
      ), //midnight
      diffInMil = now.getTime() - then.getTime(), // difference in milliseconds
      h = diffInMil / (1000 * 60 * 60), //hours
      m = h * 60, //minutes
      s = m * 60; //seconds
    //rotate the hands accordingly
    sec.style.webkitTransform = "rotate(" + s * 6 + "deg)";
    hour.style.webkitTransform = "rotate(" + (h * 30 + h / 2) + "deg)";
    min.style.webkitTransform = "rotate(" + m * 6 + "deg)";
  }
})();
clock
