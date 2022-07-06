// -----JS CODE-----
//@input SceneObject parent
//@input SceneObject chield

//@input bool position
//@input vec3 positionOffset {"showIf":"position", "showIfValue":"true"}

//@input bool rotation
//@input quat rotationOffset {"showIf":"rotation", "showIfValue":"true"}

//@input bool scale
//@input vec3 scaleOffset {"showIf":"scale", "showIfValue":"true"}


var _parentT = script.parent.getTransform();
var _chieldT = script.chield.getTransform();

var event = script.createEvent("UpdateEvent");
event.bind(function (eventData)
{
   ObservePosition();
   ObserveRotation();
   ObserveScale();
});

function ObservePosition()
{	
	if(script.position === true)
	{
		var pPos = _parentT.getWorldPosition();
		var newPos = new vec3(pPos.x + script.positionOffset.x, pPos.y  + script.positionOffset.y, pPos.z + script.positionOffset.z);
		_chieldT.setWorldPosition(newPos);
	}
}

function ObserveRotation()
{	
	if(script.rotation === true)
	{
		var pRot = _parentT.getWorldRotation();
		var newRot = new quat(	pRot.w,
								pRot.x + script.rotationOffset.x,
								pRot.y  + script.rotationOffset.y,
								pRot.z + script.rotationOffset.z);
		_chieldT.setWorldRotation(newRot);
	}
}

function ObserveScale()
{	
	if(script.scale === true)
	{
		var pScale = _parentT.getWorldScale();
		var newScale = new vec3(pScale.x + script.scaleOffset.x, pScale.y  + script.scaleOffset.y, pScale.z + script.scaleOffset.z);
		_chieldT.setWorldScale(newScale);
	}
}