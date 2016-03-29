// Email Popup Animation Test
$('#logo').on('click', function(e) {
  
  e.preventDefault();
  
  //define elements
  var all = $('#emailInvasion');
  var envelope = $('#emailInvasion .envelope');
  var cover = $('#emailInvasion .envelopeCover');
  var paper = $('#emailInvasion .paperForm');
  
  //do things!
  TweenLite.to(all, 0.35, {top:200,ease:Power1.easeOut, onComplete:coverFlip})
  
  //cover flip animation
  function coverFlip() {
    TweenLite.to(cover, 0.5, {transform:"rotateX(180deg)", top:"-115px",ease:Power1.easeOut, onComplete:envelopeOpen1})
  }
  
  //envelope open animation
  function envelopeOpen1() {
    TweenLite.to(paper, 0.25, {top:"-70px",height:15,autoAlpha:1,ease:Power1.easeOut,onComplete:envelopeOpen2})
  }
  function envelopeOpen2() {
    TweenLite.to(paper, 0.25, {height:110, ease:Power1.easeOut,onComplete:envelopeOpen3})
  }
  function envelopeOpen3() {
    TweenLite.to(paper, 0.25, {top:20,autoAlpha:1,ease:Power1.easeOut})
  }
  
});