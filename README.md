使用Ajax主要优势就是对页面的请求以异步方式通过javascript发送到服务器而不通过浏览器。服务器并不会用整个页面来响应请求，它会在后台处理请求与此同时用户还可以就绪浏览页面并与页面交互你的脚本可以按需加载和创建页面内容
都它依赖Javascript，所以可能会有浏览器不支持它，而搜索引擎的蜘蛛程序也不会抓取到有关内容

  一
  XMLHTTPRequest对像
  IE中创建对象：var request  =new ActivXObject("Msxml2.XMLHTTP.3.0");其它：var request  =new XMLHttpRequest();
  Javascript通过这个对象可以自己发送请求，同时也自己处理响应
  getHTTPObject函数检测XMLHTTPRequest是否存在。存在则return new XMLHTTPRquest();不存在则继续监测其它方法
  二
  XMLHttpRequest对象包含很多种方法
  open用来指定服务器上将要访问的文件，指定请求类型GET,POST SEND.此方法的第三个参数用于指定请求是否以异步方式发送和处理
  onreadystatechange是一个事件处理函数，在服务器给XMLHttRequest对象送回响应的时候被触发执行
  request.onreadystatechange = dosomething (在指定引用函数时不要加括号。加括号表示立即调用函数，而我们此时只想把函数自身的引用(而不是函数结果)赋值给onreadystatechange属性
  request.send(null)发送请求
  readyState属性的值
  0表示未初始化
  1表示正在加载
  2表示加载完毕
  3表示正在交互
  4表示完成
  只要readyState属性值变成4就可以直接访问服务器发送回来的数据了
  访问服务器发送回来的数据有两个属性
  ：responsetText responseXML(用于保存Content-Type头部中指定为“text/xml)的数据，其实是一个DocumentFragment对象
  
  
  注意
  在使用Ajax要注意同源策略
 脚本不会等待send响应而是会继续执行
 web设计人员必须在向服务器发出请求和服务器返回响应时。给用户明确的提示
GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进去。
                                                                                     
