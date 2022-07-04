// BindTransform.js
// Version: 0.0.1
// Event: Lens Initialized
// Description: Bind one object's transform to the object this script is on (position, rotation, scale)

// @input SceneObject sourceObject
// @input SceneObject childObject
// @input bool bindPosition
// @input bool bindRotation
// @input bool bindScale

//@input vec2 yLimits
//@input float XOffset
//@input float YOffeset
//@input float ZOffset

if (!script.sourceObject) {
    print("ERROR: Source object to copy transform from is not set");
    return;
}

var sceneObject = script.getSceneObject();
var transform = sceneObject.getTransform();

var bindedTransform = script.sourceObject.getTransform();

var initPosition = transform.getLocalPosition();
var initRotation = transform.getLocalRotation();
var initScale = transform.getLocalScale();


script.createEvent("UpdateEvent").bind(onUpdate);
function onUpdate() {
    applyTransform();
    //print(bindedTransform.getWorldRotation().x);
};

var faceFoundEvent = script.createEvent("FaceFoundEvent");
faceFoundEvent.faceIndex = 0;
faceFoundEvent.bind(function (eventData)
{
    script.childObject.enabled = true;
});

var faceLostEvent = script.createEvent("FaceLostEvent");
faceLostEvent.faceIndex = 0;
faceLostEvent.bind(function (eventData)
{
    script.childObject.enabled = false;
});

function applyTransform() {
   
   	var _coeff = 1;

    if(script.bindPosition) {
        var pos = bindedTransform.getWorldPosition();
        var _coeff = 1;
        var _inc = 1;
        /*if(bindedTransform.getWorldRotation().x>0)
    	{
    		var _inc = 3.5;
   			_coeff+=(bindedTransform.getWorldRotation().x*_inc);
   		}*/
        var _y = script.YOffeset*_coeff;
        //print(_y);
        transform.setWorldPosition(new vec3(pos.x + script.XOffset, pos.y + _y, pos.z + script.ZOffset));
    }

    if (script.bindRotation) {
        var rotation = bindedTransform.getWorldRotation();

        if(rotation.y < script.yLimits.x)
            rotation.y = script.yLimits.x;
        if(rotation.y > script.yLimits.y)
            rotation.y = script.yLimits.y;

        rotation.x = 0;
        rotation.z = 0;
        transform.setWorldRotation(rotation.multiply(initRotation));
    }

    if (script.bindScale) {
        var scale = bindedTransform.getWorldScale();
        transform.setWorldScale(scale.mult(initScale));
    }   
}
