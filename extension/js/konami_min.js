var Konami=function(e){var t={addEvent:function(e,t,n,r){if(e.addEventListener)e.addEventListener(t,n,false);else if(e.attachEvent){e["e"+t+n]=n;e[t+n]=function(){e["e"+t+n](window.event,r)};e.attachEvent("on"+t,e[t+n])}},input:"",pattern:"38384040373937396665",load:function(e){this.addEvent(document,"keydown",function(n,r){if(r)t=r;t.input+=n?n.keyCode:event.keyCode;if(t.input.length>t.pattern.length)t.input=t.input.substr(t.input.length-t.pattern.length);if(t.input==t.pattern){t.code(e);t.input="";n.preventDefault();return false}},this);this.iphone.load(e)},code:function(e){window.location=e},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:false,capture:false,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],code:function(e){t.code(e)},load:function(e){this.orig_keys=this.keys;t.addEvent(document,"touchmove",function(e){if(e.touches.length==1&&t.iphone.capture==true){var n=e.touches[0];t.iphone.stop_x=n.pageX;t.iphone.stop_y=n.pageY;t.iphone.tap=false;t.iphone.capture=false;t.iphone.check_direction()}});t.addEvent(document,"touchend",function(n){if(t.iphone.tap==true)t.iphone.check_direction(e)},false);t.addEvent(document,"touchstart",function(e){t.iphone.start_x=e.changedTouches[0].pageX;t.iphone.start_y=e.changedTouches[0].pageY;t.iphone.tap=true;t.iphone.capture=true})},check_direction:function(e){x_magnitude=Math.abs(this.start_x-this.stop_x);y_magnitude=Math.abs(this.start_y-this.stop_y);x=this.start_x-this.stop_x<0?"RIGHT":"LEFT";y=this.start_y-this.stop_y<0?"DOWN":"UP";result=x_magnitude>y_magnitude?x:y;result=this.tap==true?"TAP":result;if(result==this.keys[0])this.keys=this.keys.slice(1,this.keys.length);if(this.keys.length==0){this.keys=this.orig_keys;this.code(e)}}}};typeof e==="string"&&t.load(e);if(typeof e==="function"){t.code=e;t.load()}return t}
