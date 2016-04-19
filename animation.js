// Email Popup Animation Test - Timeline
$('#logo').on('click', function(e) {
  
  e.preventDefault();
  
  var tl = new TimelineLite({onComplete:tlcb});
  
  //define elements
  var all = $('#emailInvasion');
  var envelope = $('#emailInvasion .envelope');
  var cover = $('#emailInvasion .envelopeCover');
  var paper = $('#emailInvasion .paperForm');
  var close = $('#emailInvasion .closeEnvelope');
  
  TweenLite.set(cover, {transformStyle:"preserve-3d"});
  
  tl.to(all, .5, {top:200,ease:Power1.easeOut})
    .to(cover, 0.5, {transform:"rotateX(180deg)",ease:Power1.easeOut})
    .to(paper, 0.25, {top:"-90px",height:15,autoAlpha:1, ease:Power1.easeOut})
    .to(paper, 0.25, {height:200, ease:Power1.easeOut})
    .to(paper, 0.25, {top:"-65px",autoAlpha:1, overflow:"visible",ease:Power1.easeOut})
    .to(close, 0.25, {autoAlpha:1,ease:Power1.easeOut})
  
  function tlcb() {
    //timeline onComplete callback (if needed)
  }
  
  //Trigger Animation Timeline
  tl.play();
  
  //Reverse Animation Timeline
  close.on('click', function(e) {
    tl.reverse();
  });
  
});