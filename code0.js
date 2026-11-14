gdjs.FightCode = {};
gdjs.FightCode.localVariables = [];
gdjs.FightCode.idToCallbackMap = new Map();
gdjs.FightCode.GDPlayerObjects1_1final = [];

gdjs.FightCode.GDWALLObjects1_1final = [];

gdjs.FightCode.GDWallObjects1_1final = [];

gdjs.FightCode.forEachIndex2 = 0;

gdjs.FightCode.forEachObjects2 = [];

gdjs.FightCode.forEachTemporary2 = null;

gdjs.FightCode.forEachTotalCount2 = 0;

gdjs.FightCode.GDPlayerObjects1= [];
gdjs.FightCode.GDPlayerObjects2= [];
gdjs.FightCode.GDPlayerObjects3= [];
gdjs.FightCode.GDPlayerObjects4= [];
gdjs.FightCode.GDEnemyObjects1= [];
gdjs.FightCode.GDEnemyObjects2= [];
gdjs.FightCode.GDEnemyObjects3= [];
gdjs.FightCode.GDEnemyObjects4= [];
gdjs.FightCode.GDWallObjects1= [];
gdjs.FightCode.GDWallObjects2= [];
gdjs.FightCode.GDWallObjects3= [];
gdjs.FightCode.GDWallObjects4= [];
gdjs.FightCode.GDAimIndicatorObjects1= [];
gdjs.FightCode.GDAimIndicatorObjects2= [];
gdjs.FightCode.GDAimIndicatorObjects3= [];
gdjs.FightCode.GDAimIndicatorObjects4= [];
gdjs.FightCode.GDWALLObjects1= [];
gdjs.FightCode.GDWALLObjects2= [];
gdjs.FightCode.GDWALLObjects3= [];
gdjs.FightCode.GDWALLObjects4= [];
gdjs.FightCode.GDsunburnObjects1= [];
gdjs.FightCode.GDsunburnObjects2= [];
gdjs.FightCode.GDsunburnObjects3= [];
gdjs.FightCode.GDsunburnObjects4= [];
gdjs.FightCode.GDvortexObjects1= [];
gdjs.FightCode.GDvortexObjects2= [];
gdjs.FightCode.GDvortexObjects3= [];
gdjs.FightCode.GDvortexObjects4= [];
gdjs.FightCode.GDnebulaObjects1= [];
gdjs.FightCode.GDnebulaObjects2= [];
gdjs.FightCode.GDnebulaObjects3= [];
gdjs.FightCode.GDnebulaObjects4= [];
gdjs.FightCode.GDMelodie_9595WheelObjects1= [];
gdjs.FightCode.GDMelodie_9595WheelObjects2= [];
gdjs.FightCode.GDMelodie_9595WheelObjects3= [];
gdjs.FightCode.GDMelodie_9595WheelObjects4= [];
gdjs.FightCode.GDNewSpriteObjects1= [];
gdjs.FightCode.GDNewSpriteObjects2= [];
gdjs.FightCode.GDNewSpriteObjects3= [];
gdjs.FightCode.GDNewSpriteObjects4= [];
gdjs.FightCode.GDWALL2Objects1= [];
gdjs.FightCode.GDWALL2Objects2= [];
gdjs.FightCode.GDWALL2Objects3= [];
gdjs.FightCode.GDWALL2Objects4= [];
gdjs.FightCode.GDkillCounterObjects1= [];
gdjs.FightCode.GDkillCounterObjects2= [];
gdjs.FightCode.GDkillCounterObjects3= [];
gdjs.FightCode.GDkillCounterObjects4= [];
gdjs.FightCode.GDTRIPLE_9595KILLObjects1= [];
gdjs.FightCode.GDTRIPLE_9595KILLObjects2= [];
gdjs.FightCode.GDTRIPLE_9595KILLObjects3= [];
gdjs.FightCode.GDTRIPLE_9595KILLObjects4= [];
gdjs.FightCode.GDQUADObjects1= [];
gdjs.FightCode.GDQUADObjects2= [];
gdjs.FightCode.GDQUADObjects3= [];
gdjs.FightCode.GDQUADObjects4= [];
gdjs.FightCode.GDPENTAObjects1= [];
gdjs.FightCode.GDPENTAObjects2= [];
gdjs.FightCode.GDPENTAObjects3= [];
gdjs.FightCode.GDPENTAObjects4= [];


