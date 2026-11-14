gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDCOMPUTERObjects1= [];
gdjs.Main_32MenuCode.GDCOMPUTERObjects2= [];
gdjs.Main_32MenuCode.GDWALLObjects1= [];
gdjs.Main_32MenuCode.GDWALLObjects2= [];
gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects1= [];
gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects2= [];
gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects1= [];
gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects2= [];
gdjs.Main_32MenuCode.GDTitle_9595of_9595the_9595GameObjects1= [];
gdjs.Main_32MenuCode.GDTitle_9595of_9595the_9595GameObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDNewSprite2Objects1= [];
gdjs.Main_32MenuCode.GDNewSprite2Objects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPLAY_95959595BUTTONObjects1Objects = Hashtable.newFrom({"PLAY_BUTTON": gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDEXIT_95959595BUTTONObjects1Objects = Hashtable.newFrom({"EXIT_BUTTON": gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPLAY_95959595BUTTONObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "clack.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fight", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXIT_BUTTON"), gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDEXIT_95959595BUTTONObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "clack.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDCOMPUTERObjects1.length = 0;
gdjs.Main_32MenuCode.GDCOMPUTERObjects2.length = 0;
gdjs.Main_32MenuCode.GDWALLObjects1.length = 0;
gdjs.Main_32MenuCode.GDWALLObjects2.length = 0;
gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects1.length = 0;
gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595of_9595the_9595GameObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595of_9595the_9595GameObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewSprite2Objects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDCOMPUTERObjects1.length = 0;
gdjs.Main_32MenuCode.GDCOMPUTERObjects2.length = 0;
gdjs.Main_32MenuCode.GDWALLObjects1.length = 0;
gdjs.Main_32MenuCode.GDWALLObjects2.length = 0;
gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.Main_32MenuCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects1.length = 0;
gdjs.Main_32MenuCode.GDEXIT_9595BUTTONObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595of_9595the_9595GameObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595of_9595the_9595GameObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
