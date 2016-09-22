window.addEventListener("deviceorientation", (ev) => {
  var absolute = ev.absolute;
  var alpha    = ev.alpha;
  var beta     = ev.beta;
  var gamma    = ev.gamma;
}), true);

window.addEventListener("devicemotion", (ev) => {
  var acceleration  = ev.acceleration;
  var accelGrav     = ev.accelerationIncludingGravity;
  var rotationRate  = ev.rotationRate;
  var interval      = ev.interval;
}, true);