gdjs.FightCode.mapOfEmptyGDAimIndicatorObjects = Hashtable.newFrom({"AimIndicator": []});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDAimIndicatorObjects2Objects = Hashtable.newFrom({"AimIndicator": gdjs.FightCode.GDAimIndicatorObjects2});
gdjs.FightCode.mapOfEmptyGDMelodie_9595WheelObjects = Hashtable.newFrom({"Melodie_Wheel": []});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDMelodie_95959595WheelObjects2Objects = Hashtable.newFrom({"Melodie_Wheel": gdjs.FightCode.GDMelodie_9595WheelObjects2});
gdjs.FightCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.FightCode.mapOfEmptyGDAimIndicatorObjects) == 0;
if (isConditionTrue_0) {
gdjs.FightCode.GDAimIndicatorObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDAimIndicatorObjects2Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects2[i].setZOrder(100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.FightCode.mapOfEmptyGDMelodie_9595WheelObjects) == 0;
if (isConditionTrue_0) {
gdjs.FightCode.GDMelodie_9595WheelObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDMelodie_95959595WheelObjects2Objects, 60, 40, "");
}
{for(var i = 0, len = gdjs.FightCode.GDMelodie_9595WheelObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDMelodie_9595WheelObjects2[i].setZOrder(100);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FightCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Melodie_Wheel"), gdjs.FightCode.GDMelodie_9595WheelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PENTA"), gdjs.FightCode.GDPENTAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("QUAD"), gdjs.FightCode.GDQUADObjects1);
gdjs.copyArray(runtimeScene.getObjects("TRIPLE_KILL"), gdjs.FightCode.GDTRIPLE_9595KILLObjects1);
gdjs.copyArray(runtimeScene.getObjects("WALL"), gdjs.FightCode.GDWALLObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.FightCode.GDWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("killCounter"), gdjs.FightCode.GDkillCounterObjects1);
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects1[i].setScale(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setGravity(0, runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setGravityScale(1);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setRestitution(runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDWallObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDWallObjects1[i].getBehavior("Physics2").setRestitution(runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDWALLObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDWALLObjects1[i].getBehavior("Physics2").setRestitution(runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(38).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(37).setNumber(runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(80);
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawnTimer");
}
{for(var i = 0, len = gdjs.FightCode.GDMelodie_9595WheelObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDMelodie_9595WheelObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(-1);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(3);
}
{for(var i = 0, len = gdjs.FightCode.GDkillCounterObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDkillCounterObjects1[i].getBehavior("Text").setText("x0");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MultiKillTimer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MultiKillDisplayTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PentaCooldownTimer");
}
{for(var i = 0, len = gdjs.FightCode.GDTRIPLE_9595KILLObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDTRIPLE_9595KILLObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDQUADObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDQUADObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPENTAObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPENTAObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FightCode.GDPlayerObjects1});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FightCode.GDPlayerObjects1});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.FightCode.GDEnemyObjects1});
gdjs.FightCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.FightCode.GDEnemyObjects2, gdjs.FightCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.FightCode.GDEnemyObjects3[i].getX() > 1750 ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDEnemyObjects3[k] = gdjs.FightCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.FightCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects3[i].returnVariable(gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(2)).setNumber(-1);
}
}
}

}


{

gdjs.copyArray(gdjs.FightCode.GDEnemyObjects2, gdjs.FightCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.FightCode.GDEnemyObjects3[i].getX() < 150 ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDEnemyObjects3[k] = gdjs.FightCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.FightCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects3[i].returnVariable(gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(gdjs.FightCode.GDEnemyObjects2, gdjs.FightCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.FightCode.GDEnemyObjects3[i].getY() > 850 ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDEnemyObjects3[k] = gdjs.FightCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.FightCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects3[i].returnVariable(gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(1)).setNumber(-1);
}
}
}

}


