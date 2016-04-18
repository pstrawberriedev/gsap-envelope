// Email Popup Animation Test
$('#logo').on('click', function(e) {
  
  e.preventDefault();
  
  //define elements
  var all = $('#emailInvasion');
  var envelope = $('#emailInvasion .envelope');
  var cover = $('#emailInvasion .envelopeCover');
  var paper = $('#emailInvasion .paperForm');
  
  TweenLite.set(cover, {transformStyle:"preserve-3d"});
  
  //do things!
  TweenLite.to(all, .8, {top:200,ease:Power1.easeOut, onComplete:coverFlip})
  
  //cover flip animation
  function coverFlip() { //transform-origin:center top;
    TweenLite.to(cover, 0.5, {transform:"rotateX(180deg)",ease:Power1.easeOut, onComplete:envelopeOpen1})
  }
  
  //envelope open animation
  function envelopeOpen1() {
    TweenLite.to(paper, 0.25, {top:"-90px",height:15,autoAlpha:1, ease:Power1.easeOut,onComplete:envelopeOpen2})
  }
  function envelopeOpen2() {
    TweenLite.to(paper, 0.25, {height:200, ease:Power1.easeOut,onComplete:envelopeOpen3})
  }
  function envelopeOpen3() {
    TweenLite.to(paper, 0.25, {top:"-65px",autoAlpha:1, overflow:"visible",ease:Power1.easeOut})
  }
  
});