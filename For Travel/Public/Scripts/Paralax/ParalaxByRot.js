//	@input SceneObject rotTracker
//	@input Component.ScreenTransform image2D
//	@input float sensitivity {"widget":"slider", "min":0.0, "max":1.0, "step":0.01}
//	@input float lerpSpeed {"widget":"slider", "min":0.0, "max":1.0, "step":0.05}
//	@input vec2 clampValue // min max


var screenTransform = script.image2D;

var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
	var forward = script.rotTracker.getTransform().left ;
	yRadian = Math.atan2(forward.z, forward.x)  + Math.PI // y rotation

	var angleY = Math.degrees(yRadian);
	var yRot = (angleY < 180) ? angleY : angleY - 360;

	var val = clamp(yRot*-script.sensitivity,script.clampValue.x,script.clampValue.y);


	var lerpVec = vec2.lerp(screenTransform.anchors.getCenter(),new vec2(val,screenTransform.anchors.getCenter().y),script.lerpSpeed);
   	screenTransform.anchors.setCenter(lerpVec);
});

Math.radians = function(degrees) {
	return degrees * Math.PI / 180;
}

Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}

function clamp(a,b,c)
{
	return Math.max(b,Math.min(c,a));
}
