console.log('up and running');

$(document).ready(function(){
  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();
  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01 img',
    triggerHook: 0.9
  })
  .setClassToggle('#project01', 'fade-in') //add class to project 01
  .addIndicators({
    name: 'fade scene',
    colorTrigger: 'black',
    indent: 100,
    colorStart: '#75C695',
    colorEnd: 'pink'
  })
  .addTo(controller);

  // loop through each .proj element
  $('.project').each(function(){
    console.log(this);
    // build a scene
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9
    })
    .setClassToggle(this, 'fade-in') //add class to project 01
    .addIndicators({
      name: 'fade scene',
      colorTrigger: 'black',
      indent: 100,
      colorStart: '#75C695',
      colorEnd: 'pink'
    })
    .addTo(controller);

  });
});