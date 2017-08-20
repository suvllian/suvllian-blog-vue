exports.toTop = (function f(acceleration, stime){
	var acceleration = acceleration || 0.1,
    stime = stime || 10,
    y1 = 0,
    y2 = 0,
    y3 = 0; 

  if (document.documentElement) {
    y1 = document.documentElement.scrollTop || 0;
  }
  if (document.body) {
    y2 = document.body.scrollTop || 0;
  }

  var y3 = window.scrollY || 0,
    y = Math.max(y1, Math.max(y2, y3)),
    speeding = 1 + acceleration;
    
  window.scrollTo(0, Math.floor(y / speeding));
  if(y > 0) {
    setTimeout(function(){
      f();
    }, stime);
  }
})