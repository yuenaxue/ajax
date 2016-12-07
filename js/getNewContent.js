/**
 * Create by chenjing on 2016/12/7.
 */
function getNewContent(){
    var request = getHttpObject();
    if(request){
    request.open("Get","example.txt",true);
    request.onreadystatechange = function (){
        if(request.readyState==4){
            var para = document.createElement("p");
            var txt = document.createTextNode(request.responseText);
            para.appendChild(txt);
            document.getElementById("new").appendChild(para);
            alert("发送完毕")

        }
    };
    request.send(null);
}
    else{
        alert("sorry your browser doesn\'t support XMLHttpRequest")
    }
    alert("正在发送请求");
}
addLoadEvent(getNewContent);