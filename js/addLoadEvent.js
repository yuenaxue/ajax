/**
 * Created by chenjing on 2016/12/7.
 */
function addLoadEvent(fun){
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=fun;
    }
    else{
        window.onload=function(){
            oldonload();
            fun();
        }

    }
}