{

gdjs.copyArray(gdjs.FightCode.GDEnemyObjects2, gdjs.FightCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.FightCode.GDEnemyObjects3[i].getY() < 200 ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDEnemyObjects3[k] = gdjs.FightCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.FightCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDEnemyObjects3 */
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects3[i].returnVariable(gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects2, gdjs.FightCode.GDEnemyObjects3);

{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects3[i].getBehavior("Physics2").setLinearVelocityX(gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(2).getAsNumber() * gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects3[i].getBehavior("Physics2").setLinearVelocityY(gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(1).getAsNumber() * (gdjs.FightCode.GDEnemyObjects3[i].getVariables().getFromIndex(0).getAsNumber() * 0.4));
}
}
}

}


};gdjs.FightCode.mapOfEmptyGDEnemyObjects = Hashtable.newFrom({"Enemy": []});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.FightCode.GDEnemyObjects1});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.FightCode.GDPlayerObjects1});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.FightCode.GDEnemyObjects1});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDTRIPLE_95959595KILLObjects2Objects = Hashtable.newFrom({"TRIPLE_KILL": gdjs.FightCode.GDTRIPLE_9595KILLObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDQUADObjects2Objects = Hashtable.newFrom({"QUAD": gdjs.FightCode.GDQUADObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPENTAObjects2Objects = Hashtable.newFrom({"PENTA": gdjs.FightCode.GDPENTAObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDsunburnObjects2Objects = Hashtable.newFrom({"sunburn": gdjs.FightCode.GDsunburnObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDvortexObjects2Objects = Hashtable.newFrom({"vortex": gdjs.FightCode.GDvortexObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDnebulaObjects2Objects = Hashtable.newFrom({"nebula": gdjs.FightCode.GDnebulaObjects2});
gdjs.FightCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects1, gdjs.FightCode.GDEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("PENTA"), gdjs.FightCode.GDPENTAObjects2);
gdjs.copyArray(runtimeScene.getObjects("QUAD"), gdjs.FightCode.GDQUADObjects2);
gdjs.copyArray(runtimeScene.getObjects("TRIPLE_KILL"), gdjs.FightCode.GDTRIPLE_9595KILLObjects2);
{for(var i = 0, len = gdjs.FightCode.GDQUADObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDQUADObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPENTAObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPENTAObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDTRIPLE_9595KILLObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDTRIPLE_9595KILLObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDTRIPLE_95959595KILLObjects2Objects, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterXInScene()) - 120, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterYInScene()) - 50, "");
}
{for(var i = 0, len = gdjs.FightCode.GDTRIPLE_9595KILLObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDTRIPLE_9595KILLObjects2[i].setZOrder(105);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MultiKillDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects1, gdjs.FightCode.GDEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("PENTA"), gdjs.FightCode.GDPENTAObjects2);
gdjs.copyArray(runtimeScene.getObjects("QUAD"), gdjs.FightCode.GDQUADObjects2);
gdjs.copyArray(runtimeScene.getObjects("TRIPLE_KILL"), gdjs.FightCode.GDTRIPLE_9595KILLObjects2);
{for(var i = 0, len = gdjs.FightCode.GDTRIPLE_9595KILLObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDTRIPLE_9595KILLObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPENTAObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPENTAObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDQUADObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDQUADObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDQUADObjects2Objects, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterXInScene()) - 65, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterYInScene()) - 50, "");
}
{for(var i = 0, len = gdjs.FightCode.GDQUADObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDQUADObjects2[i].setZOrder(105);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MultiKillDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects1, gdjs.FightCode.GDEnemyObjects2);

gdjs.copyArray(runtimeScene.getObjects("PENTA"), gdjs.FightCode.GDPENTAObjects2);
gdjs.copyArray(runtimeScene.getObjects("QUAD"), gdjs.FightCode.GDQUADObjects2);
gdjs.copyArray(runtimeScene.getObjects("TRIPLE_KILL"), gdjs.FightCode.GDTRIPLE_9595KILLObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PentaCooldownTimer");
}
{for(var i = 0, len = gdjs.FightCode.GDTRIPLE_9595KILLObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDTRIPLE_9595KILLObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDQUADObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDQUADObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPENTAObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPENTAObjects2[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPENTAObjects2Objects, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterXInScene()) - 100, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterYInScene()) - 60, "");
}
{for(var i = 0, len = gdjs.FightCode.GDPENTAObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPENTAObjects2[i].setZOrder(105);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MultiKillDisplayTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects1, gdjs.FightCode.GDEnemyObjects2);

gdjs.FightCode.GDsunburnObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDsunburnObjects2Objects, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterXInScene()) - 50 * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterYInScene()) - 50 * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.FightCode.GDsunburnObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDsunburnObjects2[i].setScale(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDsunburnObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDsunburnObjects2[i].setZOrder(50);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects1, gdjs.FightCode.GDEnemyObjects2);

gdjs.FightCode.GDvortexObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDvortexObjects2Objects, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterXInScene()) - 50 * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterYInScene()) - 50 * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.FightCode.GDvortexObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDvortexObjects2[i].setScale(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDvortexObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDvortexObjects2[i].setZOrder(50);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDEnemyObjects1, gdjs.FightCode.GDEnemyObjects2);

gdjs.FightCode.GDnebulaObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDnebulaObjects2Objects, (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterXInScene()) - 50 * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), (( gdjs.FightCode.GDEnemyObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDEnemyObjects2[0].getCenterYInScene()) - 50 * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.FightCode.GDnebulaObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDnebulaObjects2[i].setScale(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDnebulaObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDnebulaObjects2[i].setZOrder(50);
}
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.FightCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.FightCode.GDPlayerObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDWALLObjects2Objects = Hashtable.newFrom({"WALL": gdjs.FightCode.GDWALLObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.FightCode.GDPlayerObjects2});
gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.FightCode.GDWallObjects2});
gdjs.FightCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() > 1.2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
}

}


};gdjs.FightCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(30).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(12).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber((( gdjs.FightCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects2[0].getBehavior("Physics2").getLinearVelocityX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber((( gdjs.FightCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects2[0].getBehavior("Physics2").getLinearVelocityY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber((( gdjs.FightCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects2[0].getBehavior("Physics2").getAngularVelocity()));
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setGravityScale(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setAngularVelocity(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(29).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getBehavior("Physics2").getLinearVelocityX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getBehavior("Physics2").getLinearVelocityY()));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getBehavior("Physics2").getAngularVelocity()));
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setGravityScale(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setAngularVelocity(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
}

}


};gdjs.FightCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.FightCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.distanceBetweenPositions((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) > 20);
}
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDPlayerObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(43).setNumber(gdjs.evtTools.common.angleBetweenPositions((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterXInScene()), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}

}


};gdjs.FightCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber()));
}
}

}


};gdjs.FightCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(44).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDPlayerObjects1, gdjs.FightCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityAngle(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(47).getAsNumber());
}
}

