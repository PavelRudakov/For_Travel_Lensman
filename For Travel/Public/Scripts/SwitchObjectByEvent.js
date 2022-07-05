////////////////////////
// NOTE: script works with DevTools.js 
////////////////////////

//@input bool advanced {"label":"Events:"}
//@input bool Tap {"showIf":"advanced", "showIfValue":"true"}
//@input bool TouchStart {"showIf":"advanced", "showIfValue":"true"}
//@input bool TouchEnd {"showIf":"advanced", "showIfValue":"true"}
//@input bool BrowsLowered {"showIf":"advanced", "showIfValue":"true"}
//@input bool BrowsRaised {"showIf":"advanced", "showIfValue":"true"}
//@input bool CameraBack {"showIf":"advanced", "showIfValue":"true"}
//@input bool CameraFront {"showIf":"advanced", "showIfValue":"true"}
//@input bool FaceFound {"showIf":"advanced", "showIfValue":"true"}
//@input bool FaceLost {"showIf":"advanced", "showIfValue":"true"}
//@input bool KissStarted {"showIf":"advanced", "showIfValue":"true"}
//@input bool MouthOpened {"showIf":"advanced", "showIfValue":"true"}
//@input bool MouthClosed {"showIf":"advanced", "showIfValue":"true"}
//@input bool SmileStarted {"showIf":"advanced", "showIfValue":"true"}
//@input bool SmileFinished {"showIf":"advanced", "showIfValue":"true"}
//@input bool SnapImageCapture {"showIf":"advanced", "showIfValue":"true"}
//@input bool SnapRecordStart {"showIf":"advanced", "showIfValue":"true"}
//@input bool SnapRecordStop {"showIf":"advanced", "showIfValue":"true"}

//@ui {"widget":"separator"}

//@input SceneObject[] objList
//@input int startValue
//@input bool isForward

var _i = script.startValue;

var TapEvent = script.createEvent("TapEvent");
TapEvent.bind(onTapped);
function onTapped(eventData)
{
	if(script.Tap)
    	DoEvent();
}

var touchStartEvent = script.createEvent("TouchStartEvent");
touchStartEvent.bind(function(eventData)
{
    if(script.TouchStart)
    	DoEvent();
});

var touchEndEvent = script.createEvent("TouchEndEvent");
touchEndEvent.bind(function(eventData)
{
    if(script.TouchEnd)
    	DoEvent();
});

var browsLoweredEvent = script.createEvent("BrowsLoweredEvent");
browsLoweredEvent.faceIndex = 0;
browsLoweredEvent.bind(function (eventData)
{
	if(script.BrowsLowered)
    	DoEvent();
});

var browsRaisedEvent = script.createEvent("BrowsRaisedEvent");
browsRaisedEvent.faceIndex = 0;
browsRaisedEvent.bind(function (eventData)
{
	if(script.BrowsRaised)
    	DoEvent();
});

var сameraBackEvent = script.createEvent("CameraBackEvent");
сameraBackEvent.bind(function (eventData)
{
	if(script.CameraBack)
    	DoEvent();
});

var сameraFrontEvent = script.createEvent("CameraFrontEvent");
сameraFrontEvent.bind(function (eventData)
{
	if(script.CameraFront)
    	DoEvent();
});

var faceFoundEvent = script.createEvent("FaceFoundEvent");
faceFoundEvent.faceIndex = 0;
faceFoundEvent.bind(function (eventData)
{
	if(script.FaceFound)
    	DoEvent();
});

var faceLostEvent = script.createEvent("FaceLostEvent");
faceLostEvent.faceIndex = 0;
faceLostEvent.bind(function (eventData)
{
	if(script.FaceLost)
    	DoEvent();
});

var kissStartedEvent = script.createEvent("KissStartedEvent");
kissStartedEvent.faceIndex = 0;
kissStartedEvent.bind(function (eventData)
{
	if(script.KissStarted)
    	DoEvent();
});

var mouthOpenedEvent = script.createEvent("MouthOpenedEvent");
mouthOpenedEvent.faceIndex = 0;
mouthOpenedEvent.bind(function (eventData)
{
	if(script.MouthOpened)
    	DoEvent();
});

var mouthClosedEvent = script.createEvent("MouthClosedEvent");
mouthClosedEvent.faceIndex = 0;
mouthClosedEvent.bind(function (eventData)
{
	if(script.MouthClosed)
    	DoEvent();
});

var smileStartedEvent = script.createEvent("SmileStartedEvent");
smileStartedEvent.faceIndex = 0;
smileStartedEvent.bind(function (eventData)
{
	if(script.SmileStarted)
    	DoEvent();
});

var smileFinishedEvent = script.createEvent("SmileFinishedEvent");
smileFinishedEvent.faceIndex = 0;
smileFinishedEvent.bind(function (eventData)
{
	if(script.SmileFinished)
    	DoEvent();
});

script.createEvent("SnapImageCaptureEvent").bind(function() {
	if(script.SnapImageCapture)
    	DoEvent();
});

script.createEvent("SnapRecordStartEvent").bind(function() {
    if(script.SnapRecordStart)
    	DoEvent();
});

script.createEvent("SnapRecordStopEvent").bind(function() {
    if(script.SnapRecordStop)
    	DoEvent();
});

function DoEvent()
{
	_i = global.updateSelectedIndexInList(_i,script.objList.length,script.isForward);
    UpdateList(_i);
}

function UpdateList(id)
{
	for (var i = script.objList.length - 1; i >= 0; i--) {
		script.objList[i].enabled = false;
	}

	script.objList[id].enabled = true;
}

UpdateList(script.startValue);