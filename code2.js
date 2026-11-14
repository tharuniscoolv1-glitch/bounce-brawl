gdjs.Death_32ScreenCode = {};
gdjs.Death_32ScreenCode.localVariables = [];
gdjs.Death_32ScreenCode.idToCallbackMap = new Map();
gdjs.Death_32ScreenCode.GDWALLObjects1= [];
gdjs.Death_32ScreenCode.GDWALLObjects2= [];
gdjs.Death_32ScreenCode.GDNewSpriteObjects1= [];
gdjs.Death_32ScreenCode.GDNewSpriteObjects2= [];
gdjs.Death_32ScreenCode.GDNewTextObjects1= [];
gdjs.Death_32ScreenCode.GDNewTextObjects2= [];
gdjs.Death_32ScreenCode.GDNewSprite2Objects1= [];
gdjs.Death_32ScreenCode.GDNewSprite2Objects2= [];
gdjs.Death_32ScreenCode.GDFlamelashObjects1= [];
gdjs.Death_32ScreenCode.GDFlamelashObjects2= [];
gdjs.Death_32ScreenCode.GDFel_9595SpellObjects1= [];
gdjs.Death_32ScreenCode.GDFel_9595SpellObjects2= [];
gdjs.Death_32ScreenCode.GDBright_9595FireObjects1= [];
gdjs.Death_32ScreenCode.GDBright_9595FireObjects2= [];
gdjs.Death_32ScreenCode.GDFire_9595SpinObjects1= [];
gdjs.Death_32ScreenCode.GDFire_9595SpinObjects2= [];
gdjs.Death_32ScreenCode.GDCastingObjects1= [];
gdjs.Death_32ScreenCode.GDCastingObjects2= [];
gdjs.Death_32ScreenCode.GDBlue_9595FireObjects1= [];
gdjs.Death_32ScreenCode.GDBlue_9595FireObjects2= [];
gdjs.Death_32ScreenCode.GDMagic_9595LoopObjects1= [];
gdjs.Death_32ScreenCode.GDMagic_9595LoopObjects2= [];
gdjs.Death_32ScreenCode.GDMagic_9595BubblesObjects1= [];
gdjs.Death_32ScreenCode.GDMagic_9595BubblesObjects2= [];
gdjs.Death_32ScreenCode.GDMagic_9595SpellObjects1= [];
gdjs.Death_32ScreenCode.GDMagic_9595SpellObjects2= [];
gdjs.Death_32ScreenCode.GDMagickahitObjects1= [];
gdjs.Death_32ScreenCode.GDMagickahitObjects2= [];
gdjs.Death_32ScreenCode.GDWeapon_9595hitObjects1= [];
gdjs.Death_32ScreenCode.GDWeapon_9595hitObjects2= [];
gdjs.Death_32ScreenCode.GDProtection_9595CircleObjects1= [];
gdjs.Death_32ScreenCode.GDProtection_9595CircleObjects2= [];
gdjs.Death_32ScreenCode.GDfireObjects1= [];
gdjs.Death_32ScreenCode.GDfireObjects2= [];
gdjs.Death_32ScreenCode.GDfreezingObjects1= [];
gdjs.Death_32ScreenCode.GDfreezingObjects2= [];
gdjs.Death_32ScreenCode.GDmidnightObjects1= [];
gdjs.Death_32ScreenCode.GDmidnightObjects2= [];
gdjs.Death_32ScreenCode.GDnebulaObjects1= [];
gdjs.Death_32ScreenCode.GDnebulaObjects2= [];
gdjs.Death_32ScreenCode.GDphantomObjects1= [];
gdjs.Death_32ScreenCode.GDphantomObjects2= [];
gdjs.Death_32ScreenCode.GDloadingObjects1= [];
gdjs.Death_32ScreenCode.GDloadingObjects2= [];
gdjs.Death_32ScreenCode.GDvortexObjects1= [];
gdjs.Death_32ScreenCode.GDvortexObjects2= [];
gdjs.Death_32ScreenCode.GDsunburnObjects1= [];
gdjs.Death_32ScreenCode.GDsunburnObjects2= [];


gdjs.Death_32ScreenCode.mapOfGDgdjs_9546Death_959532ScreenCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Death_32ScreenCode.GDNewSpriteObjects1});
gdjs.Death_32ScreenCode.mapOfGDgdjs_9546Death_959532ScreenCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Death_32ScreenCode.GDNewSprite2Objects1});
gdjs.Death_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4.5, "", 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "gameover_08.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Death_32ScreenCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32ScreenCode.mapOfGDgdjs_9546Death_959532ScreenCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Death_32ScreenCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32ScreenCode.mapOfGDgdjs_9546Death_959532ScreenCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "clack.mp3", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


};