{ //Subevents
gdjs.FightCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(44).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDPlayerObjects1, gdjs.FightCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityX(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityY(runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(30).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
}

}


};gdjs.FightCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(12).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber()));
}
}

}


};gdjs.FightCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(44).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDPlayerObjects1, gdjs.FightCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityAngle(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(47).getAsNumber());
}
}

{ //Subevents
gdjs.FightCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(44).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.FightCode.GDPlayerObjects1, gdjs.FightCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityX(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearVelocityY(runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(30).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
}

}


};gdjs.FightCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Level_1.mp3", 1, true, 100, 1);
}
}

}


};gdjs.FightCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "", 0);
}

{ //Subevents
gdjs.FightCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{gdjs.physics2.setTimeScale(gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects1Objects, "Physics2", runtimeScene.getScene().getVariables().getFromIndex(40).getAsNumber());
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(40).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(38).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{gdjs.physics2.setTimeScale(gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects1Objects, "Physics2", 1);
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(38).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(1 + (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber() / 100));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FightCode.GDEnemyObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() - (runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() + gdjs.evtTools.object.pickedObjectsCount(gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDEnemyObjects1Objects) * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) * 0.01667));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death Screen", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FightCode.GDEnemyObjects1);

for (gdjs.FightCode.forEachIndex2 = 0;gdjs.FightCode.forEachIndex2 < gdjs.FightCode.GDEnemyObjects1.length;++gdjs.FightCode.forEachIndex2) {
gdjs.FightCode.GDEnemyObjects2.length = 0;


gdjs.FightCode.forEachTemporary2 = gdjs.FightCode.GDEnemyObjects1[gdjs.FightCode.forEachIndex2];
gdjs.FightCode.GDEnemyObjects2.push(gdjs.FightCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.FightCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.FightCode.mapOfEmptyGDEnemyObjects) < 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemySpawnTimer") > 1 / runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber();
}
if (isConditionTrue_0) {
gdjs.FightCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawnTimer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDEnemyObjects1Objects, gdjs.randomInRange(300, 1500), gdjs.randomInRange(200, 700), "");
}
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects1[i].setScale(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects1[i].returnVariable(gdjs.FightCode.GDEnemyObjects1[i].getVariables().getFromIndex(2)).setNumber(gdjs.randomWithStep(-1, 1, 2));
}
}
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects1[i].returnVariable(gdjs.FightCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomWithStep(-1, 1, 2));
}
}
{for(var i = 0, len = gdjs.FightCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDEnemyObjects1[i].returnVariable(gdjs.FightCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(80);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.FightCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects1Objects, "Physics2", gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDEnemyObjects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("killCounter"), gdjs.FightCode.GDkillCounterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() + Math.max(15, (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getBehavior("Physics2").getLinearVelocityLength()) * runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber())));
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityAngle((gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").getLinearVelocityAngle()), ((gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").getLinearVelocityLength()) + runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}
{for(var i = 0, len = gdjs.FightCode.GDkillCounterObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDkillCounterObjects1[i].getBehavior("Text").setText("x" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(gdjs.randomInRange(1, 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MultiKillTimer");
}

{ //Subevents
gdjs.FightCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sunburn"), gdjs.FightCode.GDsunburnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDsunburnObjects1.length;i<l;++i) {
    if ( gdjs.FightCode.GDsunburnObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDsunburnObjects1[k] = gdjs.FightCode.GDsunburnObjects1[i];
        ++k;
    }
}
gdjs.FightCode.GDsunburnObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDsunburnObjects1 */
{for(var i = 0, len = gdjs.FightCode.GDsunburnObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDsunburnObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("vortex"), gdjs.FightCode.GDvortexObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDvortexObjects1.length;i<l;++i) {
    if ( gdjs.FightCode.GDvortexObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDvortexObjects1[k] = gdjs.FightCode.GDvortexObjects1[i];
        ++k;
    }
}
gdjs.FightCode.GDvortexObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDvortexObjects1 */
{for(var i = 0, len = gdjs.FightCode.GDvortexObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDvortexObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("nebula"), gdjs.FightCode.GDnebulaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FightCode.GDnebulaObjects1.length;i<l;++i) {
    if ( gdjs.FightCode.GDnebulaObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FightCode.GDnebulaObjects1[k] = gdjs.FightCode.GDnebulaObjects1[i];
        ++k;
    }
}
gdjs.FightCode.GDnebulaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.FightCode.GDnebulaObjects1 */
{for(var i = 0, len = gdjs.FightCode.GDnebulaObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDnebulaObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MultiKillDisplayTimer") > 2.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PENTA"), gdjs.FightCode.GDPENTAObjects1);
gdjs.copyArray(runtimeScene.getObjects("QUAD"), gdjs.FightCode.GDQUADObjects1);
gdjs.copyArray(runtimeScene.getObjects("TRIPLE_KILL"), gdjs.FightCode.GDTRIPLE_9595KILLObjects1);
{for(var i = 0, len = gdjs.FightCode.GDTRIPLE_9595KILLObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDTRIPLE_9595KILLObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDQUADObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDQUADObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPENTAObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPENTAObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "MultiKillTimer") > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PentaCooldownTimer") > 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{

gdjs.FightCode.GDPlayerObjects1.length = 0;

gdjs.FightCode.GDWALLObjects1.length = 0;

gdjs.FightCode.GDWallObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.FightCode.GDPlayerObjects1_1final.length = 0;
gdjs.FightCode.GDWALLObjects1_1final.length = 0;
gdjs.FightCode.GDWallObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("WALL"), gdjs.FightCode.GDWALLObjects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects2Objects, "Physics2", gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDWALLObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.FightCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FightCode.GDPlayerObjects1_1final.indexOf(gdjs.FightCode.GDPlayerObjects2[j]) === -1 )
            gdjs.FightCode.GDPlayerObjects1_1final.push(gdjs.FightCode.GDPlayerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.FightCode.GDWALLObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FightCode.GDWALLObjects1_1final.indexOf(gdjs.FightCode.GDWALLObjects2[j]) === -1 )
            gdjs.FightCode.GDWALLObjects1_1final.push(gdjs.FightCode.GDWALLObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.FightCode.GDWallObjects2);
isConditionTrue_1 = gdjs.physics2.haveObjectsStartedColliding(gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDPlayerObjects2Objects, "Physics2", gdjs.FightCode.mapOfGDgdjs_9546FightCode_9546GDWallObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.FightCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FightCode.GDPlayerObjects1_1final.indexOf(gdjs.FightCode.GDPlayerObjects2[j]) === -1 )
            gdjs.FightCode.GDPlayerObjects1_1final.push(gdjs.FightCode.GDPlayerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.FightCode.GDWallObjects2.length; j < jLen ; ++j) {
        if ( gdjs.FightCode.GDWallObjects1_1final.indexOf(gdjs.FightCode.GDWallObjects2[j]) === -1 )
            gdjs.FightCode.GDWallObjects1_1final.push(gdjs.FightCode.GDWallObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.FightCode.GDPlayerObjects1_1final, gdjs.FightCode.GDPlayerObjects1);
gdjs.copyArray(gdjs.FightCode.GDWALLObjects1_1final, gdjs.FightCode.GDWALLObjects1);
gdjs.copyArray(gdjs.FightCode.GDWallObjects1_1final, gdjs.FightCode.GDWallObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(37).setNumber(runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(30).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(29).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber());
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).add(0.01667);
}

{ //Subevents
gdjs.FightCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11281996);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FightCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(29).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(33).add(0.01667);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).add(0.01667);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber(), 0, 1));
}
{runtimeScene.getScene().getVariables().getFromIndex(37).setNumber((runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(35).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(80 + 160 * runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber());
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setGravityScale(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityX(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearVelocityY(0);
}
}
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setAngularVelocity(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}

{ //Subevents
gdjs.FightCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(29).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setGravityScale(1);
}
}

{ //Subevents
gdjs.FightCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(29).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.FightCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDPlayerObjects1[i].getBehavior("Physics2").setGravityScale(1);
}
}

{ //Subevents
gdjs.FightCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AimIndicator"), gdjs.FightCode.GDAimIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Melodie_Wheel"), gdjs.FightCode.GDMelodie_9595WheelObjects1);
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].clear();
}
}
{for(var i = 0, len = gdjs.FightCode.GDMelodie_9595WheelObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDMelodie_9595WheelObjects1[i].setAnimationFrame(gdjs.evtTools.common.clamp(Math.round(runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber() * 11), 0, 11));
}
}
{for(var i = 0, len = gdjs.FightCode.GDMelodie_9595WheelObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDMelodie_9595WheelObjects1[i].rotate(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber(), runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(29).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(44).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AimIndicator"), gdjs.FightCode.GDAimIndicatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.FightCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].setOutlineColor("255;230;0");
}
}
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].drawLineV2((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterXInScene()) + gdjs.evtTools.common.getXFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterYInScene()) + gdjs.evtTools.common.getYFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterXInScene()) + gdjs.evtTools.common.getXFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber()), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterYInScene()) + gdjs.evtTools.common.getYFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber()), 6 + 4 * runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber());
}
}
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].setOutlineColor("255;215;0");
}
}
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].setOutlineSize(2);
}
}
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].setFillColor("255;255;0");
}
}
{for(var i = 0, len = gdjs.FightCode.GDAimIndicatorObjects1.length ;i < len;++i) {
    gdjs.FightCode.GDAimIndicatorObjects1[i].drawCircle((( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterXInScene()) + gdjs.evtTools.common.getXFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber()), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getCenterYInScene()) + gdjs.evtTools.common.getYFromAngleAndDistance(runtimeScene.getScene().getVariables().getFromIndex(43).getAsNumber(), (( gdjs.FightCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.FightCode.GDPlayerObjects1[0].getWidth()) / 2 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber()), 8 + 5 * runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber());
}
}
}

}


