var globalVar;
function getObjX(){
    return document.getElementById("coord-form:coordX");
}
function getX(){
    return getObjX().value;
}
function getObjY(){
    return document.getElementById("coord-form:coordY");
}
function getY(){
    return getObjY().value;
}
function getR(){
    var array=document.getElementsByName("coord-form:paramR");
    for (let i=0;i<array.length;i++){
        if (array[i].checked) return array[i].value;
    }return array[0];//зачем это 
}
function checkX(event){

        if(getX().match(new RegExp("^((-[1-5])|(-[0-4][\.,][0-9]{1,})|([0-5])|([0-4](\.)[0-9]{1,}))$"))){
            getObjX().style.backgroundColor="#9C9";
            return true;
        }
        getObjX().style.backgroundColor="#f33" ;
        return false; 
}
function checkY(event){

        if(getY().match(new RegExp("^((-[1-3])|(-[0-2][\.,][0-9]{1,})|([0-5])|([0-4](\.)[0-9]{1,}))$"))){
            getObjY().style.backgroundColor="#9C9";
            return true;
        }
        getObjY().style.backgroundColor="#f33" ;
        return false; 
}
function checkR(event){
    return true;
      
}
//проверка правильности формы. X и R считается всегда определённым, так что проверка Y
function formcheck() {
        if(checkX() && checkY() && checkR()){
            document.getElementById("wrong-input-message").hidden=true;
            return true;		
        }
        document.getElementById("wrong-input-message").hidden=false;
        return false;
}
function checkXandDraw(){
    checkX();
    draw_scene(getX(),getY(), getR());
}
function checkYandDraw(){
    checkY();
    draw_scene(getX(),getY(), getR());
}
function checkRandDraw(){
    checkR();
    draw_scene(getX(),getY(), getR());
}
function reactOnRadioButton(radio){
    globalVar=radio;
}
checkRandDraw();