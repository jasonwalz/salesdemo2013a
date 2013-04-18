
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","stop",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5999,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4999,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6999,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7999,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-orange-circle1-back-btn}","click",function(sym,e){sym.stop('orange1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-red-circle1-back-btn}","click",function(sym,e){sym.stop('red1');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9499,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10249,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10999,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11749,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13249,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",14249,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15220,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16249,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_POS2}","click",function(sym,e){sym.play('pos_highlight');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LOS2}","click",function(sym,e){sym.play('los_highlight');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2250,function(sym,e){sym.play('pos');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){sym.play('los');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_Platform}","click",function(sym,e){sym.play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-green-circle1-back-btn}","click",function(sym,e){sym.stop('green1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-blue-circle1-back-btn}","click",function(sym,e){sym.stop('blue1');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-orange-circle1-POS-back-btn}","click",function(sym,e){sym.stop('orange2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-red-circle1-POS-back-btn}","click",function(sym,e){sym.stop('red2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-green-circle1-POS-back-btn}","click",function(sym,e){sym.stop('green2');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_big-blue-circle1-POS-back-btn}","click",function(sym,e){sym.stop('blue2');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'OrangeCircle1_SideNav'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_LOS2}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_LOS3}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_LOS4}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_LOS1}","click",function(sym,e){sym.getComposition().getStage().play("orangeLOSzoom");});
//Edge binding end
})("OrangeCircle1_LOS_SideNav");
//Edge symbol end:'OrangeCircle1_LOS_SideNav'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'OrangeCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS1}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS2}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS3}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS4}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS5}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
})("RedCircle1_LOS_SideNav");
//Edge symbol end:'RedCircle1_LOS_SideNav'

//=========================================================

//Edge symbol: 'RedCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS1}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS2}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS3}","click",function(sym,e){window.open("http://mortgagebot.com/Solutions/LOSMortgage","_blank");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS4}","click",function(sym,e){sym.getComposition().getStage().play("greenLOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS5}","click",function(sym,e){sym.getComposition().getStage().play("greenLOSzoom");});
//Edge binding end
})("GreenCircle1_LOS_SideNav");
//Edge symbol end:'GreenCircle1_LOS_SideNav'

//=========================================================

//Edge symbol: 'GreenCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS1}","click",function(sym,e){sym.getComposition().getStage().play("blueLOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS2}","click",function(sym,e){sym.getComposition().getStage().play("blueLOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS3}","click",function(sym,e){sym.getComposition().getStage().play("blueLOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS4}","click",function(sym,e){sym.getComposition().getStage().play("blueLOSzoom");});
//Edge binding end
})("BlueCircle1_LOS_SideNav");
//Edge symbol end:'BlueCircle1_LOS_SideNav'

//=========================================================

//Edge symbol: 'OrangeCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_POS2}","click",function(sym,e){window.open('file:///C:/Emagine/Application.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_POS3}","click",function(sym,e){sym.getComposition().getStage().play("orangePOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_POS_bank}","click",function(sym,e){window.open("file:///c:/Emagine/bank.html");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_orange_POS_CU}","click",function(sym,e){window.open('file:///C:/Emagine/cu.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0'),"_self";});
//Edge binding end
})("OrangeCircle2_POS_SideNav");
//Edge symbol end:'OrangeCircle2_POS_SideNav'

//=========================================================

//Edge symbol: 'RedCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS1}","click",function(sym,e){window.open('file:///C:/Emagine/SearchCriteria.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS2}","click",function(sym,e){sym.getComposition().getStage().play("redPOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS3}","click",function(sym,e){window.open('file:///C:/Emagine/Default.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS4}","click",function(sym,e){window.open('file:///C:/Emagine/applyNow/ApplicationX23.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS5}","click",function(sym,e){window.open('file:///C:/Emagine/applyNow/ApplicationX23.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_red_LOS5Copy}","click",function(sym,e){window.open('file:///C:/Emagine/LoanStatus.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
})("RedCircle2_POS_SideNav");
//Edge symbol end:'RedCircle2_POS_SideNav'

//=========================================================

//Edge symbol: 'GreenCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS1}","click",function(sym,e){sym.getComposition().getStage().play("greenPOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS2}","click",function(sym,e){window.open('https://powermanager.mortgagewebcenter.com','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS3}","click",function(sym,e){window.open('file:///C:/Emagine/loSearch/loSearch.html','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS4}","click",function(sym,e){window.open('https://powermanager.mortgagewebcenter.com','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_green_LOS5}","click",function(sym,e){sym.getComposition().getStage().play("greenPOSzoom");});
//Edge binding end
})("GreenCircle2_POS_SideNav");
//Edge symbol end:'GreenCircle2_POS_SideNav'

//=========================================================

//Edge symbol: 'BlueCircle1_LOS_SideNav_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS1}","click",function(sym,e){sym.getComposition().getStage().play("bluePOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS2}","click",function(sym,e){sym.getComposition().getStage().play("bluePOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS3}","click",function(sym,e){sym.getComposition().getStage().play("bluePOSzoom");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_side_blue_LOS4}","click",function(sym,e){window.open('http://www.mortgagebot.com/index.php/Testimonials_videos/client_success/','popupwin','scrollbars=yes,resizable=no,width=1200,height=900,left=0,top=0');});
//Edge binding end
})("BlueCircle2_POS_SideNav");
//Edge symbol end:'BlueCircle2_POS_SideNav'

//=========================================================

//Edge symbol: 'BigGreenCircle'
(function(symbolName){})("BigGreenCircle");
//Edge symbol end:'BigGreenCircle'

//=========================================================

//Edge symbol: 'BigBlueCircle'
(function(symbolName){})("BigBlueCircle");
//Edge symbol end:'BigBlueCircle'
})(jQuery,AdobeEdge,"EDGE-18250368");