{


gdjs.FightCode.eventsList10(runtimeScene);
}


};

gdjs.FightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FightCode.GDPlayerObjects1.length = 0;
gdjs.FightCode.GDPlayerObjects2.length = 0;
gdjs.FightCode.GDPlayerObjects3.length = 0;
gdjs.FightCode.GDPlayerObjects4.length = 0;
gdjs.FightCode.GDEnemyObjects1.length = 0;
gdjs.FightCode.GDEnemyObjects2.length = 0;
gdjs.FightCode.GDEnemyObjects3.length = 0;
gdjs.FightCode.GDEnemyObjects4.length = 0;
gdjs.FightCode.GDWallObjects1.length = 0;
gdjs.FightCode.GDWallObjects2.length = 0;
gdjs.FightCode.GDWallObjects3.length = 0;
gdjs.FightCode.GDWallObjects4.length = 0;
gdjs.FightCode.GDAimIndicatorObjects1.length = 0;
gdjs.FightCode.GDAimIndicatorObjects2.length = 0;
gdjs.FightCode.GDAimIndicatorObjects3.length = 0;
gdjs.FightCode.GDAimIndicatorObjects4.length = 0;
gdjs.FightCode.GDWALLObjects1.length = 0;
gdjs.FightCode.GDWALLObjects2.length = 0;
gdjs.FightCode.GDWALLObjects3.length = 0;
gdjs.FightCode.GDWALLObjects4.length = 0;
gdjs.FightCode.GDsunburnObjects1.length = 0;
gdjs.FightCode.GDsunburnObjects2.length = 0;
gdjs.FightCode.GDsunburnObjects3.length = 0;
gdjs.FightCode.GDsunburnObjects4.length = 0;
gdjs.FightCode.GDvortexObjects1.length = 0;
gdjs.FightCode.GDvortexObjects2.length = 0;
gdjs.FightCode.GDvortexObjects3.length = 0;
gdjs.FightCode.GDvortexObjects4.length = 0;
gdjs.FightCode.GDnebulaObjects1.length = 0;
gdjs.FightCode.GDnebulaObjects2.length = 0;
gdjs.FightCode.GDnebulaObjects3.length = 0;
gdjs.FightCode.GDnebulaObjects4.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects1.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects2.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects3.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects4.length = 0;
gdjs.FightCode.GDNewSpriteObjects1.length = 0;
gdjs.FightCode.GDNewSpriteObjects2.length = 0;
gdjs.FightCode.GDNewSpriteObjects3.length = 0;
gdjs.FightCode.GDNewSpriteObjects4.length = 0;
gdjs.FightCode.GDWALL2Objects1.length = 0;
gdjs.FightCode.GDWALL2Objects2.length = 0;
gdjs.FightCode.GDWALL2Objects3.length = 0;
gdjs.FightCode.GDWALL2Objects4.length = 0;
gdjs.FightCode.GDkillCounterObjects1.length = 0;
gdjs.FightCode.GDkillCounterObjects2.length = 0;
gdjs.FightCode.GDkillCounterObjects3.length = 0;
gdjs.FightCode.GDkillCounterObjects4.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects1.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects2.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects3.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects4.length = 0;
gdjs.FightCode.GDQUADObjects1.length = 0;
gdjs.FightCode.GDQUADObjects2.length = 0;
gdjs.FightCode.GDQUADObjects3.length = 0;
gdjs.FightCode.GDQUADObjects4.length = 0;
gdjs.FightCode.GDPENTAObjects1.length = 0;
gdjs.FightCode.GDPENTAObjects2.length = 0;
gdjs.FightCode.GDPENTAObjects3.length = 0;
gdjs.FightCode.GDPENTAObjects4.length = 0;

