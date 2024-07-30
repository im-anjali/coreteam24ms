VANTA.WAVES({
    el: "#vanta-canvas",
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    forceAnimate: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x000018,
    shininess: 17.00,
    waveHeight: 9.50,
    zoom: 1.02
  })
  let lastUpdate = 0;
  const fpsLimit = 30;
  
  function updateAnimation(timestamp) {
    if (timestamp - lastUpdate > 1000 / fpsLimit) {
      lastUpdate = timestamp;
      vantaEffect.update(); // Trigger update if applicable
    }
    requestAnimationFrame(updateAnimation);
  }
  
  requestAnimationFrame(updateAnimation);
  