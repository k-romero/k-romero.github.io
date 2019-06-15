console.log('up and running');

$(document).ready(function(){
  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in') //add class to project 01
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'black',
  //   indent: 200,
  //   colorStart: '#75C695'
  // }) //adds indicators for debugging
  .addTo(controller);

  var controller2 = new ScrollMagic.Controller();
  // build a scene
  var ourScene2 = new ScrollMagic.Scene({
    triggerElement: '#project02'
  })
  .setClassToggle('#project02', 'fade-in') //add class to project 01
  // .addIndicators()
  .addTo(controller2);

  var controller3 = new ScrollMagic.Controller();
  // build a scene
  var ourScene3 = new ScrollMagic.Scene({
    triggerElement: '#project03'
  })
  .setClassToggle('#project03', 'fade-in') //add class to project 01
  // .addIndicators()
  .addTo(controller3);


});