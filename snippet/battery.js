navigator.getBattery().then((battery) => {
  var charging        = battery.charging;
  var chargingTime    = battery.chargingTime;
  var dischargingTime = battery.dischargingTime;
  var level           = battery.level;
});