gdjs.FightCode.eventsList11(runtimeScene);
gdjs.FightCode.GDPlayerObjects1.length = 0;
gdjs.FightCode.GDPlayerObjects2.length = 0;
gdjs.FightCode.GDPlayerObjects3.length = 0;
gdjs.FightCode.GDPlayerObjects4.length = 0;
gdjs.FightCode.GDEnemyObjects1.length = 0;
gdjs.FightCode.GDEnemyObjects2.length = 0;
gdjs.FightCode.GDEnemyObjects3.length = 0;
gdjs.FightCode.GDEnemyObjects4.length = 0;
gdjs.FightCode.GDWallObjects1.length = 0;
gdjs.FightCode.GDWallObjects2.length = 0;
gdjs.FightCode.GDWallObjects3.length = 0;
gdjs.FightCode.GDWallObjects4.length = 0;
gdjs.FightCode.GDAimIndicatorObjects1.length = 0;
gdjs.FightCode.GDAimIndicatorObjects2.length = 0;
gdjs.FightCode.GDAimIndicatorObjects3.length = 0;
gdjs.FightCode.GDAimIndicatorObjects4.length = 0;
gdjs.FightCode.GDWALLObjects1.length = 0;
gdjs.FightCode.GDWALLObjects2.length = 0;
gdjs.FightCode.GDWALLObjects3.length = 0;
gdjs.FightCode.GDWALLObjects4.length = 0;
gdjs.FightCode.GDsunburnObjects1.length = 0;
gdjs.FightCode.GDsunburnObjects2.length = 0;
gdjs.FightCode.GDsunburnObjects3.length = 0;
gdjs.FightCode.GDsunburnObjects4.length = 0;
gdjs.FightCode.GDvortexObjects1.length = 0;
gdjs.FightCode.GDvortexObjects2.length = 0;
gdjs.FightCode.GDvortexObjects3.length = 0;
gdjs.FightCode.GDvortexObjects4.length = 0;
gdjs.FightCode.GDnebulaObjects1.length = 0;
gdjs.FightCode.GDnebulaObjects2.length = 0;
gdjs.FightCode.GDnebulaObjects3.length = 0;
gdjs.FightCode.GDnebulaObjects4.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects1.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects2.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects3.length = 0;
gdjs.FightCode.GDMelodie_9595WheelObjects4.length = 0;
gdjs.FightCode.GDNewSpriteObjects1.length = 0;
gdjs.FightCode.GDNewSpriteObjects2.length = 0;
gdjs.FightCode.GDNewSpriteObjects3.length = 0;
gdjs.FightCode.GDNewSpriteObjects4.length = 0;
gdjs.FightCode.GDWALL2Objects1.length = 0;
gdjs.FightCode.GDWALL2Objects2.length = 0;
gdjs.FightCode.GDWALL2Objects3.length = 0;
gdjs.FightCode.GDWALL2Objects4.length = 0;
gdjs.FightCode.GDkillCounterObjects1.length = 0;
gdjs.FightCode.GDkillCounterObjects2.length = 0;
gdjs.FightCode.GDkillCounterObjects3.length = 0;
gdjs.FightCode.GDkillCounterObjects4.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects1.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects2.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects3.length = 0;
gdjs.FightCode.GDTRIPLE_9595KILLObjects4.length = 0;
gdjs.FightCode.GDQUADObjects1.length = 0;
gdjs.FightCode.GDQUADObjects2.length = 0;
gdjs.FightCode.GDQUADObjects3.length = 0;
gdjs.FightCode.GDQUADObjects4.length = 0;
gdjs.FightCode.GDPENTAObjects1.length = 0;
gdjs.FightCode.GDPENTAObjects2.length = 0;
gdjs.FightCode.GDPENTAObjects3.length = 0;
gdjs.FightCode.GDPENTAObjects4.length = 0;


return;

}

gdjs['FightCode'] = gdjs.FightCode;
