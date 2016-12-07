/**
 * Created by chenjing on 2016/12/7.
 */
function getHttpObject(){
    if(typeof XMLHttpRequest=="undefined")
        XMLHttpRequest = function(){
            try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP3.0");}
            catch(e){}
            try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch(e){}
        };
        return new XMLHttpRequest();
}