gdjs.Death_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_32ScreenCode.GDWALLObjects1.length = 0;
gdjs.Death_32ScreenCode.GDWALLObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.Death_32ScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.Death_32ScreenCode.GDFlamelashObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFlamelashObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFel_9595SpellObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFel_9595SpellObjects2.length = 0;
gdjs.Death_32ScreenCode.GDBright_9595FireObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBright_9595FireObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFire_9595SpinObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFire_9595SpinObjects2.length = 0;
gdjs.Death_32ScreenCode.GDCastingObjects1.length = 0;
gdjs.Death_32ScreenCode.GDCastingObjects2.length = 0;
gdjs.Death_32ScreenCode.GDBlue_9595FireObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBlue_9595FireObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595LoopObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595LoopObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595BubblesObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595BubblesObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595SpellObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595SpellObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagickahitObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagickahitObjects2.length = 0;
gdjs.Death_32ScreenCode.GDWeapon_9595hitObjects1.length = 0;
gdjs.Death_32ScreenCode.GDWeapon_9595hitObjects2.length = 0;
gdjs.Death_32ScreenCode.GDProtection_9595CircleObjects1.length = 0;
gdjs.Death_32ScreenCode.GDProtection_9595CircleObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfireObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfireObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfreezingObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfreezingObjects2.length = 0;
gdjs.Death_32ScreenCode.GDmidnightObjects1.length = 0;
gdjs.Death_32ScreenCode.GDmidnightObjects2.length = 0;
gdjs.Death_32ScreenCode.GDnebulaObjects1.length = 0;
gdjs.Death_32ScreenCode.GDnebulaObjects2.length = 0;
gdjs.Death_32ScreenCode.GDphantomObjects1.length = 0;
gdjs.Death_32ScreenCode.GDphantomObjects2.length = 0;
gdjs.Death_32ScreenCode.GDloadingObjects1.length = 0;
gdjs.Death_32ScreenCode.GDloadingObjects2.length = 0;
gdjs.Death_32ScreenCode.GDvortexObjects1.length = 0;
gdjs.Death_32ScreenCode.GDvortexObjects2.length = 0;
gdjs.Death_32ScreenCode.GDsunburnObjects1.length = 0;
gdjs.Death_32ScreenCode.GDsunburnObjects2.length = 0;

gdjs.Death_32ScreenCode.eventsList0(runtimeScene);
gdjs.Death_32ScreenCode.GDWALLObjects1.length = 0;
gdjs.Death_32ScreenCode.GDWALLObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.Death_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.Death_32ScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.Death_32ScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.Death_32ScreenCode.GDFlamelashObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFlamelashObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFel_9595SpellObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFel_9595SpellObjects2.length = 0;
gdjs.Death_32ScreenCode.GDBright_9595FireObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBright_9595FireObjects2.length = 0;
gdjs.Death_32ScreenCode.GDFire_9595SpinObjects1.length = 0;
gdjs.Death_32ScreenCode.GDFire_9595SpinObjects2.length = 0;
gdjs.Death_32ScreenCode.GDCastingObjects1.length = 0;
gdjs.Death_32ScreenCode.GDCastingObjects2.length = 0;
gdjs.Death_32ScreenCode.GDBlue_9595FireObjects1.length = 0;
gdjs.Death_32ScreenCode.GDBlue_9595FireObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595LoopObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595LoopObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595BubblesObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595BubblesObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595SpellObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagic_9595SpellObjects2.length = 0;
gdjs.Death_32ScreenCode.GDMagickahitObjects1.length = 0;
gdjs.Death_32ScreenCode.GDMagickahitObjects2.length = 0;
gdjs.Death_32ScreenCode.GDWeapon_9595hitObjects1.length = 0;
gdjs.Death_32ScreenCode.GDWeapon_9595hitObjects2.length = 0;
gdjs.Death_32ScreenCode.GDProtection_9595CircleObjects1.length = 0;
gdjs.Death_32ScreenCode.GDProtection_9595CircleObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfireObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfireObjects2.length = 0;
gdjs.Death_32ScreenCode.GDfreezingObjects1.length = 0;
gdjs.Death_32ScreenCode.GDfreezingObjects2.length = 0;
gdjs.Death_32ScreenCode.GDmidnightObjects1.length = 0;
gdjs.Death_32ScreenCode.GDmidnightObjects2.length = 0;
gdjs.Death_32ScreenCode.GDnebulaObjects1.length = 0;
gdjs.Death_32ScreenCode.GDnebulaObjects2.length = 0;
gdjs.Death_32ScreenCode.GDphantomObjects1.length = 0;
gdjs.Death_32ScreenCode.GDphantomObjects2.length = 0;
gdjs.Death_32ScreenCode.GDloadingObjects1.length = 0;
gdjs.Death_32ScreenCode.GDloadingObjects2.length = 0;
gdjs.Death_32ScreenCode.GDvortexObjects1.length = 0;
gdjs.Death_32ScreenCode.GDvortexObjects2.length = 0;
gdjs.Death_32ScreenCode.GDsunburnObjects1.length = 0;
gdjs.Death_32ScreenCode.GDsunburnObjects2.length = 0;


return;

}

gdjs['Death_32ScreenCode'] = gdjs.Death_32ScreenCode;
