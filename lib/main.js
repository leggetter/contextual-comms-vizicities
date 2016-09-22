import {vizi, orbit} from './vizi';
import $ from 'jquery';

window.orbit = orbit;


const main = function() {
  console.log('running...');
  
  const buttons = $('#button_bar button');
  
  buttons.click((e) => {
    var el = e.target;
    var action = el.innerText;
    
    console.log('action', action);
    
    switch(action) {
      case 'home':
        orbit.flyToLatLon([51.4415, -2.6], 3);
        break;
      case 'bristoljs':
        orbit.flyToLatLon([51.4517, -2.597], 3);
        break;
      case 'bristoljs-label':
        label([-2.597, 51.4515], 'BristolJS');
        break;
      case 'location':
        navigator.geolocation.getCurrentPosition((position) => {
          var coords = [position.coords.latitude, position.coords.longitude];
          orbit.flyToLatLon(coords, 3);
        });
        break;
    }
  });
};

function label(coords, text) {
  var pointLayer = VIZI.pointLayer(coords, {
    geometry: new THREE.BoxGeometry(1, 1, 1)
  }).addTo(vizi);

  console.log(pointLayer);

  var labelElement = document.createElement('div');
  var textEl = document.createTextNode(text);
  labelElement.appendChild(textEl);
  labelElement.classList.add('label');

  var labelObject = new THREE.CSS2DObject(labelElement);
  pointLayer.addDOM2D(labelObject);

  labelObject.position.x = pointLayer._projectedCoordinates[0].x;
  labelObject.position.y = 0;
  labelObject.position.z = pointLayer._projectedCoordinates[0].y;
}

main();
