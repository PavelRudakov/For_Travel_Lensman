// -----JS CODE-----
//@input SceneObject scrollTween



script.api.StartState = function()
{
	global.tweenManager.startTween(script.scrollTween,"play_scroll");
}

script.api.AwayState = function()
{
	global.tweenManager.stopTween(script.scrollTween,"play_scroll");
	global.tweenManager.startTween(script.scrollTween,"init");
}