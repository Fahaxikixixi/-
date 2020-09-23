# 命名规范

## (1)页面框架命名,一般具有唯一性,推荐用ID命名

ID名称

命名

头部header

主体main

脚部footer

容器wrapper

侧栏side_bar

栏目column

布局layout

## (2)模块结构命名



CLASS名称

命名

模块(如:新闻模块)mod (mod_news)

标题栏title

内容content

次级内容sub_content

(2)导航结构命名

CLASS名称

命名

CLASS名称

命名

导航nav

主导航main_nav

子导航sub_nav
顶部导航top_nav

菜单menu

子菜单sub_menu

## (3)一般元素命名

CLASS名称

命名

二级sub
面包屑breadcrumb

标志logo

广告Bner(禁用banner或ad)

登陆login

注册regsiter/reg

搜索search

加入join

状态status

按钮btn

滚动scroll

标签页tab

文章列表list

短消息msg/message

当前的current

提示小技巧tips

图标icon

注释note

指南guide

服务service

热点hot

新闻news

下载download

投票vote

合作伙伴partner

友情链接link

版权copyright

演示demo

下拉框select

摘要summary

翻页pages

主题风格themes

设置set

成功suc

按钮btn

文本txt

颜色color/c

背景bg

边框border/bor

居中center

上top/t

下bottom/b

左left/l

右right/r

添加add

删除del

间隔sp

段落p

弹出层pop

公共global/gb

操作op

密码pwd

透明tran

信息info

重点hit

预览pvw

单行输入框input

首页index

日志blog

相册photo

留言板guestbook

用户user

确认confirm

取消cancel

报错error

## 4.图片命名

1)背景图片:bg001,bg002,bg003……

2)一般图片:img001,img002,img003……

3)特定图片:如banner,logo按照具体情况命名

4)按钮图片:btn_submit,btn_cancel…….

# HTML

### margin , padding

> margin就用来调相邻节点的距离，padding用来调父子节点距离

### form表单

#### οnsubmit=“return false;"

```js
<form id="mainForm" method="post" name="mainForm" onsubmit="return false;">
    
//如果onsubmit中沒有return false ，那么当表单中只有一个input框时，数据将会被自动提交（不需要按钮，直接按enter即可提交触发form的action）；而有了它，数据不会被自动提交。
```

```css
一般和下面的组合使用  :	
		 text-overflow: ellipsis;    文本超出变省略号
   		 white-space: nowrap;	     文本不换行
   		 overflow: hidden;	     超出装文本容器隐藏

		-webkit-line-clamp:3;		第几行显示省略号

多行文本，显示到第二行 显示省略号
 					overflow: hidden;
                    -webkit-line-clamp:2 ;
                    -webkit-box-orient:vertical;
					display:-webkit-box;
```

```css
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);    去除a标签 超级链接点击后出现的背景框

去除 button按钮  textarea留言输入框 点击时的自带边框

1.
:focus{
	outline:0;	
}      
2.   在需要去除边框的css属性上添加 outline:none;  若无法使用就用第一种

```

```css
背景颜色渐变：
	background: linear-gradient(to bottom,yellow 20%,blue 70%)
线性渐变
语法：linear-gradient(to bottom,colorStrat,colorEnd)
参数含义：
第一个参数指定 渐变的方向
to bottom 从上至下；to bottom 

right 从左上至右下；to right 从左至右；to up right 从左下至右上；
to up 从下至下；to up left 从右下至左上；to left 从右至左；to 

bottom left 从右上至左下




```

## textarea 输入内容框禁止拉伸

> resize:none

## 垂直居中

1.transform：translate（xx，xx） （xx:可以是百分比，也可以是px）

2.linear-height： 元素高度   or   line-height：center

3.position 绝对定位     设置 top：50%   or  height：50%

4.flex 布局    垂直居中的属性

5.vertical-align: middle;  （寻找兄弟元素最高的最为参照居中）（也适用与图片）（**作用环境：**父元素设置line-height。

**作用对象：**子元素中的inline-block和inline元素。）

## 浮动导致的高度塌陷问题

1.给父元素设置overflow：hidden（可能导致一些元素被隐藏，使用时注意元素是否正常）

2.在最后一个子元素添加一个其他元素，并给添加的元素设置clear：both（清除浮动）（容易造成代码的多余）

3.给父元素设置伪类：after  并给伪类设置clear：both 属性（**建议使用**，但在IE8下不支持伪类，这时可换其他方法）

4.给元素设置固定宽高，调到合适大小（不建议使用，不自适应，体验差）



## text 文本

```css
text-indent: .5rem;  设置文字缩进长度
letter-spacing: .1rem;	设置文字间的距离
```

## a标签

```js
href:
	写入javascript.void（0）或者javascript：； 阻止链接跳转
    

<a href= “javascript:history.go(-1)”>  :上一个页面，就是前一个页面
<a href= “javascript:history.go(0)”>  ，<a href= “javascript:；”>  不跳转

<a href= “javascript:history.go(1)”>  :下一个页面，就是后一个页面

```

```css
text-decoration: none; 去除下划线
a标签默认颜色直接用color 去除
```

鼠标经过变成手状：cursor:pointer

```js
元素名：hover{
    cursor:pointer；
}
```



## 伪类

```css
使用伪元素   1.content：'';     	宽高必须写上
	必要情况写上position：; 	定位

```

## 透明度

```css
opacity:0;  透明度 (0-1)
cursor:pointer;  图片??
```





# CSS3



## 过渡

```js
 transition: background-color .5s,color .5s;
                    -moz-transition:background-color .5s,color .5s, -moz-transform .5s; /* Firefox 4 */
                    -webkit-transition:background-color .5s,color .5s, -webkit-transform .5s; /* Safari and Chrome */
                    -o-transition:background-colors .5s,color .5s, -o-transform .5s; /* Opera */
```



例：背景颜色  和 字体颜色的 过渡  0.5s

```js
 .tabsty{
                    background-color:@bcolor;
                    color: @textColor;
                    transition: background-color .5s,color .5s;
                    -moz-transition:background-color .5s,color .5s, -moz-transform .5s; /* Firefox 4 */
                    -webkit-transition:background-color .5s,color .5s, -webkit-transform .5s; /* Safari and Chrome */
                    -o-transition:background-colors .5s,color .5s, -o-transform .5s; /* Opera */
                }
```







# 移动开发

动Web开发、Bootstrap等。要注意移动开发中的适配和兼容性问题

# canvas

# JavaScript

### showTip

## DOM元素操作

> https://blog.csdn.net/qq_39125445/article/details/88389656

### setAttribute( )设置属性值

> 
>
> 语法： 元素名.setAttribute('属性名'，'值' )； 主要针对于自定义属性

```js
<div calss="thios" index="1"></div>  //index为自定义属性

var div = docment.getElementsByClassName('thios')
div.setAttribute("index","2");
//结果： div内的自定义属性index的值就变为了  2  index="2"

```



> 元素名.属性="值"  //主要设置的是内置属性值

```js

div.calsName='os';	//这样也可以更改div的类名
//输出：  div的class  >>  calss="os"
```

### getAttribute( ) 获取元素值

> 获取自定义数据时一定用这个
>
> 语法： 需获取属性值的元素名.getAttribute('属性名')

### removeAttribute( )删除指定属性值

> 语法： 元素名.removeAttribute('属性名' )



### 获取元素

#### getElementsById()

> ```js
> getElementByld()`：通过id来选择元素
> 语法：`document.getElementById("id名")
> ```

* `getElementByld()`：不可以操作动态的DOM

* 

#### getElementsByClassName()

> ```js
> getElementsByClassName()`：通过class来选择元素
> 语法：`document.getElementsByClassName("类名")
> ```



#### getElementsByTagName()

> 通过元素标签名来选择元素
>
> 语法：document.getElementsByTagName("标签名")

* `getElementsByTagName()`能操作动态创建的DOM

#### 以上三个的区别与应用

* **getElementById** 是通过id来获取元素，id在HTML中是唯一的，所以获取到的只有一个元素。
* **getElementsByClassName** 是通过类名来获取元素，同名的类在HTML中也能存在多个，所以获取到的也是多个元素，同样是以集合的形式反回。
* **getElementsByTagNam** 是通过标签名来获取元素，一种标签在HTML中可以有多个，所以获取到的是多个元素，且返回是以集合的形式返回。

```js
例：	//失败例子介绍
var inp = document.getElementsByClassName('sss').getElementsByTagName('input');
//注：这样不会成功， 因为getElementsByClassName（对比区别）返回的是集合，getElementsByTagName返回的也是集合 
```

```js
例：  //正确方式
var inp = document.getElementById('sss').getElementsByTagName('input');
//id是唯一的，所有可以正确找到对应元素
```

​      

#### querySelector()和querySelectorAll()

> querySelector()和querySelectorAll()：通过选择器的方式来获取所需要的元素
> 		querySelector()：选取满足选择条件的第一个元素
> 		querySelectorAll()：选取满足条件的所有元素
> 语法：
> 		document.querSelector("选择器“)
> 		document.querySelectorAll("选择器")
> 		选择器名称就是类名

* 当使用querySelectorAll()方法时，若被选中多个，就可以看作是一个数组了

```js
    //有多个 .text时， 选中从0开始的第1个元素color设置为red
    var oDiv = document.querySelectorAll(".text");
    oDiv[1].style.color = "red";
```

#### getElementsByName()

>getElementsByName()：表单元素一般有一个其他元素都没有的name属性，如果想要通过name属性来获取表单元素，我们可以使用getElementsByName()来实现。
>语法：document.getElementsByName("name名")

* 一般的getElementsByName()只用于表单元素，且只用于单选按钮和复选框

### 获取父节点，子节点，兄弟节点

#### 父，子，兄弟节点

> 获取父节点语法：子元素.parentNode
>
> 例：爷爷元素.removeChild(this.parentNode.parentNode)

> 获取子节点：父元素节点.children[索引指定子元素]       （索引从0开始）

> previousElementSibling  上一个兄弟节点

> nextElementSibling  下一个兄弟节点

### 创建元素

#### createTextNode( ) ,createElement( )

> createTextNode( )  创建文本节点
>
> createElement( ) 	创建元素节点

```js
例1.
var oDiv = document.getElementById("box");  //一个id 为box 容器（html中原有的元素）

var oStrong = document.createElement("p");//创建一个元素节点（这里是p标签，可以自己更改）

var oText = document.createTextNode("这是添加的文字")；//创建一个文本节点

oStrong.appendChild(oText);//将文本节点插入到创建的元素节点
oDiv.appendChild(oStrong);//将插入了文本节点的元素节点插入到 id为box 的容器中

//输出 ==>  这是添加的文字
```

```js
例2.//创建带属性的元素
	var oInput = document.createElemnt("input");
	oInput.id = "submit";
	oInput.type = "button";
	oInput.value = "提交";
docment.body.appendChild(oInput);

//输出了一个带 id type value 属性的 按钮
```



<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200629173628055.png" alt="image-20200629173628055"  />

![image-20200629173724271](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200629173724271.png)

#### innerHTML

```js
  需要创建新元素的元素名.innerHTML ="<a href='javascript:;'>删除</a>"
//a标签将在需要创建新元素的元素里面添加这一整个
```

```js
了解：innerText
需要创建新元素的元素名.innerText ="<a href='javascript:;'>删除</a>"
//a标签将会以文本的形式输出到页面 ==>
==>	<a href='javascript:;'>删除</a>
```



### 插入元素

####  appendChild()

> appendChild()		插入 
>
> ​	语法：`A.appendChild(B)`：在没有特殊说明的情况下，A表示父元素，B表示动态创建好的新元素

```js
例1.
var oDiv = document.getElementById("box");  //一个id 为box 容器（html中原有的元素）

var oStrong = document.createElement("p");//创建一个元素节点（这里是p标签，可以自己更改）

var oText = document.createTextNode("这是添加的文字")；//创建一个文本节点

oStrong.appendChild(oText);//将文本节点插入到创建的元素节点
oDiv.appendChild(oStrong);//将插入了文本节点的元素节点插入到 id为box 的容器中

//输出 ==>  这是添加的文字
```



#### insertBefore()

> insertBefore()`：将一个新的元素插入到父元素的某一个子元素之前
> 	语法：`A.insertBefore(B,ref)`：A表示父元素，B表示子元素，ref表示指定子元素插入的位置

![image-20200629174002474](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200629174002474.png)



### 删除元素

#### removeChild( )

> 语法：`父节点名.removeChild(子节点名)`：删除父元素下的子元素

```js
例1：
	//list 是一个ul id名 
	var = oul = document.getElementById("list");
	// 删除最后一个子元素
	oul.removeChild(oul,lastElementChild);
```

```js
例2：
	//list 是一个ul id名 
	var = oul = document.getElementById("list");
	// 删除整个列表
	document.body.removeChild(oul);
```

### 复制元素

#### cloneNode(bool)

> 语法：`obj.cloneNode(bool)`：复制元素
> obj表示被复制的元素，bool表示一个布尔值（true,false）
> 括号内不写或者只写false则只会复制标签，不复制标签内容，若写true则会复制标签和标签内的所有内容（子元素，文本标签等等等）

```js
例：
var ul = document . querySelector('ul' );
var 1ili = ul.children[0] .cloneNode();
	
```



![image-20200629175603222](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200629175603222.png)

### substr（）方法：截取字符串

> subset('起始的位置',截取几个字符) 位置从开始，截取几个不写的话就是截取起始位置到最后

### split（）方法：分割字符串为数组

```js
例：
	利用（‘’）内设置的元素为分割标志，将字符串分割为数组
```



## 事件：

### 事件类型

> 给元素注册事件，采取：     事件源.事件类型 = 事件处理程序

```js
for (var i = 0; i < as.length; i++) {
   as[i].onclick = function() {
      tbody.removeChild(this.parentNode.parentNode)	      } 
}
```



*  onclick	用户点击了 HTML 元素
*  onmouseout	用户把鼠标移开 HTML 元素（会冒泡，经过子盒子也会触发）
*  mouseleave  鼠标移出触发（不会冒泡，经过子盒子不会触发）
*  onfocus  **获得鼠标焦点触发**
*  onblur    **失去鼠标焦点触发**
*  onkeydown	用户按下键盘按键（不区分大小写，和onkeypress相比优先执行）
*  onkeyup  键盘某个键被松开时触发（不区分大小写）
*  onkeypress    键盘按键被按下时触发（区分大小写，但不会识别功能键如 ctrl  shift 箭头等）
*  onmousemove 鼠标移动经过触发（会冒泡，经过子盒子也会触发）
*  onmouseenter  鼠标移动经过触发（不触发冒泡，经过子盒子不会触发，只有经过事件绑定元素才触发）
*  onmouseup    鼠标弹起触发
*  onmousedow   鼠标按下触发
*  onload	浏览器已经完成页面加载
*  onscroll  滚动条滚动事件

disabled = true ==> 让按钮禁用   false 启用按钮

```js
  btn.addEventListener('click', function() {
            //disabled = true  ==> 让按钮禁用
            btn.disabled = true;
```



#### 鼠标事件对象

```js
 document.addEventListener('click', function(e) {
            // 1. client 鼠标在可视区的x和y坐标(只能得到在浏览器显示的出口大小范围内的坐标，当拖动上下滚动条也是一样)
            console.log(e.clientX);
            console.log(e.clientY);
            console.log('------------------');
            // 2. page 鼠标在页面文档的x和y坐标（拖动滚动条后，Y 的坐标是距离body顶部的距离坐标）
            console.log(e.pageX);
            console.log(e.pageY);
            console.log('------------------');
            // 3. screen鼠标在电脑屏幕的x和y坐标
            console.log(e.screenX);
            console.log(e.screenY);
        })
```





#### 键盘事件对象

```js
//keyCode
document.addEventListener('keypress', function(e) {
           console.log(e.keyCode)
        })
```

```js
//例：
document . addEventListener('keyup , function(e) {
    // console .1og(e);
    console.log('up:' + e.keyCode);
    //我们可以利用keycode返回的ASCII码值来判断用户按下了那个键
    if (e.keyCode 干65) {
    alert('您按下的a键');
    } else {
    alert('您没有按Fa键)
    }
    })

```



### 鼠标焦点

focus()  **获得鼠标焦点** blur ()   **失去鼠标焦点**

```js
应用案例：
<img src="./img/play.gif">
    <script>
        var imgs = document.querySelector('img')
        document.addEventListener('mousemove', function(e) {
            var x = e.pageX;
            var y = e.pageY;
            console.log(x);
            console.log(y);
            imgs.style.left = x - 50 + 'px';
            imgs.style.top = y - 50 + 'px';
        })
    </script>
```

```js
获取鼠标焦点事件方法focus()
	 <input type="text" placeholder="请输入内容">
   
        var inp = document.querySelector('input');
        document.addEventListener('keyup', function(e) {
            console.log(e.keyCode)
                //按下s键时获得焦点
            if (e.keyCode == 83) {
                //focus  获取输入框的焦点
                inp.focus();

            }
        })
```







### 注册事件（点击，鼠标等）

#### 1.传统方式

*  事件源.事件类型 = 事件处理程序as.onclick = function() { } 
*  利用on开头的事件onclick等
*  <button onclick="alert('hi')"></button>
*  特点：注册事件唯一性
*  同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面的注册处理函数

#### 2.方法监听注册方式

* w3c标准，推荐使用

* addEventListener( )方法

* ##### IE9前的IE版本不支持此方法，可使用attachEvent( )代替（该方法IE9以前可用）

* 特点：同一个元素同一个事件可以注册多个监听器（指的是处理函数）

##### 2.1 方式一

```js
divs[1] . addEventL istener( ' click ', fn)//调用函数不需要加括号（）
	function fn() {
		alert(22);
	}
```

##### 2.2方式二

![image-20200708090433543](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708090433543.png)

##### IE9之前的方法

```js
attachEvent( ) 用法同上
```



这里两个alert都会弹出，而不会像传统方式一样一个元素绑定两个点击事件只会执行后面那一个

#### 封装的兼容性函数（了解）

```js
function addEventLi stener (element, eventName, fn) {
//判断当前浏览器是否支持addEventListener方法
if (element. addEventListener) {
element . addEventListener (eventName, fn); // 第三个参数默认是false
} else if (element.att achEvent) {
element. attachEvent('on' + eventName, fn) ;
} else {
//相当于element .onclick= fn;
element['on' + eventName] = fn;
}
//兼容性处理的原则:首先照顾大多数浏览器，再处理特殊浏览器

```



### 删除事件（解绑事件）

#### 1.传统方式

> 语法：绑定了事件的元素.onclick=null

![image-20200708091504528](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708091504528.png)

#### 2.方法监听事件移除

> 一定得使用方法监听的方式一，第二个参数才能选择要删除的事件函数；方式二使用的是匿名函数，无法选择删除事件函数
>
> 语法：绑定事件的元素.removeEventListener（'需要移除的事件'，需要移除事件的事件函数）

```js
divs [1] . addEventListener('click', fn)
	function fn() {
		alert(22);
        divs [1]. removeEventListener('click', fn);
        divs [2]. removeEventListener('click', ff);//还可以移除其他元素的绑定事件
	}
```

##### IE6.7.8(使用的方法)

> detachEvent()
>
> 语法：绑定事件的元素.detachEvent（'需要移除的事件'，需要移除事件的事件函数）

#### 封装的兼容性函数（了解）

```js
function removeEventL t3 tener (element,
eventName, fn) {
//判断当前浏览器是否支持removeEventListener方法
if (element. removeEventListener) {
element . removeEventLi stener (eventName, fn); /1 第三个参数默认是false
} else if (element . detachEvent) {
element. detachEvent('on' + eventName, fn) ;
} else {
element[ 'on' + eventName] = null;
}

```

### 事件对象

```js
事件对象的使用语法（扩内现在一般写e 不写event，写event是因为IE678只能用console.log（window.event）来输出事件信息）
    eventTarget. onclick = function (event) {
    	//这个event 就是事件对象，我们还喜欢的写成e或者evt
    }
    eventTarget . addEventLi stener ('click', function (event) {
    	//这个event 就是事件对象，我们还喜欢的写成e或者evt
        }
//evet 包含了事件的执行之后的信息
```

*  这个event是个形参,系统帮我们设定为事件对象,不需要传递实参过去。
* 当我们注册事件时, event 对象就会被系统自动创建。并依次传递给事件监听器(事件处理函数)。

### 事件对象常见属性和方法

#### 1.事件对象属性						

**1.1 e.target							  返回触发事件的对象		标准**

1.2 e.srcElement						  返回触发事件的对象	非标准ie6-8使用

**1.3 e.type									  返回事件的类型比如click mouseover不带on**

1.4 e.cancelBubble					  该属性阻止泡非标准ie6-8使用
		1.5 e.returnValue		该属性阻止默认事件(默认行为)非标准ie6-8使用比如不让链接跳转

#### 2.事件对象方法

##### **2.1 e.preventDefault（)	 该方法阻止默认事件(默认行为)  标准    比如不让链接跳转，提交按钮不提交**

```js
// 2.阻止默认行为(事件) 让链接不跳转或者让提交按钮不提交
var a = document . querySelector('a');
a. addEventListener('click', function(e) {
e. preventDefault(); //dom标准写法
})

```

##### **2.2 e.stopPropagation()			 阻止冒泡    标准**  

> IE678不兼容

```js
 // 4. 冒泡阶段如果addEventListener 第三个参数是false 或者省略那么则处于冒泡阶段 son - > father - > body - > html - > document
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation()
        }, false);





        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
```

#### 2.2.1 兼容性函数（了解）

> IE678 使用的方法： cancelBubble = true

```js
if(e &&e. stopPropagation) {
e. stopPropagation() ;
}else {
window.event.cancelBubble = true ;
}

```

### 事件委托

> 将事件委托给ul，但是点击li之后获得对应点击的li 通过target（）方法，
>
> 这样通过事件冒泡就可以不用给每一个li绑定事件

```js
  var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            //我们给ul绑定了事件那么this 就指向ul
            console.log(this);
            // e. target 指向我们点击的那个对象谁触发了这个事件我们点击的是1i e. target 指向的就是1i
            console.log(e.target);
            e.target.style.backgroundColor = 'pink'
        })
```



### DOM事件流（冒泡，捕获）

> 事件对象方法中有阻止冒泡方法

1. JS代码中只能执行捕获或者冒泡其中的一个阶段。

2. onclick 和attachEvent 只能得到冒泡阶段。

3. addEventListener(type, listener [, usecapture] )第三个参数如果是true ,表示在事件捕
   获阶段调用事件处理程序;如果是false (不写默认就是false )，表示在事件冒泡阶段调用事件处理
   程序. .

4. ##### 实际开发中我们很少使用事件捕获,我们更关注事件冒泡。

5. 有些事件是没有冒泡的,比如onblur. onfocus. onmouseenter. onmouseleave

![image-20200708101704908](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708101704908.png)

### 阻止冒泡

#### 方式一：  e.stopPropagation();

#### 方式二： e.cancelBubble = true;

```js
 // 4. 冒泡阶段如果addEventListener 第三个参数是false 或者省略那么则处于冒泡阶段 son - > father - > body - > html - > document
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            //兼容性设置
            e = e || window.e;

            alert('son');
            //阻止冒泡方式一
            // e.stopPropagation();

            //阻止冒泡方式二阻止冒泡
            e.cancelBubble = true;
        }, false);
        var father = document.querySelector('.father');
        father.addEventListener('click', function(e) {
            alert('father');
            // e.stopPropagation()
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
```

#### 兼容性函数（了解）

> IE678 使用的方法： cancelBubble = true

```js
if(e &&e. stopPropagation) {
e. stopPropagation() ;
}else {
window.event.cancelBubble = true ;
}

```



## BOM

### 1.BOM概述

#### 1.1 DOM与BOM

![image-20200708173538522](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708173538522.png)

#### 1.2 BOM构成

![image-20200708173919782](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708173919782.png)window：

1.它是JS访问浏览器窗口的一个接口。
		2.它是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法。

### 2.window 对象常见事件

#### 2.1窗口加载事件

##### 2.1.1window.onload

```js
window.onload = function () { }
//或者
window.addEventListener ("load",function(){});

```

> window.onload是窗口(页面)加载事件，当文档内容完全加载完成会触发该事件(包括图像脚本文件、CSS
> 文件等)，就调用的处理函数。



注意:
		1.有了window.onload就可以把JS代码写到页面元素的上方,因为onload是等页面内容全部加较完毕，再去执行处理函数。

2.window.onload传统注册事件方式只能写一次,如果有多个，会以最后一个window.onload为准。
		3.如果使用addEventListener则没有限制

情况2：

![image-20200708180204400](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708180204400.png)

情况3：

​					![image-20200708180307903](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200708180307903.png)



##### 2.1.2DOMContentloaded窗口加载事件

> document . addEventListener('DOMContentLoaded' , function() { } )

* DOMContentloaded事件触发时,仅当DOM加载完成,不包括样式表,图片, flash等等。
* le9以上才支持
* 如果页面的图片很多的话，从用户访问到onload触发可能需要较长的时间交互效果就不能实现,必然影响用户的体验,此时用DOMC ontentLoaded事件比较合适。

#### 2.2调整窗口大小事件

```js
1.window. onresize . function() {}
2.window. addEventListener ( "resize", function() {});
// 是调整窗口大小加载事件,当触发时就调用的处理函数。
```

```js
<script>
        //因为div标签写在了script 标签上面，所有需要 窗口加载事件  load

        window.addEventListener('load', function() {
            var div = document.querySelector('div')
            window.addEventListener('resize', function() {
                console.log(innerWidth);
                if (innerWidth <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block'
                }
            })
        })
    </script>
    <div></div>
```

### 3.定时器

#### 3.1 setTimeout( )定时器

**该定时器只会执行定时时间后的一次，不会重复执行**

> window.setTimeout (调用函数，[延迟的毫秒數]);
>
> setTimeout (调用函数，调用函数的定时时间)    时间可省略

* setTimeout0方法用于设置一个定时器,该定时器在定时器到期后执行调用函数。

```js
//定时器的两种写法  
setTimeout(function() {
            alert(111)
        }, 2000)
        setTimeout(fn, 3000)

        function fn() {
            alert(2222)
        }
//这样写就可以用同一个函数用在多个定时器上，提高了函数复用率
        var set = setTimeout(fn, 5000)
        var set = setTimeout(fn, 10000)
```



#### 3.2 停止setTimeout（）定时器

> window. clearTimeout(timeoutID)
>
> timeoutID:定时器的名字

```js
var btn = document . querySelector( ' button' );
var timer = setTimeout(function() {
	console.log('爆炸了');
}, 5000);
btn.addEventListener('click', function() {
clearTimeout(timer);
})

```

#### 3.3 setInterval( )定时器

**setInterval0方法重复调用一个函数.每隔这个时间,就去调用-次回调函数**

> window. setInterval (回调函数，[间隔的毫秒数]);
>
> 使用方式同setTimeout定时器

#### 3.4停止setInterval（）定时器

> clearInterval (定时器名);

```js
 <button class="begin">开始定时器</button>
    <button class="stop">停止定时器</button>
   
        var begin = document.querySelector('.begin');
        var stop = document.querySelector('.stop');
        var times = null; //因为定时器是一个对象，所以这样写 times 也是一个对象类型
        console.log(typeof(times))
        begin.addEventListener('click', function() {
            times = setInterval(function() {
                console.log('定时器启动了')
            }, 1000)
        })
        stop.addEventListener('click', function() {
            clearInterval(times)
            console.log('定时器停止了')
        })
```

#### 3.5 this 指向

```js
//this指向问题一般情况下this的最终指向的是那个调用它的对象
//1.全局作用域或者普通函数中this指向全局对象window(注意定时器里面的this指向window)
//2.方法调用中谁调用this指向谁
// 3.构造函数中this指向构造函数的实例

```

### 4.同步任务与异步任务(JS执行机制)



#### 4.1同步任务

同步任务都在主线程上执行,形成一个执行栈。

#### 4.2异步任务

JS的异步是通过回调函数实现的。
一般而言，异步任务有以下三种类型
1.普通事件。如click. resize等
2.资源加载，如load, error 等
3.定时器,包括setInterval. setTimeout等

**回调函数相当于是任务队列**

异步任务相关回调函数添加到任务队列中(任务队列也称为消息队列)。

![image-20200709160414991](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200709160414991.png)

#### 4.3JS执行机制

1.先执行执行栈中的同步任务。

2.异步任务(回调函数)放入任务队列中。

3.一旦执行栈中的所有同步任务执行完毕， ,系统就会按次序读取任务队列中的异步任务,于是被读取的异步任务结束等待状态,进入执行栈,开始执行。

### 5.location对象

#### 5.1什么是location对象

window对象给我们提供了一个**location属性用于获取或设置窗体的URL** ,并且可以用于**解析URL**。因为这个属性**返回的是一个对象** ，所以我们将这个属性也称为**location对象**。



#### 5.2URL

![image-20200709170513594](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200709170513594.png)

#### 5.3location对象的属性



| location对象属性  | 返回值                          |
| ----------------- | ------------------------------- |
| location.href     | 获取或者设置整个URL             |
| location. host    | 返回主机(域名) www.theima.com   |
| location.port     | 返回端口号如果未写返回空字符串  |
| location.pathname | 返回路径                        |
| location. search  | 返回参数                        |
| location. hash    | 返回片段#后面内容常见于链接锚点 |

##### 5.3.1页面间的数据传输案例

输入页内容：  例：输入P_looooo

![image-20200710135948688](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200710135948688.png)

显示页：

![image-20200710140726440](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200710140726440.png)


![image-20200710140913222](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200710140913222.png)


#### 5.4substr（）方法：截取字符串

> subset('起始的位置',截取几个字符) 位置从开始，截取几个不写的话就是截取起始位置到最后

#### 5.5split（）方法：分割字符串为数组

```js

	利用（‘’）内设置的元素为分割标志，将字符串分割为数组
```

例：uname=P_looooo

var arr = par.split('=')    ===>

![image-20200710141703857](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200710141703857.png)

#### 5.6location对象方法

| location对象方法     | 返回值                                                       |
| -------------------- | :----------------------------------------------------------- |
| location.assign（）  | 跟href 一样，可以跳转页面，记录历史，所以能后退页面(也称为重定向页面) |
| location.replace（） | 替换当前页面，因为不记录历史，所以不能后退页面               |
| location.reload（）  | 重新加载页面，相当于刷新按钮或者f5 如果参数为true强制刷新ctrl+f5 |

```js
例：
//记录浏览历史，所以可以实现后退功能
location. assign( 'http:/ /www . itcast .cn );
//不记录浏览历史，所以不可以实现后退功能
 location . replace( 'http:/ /www . itcast . cn' );
//重新加载页面，相当于刷新页面
location. reload();

```

### 6.navigator对象（了解）

```js
if ( (navigator . userAgent. match (/ (phone | padlpod |iPhone | iPod| ios | ipad | Android |  Mobile | BlackBerry | IEMobile | MQQBrowser | JUC | Fennec | wOSBrowser | BrowserNG | Webos | symbian | Windows Phone)/i))) {
window. location.href = :
//手机
} else {
window. location.href = :
//电脑
}

```

### 7.history对象(了解)

| history对象方法 | 作用                                                  |
| --------------- | ----------------------------------------------------- |
| back0           | 可以后退功能                                          |
| forward(）      | 前进功能                                              |
| go(参数)        | 前进后退功能参数如果是1前进1个页面如果是-1后退1个页面 |

history.back( ) /forward( ) / go(1/-1)

## 以下三个系列区别应用

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200713165034234.png" alt="image-20200713165034234" style="zoom:150%;" />



## 元素偏移量 offset 系列

### 1.1 offset概述

offset翻译过来就是偏移量,我们使用offset系列相关属性可以动态的得到该元素的位置(偏移)、大小等.
●**获得元素距离带有定位父元素的位置******如果父级都没有定位则返回元素到****body**的距离**（margin）
●获得元素自身的大小(宽度高度)
●**注意:返回的数值都不带单位**

| offset系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回作为该元素带有定位的父级元素如果父级都没有定位则返回body |
| element.offsetTop    | 返回元素相对带有定位父元素上方的偏移，如果父级都没有定位则返回元素到body的距离（margin） |
| element.offsetleft   | 返回元素相对带有定位父元素左边框的偏移，如果父级都没有定位则返回元素到body的距离（margin） |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位    |
| element.offsetHeight | 返回自身包括padding.边框、内容区的高度，返回数值不带单位     |



![image-20200710160140631](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200710160140631.png)



![image-20200710175029467](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200710175029467.png)

## 元素可视区client系列

> client翻译过来就是客户端,我们使用client系列的相关属性来获取元素可视区的相关信息。通过client系列
> 的相关属性可以动态的得到该元素的边柜大小元素大小等。

| client系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.clientTop    | 返回元素上边框的大小                                         |
| element.clientLeft   | 返回元素左边框的大小                                         |
| element.clientWidth  | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 |
| element.clientHeight | 返回自身包括padding、内容区的高度，不含边框，返回数值不带单位 |

## 元素滚动scroll系列

> scroll翻译过来就是滚动的,我们使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。

| scroll系列属性       | 作用                                           |
| -------------------- | ---------------------------------------------- |
| element.scrollTop    | 返回被卷去的上侧距离，返回数值不带单位         |
| element.scrollLeft   | 返回被卷去的左侧距离，返回数值不带单位         |
| element.scrollWidth  | 返回自身实际的宽度，不含边框，返回数值不带单位 |
| element.scrollHeight | 返回自身实际的高度，不含边框，返回数值不带单位 |

### scroll滚动条滚动事件



#### 1.**页面**被卷去的头部;可以通过window. pageYOffset获得如果是被卷 去的左侧window. pageXoffset

#### 2.**元素**被卷去的头部是element.scrollTop , 如果是页面被卷去的头部则是window.pageYOffset





### 案例：电梯导航栏效果+回到顶部的缓动动画效果+动画封装

![image-20200716102330902](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200716102330902.png)



## 移动端（事件+动态效果）

### 1.触屏事件：touch（）

| 触屏touch事件 | 说明.                         |
| ------------- | ----------------------------- |
| touchstart    | 手指触摸到一个DOM元素时触发   |
| touchmove     | 手指在一个DOM元素上滑动时触发 |
| touchend      | 手指从一个DOM元素上移开时触发 |

### 2.触屏事件对象（TouchEvent）



| 触摸列表       | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| touches        | 正在触摸屏幕的所有手指的一个列表(触摸屏幕的手指个数)         |
| targetTouches  | 正在触摸当前DOM元素上的手指的一个列表（触摸当前DOM元素的手指个数）（常用） |
| changedTouches | 手指状态发生了改变的列表，从无到有， 从有到无变化            |

```js
div.addEventListener('touchstart', function(e) {
    //获取触摸该div元素的手指个数等相关信息（这里获取的是第一个）
            console.log(e.targetTouches[0]);
        })
```





## 动画函数封装

> 只有设置position 定位的元素才能使用动画效果（window除外） 

### 轮播图案例

![image-20200716102811441](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200716102811441.png)



## 堆，栈详解

（全都保存在栈内存中）基本数据类型：string ，null，undefined，Boolean，number

（保存在堆内存中） 引用数据类型：object









## 数组和对象的区别

​        在 JavaScript 中，数组使用数字索引。

```js
    在 JavaScript 中，对象使用命名索引。

    数组是特殊类型的对象，具有数字索引。
```

## 数组



> 如果**参数为空**，则表示创建一个空数组；如果参数是**一个数值**时，表示数组的长度；如果有多个参数时，表示数组中的元素。
>
> 数组中可以存放**任意类型**的数据，例如字符串、数字、布尔值、对象等。

### 方式一：使用字面量创建数组

```js
var arr1 = []; // 创建一个空的数组

var arr2 = [1, 2, 3]; // 创建带初始值的数组
```



### 方式二：使用构造函数创建数组

```js
// 方式一
var arr1 = [11, 12, 13];

// 方式二
var arr2 = new Array(); // 参数为空
var arr3 = new Array(4); // 参数为一个数值
var arr4 = new Array(15, 16, 17); // 参数为多个数值

console.log(typeof arr1); // 打印结果：object

console.log('arr1 = ' + JSON.stringify(arr1));
console.log('arr2 = ' + JSON.stringify(arr2));
console.log('arr3 = ' + JSON.stringify(arr3));
console.log('arr4 = ' + JSON.stringify(arr4));

结果：
object;

arr1 = [11, 12, 13];
arr2 = [];
arr3 = [null, null, null, null];
arr4 = [15, 16, 17];
```

* 多维数组

```js
const arr2 = [
    [11, 12, 13],
    [21, 22, 23],
];
```

### 从对象数组中，将属性的值提取为数组

一般人可能会想着通过 for 循环进行遍历，但这种做法不够简洁。

最佳答案：

```javascript
      const arr1 = [
        { skuId: "123", name: "商品1" },
        { skuId: "456", name: "商品2" },
        { skuId: "789", name: "商品3" }
      ];

      const skuIdArr = arr1.map(item => item.skuId); // 将数组 arr1 中的 skuId字段提取为一个新的数组
      console.log(JSON.stringify(skuIdArr));
```


打印结果：

```json
	["123","456","789"]
```



### 数组及方法:

      1. var cars = ["Porsche", "Volvo", "BMW"];
         在 JavaScript 中数组即对象

#### push()方法

```js
1、定义和用法：
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
注意： 新元素将添加在数组的末尾。
注意： 此方法改变数组的长度。
提示： 在数组起始位置添加元素请使用 unshift() 方法。

2、语法：
array.push(item1, item2, ..., itemX)

3、实例：
添加一个以上元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi","Lemon","Pineapple")
以上实例将输出
Banana,Orange,Apple,Mango,Kiwi,Lemon,Pineapple
```

#### join()方法

> 语法：数组名.join（）
>
> 可以将数组中的数据转换成字符串
>
> （）内不写，默认用逗号分隔

```js
1.

var arr = ["red","yellow","blue"];
var array = [];

array = arr.join(undefined);
console.log(array);   
//输出结果为： red,yellow,blue

2.
var arr = ["red","yellow","blue"];
var array = [];
array = arr.join("|");
console.log(array);
//输出结果为： red|yellow|blue
```



## 数组的方法清单

### 数组的类型相关

| 方法                             | 描述                               | 备注 |
| :------------------------------- | :--------------------------------- | :--- |
| Array.isArray()                  | 判断是否为数组                     |      |
| toString()                       | 将数组转换为字符串                 |      |
| Array.from(arrayLike)            | 将**伪数组**转化为**真数组**       |      |
| Array.of(value1, value2, value3) | 创建数组：将**一系列值**转换成数组 |      |

注意，获取数组的长度是用`length`属性，不是方法。关于 `length`属性，详见上一篇文章。

### 数组元素的添加和删除

| 方法      | 描述                                                         | 备注           |
| :-------- | :----------------------------------------------------------- | :------------- |
| push()    | 向数组的**最后面**插入一个或多个元素，返回结果为**新数组的长度** | 会改变原数组   |
| pop()     | 删除数组中的**最后一个**元素，返回结果为**被删除的元素**     | 会改变原数组   |
| unshift() | 在数组**最前面**插入一个或多个元素，返回结果为**新数组的长度** | 会改变原数组   |
| shift()   | 删除数组中的**第一个**元素，返回结果为**被删除的元素**       | 会改变原数组   |
|           |                                                              |                |
| slice()   | 从数组中**提取**指定的一个或多个元素，返回结果为**新的数组** | 不会改变原数组 |
| splice()  | 从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组** | 会改变原数组   |
|           |                                                              |                |
| fill()    | 填充数组：用固定的值填充数组，返回结果为**新的数组**         | 不会改变原数组 |

### 数组的合并和拆分

| 方法     | 描述                                                 | 备注             |
| :------- | :--------------------------------------------------- | :--------------- |
| concat() | 合并数组：连接两个或多个数组，返回结果为**新的数组** | 不会改变原数组   |
| join()   | 将数组转换为字符串，返回结果为**转换后的字符串**     | 不会改变原数组   |
| split()  | 将字符串按照指定的分隔符，组装为数组                 | 不会改变原字符串 |

注意，`split()`是字符串的方法，不是数组的方法。

### 数组排序

| 方法      | 描述                                                    | 备注         |
| :-------- | :------------------------------------------------------ | :----------- |
| reverse() | 反转数组，返回结果为**反转后的数组**                    | 会改变原数组 |
| sort()    | 对数组的元素,默认按照**Unicode 编码**，从小到大进行排序 | 会改变原数组 |

### 查找数组的元素

| 方法                  | 描述                                                         | 备注                                                     |
| :-------------------- | :----------------------------------------------------------- | :------------------------------------------------------- |
| indexOf(value)        | 从前往后索引，检索一个数组中是否含有指定的元素               |                                                          |
| lastIndexOf(value)    | 从后往前索引，检索一个数组中是否含有指定的元素               |                                                          |
| find(function())      | 找出**第一个**满足「指定条件返回 true」的元素                |                                                          |
| findIndex(function()) | 找出**第一个**满足「指定条件返回 true」的元素的 index        |                                                          |
| every()               | 确保数组中的每个元素都满足「指定条件返回 true」，则停止遍历，此方法才返回 true | 全真才为真。要求每一项都返回 true，最终的结果才返回 true |
| some()                | 数组中只要有一个元素满足「指定条件返回 true」，则停止遍历，此方法就返回 true | 一真即真。只要有一项返回 true，最终的结果就返回 true     |

### 遍历数组

| 方法      | 描述                                                         | 备注                                                   |
| :-------- | :----------------------------------------------------------- | :----------------------------------------------------- |
| for 循环  | 这个大家都懂                                                 |                                                        |
| forEach() | 和 for 循环类似，但需要兼容 IE8 以上                         | forEach() 没有返回值。也就是说，它的返回值是 undefined |
| map()     | 对原数组中的每一项进行加工，将组成新的数组                   | 不会改变原数组                                         |
| filter()  | 过滤数组：返回结果是 true 的项，将组成新的数组，返回结果为**新的数组** | 不会改变原数组                                         |
| reduce    | 接收一个函数作为累加器，返回值是回调函数累计处理的结果       |                                                        |

### isArray()：判断是否为数组

语法：

```javascript
布尔值 = Array.isArray(被检测的数组);
```

以前，我们会通过 `A instanceof B`来判断 A 是否属于 B 类型。但是在数组里，这种 instanceof 方法已经用的不多了，因为有 isArray()方法。

### toString()：数组转换为字符串

```javascript
字符串 = 数组.toString();
```

解释：把数组转换成字符串，每一项用`,`分割。

备注：大多数的数据类型都可以使用`.toString()`方法，将其转换为字符串。

### 知识点补充：将数组转换为字符串，有哪些方式

方式 1：

```js
字符串 = 数组.toString();
```

方式 2：

```js
字符串 = String(数组);
```

方式 3：

```js
字符串 = 数组.join(','); // 将数组转为字符串，每一项用 英文逗号 分隔
```

### Array.from()：将伪数组转换为真数组

**语法**：

```javascript
array = Array.from(arrayLike);
```

**作用**：将**伪数组**或可遍历对象转换为**真数组**。

代码举例：

```js
const name = 'qianguyihao';
console.log(Array.from(name)); // 打印结果是数组：["q","i","a","n","g","u","y","i","h","a","o"]
```

### 伪数组与真数组的区别

**伪数组**：包含 length 属性的对象或可迭代的对象。

另外，伪数组的原型链中没有 Array.prototype，而真数组的原型链中有 Array.prototype。因此伪数组没有数组的一般方法，比如 pop()、join() 等方法。

### 伪数组举例

```html
<body>
    <button>按钮1</button>
    <button>按钮2</button>
    <button>按钮3</button>

    <script>
        let btnArray = document.getElementsByTagName('button');
        console.log(btnArray);
        console.log(btnArray[0]);
    </script>
</body>
```

上面的布局中，有三个 button 标签，我们通过`getElementsByTagName`获取到的`btnArray`实际上是**伪数组**，并不是真实的数组：

![](http://img.smyhvae.com/20180402_1116.png)

既然`btnArray`是伪数组，它就不能使用数组的一般方法，否则会报错：

![](http://img.smyhvae.com/20180402_1121.png)

解决办法：采用`Array.from`方法将`btnArray`这个伪数组转换为真数组即可：

```javascript
Array.from(btnArray);
```

然后就可以使用数组的一般方法了：

![](http://img.smyhvae.com/20180402_1125.png)

### Array.of()：创建数组

**语法**：

```javascript
Array.of(value1, value2, value3);
```

**作用**：根据参数里的内容，创建数组。

**举例**：

```javascript
const arr = Array.of(1, 'abc', true);
console.log(arr); // 打印结果是数组：[1, "abc", true]
```

补充：`new Array()`和 `Array.of()`的区别在于：当参数只有一个时，前者表示数组的长度，后者表示数组中的内容。

### 数组元素的添加和删除

### push()

`push()`：向数组的**最后面**插入一个或多个元素，返回结果为**新数组的长度**。

语法：

```javascript
新数组的长度 = 数组.push(元素);
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.push('王四'); // 末尾插入一个元素
var result2 = arr.push('王五', '王六'); // 末尾插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(JSON.stringify(arr)); // 打印结果：["王一","王二","王三","王四","王五","王六"]
```

### pop()

`pop()`：删除数组中的**最后一个**元素，返回结果为**被删除的元素**。

语法：

```javascript
被删除的元素 = 数组.pop();
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.pop();

console.log(result1); // 打印结果：王三
console.log(JSON.stringify(arr)); // 打印结果：["王一","王二"]
```

### unshift()

`unshift()`：在数组**最前面**插入一个或多个元素，返回结果为**新数组的长度**。插入元素后，其他元素的索引会依次调整。

语法：

```javascript
新数组的长度 = 数组.unshift(元素);
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.unshift('王四'); // 最前面插入一个元素
var result2 = arr.unshift('王五', '王六'); // 最前面插入多个元素

console.log(result1); // 打印结果：4
console.log(result2); // 打印结果：6
console.log(JSON.stringify(arr)); // 打印结果：["王五","王六","王四","王一","王二","王三"]
```

### shift()

`shift()`：删除数组中的**第一个**元素，返回结果为**被删除的元素**。

语法：

```javascript
被删除的元素 = 数组.shift();
```

代码举例：

```javascript
var arr = ['王一', '王二', '王三'];

var result1 = arr.shift();

console.log(result1); // 打印结果：王一
console.log(JSON.stringify(arr)); // 打印结果：["王二","王三"]
```

### slice()

`slice()`：从数组中**提取**指定的一个或者多个元素，返回结果为**新的数组**（不会改变原来的数组）。

备注：该方法不会改变原数组，而是将截取到的元素封装到一个新数组中返回。

**语法**：

```javascript
新数组 = 原数组.slice(开始位置的索引, 结束位置的索引); //注意：包含开始索引，不包含结束索引
```

举例：

```javascript
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

const result1 = arr.slice(); // 不加参数时，则获取所有的元素。相当于数组的整体赋值
const result2 = arr.slice(2); // 从第二个值开始提取，直到末尾
const result3 = arr.slice(-2); // 提取最后两个元素
const result4 = arr.slice(2, 4); // 提取从第二个到第四个之间的元素（不包括第四个元素）
const result5 = arr.slice(4, 2); // 空

console.log('arr:' + JSON.stringify(arr));
console.log('result1:' + JSON.stringify(result1));
console.log('result2:' + JSON.stringify(result2));
console.log('result3:' + JSON.stringify(result3));
console.log('result4:' + JSON.stringify(result4));
console.log('result5:' + JSON.stringify(result5));
```

打印结果：

```javascript
arr: ['a', 'b', 'c', 'd', 'e', 'f'];
result1: ['a', 'b', 'c', 'd', 'e', 'f'];
result2: ['c', 'd', 'e', 'f'];
result3: ['e', 'f'];
result4: ['c', 'd'];
result5: [];
```

**补充**：

很多前端开发人员会用 slice()将伪数组，转化为真数组。写法如下：

```javascript
// 方式1
array = Array.prototye.slice.call(arrayLike);

// 方式2
array = [].slice.call(arrayLike);
```

ES6 看不下去这种蹩脚的转化方法，于是出了一个新的 API：（专门用来将伪数组转化成真数组）

```javascript
array = Array.from(arrayLike);
```

关于这个 API 的详细介绍，上面的内容已经讲了，请往前翻。

### splice()

`splice()`：从数组中**删除**指定的一个或多个元素，返回结果为**被删除元素组成的新数组**（会改变原来的数组）。

备注：该方法会改变原数组，会将指定元素从原数组中删除；被删除的元素会封装到一个新的数组中返回。

语法：

```javascript
新数组 = 原数组.splice(起始索引index, 需要删除的个数);

新数组 = 原数组.splice(起始索引index, 需要删除的个数, 新的元素1, 新的元素2...);
```

上方语法中，第三个及之后的参数，表示：删除元素之后，向原数组中添加新的元素，这些元素将会自动插入到起始位置索引的前面。也可以理解成：删除了哪些元素，就在那些元素的所在位置补充新的内容。

`slice()`方法和`splice()`方法很容易搞混，请一定要注意区分。

举例 1：

```javascript
var arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
var result1 = arr1.splice(1); //从第index为1的位置开始，删除元素

console.log('arr1：' + JSON.stringify(arr1));
console.log('result1：' + JSON.stringify(result1));
```

打印结果：

```
    arr1：["a"]
    result1：["b","c","d","e","f"]
```

举例 2：

```javascript
var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
var result2 = arr2.splice(-2); //删除最后两个元素

console.log('arr2：' + JSON.stringify(arr2));
console.log('result2：' + JSON.stringify(result2));
```

打印结果：

```
    arr2：["a","b","c","d"]
    result2：["e","f"]
```

举例 3：

```javascript
var arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
var result3 = arr3.splice(1, 3); //从第index为1的位置开始删除元素,一共删除三个元素

console.log('arr3：' + JSON.stringify(arr3));
console.log('result3：' + JSON.stringify(result3));
```

打印结果：

```
    arr3：["a","e","f"]
    result3：["b","c","d"]
```

举例 4：（我们来看看**第三个参数**的用法）

```javascript
var arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];

//从第index为1的位置开始删除元素,一共删除三个元素。并且在 index=1 的前面追加两个元素
var result4 = arr4.splice(1, 3, '千古壹号', 'vae');

console.log('arr4：' + JSON.stringify(arr4));
console.log('result4：' + JSON.stringify(result4));
```

打印结果：

```javascript
arr4：["a","千古壹号","vae","e","f"]
result4：["b","c","d"]
```

### fill()

`fill()`：用一个固定值填充数组，返回结果为**新的数组**。不会改变原数组。

语法：

```js
// 用一个固定值填充数组。数组里的每个元素都会被这个固定值填充
新数组 = 数组.fill(固定值);

// 从 startIndex 开始的数组元素，用固定值填充
新数组 = 数组.fill(固定值, startIndex);

// 从 startIndex 到 endIndex 之间的元素（包左不包右），用固定值填充
新数组 = 数组.fill(固定值, startIndex, endIndex);
```

举例：

```js
// 创建一个长度为4的空数组，然后用 'f' 来填充这个空数组
console.log(Array(4).fill('f')); // ['f', 'f', 'f,' 'f']

// 将现有数组的每一个元素都进行填充
console.log(['a', 'b', 'c', 'd'].fill('f')); // ['f', 'f', 'f,' 'f']

// 指定位置进行填充
console.log(['a', 'b', 'c', 'd'].fill('f', 1, 3)); // ["a", "f", "f", "d"]
```

### 数组的合并和拆分

### concat()

`concat()`：连接两个或多个数组，返回结果为**新的数组**。不会改变原数组。`concat()`方法的作用是**数组合并**。

语法：

```javascript
    新数组 = 数组1.concat(数组2, 数组3 ...);
```

举例：

```javascript
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const arr3 = ['千古壹号', 'vae'];

const result1 = arr1.concat(arr2);

const result2 = arr2.concat(arr1, arr3);

console.log('arr1 =' + JSON.stringify(arr1));
console.log('arr2 =' + JSON.stringify(arr2));
console.log('arr3 =' + JSON.stringify(arr3));

console.log('result1 =' + JSON.stringify(result1));
console.log('result2 =' + JSON.stringify(result2));
```

打印结果：

```javascript
arr1 = [1, 2, 3];
arr2 = ['a', 'b', 'c'];
arr3 = ['千古壹号', 'vae'];

result1 = [1, 2, 3, 'a', 'b', 'c'];
result2 = ['a', 'b', 'c', 1, 2, 3, '千古壹号', 'vae'];
```

从打印结果中可以看到，原数组并没有被修改。

**数组合并的另一种方式**：

我们可以使用`...`这种展开语法，将两个数组进行合并。举例如下：

```js
const arr1 = [1, 2, 3];

const result = ['a', 'b', 'c', ...arr1];
console.log(JSON.stringify(result)); // 打印结果：["a","b","c",1,2,3]
```

### join()

`join()`：将数组转换为字符串，返回结果为**转换后的字符串**（不会改变原来的数组）。

补充：`join()`方法可以指定一个**字符串**作为参数，这个字符串将会成为数组中元素的**连接符**；如果不指定连接符，则默认使用 `,` 作为连接符，此时和 `toString()的效果是一致的`。

语法：

```javascript
新的字符串 = 原数组.join(参数); // 参数选填
```

代码举例：

```javascript
var arr = ['a', 'b', 'c'];

var result1 = arr.join(); // 这里没有指定连接符，所以默认使用 , 作为连接符

var result2 = arr.join('-'); // 使用指定的字符串作为连接符

console.log(typeof arr); // 打印结果：object
console.log(typeof result1); // 打印结果：string

console.log('arr =' + JSON.stringify(arr));
console.log('result1 =' + JSON.stringify(result1));
console.log('result2 =' + JSON.stringify(result2));
```

上方代码中，最后三行的打印结果是：

```bash
arr =["a","b","c"]
result1 =a,b,c
result2 =a-b-c
```

### split()

> 注意，`split()`是字符串的方法，不是数组的方法。

语法：

```javascript
新的数组 = str.split(分隔符);
```

解释：通过指定的分隔符，将一个字符串拆分成一个**数组**。不会改变原字符串。

备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就派上用场了。

### reverse()

`reverse()`：反转数组，返回结果为**反转后的数组**（会改变原来的数组）。

语法：

```js
反转后的数组 = 数组.reverse();
```

举例：

```javascript
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];

var result = arr.reverse(); // 将数组 arr 进行反转

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```
arr =["f","e","d","c","b","a"]
result =["f","e","d","c","b","a"]
```

从打印结果可以看出，原来的数组已经被改变了。

### sort()方法

> sort()方法需要好好理解。

`sort()`：对数组的元素进行从小到大来排序（会改变原来的数组）。

### sort()方法：无参时

如果在使用 sort() 方法时不带参，则默认按照**Unicode 编码**，从小到大进行排序。

**举例 1**：（当数组中的元素为字符串时）

```javascript
let arr1 = ['e', 'b', 'd', 'a', 'f', 'c'];

let result = arr1.sort(); // 将数组 arr1 进行排序

console.log('arr1 =' + JSON.stringify(arr1));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```
    arr1 =["a","b","c","d","e","f"]
    result =["a","b","c","d","e","f"]
```

从上方的打印结果中，我们可以看到，sort 方法会改变原数组，而且方法的返回值也是同样的结果。

**举例 2**：（当数组中的元素为数字时）

```javascript
let arr2 = [5, 2, 11, 3, 4, 1];

let result = arr2.sort(); // 将数组 arr2 进行排序

console.log('arr2 =' + JSON.stringify(arr2));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```
arr2 =[1,11,2,3,4,5]
result =[1,11,2,3,4,5]
```

上方的打印结果中，你会发现，使用 sort() 排序后，数字`11`竟然在数字`2`的前面。这是为啥呢？因为上面讲到了，`sort()`方法是按照**Unicode 编码**进行排序的。

那如果我想让 arr2 里的数字，完全按照从小到大排序，怎么操作呢？继续往下看。

### sort()方法：带参时，自定义排序规则

如果在 sort()方法中带参，我们就可以**自定义**排序规则。具体做法如下：

我们可以在 sort()添加一个回调函数，来指定排序规则。回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数。

浏览器根据回调函数的返回值来决定元素的排序：（重要）

-   如果返回一个大于 0 的值，则元素会交换位置

-   **如果返回一个小于 0 的值，则元素位置不变**

-   如果返回一个等于 0 的值，则认为两个元素相等，则不交换位置

如果只是看上面的文字，可能不太好理解，我们来看看下面的例子，你肯定就能明白。

### 举例：将数组中的数字按照从小到大排序

**写法 1**：

```javascript
var arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
var result = arr.sort(function (a, b) {
    if (a > b) {
        // 如果 a 大于 b，则交换 a 和 b 的位置
        return 1;
    } else if (a < b) {
        // 如果 a 小于 b，则位置不变
        return -1;
    } else {
        // 如果 a 等于 b，则位置不变
        return 0;
    }
});

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

打印结果：

```javascript
arr = [1, 2, 3, 4, 5, 11];
result = [1, 2, 3, 4, 5, 11];
```

上方代码的写法太啰嗦了，其实也可以简化为如下写法：

**写法 2**：（冒泡排序）

```javascript
let arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
let result = arr.sort(function (a, b) {
    return a - b; // 升序排列
    // return b - a; // 降序排列
});

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

打印结果不变。

上方代码还可以写成 ES6 的形式，也就是将 function 改为箭头函数，其写法如下。

**写法 3**：（箭头函数）

```js
let arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则
let result = arr.sort((a, b) => {
    return a - b; // 升序排列
});

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

上方代码，因为函数体内只有一句话，所以可以去掉 return 语句，继续简化为如下写法。

**写法 4**：（推荐）

```js
let arr = [5, 2, 11, 3, 4, 1];

// 自定义排序规则：升序排列
let result = arr.sort((a, b) => a - b);

console.log('arr =' + JSON.stringify(arr));
console.log('result =' + JSON.stringify(result));
```

上面的各种写法中，写法 4 是我们在实战开发中用得最多的。

为了确保代码的简洁优雅，接下来的代码中，凡是涉及到函数，我们将尽量采用 ES6 中的箭头函数来写。

### sort 方法举例：将数组从小到大排序

将数组从小到大排序，这个例子很常见。但在实际开发中，总会有一些花样。

下面这段代码，在实际开发中，经常用到，一定要掌握。完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            let dataList = [
                {
                    title: '品牌鞋子，高品质低价入手',
                    publishTime: 200,
                },
                {
                    title: '不是很贵，但是很暖',
                    publishTime: 100,
                },
                {
                    title: '无法拒绝的美食，跟我一起吃吃',
                    publishTime: 300,
                },
            ];

            console.log('qianguyihao 排序前的数组：' + JSON.stringify(dataList));

            // 将dataList 数组，按照 publishTime 字段，从小到大排序。（会改变原数组）
            dataList.sort((a, b) => parseInt(a.publishTime) - parseInt(b.publishTime));

            console.log('qianguyihao 排序后的数组：' + JSON.stringify(dataList));
        </script>
    </body>
</html>
```

打印结果：

```
qianguyihao 排序前的数组：[
    {"title":"品牌鞋子，高品质低价入手","publishTime":200},
    {"title":"不是很贵，但是很暖","publishTime":100},
    {"title":"无法拒绝的美食，跟我一起吃吃","publishTime":300}
]

qianguyihao 排序后的数组：[
    {"title":"不是很贵，但是很暖","publishTime":100},
    {"title":"品牌鞋子，高品质低价入手","publishTime":200},
    {"title":"无法拒绝的美食，跟我一起吃吃","publishTime":300}
]
```

上方代码中，有人可能会问： publishTime 字段已经是 int 类型了，为啥在排序前还要做一次 parseInt() 转换？这是因为，这种数据，一般是后台接口返回给前端的，数据可能是 int 类型、也可能是字符串类型，所以还是统一先做一次 partInt() 比较保险。这是一种良好的工作习惯。

### indexOf() 和 lastIndexOf()：获取数据的索引

**语法 1**：

```javascript
索引值 = 数组.indexOf(想要查询的元素);

索引值 = 数组.lastIndexOf(想要查询的元素);
```

备注：`indexOf()` 是从前向后查找元素的位置。同理，`lastIndexOf()`是从后向前寻找。

**解释**：可以检索一个数组中是否含有指定的元素。如果数组中含有该元素，则会返回其**第一次出现**的索引；如果没有找到指定的内容，则返回 -1。

这个方法的作用：

-   **如果获取的索引值为 0，说明数组是以查询的元素为开头的**。

-   如果获取的索引值为-1，说明这个数组中没有指定的元素。

**注意**：`indexOf()`在检索时，是严格类型约束，类似于`===`。

**举例 1**：

```javascript
var arr = ['a', 'b', 'c', 'd', 'e', 'd', 'c'];

console.log(arr.indexOf('c')); //从前往后，找第一个"c"在哪个位置
console.log(arr.lastIndexOf('d')); //从后往前，找第一个"d"在哪个位置
```

打印结果：

```
2
5
```

**举例 2**：

```js
let arr = ['1', '2', '3', '4', '5'];
console.log(arr.indexOf(2));
```

打印结果：

```
-1
```

**语法 2**：

这个方法还可以指定第二个参数，用来指定查找的**起始位置**。语法如下：

```javascript
索引值 = 数组.indexOf(想要查询的元素, [起始位置]);
```

举例 3：（两个参数时，需要特别注意）

```javascript
let arr = ['q', 'i', 'a', 'n', 'g', 'u', 'y', 'i', 'h', 'a', 'o'];
result = str.indexOf('a', 3); // 从第三个位置开始查找 'a'这个元素 【重要】

console.log(result); // 打印结果：9
```

上方代码中，`indexOf()`方法中携带了两个参数，具体解释请看注释。

### find()

**语法**：

```javascript
find((item, index, arr) => {
    return true;
});
```

**作用**：找出**第一个**满足「指定条件返回 true」的元素；如果没找到，则返回 undefined。

备注：一旦找到符合条件的第一个元素，将不再继续往下遍历。

举例：

```javascript
let arr = [2, 3, 2, 5, 7, 6];

let result = arr.find((item, index) => {
    return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素返回
});

console.log(result); //打印结果：5
```

### findIndex()

**语法**：

```javascript
findIndex((item, index, arr) => {
    return true;
});
```

**作用**：找出**第一个**满足「指定条件返回 true」的元素的 index。

举例：

> 我们直接把上面的代码中的 find 方法改成 findIndex，来看看效果。

```javascript
let arr = [2, 3, 2, 5, 7, 6];

let result = arr.findIndex((item, index) => {
    return item > 4; //遍历数组arr，一旦发现有第一个元素大于4，就把这个元素的index返回
});

console.log(result); //打印结果：3
```

### every()

`every()`：对数组中每一项运行回调函数，如果都返回 true，every 就返回 true；如果有一项返回 false，则停止遍历，此方法返回 false。

注意：every()方法的返回值是 boolean 值，参数是回调函数。

举例：

```javascript
var arr1 = ['千古', '宿敌', '南山忆', '素颜'];
var bool1 = arr1.every(function (element, index, array) {
    if (element.length > 2) {
        return false;
    }
    return true;
});
console.log(bool1); //输出结果：false。只要有一个元素的长度是超过两个字符的，就返回false

var arr2 = ['千古', '宿敌', '南山', '素颜'];
var bool2 = arr2.every(function (element, index, array) {
    if (element.length > 2) {
        return false;
    }
    return true;
});
console.log(bool2); //输出结果：true。因为每个元素的长度都是两个字符。
```

### some()

`some()`：对数组中每一个元素运行回调函数，只要有一个元素返回 true，则停止遍历，此方法返回 true。

注意：some()方法的返回值是 boolean 值。



**如果未设置返回true的条件语句，会执行全部有值元素，最后返回false：**





some为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个true。

如果找到了这样一个值，some 将会立即返回 true。

否则，some 返回 false。

callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

callback 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。





### every() 和 some() 的使用场景

every() 和 some() 这两个方法，初学者很容易搞混。要怎么区分呢？你可以这样记：

-   every()：全部真，才为真。当你需要让数组中的每一个元素都满足指定条件时，那就使用 every()。

-   some()：一个真，则为真，点到为止。数组中只要有一个元素满足指定条件时，就停止遍历。那就使用 some()。

### valueOf()：返回数组本身

```javascript
数组本身 = 数组.valueOf();
```

这个方法的意义不大。因为我们直接写数组对象的名字，就已经是数组本身了。

### 概念：数组的遍历

遍历数组即：获取并操作数组中的每一个元素，然后得到想要的返回结果。在我们的实战开发中，使用得非常频繁。

遍历数组的方法包括：every()、filter()、forEach()、map()等。

PS：这几个方法**不会修改原数组**。

语法格式：

```
数组/boolean/无 = 数组.every/filter/forEach/map/some(
                        function(item, index, arr){
                                        程序和返回值；
                        })
```

有了这几种方法，就可以替代一些 for 循环了。下面依次来介绍。

### for 循环遍历

举例：

```javascript
const arr = ['生命壹号', '许嵩', '永不止步'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // arr[i]代表的是数组中的每一个元素i
}

console.log(JSON.stringify(arr));
```

打印结果：

```
生命壹号
许嵩
永不止步

["生命壹号","许嵩","永不止步"]
```

### forEach() 遍历

> `forEach()` 这种遍历方法只支持 IE8 以上的浏览器。IE8 及以下的浏览器均不支持该方法。所以如果需要兼容 IE8，则不要使用 forEach，改为使用 for 循环来遍历即可。

forEach()方法需要一个函数作为参数。这种函数，是由我们创建但是不由我们调用的，我们称为回调函数。

数组中有几个元素，该回调函数就会执行几次。

回调函数中传递三个参数：

-   第一个参数，就是当前正在遍历的元素

-   第二个参数，就是当前正在遍历的元素的索引

-   第三个参数，就是正在遍历的数组

代码举例：

```javascript
let myArr = ['王一', '王二', '王三'];

myArr.forEach((item, index, arr) => {
    console.log('item:' + item);
    console.log('index:' + index);
    console.log('arr:' + JSON.stringify(arr));
    console.log('----------');
});
```

打印结果：

```javascript
item:王一
index:0
arr:["王一","王二","王三"]
----------
item:王二
index:1
arr:["王一","王二","王三"]
----------
item:王三
index:2
arr:["王一","王二","王三"]
----------
```

注意，forEach() 没有返回值。也可以理解成：forEach() 的返回值是 undefined。如果你尝试 `tempArry = myArr.forEach()`这种方式来接收，是达不到效果的。

### forEach() 能不能改变原数组？

forEach() 能不能改变原数组？关于这个问题，大部分人会搞错。我们来看看下面的代码。

**1、数组的元素是基本数据类型**：（无法改变原数组）

```js
let numArr = [1, 2, 3];

numArr.forEach((item) => {
    item = item * 2;
});
console.log(JSON.stringify(numArr)); // 打印结果：[1, 2, 3]
```

上面这段代码，你可要看仔细了，打印结果是 `[1, 2, 3]`，不是 `[2, 4, 6]`。

**2、数组的元素是引用数据类型**：（直接修改整个对象时，无法改变原数组）

```js
let objArr = [
    { name: '千古壹号', age: 20 },
    { name: '许嵩', age: 30 },
];

objArr.forEach((item) => {
    item = {
        name: '邓紫棋',
        age: '29',
    };
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"千古壹号","age":20},{"name":"许嵩","age":30}]
```

**3、数组的元素是引用数据类型**：（修改对象里的某个属性时，可以改变原数组）

```js
let objArr = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 30 },
];

objArr.forEach((item) => {
    item.name = '邓紫棋';
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"邓紫棋","age":28},{"name":"邓紫棋","age":30}]
```

如果你需要通过 forEach 修改原数组，建议用 forEach 里面的参数 2 和参数 3 来做，具体请看下面的标准做法。

**4、forEach() 通过参数 2、参数 3 修改原数组**：（标准做法）

```js
// 1、数组的元素是基本数据类型
let numArr = [1, 2, 3];

numArr.forEach((item, index, arr) => {
    arr[index] = arr[index] * 2;
});
console.log(JSON.stringify(numArr)); // 打印结果：[2,4,6]

// 2、数组的元素是引用数据类型时，直接修改对象
let objArr = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 34 },
];

objArr.forEach((item, index, arr) => {
    arr[index] = {
        name: '小明',
        age: '10',
    };
});
console.log(JSON.stringify(objArr)); // 打印结果：[{"name":"小明","age":"10"},{"name":"小明","age":"10"}]

// 3、数组的元素是引用数据类型时，修改对象的某个属性
let objArr2 = [
    { name: '千古壹号', age: 28 },
    { name: '许嵩', age: 34 },
];

objArr2.forEach((item, index, arr) => {
    arr[index].name = '小明';
});
console.log(JSON.stringify(objArr2)); // 打印结果：[{"name":"小明","age":28},{"name":"小明","age":34}]
```

参考链接：

-   [forEach 到底可以改变原数组吗？](https://juejin.im/post/5d526a4ae51d4557dc774e7d)

-   [forEach 会改变原数组值吗](https://lhajh.github.io/js/2018/05/26/Does-forEach-change-the-original-array-value.html)

### map()方法

语法：

```js
arr.map(function (item, index, arr) {
    return newItem;
});
```

解释：对数组中每一项运行回调函数，返回该函数的结果，组成的新数组（返回的是**加工之后**的新数组）。不会改变原数组。

作用：对数组中的每一项进行加工。

**举例 1**：（拷贝的过程中改变数组元素的值）

有一个已知的数组 arr1，我要求让 arr1 中的每个元素的值都加 10，这里就可以用到 map 方法。代码举例：

```javascript
var arr1 = [1, 3, 6, 2, 5, 6];

var arr2 = arr1.map(function (item, index) {
    return item + 10; //让arr1中的每个元素加10
});
console.log(arr2);
```

打印结果：

![](http://img.smyhvae.com/20180402_0938.png)

**举例 2**：【重要案例，实际开发中经常用到】

将 A 数组中某个属性的值，存储到 B 数组中。代码举例：

```javascript
const arr1 = [
    { name: '千古壹号', age: '28' },
    { name: '许嵩', age: '32' },
];

// 将数组 arr1 中的 name 属性，存储到 数组 arr2 中
const arr2 = arr1.map((item) => item.name);

// 将数组 arr1 中的 name、age这两个属性，改一下“键”的名字，存储到 arr3中
const arr3 = arr1.map((item) => ({
    myName: item.name,
    myAge: item.age,
})); // 将数组 arr1 中的 name 属性，存储到 数组 arr2 中

console.log('arr1:' + JSON.stringify(arr1));
console.log('arr2:' + JSON.stringify(arr2));
console.log('arr3:' + JSON.stringify(arr3));
```

打印结果：

```
arr1:[{"name":"千古壹号","age":"28"},{"name":"许嵩","age":"32"}]

arr2:["千古壹号","许嵩"]

arr3:[{"myName":"千古壹号","myAge":"28"},{"myName":"许嵩","myAge":"32"}]

```

map 的应用场景，主要就是以上两种。

### filter()

语法：

```js
arr.filter(function (item, index, arr) {
    return true;
});
```

解释：对数组中的**每一项**运行回调函数，该函数返回结果是 true 的项，将组成新的数组（返回值就是这个新的数组）。不会改变原数组。

作用：对数组进行过滤。

**举例 1**：找出数组 arr1 中大于 4 的元素，返回一个新的数组。代码如下：

```javascript
let arr1 = [1, 3, 6, 2, 5, 6];

let arr2 = arr1.filter((item) => {
    if (item > 4) {
        return true; // 将arr1中大于4的元素返回，组成新的数组
    }
    return false;
});

console.log(JSON.stringify(arr1)); // 打印结果：[1,3,6,2,5,6]
console.log(JSON.stringify(arr2)); // 打印结果：[6,5,6]
```

上方代码更简洁的写法如下：

```javascript
let arr1 = [1, 3, 6, 2, 5, 6];

let arr2 = arr1.filter((item) => item > 4); // 将arr1中大于4的元素返回，组成新的数组

console.log(JSON.stringify(arr1)); // 打印结果：[1,3,6,2,5,6]
console.log(JSON.stringify(arr2)); // 打印结果：[6,5,6]
```

**举例 2**：

获取数组 A 中指定类型的对象，放到数组 B 中。代码举例如下：

```javascript
const arr1 = [
    { name: '许嵩', type: '一线' },
    { name: '周杰伦', type: '过气' },
    { name: '邓紫棋', type: '一线' },
];

const arr2 = arr1.filter((item) => item.type == '一线'); // 筛选出一线歌手

console.log(JSON.stringify(arr2));
```

打印结果：

```javascript
[
    { name: '许嵩', type: '一线' },
    { name: '邓紫棋', type: '一线' },
];
```

### reduce()方法

### reduce() 语法

> reduce 的发音：[rɪ'djuːs]。中文含义是减少，但这个方法跟“减少”没有任何关系。

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。返回值是回调函数累计处理的结果。

**语法**：

```javascript
arr.reduce(function (previousValue, currentValue, currentIndex, arr) {}, initialValue);
```

参数解释：

-   previousValue：必填，上一次调用回调函数时的返回值

-   currentValue：必填，当前正在处理的数组元素

-   currentIndex：选填，当前正在处理的数组元素下标

-   arr：选填，调用 reduce()方法的数组

-   initialValue：选填，可选的初始值（作为第一次调用回调函数时传给 previousValue 的值）

在以往的数组方法中，匿名的回调函数里是传三个参数：item、index、arr。但是在 reduce() 方法中，前面多传了一个参数`previousValue`，这个参数的意思是上一次调用回调函数时的返回值。第一次执行回调函数时，previousValue 没有值怎么办？可以用 initialValue 参数传给它。

备注：绝大多数人在一开始接触 reduce() 的时候会很懵逼，但是没关系，有事没事多看几遍，自然就掌握了。如果能熟练使用 reduce() 的用法，将能替代很多其他的数组方法，并逐渐走上进阶之路，领先于他人。

为了方便理解 reduce()，我们先来看看下面的简单代码，过渡一下：

```js
let arr1 = [1, 2, 3, 4, 5, 6];

arr1.reduce((prev, item) => {
    console.log(prev);
    console.log(item);
    console.log('------');
    return 88;
}, 0);
```

打印结果：

```
0
1
------
88
2
------
88
3
------
88
4
------
88
5
------
88
6
------
```

上面的代码中，由于`return`的是固定值，所以 prev 打印的也是固定值（只有初始值是 0，剩下的遍历中，都是打印 88）。

现在来升级一下，实际开发中，prev 的值往往是动态变化的，这便是 reduce()的精妙之处。我们来看几个例子就明白了。

### reduce() 的常见应用

**举例 1**、求和：

计算数组中所有元素项的总和。代码实现：

```javascript
const arr = [2, 0, 1, 9, 6];
// 数组求和
const total = arr.reduce((prev, item) => {
    return prev + item;
});

console.log('total:' + total); // 打印结果：18
```

**举例 2**、统计某个元素出现的次数：

代码实现：

```js
// 定义方法：统一 value 这个元素在数组 arr 中出现的次数
function repeatCount(arr, value) {
    if (!arr || arr.length == 0) return 0;

    return arr.reduce((totalCount, item) => {
        totalCount += item == value ? 1 : 0;
        return totalCount;
    }, 0);
}

let arr1 = [1, 2, 6, 5, 6, 1, 6];

console.log(repeatCount(arr1, 6)); // 打印结果：3
```

**举例 3**、求元素的最大值：

代码实现：

```js
const arr = [2, 0, 1, 9, 6];
// 数组求最大值
const maxValue = arr.reduce((prev, item) => {
    return prev > item ? prev : item;
});

console.log(maxValue); // 打印结果：9
```

参考链接：

-   [JS reduce 函数](https://juejin.im/post/5d78aa3451882521397645ae)

### 数组练习

### splice()练习：数组去重

代码实现：

```javascript
//创建一个数组
var arr = [1, 2, 3, 2, 2, 1, 3, 4, 2, 5];

//去除数组中重复的数字
//获取数组中的每一个元素
for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    /*获取当前元素后的所有元素*/
    for (var j = i + 1; j < arr.length; j++) {
        //console.log("---->"+arr[j]);
        //判断两个元素的值是否相等
        if (arr[i] == arr[j]) {
            //如果相等则证明出现了重复的元素，则删除j对应的元素
            arr.splice(j, 1);
            //当删除了当前j所在的元素以后，后边的元素会自动补位
            //此时将不会在比较这个元素，我需要再比较一次j所在位置的元素
            //使j自减
            j--;
        }
    }
}

console.log(arr);
```

### 清空数组

清空数组，有以下几种方式：

```javascript
var array = [1, 2, 3, 4, 5, 6];

array.splice(0); //方式1：删除数组中所有项目
array.length = 0; //方式2：length属性可以赋值，在其它语言中length是只读
array = []; //方式3：推荐
```

### join() 练习

**问题**：将一个字符串数组输出为`|`分割的形式，比如“千古|宿敌|素颜”。使用两种方式实现。

答案：

方式 1：（不推荐）

```javascript
var arr = ['千古', '宿敌', '素颜'];
var str = arr[0];
var separator = '|';
for (var i = 1; i < arr.length; i++) {
    str += separator + arr[i]; //从第1个数组元素开始，每个元素前面加上符号"|"
}

console.log(str);
```

输出结果：

![](http://img.smyhvae.com/20180126_1336.png)

不推荐这种方式，因为：由于字符串的不变性，str 拼接过多的话，容易导致内存溢出（很多个 str 都堆放在栈里）。

方式 2：（推荐。通过 array 数组自带的 api 来实现）

```javascript
var arr = ['千古', '宿敌', '素颜'];

console.log(arr.join('|'));
```

结果：

![](http://img.smyhvae.com/20180126_1339.png)

### reverse() 练习

题目：将一个字符串数组的元素的顺序进行反转，使用两种种方式实现。提示：第 i 个和第 length-i-1 个进行交换。

答案：

方式 1：

```javascript
function reverse(array) {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArr[newArr.length] = array[i];
    }
    return newArr;
}
```

方式 2：（算法里比较常见的方式）

```javascript
function reverse(array) {
    for (var i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
```

方式 3：（数组自带的 reverse 方法）

现在我们学习了数组自带的 api，我们就可以直接使用 reverse()方法。

### 练习

问题：找到数组["c","a","z","a","x","a"]中每一个元素出现的次数。

分析：这道题建议用 json 数据来做，因为我们想知道 a 出现了几次，c 出现了几次，x 出现了几次。恰好`k:v .. k:v`这种键值对的形式就比数组方便很多了。

键值对的形式：用 key 代表数组中的元素，用 value 代表元素出现的次数。

略难，答案暂略。

### 练习：数组去重

问题：编写一个方法去掉一个数组中的重复元素。

分析：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。

答案：

```javascript
//    编写一个方法 去掉一个数组的重复元素
var arr = [1, 2, 3, 4, 5, 2, 3, 4];
console.log(arr);
var aaa = fn(arr);
console.log(aaa);
//思路：创建一个新数组，循环遍历，只要新数组中有老数组的值，就不用再添加了。
function fn(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        //开闭原则
        var bool = true;
        //每次都要判断新数组中是否有旧数组中的值。
        for (var j = 0; j < newArr.length; j++) {
            if (array[i] === newArr[j]) {
                bool = false;
            }
        }
        if (bool) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}
```

## foreach

> 语法：   需要遍历的数组名.foreach（参数 =>{ 函数体}）
>
> 参数：最多三个参数
>
> 例：
>
> ​			第一个：//输出的是获取到的 数据（单个逐个输出）
>
> ​             第二个： //输出 数据对应的索引值
>
> ​             第三个： //输出的是获取到的整个数据
>
> ​             第四个： //输出undefined ==> 可知 最多写三个值



例：

```js
$("#btn").click(function() {
    $.ajax({
        url: "Person1.json",
        dataType: "json",
        type: "get",
        success: function(data) {

            console.log(data) //输出的是从Person.json获取到的数据
            var res = data.xs;
            var block = '';
            // console.log(res);
            res.forEach((e, i, over, a) => {
                //
                console.log(e); //输出的是获取到的  数据（单个逐个输出）
                console.log(i); //输出 数据对应的索引值
                console.log(over); //输出的是获取到的整个数据
                console.log(a) //输出undefined  ==> 可知  最多写三个值


                //正常写法
                // block += "<a href=''>" + e + "</a>";
                //es6  写法
                block += `<a href=''> ${e}</a>`;
                $('#foreach').html(block)
            });


        },
        error: function(e) {
            console.log(e);
        }
    });
    });
```





```js
  $(function() {
        $.ajax({
            url: "Person1.json", //VScode  预览时会开辟一个服务器  这个地址会根据电脑连接的网络不通而更改
            dataType: "json",
            type: "get",
            success: function(e) {
                var data = e.xs;
                var list = '';
                data.forEach(e => {
                    list += `<li>${e}</li>`;

                });
                $(".ul").html(list)

            }
        })
    })
```





![image-20200812111943218](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200812111943218.png)





## 遍历对象

```js
例：
	for(var k in obj){
        k:得到的是属性名
        obj[k]:得到的是属性值（obj是对象名，当obj如下datas一样的类型时才需要加上[]）
    }
```

```js
  var datas = [{
            name: 'go',
            subject: 'javascript',
            score: 70
        }, {
            name: 'ZGG',
            subject: 'javascript',
            score: 100
        }, {
            name: 'Forever',
            subject: 'javascript',
            score: 100
        }, {
            name: 'P_looo',
            subject: 'javascript',
            score: 99
        }];
for (var k in datas[i]) { //for循环出列
                var td = document.createElement('td');
     			td.innerHTML = datas[i][k];
                tr.appendChild(td)
            }
//每一个对象内有几条属性输出创建几个td标签
```

![image-20200707143241684](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200707143241684.png)![image-20200707143206303](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200707143206303.png)

### JavaScript 对象:

​    

```js
//1.JavaScript 对象用花括号来书写。
//对象属性是 name:value 对，由逗号分隔。
例：var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"};
```

## 构造函数,原型，原型链

```js
https://my.oschina.net/u/2600761/blog/1524617
```

### 构造函数

```js
例：
	//Person构造函数
    function Person() {
        name = 'Person';
        this.height = '160cm';
    }
    //在其原型对象中添加age属性
    Person.prototype.age = '18';
    //Person的实例p1
    var p1 = new Person();
    p1.age;//18
    p1.name;//undefined
    p1.height;//160cm
```





### 原型

```js
原型模式是js对继承的一种实现
```



> prototype：构造函数中的属性，指向该构造函数的原型对象。
>
> constructor：原型对象中的属性，指向该原型对象的构造函数
>
> _proto_：实例中的属性，指向new这个实例的构造函数的原型对象

```js
例：
    //Person构造函数
    function Person() {
        name = 'Person';
        this.height = '160cm';
    }
    //在其原型对象中添加age属性  //原型为一个Object实例，并有age属性
    Person.prototype.age = '18';
    //Person的实例p1
    var p1 = new Person();
    p1.age;//18
    p1.name;//undefined
    p1.height;//160cm

//Person为构造函数
//Person prototype为原型
//p1虽然是通过newPerson获得的，但是p1的原型却直接指向Person Prototype，并且只得到了Person中的this的属性。
```

> ***\* var p1 = new Person()都发生了什么？**
>
> 1.var p1 = new Object(); //此时p1._proto_ = Object Prototype
>
> 2.p1._proto_ = Person.prototype;
>
> 3.Person.call(p1);//使用新对象p1调用函数Person，将this作用域给p1



![](https://static.oschina.net/uploads/space/2017/0827/163417_gsaU_2600761.png)





### 原型链

> 在定义构造函数的prototype属性的时候，直接吧一个对象赋值给prototype。

```js
例：
	//Person构造函数
    function Person(){
        name = 'Person';
        this.height = '160cm';
    }
    //原型为一个Object实例，并有age属性
    Person.prototype = {
        age: '18'
    }
    //Person的实例p1
    var p1 = new Person();
    p1.age;//18
    p1.name;//undefined
    p1.height;//160cm
```

> - Person Prototype直接变成了Object的一个实例，并且其中不再有constructor参数
> - Person Prototype直接变成了Object的一个实例，也就是说Person Prototype中有一个_proto_参数，指向Object Prototype



![](https://static.oschina.net/uploads/space/2017/0827/170055_lAsL_2600761.png)





## 闭包

### 闭包的概念

**闭包**（closure）：指有权**访问**另一个函数作用域中**变量**的**函数**。

上面这个概念，出自《JavaScript 高级程序设计（第 3 版）》这本书。上面的概念中指出，闭包是一种函数；当然，你可以**把闭包理解成是一种现象**。具体解释如下。

简单理解就是：如果**这个作用域可以访问另外一个函数内部的局部变量**，那就产生了闭包（此时，你可以把闭包理解成是一种现象）；而另外那个作用域所在的函数称之为**闭包函数**。注意，这里强调的是访问**局部变量**哦。

## break ， continue，return

- break ：结束当前的循环体（如 for、while）

- continue ：跳出本次循环，继续执行下次循环（如 for、while）

- return ：1、退出循环。2、返回 return 语句中的值，同时结束当前的函数体内的代码，退出当前函数。

### break

* break 可以用来退出 switch 语句或退出**整个**循环语句（循环语句包括 for 循环、while 循环。不包括 if。if 里不能用 break 和 continue，否则会报错）。
* break 会立即终止离它**最近**的那个**循环语句**。
* 可以为循环语句创建一个 label，来标识当前的循环（格式：label:循环语句）。使用 break 语句时，可以在 break 后跟着一个 label，这样 break 将会结束指定的循环，而不是最近的。

```js
例：  //注意 break只对循环有效，if是流程控制  for才是循环语句
	for (var i = 0; i < 5; i++) {
        console.log('i的值:' + i);
        if (i == 2) {
            break; // 注意，虽然在 if 里 使用了 break，但这里的 break 是服务于外面的 for 循环。
        }
    }

结果：
    i的值:0
    i的值:1
    i的值:2
```

```js
例2：
	outer: for (var i = 0; i < 5; i++) {
    console.log('外层循环 i 的值：' + i);
    	for (var j = 0; j < 5; j++) {
        	break outer; // 直接跳出outer所在的外层循环（这个outer是我自定义的label）
        	console.log('内层循环 j 的值:' + j);
    	}
	}
结果：外层循环 i 的值：0
```



### continue

* continue 可以用来跳过**当次**循环，继续下一次循环。
* 同样，continue 默认只会离他**最近**的循环起作用。
* 同样，如果需要跳过指定的当次循环，可以使用 label 标签。

```js\
例：
	for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log('i的值:' + i);
}

结果：
    i的值:1

    i的值:3

    i的值:5

    i的值:7

    i的值:9
```



## 字符串截取slice（）

截取后组成新的数组

> 新字符串 = str.slice(开始索引, 结束索引); //两个参数都是索引值。包左不包右。

- `(2, 5)` 截取时，包左不包右。

- `(2)` 表示**从指定的索引位置开始，截取到最后**。

- `(-3)` 表示从倒数第三个开始，截取到最后。

- `(1, -1)` 表示从第一个截取到倒数第一个。

- `(5, 2)` 表示前面的大，后面的小，返回值为空。



## split()：字符串转换为数组 【重要】

> 新的数组 = str.split(分隔符);

> 备注：`split()`这个方法在实际开发中用得非常多。一般来说，从接口拿到的 json 数据中，经常会收到类似于`"q, i, a, n"`这样的字符串，前端需要将这个字符串拆分成`['q', 'i', 'a', 'n']`数组，这个时候`split()`方法就派上用场了。

```js
例：
	var str = 'qian, gu, yi, hao'; // 用逗号隔开的字符串
	var array = str.split(','); // 将字符串 str 拆分成数组，通过逗号来拆分

	console.log(array); // 打印结果是数组：["qian", " gu", " yi", " hao"]
```

```js
例2：
	//split()方法：字符串变数组
	var str3 = '千古壹号|qianguyihao|许嵩';

	console.log('结果1：' +str3.split()); // 无参数，表示：把整个字符串作为一个元素添加到数组中。

	console.log(str3.split('')); // 参数为空字符串，则表示：分隔字符串中每一个字符，分别添加到数组中

	console.log(str3.split('|')); // 参数为指定字符，表示：用 '|' 分隔字符串。此分隔符将不会出现在数		组的任意一个元素中

	console.log(str3.split('许')); // 同上
```

![](http://img.smyhvae.com/20200611_2050.png)



## join():作用于split相反



```js

例1：
msg=[ "H", "e", "l", "l", "o" ]
var s=msg.join('')

s='Hello'

例2：
msg=[ "H", "e", "l", "l", "o" ]
var s=msg.join(',')
s ===> H,e,l,l,o
```







## reverse  取反

```js
msg='Hello'
msg.reverse()

Hello
olleH
```





## function 函数:

**函数的加载问题**：JS加载的时候，只加载函数名，不加载函数体。所以如果想使用内部的成员变量，需要调用函数。

```js
例子 : toCelsius 引用的是函数对象，而 toCelsius() 引用的是函数结果。
     函数：   function toCelsius(f) {
                return (5/9) * (f-32);
                }
                document.getElementById("demo").innerHTML = toCelsius;
    结果：
        function toCelsius(f) { return (5/9) * (f-32); }
```

#### break 

> 语句“跳出”循环。会中断循环，并继续执行循环之后的代码（如果有）

#### continue 

> 语句“跳过”循环中符合条件的循环。

```js
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }   //跳出i=3时的循环，但其他都不影响（跳过值 3 ）
    text += "数字是 " + i + "<br>";
} 
```

### typeof:

* 1.typeof 运算符对数组返回 "object"，因为在 JavaScript 中数组属于对象。
* 2.在 JavaScript 中，没有值的变量，其值是 undefined。typeof 也返回 undefined。
* 3.null:   在 JavaScript 中，null 的数据类型是对象。
* 4.
      typeof 运算符把对象、数组或 null 返回 object。
      typeof 运算符会把函数返 返回function。

## this:

```js
//this指向问题一般情况下this的最终指向的是那个调用它的对象
//1.全局作用域或者普通函数中this指向全局对象window(注意定时器里面的this指向window)
//2.方法调用中谁调用this指向谁
// 3.构造函数中this指向构造函数的实例

this永远指向当前正在被执行的函数或方法的owner
https://www.cnblogs.com/SheilaSun/p/4398881.html
```



- ​    在方法中，this 指的是所有者对象。

> 在对象方法中，this 指的是此方法的“拥有者”。

```js
fullName : function() {
  return this.firstName + " " + this.lastName;
}
```



- ​    单独的情况下，this 指的是全局对象。

> 在单独使用时，拥有者是全局对象，因此 this 指的是全局对象。
>
> 在浏览器窗口中，全局对象是 [object Window]：

```js
var x = this;
```



- ​     在函数中，this 指的是全局对象。

- ​     在函数中，严格模式下，this 是 undefined。

- ​     在事件中，this 指的是接收事件的元素。

  

  例：在函数定义中，this 引用该函数的“拥有者”person

```js
   var person = {
                    firstName: "Bill",
                    lastName : "Gates",
                    id       : 678,
                    fullName : function() {
                        return this.firstName + " " + this.lastName;
                    }
                 };  
```



### 箭头函数中 this 的指向

ES6 中的箭头函数并不会使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。

### 改变函数内部的 this 指向

JS 专门为我们提供了一些方法来改变函数内部的 this 指向。详见下一篇文章中的 call()、apply()、bind() 方法。



## 比值函数：

>  function(a, b){return a-b} 

​	例子:（数组排序sort() 方法以字母顺序对数组进行排序：）

```js
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});   (a-b >0 就会输出由大到小，a-b < 0 就会输出由小到大)
```
## 正则表达式

> 正则表达式是构成搜索模式的字符序列。该搜索模式可用于文本搜索和文本替换操作
>
> 正则表达式可用于执行所有类型的文本搜索和文本替换操作。



```js
例子解释：
//   /w3school/i 是一个正则表达式。

//	w3school 是模式（pattern）（在搜索中使用）。

//	i 是修饰符（把搜索修改为大小写不敏感）。
```



#### search() 方法

> 使用表达式来搜索匹配，然后返回匹配的位置。



```js
var str = "Visit W3School!"; 
var n = str.search("W3School");
document.getElementById("demo").innerHTML = n;
//输出结果   6		（查找位置从0开始）
```

#### replace() 方法

> 返回模式被替换处修改后的字符串。

```js
<button onclick="myFunction()">试一试</button>

<p id="demo">Please visit Microsoft and Microsoft!</p>

<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace(/microsoft/i,"W3School");
  document.getElementById("demo").innerHTML = txt;
}
</script>

//第一次按钮结果 ==>  	Please visit W3School and Microsoft!
//第二次按钮结果 ==>  	Please visit W3School and W3School!
```



| [abc]  | 查找方括号之间的任何字符。 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_abc) |
| :----- | -------------------------- | ------------------------------------------------------------ |
| [0-9]  | 查找任何从 0 至 9 的数字。 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_0-9) |
| (x\|y) | 查找由 \| 分隔的任何选项。 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_xy) |

| 元字符 | 描述                                        |                                                              |
| :----- | :------------------------------------------ | ------------------------------------------------------------ |
| \d     | 查找数字。                                  | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_d) |
| \s     | 查找空白字符。                              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_s) |
| \b     | 匹配单词边界。                              | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_b) |
| \uxxxx | 查找以十六进制数 xxxx 规定的 Unicode 字符。 | [试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_regexp_ux) |





#### text( ) 方法

> test() 是一个正则表达式方法。它通过模式来搜索字符串，然后根据结果返回 true 或 false。

```js
例：
    <p>检索下面段落中的一个 "e"：</p>

    <p id="p01">The best things in life are free!</p>

    <p id="demo"></p>

    <script>
    text = document.getElementById("p01").innerHTML; 
    document.getElementById("demo").innerHTML = /e/.test(text);
    </script>
// 返回结果	==>   true
```

#### exec() 方法

> 它通过指定的模式（pattern）搜索字符串，并返回已找到的文本。
>
> 如果未找到匹配，则返回 null。

```js
例： 
	<p id="demo"></p>
    <script>
    var obj = /e/.exec("The best things in life are free!");
    document.getElementById("demo").innerHTML =
    "Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;
    </script>

//输出  ==>	Found e in position 2 in the text: The best things in life are free!
```

## 定时器，for

```js
for (var i = 0; i < 3; i++) {
            setTimeout(function() {
                console.log(i)
            });
        };
///输出 三个3
因为定时器是异步的，所有会等for循环结束之后才执行定时器
```

## Math.ceil( ),Math.floor( ),Math.round( )

![image-20200715175339774](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200715175339774.png)

## 作用域（变量）

​		函数参数也是函数内的局部变量。

#### 自动全局

```js
例：//这段代码将声明一个全局变量 carName，即使在函数内进行了赋值。
    myFunction();
    // 此处的代码能够使用 carName 变量

    function myFunction() {
        carName = "porsche";
    }

```

#### JavaScript 变量的有效期

* JavaScript 变量的有效期始于其被创建时。
* 局部变量会在函数完成时被删除。
* 全局变量会在您关闭页面是被删除。



## let , const，var

> 这两个关键字在 JavaScript 中提供了块作用域（*Block Scope*）变量（和常量）
>
> 通过 var 关键词声明的变量没有块*作用域*。

#### var

> 通过 var关键词声明的变量明天块作用域，在块 {} 内声明的变量可以从块之外进行访问

```js
实例：
1.
	{ 
 		 var x = 10; 
	}
	// 此处可以使用 x
2.
    var x = 10;
    // 此处 x 为 10
    { 
      var x = 6;
      // 此处 x 为 6
    }
    // 此处 x 为 6
3.
    var i = 7;
    for (var i = 0; i < 10; i++) {
      // 一些语句
    }
    // 此处，i 为 10
```



#### let

> 可以使用 let 关键词声明拥有块作用域的变量。
>
> 在块 *{}* 内声明的变量无法从块外访问：

```js
实例：
1.
	{ 
  		let x = 10;
	}
	// 此处不可以使用 x
2.
    let i = 7;
    for (let i = 0; i < 10; i++) {
      // 一些语句
    }
    // 此处 i 为 7
```

#### const

- 一旦声明必须赋值,不能使用null占位。
- 声明后不能再修改
- 如果声明的是复合类型数据，可以修改其属性

#### 区别：

* var声明变量存在变量提升，let和const不存在变量提升

* 通过 var 关键词定义的全局变量属于 window 对象：

```js
        var carName = "porsche";
        // 此处的代码可使用 window.carName
```

[	亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_let_scope)

* 通过 let 关键词定义的全局变量不属于 window 对象：

```js
        let carName = "porsche";
        // 此处的代码不可使用 window.carName
```

[		亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=js_let_global)

* let声明的变量，使用var 或 let重新声明是不可以的； 

  ```js
  1.
      var x = 10;       // 允许
      let x = 6;       // 不允许
  
      let x = 10;       // 允许
      let x = 6;       // 不允许
  
      let x = 10;       // 允许
      var x = 6;       // 不允许
  
      {
        var x = 10;   // 允许
        let x = 6;   // 不允许
  
        let x = 10;   // 允许
        let x = 6;   // 不允许
  
        let x = 10;   // 允许
        var x = 6;   // 不允许
      }
  
  2.
      let x = 6;       // 允许
  
      {
        let x = 7;   // 允许
      }
  
      {
        let x = 8;   // 允许
      }
  ```

## ES5

#### String.trim()

> String.trim() 删除字符串两端的空白字符。

```js
var str = "       Hello World!        ";
alert(str.trim());
```

#### forEach() 

> forEach() 方法为每个数组元素调用一次函数。

```js
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  	txt = txt + value + "<br>"; 
}
//输出
45
4
9
16
25
```

#### Array.indexOf()

> 检索数组中的某个元素值并返回其位置：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
//输出  a == 0   既Apple在数组的第一个
```



#### Array.isArray()

> isArray() 方法检查对象是否为数组。

```js
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}
//输出 true
```

#### Array.filter()

> 此例用值大于 x 的元素创建一个新数组：

```js
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > x;  //x 可以为任何数自定义
}
//x = 4 时 输出 ==>  45,9,16,25

```



#### JSON.parse()

> javascript 字符串是无法上传保存到json里的，json保存的是对象所有需要转换
>
> 将javascript 字符串类型数据转换为json对象类型数据

```js
var txt = '{"name":"Bill Gates", "age":62, "city":"Seattle"}'
var obj = JSON.parse(txt);
```

#### JSON.stringify()

>将json对象类型数据转换为javascript 字符串类型数据

```js
var obj = {"name":"Bill", "age":62, "city":"Seatle"};
var myJSON = JSON.stringify(obj);
```



# 插件



## 上下拉刷新--better-scroll

## [better-scroll](https://www.cnblogs.com/moxiaoshang/p/10909508.html)



https://better-scroll.github.io/docs/zh-CN/plugins/    插件文档



## 多级联动---mobileselect



https://github.com/onlyhom/mobileSelect.js/blob/master/docs/README-CN.md  官方文档

https://www.cnblogs.com/imPedro/p/9881998.html   案例文档































# [ECMAScript2015~2020语法全解析](http://es.xiecheng.live/)

# ES6 >

## （ promise es6、async es8 等内容要尤其关注。）

https://es6.ruanyifeng.com/

> https://es6.ruanyifeng.com/







## 箭头函数（Arrow Function）

> 箭头函数允许使用简短的语法来编写函数表达式。
>
> 不需要 function 关键字、return 关键字以及*花括号*。
>
> * 箭头功能没有自己的 this。它们不适合定义*对象方法*。
> * 箭头函数不能用argument

```js
const x = (x, y) => x * y;
document.getElementById("demo").innerHTML = x(5, 5);
//输出  25
```



### 若要返回对象

```js
var fn5=(a,b)=>({num:a+b});
console.log(fn5(2,5));  //{num: 7}
//当我们想要返回一个对象时不能直接在箭头后直接加{num:a+b},因为大括号也代表函数体，所以要在对象外再加一个小括号
```



```js
//在function中,this指向是由函数调用的时候决定的,箭头函数this的指向是由定义的时候决定的,箭头函数不能用argument,不能当做构造函数
btn2.onclick=function(){
  setTimeout(()=>{
    console.log(this);//不需要在外面存this
  },300)
}
```



## 解构赋值



### 对象解构



```js
 //对象解构赋值
    let obj={
      aa:1,
      bb:2,
      cc:3,
      dd:4
    }
    var {aa,bb,cc,dd}=obj;  //console.log(aa);  //1
    //对象的解构赋值变量名要与对象里的方法名一致,如果想重新定义变量名则用=链接，例如：
    var {aa=num,bb,cc,dd}=obj;  //console.log(num)  //1

```





### 数组解构

```js
 //数组解构赋值
    var [a,b,c,d]=[0,1,2,3];
    //变量名和数组下标一一对应，也可以添加自定义变量比如[a,b,c,d,e=5],如果原数组有第五个值，则e的值优先取原数组的值。
    console.log(b);//1
```



### 解构中的剩余模式



```js
 //解构赋值中的剩余模式
    var [a1,b1,c1,...r]=[1,2,3,4,5,6]
    console.log(a1,b1,c1,r)   //1, 2, 3, [4,5,6]
    //这里的...r为剩余模式，r也是一个变量名可以任意取。
```



### 传参解构

```js
 // 传参的解构赋值   传参的时候可以通过{}赋值
    function fn({f,g,h}){
      console.log(f); //2
      console.log(g); //3
      console.log(h); //4
    }
    fn({f:2,g:3,h:4})
```





## 扩展运算符



```js
 //  ...arr  实际上是把  arr的每一项拆分开来了
  //合并数组
  var arr=[1,2];
  var arr2=[3,4,5];
  var arr3=[...arr,...arr2];
  console.log(arr3)//[1,2,3,4,5]

  //合并对象
  var obj={a:1}
  var obj2={b:23}
  var obj3={...obj,...obj2};
  console.log(obj3);//{a:1,b:23}

  //利用...和Set结构进行数组去重
  var arr4=[15,9,2,4,13,3,25,6,1,1,5,6,7,3,5,2,5,3];
  var res=[...new Set(arr4)];
  console.log(res)//[15, 9, 2, 4, 13, 3, 25, 6, 1, 5, 7]
```

## 字符串方法

### 查看是否存在某个字符

```js
  var str='es6字符串方法';
  console.log(str.includes('串')) //true  includes()判断字符串有是否存在'串';
  console.log(str.startsWith('es6')) //true  startsWith()判断字符串是不是以'es6'开头的
  console.log(str.endsWith('方法')) //true  endsWith()判断字符串是不是以'方法'结尾的

```



## Class

> 1.**创建的类的类名 习惯性首字母大写**
>
> 2.类里面有个constructor 函数（构造器），可以接受传递过来的参数，同时返回实例对象
>
> 3.constructor 函数 只要new 生成实例时，就会调用这个函数，不写也会生成这个
>
> 4.生成实例必须写 new
>
> 5.**class 里面写函数不需要写function都是定义在类的prototype属性上面的**
>
> 6.**类里面写的函数方法之间不需要 逗号分隔**



```js
  //创建类
        //类里面写函数都不需要加function
        class On1 {
            constructor(uname, age) { //uname  作为形参
                this.uname = uname;
                this.age = age
            }
            fn(a) {
                console.log(a);
            }
        }
        // console.log(typeof on1); //function

        //创建实例对象
        var t = new On1('SOGOOO', 18);
        var t1 = new On1('21Y', 21);
        // console.log(t); //on1{}   ===>里面包含constructor  类的构造函数
        // console.log(typeof t); //object


        console.log(t.uname + '-' + t.age); //SOGOOO-18
        console.log(t1.uname + '-' + t1.age); //21Y- 21

        t.fn(123); //123
        t1.fn(456); //456
```





### 类的继承

#### **extends关键字** 

> 可以让子类继承父类的属性和方法

```js
//Father 代表父类  Son代表子类

class Father {
            constructor() {

            }
            money() {
                console.log("SOGOOO");
            }
        }
        class Son extends Father {

        }
        var son = new Son();
        son.money();//SOGOOO
```



#### super关键字

> 用于访问和调用对象父类上的函数，可以调用父类的构造函数，也可以调用父类的普通函数

》》因为每个类的constructor 构造函数内的  this.  都是指向 当前类下的， 所以子类传递的参数只能在子类内，不能传递到父类的constructor 构造函数内， 只有使用super之后才能将参数从子类 constructor 构造函数 传递到 父类constructor 构造函数内



```js
//父类
class Father {
            constructor(x, y) {
                this.x = x;
                this.y = y
            }
            sum() {
                console.log(this.x + this.y);
            }
        }
//子类
        class Son extends Father {
            constructor(x, y) {
                super(x, y) //调用了父类的构造函数
            }
        }
         var son = new Son(2, 1);
        var son1 = new Son('SO', 'GOOO');
        son.sum(); //3
        son1.sum(); //SOGOOO
```



#### 子类调用父类方法

> 1.父类，子类都有同名方法时，子类将会先调用自己的方法（就近调用）
>
> 2.子类想在 自己类内使用父类方法，需要在调用的方法前面加上super
>
> 例： super.say（）

```js
//父类
class Father {
           
            say() {
               return '我是你爹'
            }
        }
//子类
        class Son extends Father {
           say() {
               console.log(super.say()+'的儿子')
            }
        }
         var son = new Son(2, 1);
     
        son.sum(); //3
      
```











## map

1. 获取指定名称的元素 并生成一个新的数组

```js
//例
 let arr = [{
            name: "p-z",
            age: 18
        }, {
            name: "p-zz",
            age: 19
        }, {
            name: "p-zzz",
            age: 20
        }, {
            name: "p-zzzz",
            age: 21
        }]

        let arrt = arr.map(v => v.name);
        console.log(arrt)

//输出   ["p-z", "p-zz", "p-zzz", "p-zzzz"]
```



## 模板字符串

```js
``<li> ${ } </li>`    ==>   `` 包裹着标签   ${}为要输出的数据
```



```js
`string text ${expression} string text` 
```

## 加“”的区别

​	“false”==true	==> ES6中  加了引号就相当于与值等于 true

```js
//例		==>这样写之后就下面三元运算符里的就都认为是true 给全部view添加active 类名了
tabs.forEach((v, i) => {
                    i === index ? v.isActive = true : v.isActive = 'false'
                    console.log(typeof i)
                })

//wxml
 <view class="tabs_item {{item.isActive?'active':''}}"
data-index="{{index}}"
bindtap="hanldeItemTap"
wx:for="{{tabs}}" 
wx:key="id">
        {{item.name}}
        </view>
```

## { } 的区别

```js
 //{}  
//ES6语法  ==>{ index } = e.currentTarget.dataset  === index=e.currentTarget.dataset.index
// const { index } = e.currentTarget.dataset;

//index=xx 	相当于  {index}=xx.index


//const index= xxx
//和 const {index}=xxx
//根本不是同一个变量

```

##    ..    的使用

```js
 
//这里 ..urls   相当于 ==>  url:"data"   直接写上去一样

function promises(urls) {
            const beUrl = ".json"
            return new Promise((resolve, reject) => {
                $.ajax({
                    ...urls, //url:url  ==>url   与传的参一样所以只写url就可以
                    url: urls.url + beUrl,
                    dataType: 'json',
                    success: function(res) {
                        resolve(res)
                        console.log(res)
                    },
                    error: function(err) {
                        reject(err)
                    }
                })
            })
        }

        promises({url: "data"})
```



## export , import

> import    就是为了在js中 引入别的js

> export   相当于是将该函数暴露出接口，可供不能读取使用到该函数的提供了接口
>
> import	有export就会有import ，这是为了通过暴露的接口 获取函数

```js
export function say(content) {
      console.log(content)
  }
```

```js
import { request } from "../../request/index.js";
```



## Pormise

> resolve( )和 reject( ) 内的参数代表了 成功或者失败 传递到使用 .then  的两个回调函数内的数据

```json

//data.json
{
    "message": [
        { "naem": "P_lo", "age": 18 },
        { "naem": "P_loo", "age": 19 },
        { "naem": "P_looo", "age": 20 },
        { "naem": "P_loooo", "age": 21 }

    ]
}
```

### 1. 最原始的

```js
 
//最简单最原始的使用 只有一个请求 ==>  new 之后的Promise  首字母必须大写否则报错
        // let promise = new Promise((resolve, reject, ...p) => {
        //     $.ajax({
        //         url: 'data.json',
        //         success: function(res) {
        //             resolve(res)
        //         },
        //         error: function(err) {
        //             reject(err)
        //         }
        //     })
        // })

        // promise.then(ress => {
        //     console.log(ress)
        //         // alert(123)
        // }, err => {
        //     console.log(err)
        // });
```

### 2.Promise.all([ ])应用

> resolve( )和 reject( ) 内的参数代表了 成功或者失败 传递到使用 .then  的两个回调函数内的数据

```js

        // 当有多个请求地址时的 优化写法
        // function promises(url) {
        //     return new Promise((resolve, reject) => {
        //         $.ajax({
        //             url, //url:url  ==>url   与传的参一样所以只写url就可以
        //             dataType: 'json',
        //             success: function(res) {
        //                 resolve(res)
        //             },
        //             error: function(err) {
        //                 reject(err)
        //             }
        //         })
        //     })
        // }
        // Promise.all([
        //     promises('data.json'), //data.json ==> url:data.json
        //     promises('data.json')
        // ]).then(arr => {
		//		console.log(arr)  //无论有多少个ajax 请求，请求到的数据都会在arr内

        //     let [re1, re2] = arr;//解构赋值的写法  不这样写也可以，只是也是一种es6的写法
        //     console.log(re1)
        //     console.log(re2)
        // }, () => {
        //     console.log('失败了')
        // })


```

### 3.高版本jquery-ajax自带 的Promise

```js

        // 高版本的jquery ajax  自带封装的promise
        let p = $.ajax({
            url: 'data.json',
            dataType: 'json'
        })
        console.log(p); //打印出来的 里面包含有promise






        //所以不用自己封装   可以直接用 高版本的jquery-ajax
        Promise.all([
            $.ajax({
                url: 'data.json'
            }), $.ajax({
                url: 'data.json'
            })
        ]).then((res) => {
            console.log(res)//无论有多少个ajax 请求，请求到的数据都会在res内
        }, (err) => {
            console.log(err)
        })
```

### 4.常用API方法

#### 实例方法

*  .then( ) 得到一部任务的正确结果
*  .catch( ) 获取异常信息
*  .finally( ) 成功与否都会执行（尚且不是正式标准）



```js
   function foo() {
            return new Promise((res, rej) => {
                setTimeout(function() {
                    //1. res(123);  //catch 不打印内容 
                    rej('error') //catch 打印 error
                }, 100)
            })
        };

        //写法1
        // foo().then(res => {
        //         console.log(res);
        //     })
        //     .catch(res => {
        //         console.log(res);
        //     })
        //     .finally(function() {
        //         console.log('finished');
        //     });


        //写法2
        foo().then(res => {
            console.log(res);
        }, function(res) {
            console.log(res)
        })

        .finally(function() {
            console.log('finished');
        })
```





#### 对象方法



* Promise.all( ) 并发处理多个异步任务，所有任务都执行完成才能得到结果
* Promise.race( ) 并发处理多个异步任务，只要有一个任务完成就能得到结果











### 基本语法

> Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve(成功时)和reject(失败时)。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。



![](http://es.xiecheng.live/assets/img/promise.04ed9cc2.png)







### 同步异步解析



![](http://es.xiecheng.live/assets/img/task.9fef93a6.png)





### 回调地狱

> 一直在回调函数里执行回调，多了之后就不好维护了

```js
ajax('static/a.json', res => {
    console.log(res)
    ajax('static/b.json', res => {
        console.log(res)
        ajax('static/c.json', res => {
            console.log(res)
        })
    })
})
```



## Array.find()

> find() 方法返回通过测试函数的第一个数组元素的值。
>
> 请注意此函数接受 3 个参数：（如下实例）
>
> - 项目值
> - 项目索引
> - 数组本身

```js
//此例查找（返回）第一个大于 18 的元素（的值）：
	var numbers = [4, 9, 16, 25, 29];
    var first = numbers.find(myFunction);

    function myFunction(value, index, array) {
      return value > 18;
    }
//输出 25
```

## Array.findIndex()

> findIndex() 方法返回通过测试函数的第一个数组元素的索引。
>
> 请注意此函数接受 3 个参数：
>
> - 项目值
> - 项目索引
> - 数组本身

```js
//此例确定大于 18 的第一个元素的索引：
    var numbers = [4, 9, 16, 25, 29];
    var first = numbers.findIndex(myFunction);

    function myFunction(value, index, array) {
      return value > 18;
    }
//输出  3
```

## Number.isInteger() 方法

> 如果参数是整数，则 Number.isInteger() 方法返回 true。

```js
Number.isInteger(10);        // 返回 true
Number.isInteger(10.5);      // 返回 false
```





# ES7

## async

>  使用之后相当于是同步 

##### 只有 await 后面的语句 请求返回（成功）之后才能继续执行下面的代码

> await  后面跟随的是希望变成同步的语句（函数，ajax方法等）

##### 当返回数据没有先后顺序时就没必要使用async await了，用  promise 的.then  就可以了





> 解决回调地狱的终极方法

1.await 只能在 async 标记的函数内部使用

2.前面添加了async的函数在执行后都会自动返回一个Promise对象

3.await后面需要跟异步操作，不然就没有意义，而且await后面的Promise对象不必写then，因为await的作用之一就是获取后面Promise对象成功状态传递出来的参数。



```js
只有 await 后面的语句 请求返回（成功）之后才能继续执行下面的代码
```

```js
function timeout() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(1)
            resolve() // resolve('success')
        }, 1000)
    })
}

// 不加async和await是2、1   加了是1、2
async function foo() {
    await timeout() // let res = await timeout() res是success
    console.log(2)
}
foo()
```



# try{ }catch{ }





























# JQuery

localStorage 本地存储，刷新页面不会丢失数据
    本地存储只能存储字符串格式，需要把对象转换成字符串JSON.stringify(data)
例：
var todolist = [{
    title:'水电费发顺丰',
    done:'false'
},{
    title:'sss',
    done:'false'
}]

### 1.将数据转换成字符串保存本地

```js/jq
方法： 
  localStorage.setItem("数据保存是自己设定的文件名",json.stringfy(todolist))
```



### 2.获取保存的本地数据

需要把里面的字符串转换为对象格式 ：json.parse()
var data =  localStorage.setItem("数据保存是自己设定的文件名"，json.stringfy(todolist))
方法： localStorage.setItem

data = json.parse(data)
例：
    console.log(data[0].title)  打印了水电费发顺丰



### JQuery方法

#### 键盘敲击事件  

```js
    $(document).keydown(function(event){ 
        if(event.keyCode==13){ 
            $("#mouse").click(); 
        } 
    }); 
```



.keyCode()   回车键（13）

#### splice( )方法


数组的splice(从那个位置开始删除，删除几个元素)方法   根据索引号删除相关数据

#### on()  

click点击事件无效时可以使用on（）事件委托实现

​	正常使用：例：$('.search-item').click(function()

```js
//事件委托：例：
$('.mid').on('click','.search-item',function()  
//将事件绑定给父元素（触发事件的为类名为search-item元素），然后在后面写上触发事件元素类名或者id 
```

on所绑定的事件必须是已经存在的元素（最安心的方法就是绑定在body中）

#### 元素获取：

1.获取固有属性： .prop()
  	  2.获取自定义属性： .attr() 
		当后面带有函数时，函数（）内两个值代表的含义 ：选择器的 index 值和当前属性值
	

#### eq() 方法

​	将同一元素都可以通过索引号找到

#### **animate()**  动画

> 语法：$(selector).animate({params},speed,callback);

* 必需的 params 参数定义形成动画的 CSS 属性。

* 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

* 可选的 callback 参数是动画完成后所执行的函数名称。

#### remove( ) , empty( ) 删除元素/内容

> remove() - 删除被选元素（及其子元素）
>
> empty() - 从被选元素中删除子元素

* remove() 方法删除被选元素及其子元素。

```js
$("#div1").remove();
 // 删除的是id为div1 的这个元素 及 该元素内的所有东西（包括元素本身）

$("p").remove(".italic");
// 删除所有 类名为 italic 的p元素
```

* empty() - 从被选元素中删除子元素

```js
 $("#div1").empty();
//只删除id为 div1 的这个元素内的内容（不包括元素本身）
```

#### css() 方法

```js
例：
	//设置单个属性
	$("p").css("background-color","yellow");
	//设置多个属性
	css({"propertyname":"value","propertyname":"value",...});
```



![image-20200701161943767](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200701161943767.png)

#### 操作css类

> - addClass() - 向被选元素添加一个或多个类
> - removeClass() - 从被选元素删除一个或多个类
> - toggleClass() - 对被选元素进行添加/删除类的切换操作
> - css() - 设置或返回样式属性



```js
1.
    $("button").click(function(){
      $("h1,h2,p").addClass("blue");
      $("div").addClass("important");
    });
2.
    $("button").click(function(){
      $("#div1").addClass("important blue");
    });
3.
    $("button").click(function(){
      $("h1,h2,p").removeClass("blue");
    });
```

#### toArray( )	将选中的元素转换为数组

> toArray() 方法以数组的形式返回 jQuery 选择器匹配的元素。

```js
  //将 li 元素转换为数组，然后输出该数组元素的 innerHTML ：
	$("button").click(function(){
        x=$("li").toArray()
          for (i=0;i<x.length;i++)
          {
          alert(x[i].innerHTML);
          }
      });
```

#### get( )	获得指定的 DOM 元素

> get() 方法获得由选择器指定的 DOM 元素。

```js

js:
	$("button").click(function(){
        x=$("p").get(2);
        $("div").text(x.nodeName + ": " + x.innerHTML);
      });
//输出  P: T1			随着get（）内的数字变化而变化输出内容（下表从0开始）数字是可						选择输入的，可不写
```

```html
<body>
<p>This is a paragraph</p>
<p>T</p>
<p>T1</p>
<p>T2</p>
<button>获得 p DOM 元素</button>
```

#### index（）输出相应元素索引号（0开始）

> 获得第一个匹配元素相对于其同胞元素的 index 位置。
>
> * 如果未找到元素，index() 将返回 -1。

```js
$(selector).index(element)
	element	可选。要获得 index 位置的元素。可以是 DOM 元素或 jQuery 选择器。
```



```js
 
	$("li").click(function(){
        alert($(this).index());
      });

    <ul>
    <li>Coffee</li>
    <li>Milk</li>
    <li>Soda</li>
    </ul>
```







### js遍历数组方法之一：

​	foreach（） 
​	数组名.foreach(function(){});

![image-20200630133630628](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200630133630628.png)

forEach是js中的方法（针对数组），而each是jquery中的方法（针对jquery对象，即$( ) ）

### jq遍历数组方法之一：

​	each()
​	$.each（）

![image-20200630133719061](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200630133719061.png)



:eq() 选择器选取带有指定 index 值的元素。  index=索引号（从0开始）；


token : 搞清楚token的作用和使用方式 ，

.offset（） 设置元素偏移量（上下左右 ）
    例：1. $(".two").offset().top;
	2. $("button").click(function(){
	   		$("p").offset(function(n,c){
       		newPos=new Object();
      	newPos.left=c.left+100;
       		newPos.top=c.top+100;
        	return newPos;
          	});
      });

scroll（） 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

例： $("div").scroll(function() {
   	 $("span").text(x+=1);
      });

scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。

### append( ),appendTo( )将元素或者节点添加到指定元素

> 将元素或者节点添加到指定元素内（同js中的appendChild( )方法）
>
> $(插入元素的地方名称).append(插入其他元素的元素名称 )

```js
 append() // 语法：$(被插入元素的元素名).append(插入其他元素的元素名或内容)
			//插入到元素的最后面
1.
	let tagList = `
      <span>${text}<i class="close-icon"></i></span>
      `
      $('.tag-list').append(tagList)

2. $("ol").append("<li>Appended item</li>");
```

```js
appendTo()	// 语法：$(插入其他元素的元素名或内容).appendTo(被插入元素的元素名)
	$(".notice_active>ul>li").eq(0).appendTo($(".notice_active>ul"));
```



### parent( )与parents（）	查找特定元素

> 查找特定元素

```js
例： 
    <body>
            <div id="div1">
            <div id="div2"><p></p></div>
            <div id="div3" class="a"><p></p></div>
            <div id="div4"><p></p></div>
            </div>
       </body>
        <script type="text/javascript" src="jquery-1.7.1.min.js"></script>
        <script type="text/javascript">
            $("p").parent();  			//取得的是div2、div3、div4
            $('p').parent('.a');		//取得是div3
            $('p').parent().parent();	//取得是div1（这点比较奇特，不过Jquery对象本身											的特点决定了这是可行的）
            $('p').parents();			//取得的是div1、div2、div3、div4
            $('p').parents('.a');		//取得的是div3
        </script>

```

### attr( ) 添加获取属性值

```js
例：
	<p title="你最喜欢的水果是。">你最喜欢的水果是？</p>
    <ul>
       <li title="苹果汁">苹果</li>
       <li title="橘子汁" value="123">橘子</li>
       <li title="菠萝汁">菠萝</li>
    </ul>
```

#### 1.attr(name)//获取属性的值

> 使用attr(name)获取title值：

```js
<script>
	alert($("ul li:eq(1)").attr("title"));
</script>
// 结果：橘子汁
```

#### 2.attr(name,value) //设置属性的值

>  使用attr(name,value)修改title值为：不吃橘子

```js
例
	<script>
    	$("ul li:eq(1)").attr("title","不吃橘子");
   		 alert($("ul li:eq(1)").attr("title"));
    </script>
//结果：不吃橘子
```

#### 3. attr(name,fn) //设置属性的函数值

>   把value属性的值设置设给title属性。

```js
例
	<script>
		$("ul li:eq(1)").attr("title",function(){ return this.value});
		alert($("ul li:eq(1)").attr("title"));
	</script>
//结果：123
```

#### 4. attr(properties) //将一个“名/值”形式的对象设置为所有匹配元素的属性

##### 4.1 获取ul里第2个li设置title和value属性

```js
例
	<script>
        $("ul li:eq(1)").attr({title:"不喝橘子汁",value:"不是123"});
        alert($("ul li:eq(1)").attr("title"));
        alert($("ul li:eq(1)").attr("value"));
    </script>

//结果：不喝橘子汁 不是123
```

##### 4.2 获取ul里第二个li 设置class

```js
例
    <script>
        $("ul li:eq(1)").attr({className:"lili"});
    </script>
  // 结果：第二个li的html：<li class="lili" title="橘子汁" value="123">橘子</li>
```

##### 4.3 同样也可以 获取ul里第二个li 设置id名

```js
例
   <script>
        $("ul li:eq(1)").attr({className:"lili"});
    </script>
  // 结果：第二个li的html：<li  id="lili" title="橘子汁" value="123">橘子</li>
```

##### 4.4  获取ul里第2个li设置style。

```js
例
  	<script>
    	$("ul li:eq(1)").attr({style:"color:red"});
    </script>
```

### removeAttr ()	删除某个属性

> 删除某个属性

```js
<script>
	$("ul li:eq(1)").removeAttr ("title");
</script>
```



# Jquery ajax

## ajax get post

https://zhuanlan.zhihu.com/p/22536382

```js


$.ajax({
        url:'01.php',//请求地址
        data:'name=fox&age=18',//发送的数据
        type:'GET',//请求的方式
        success:function (argument) {},// 请求成功执行的方法
        beforeSend:function (argument) {},// 在发送请求之前调用,可以做一些验证之类的处理
        error:function (argument) {console.log(argument);},//请求失败调用
    })
```



```js
//例
// js部分

    var div = document.querySelector('#showInfo')

        //json有待学习----------------------------------------
        $(function() {

            $("#btn").click(function() {
                $.ajax({
                    url: "Person.json",
                    dataType: "json",
                    type: "get",
                    success: function(data) {
                        // alert(data);
                        console.log(data) //输出  {name: "P_looo", skill: "is God", friend: "老板"}   ==>Person.json 内的内容
                        console.log(data.name) // 输出P——looo
                        var dataname = data.name;
                        var dataskill = data.skill;
                        div.innerHTML = dataname + ' ' + dataskill; //输出 P_looo is God
                        //$("#showInfo").html(data);
                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
```

```js
//json 部分
	{
    "name": "P_looo",
    "skill": "is God",
    "friend": "老板"
	}
```





# JQ模板引擎

https://unpkg.com/art-template@4.13.2/lib/template-web.js（模板引擎js 地址）

https://www.jianshu.com/p/51c1bfc300b5（模板引擎讲解）

1.去地址处复制js 在编辑器内新建js文件然后粘贴引入js

2.查看案例

## 条件表达式

```js
{{if admin}}
	<p>admin</p>
{{else if code > 0}}
	<p>master</p>
{{else}}
    <p>error!</p>
{{/if}}
```



## 输出方式

 

1.方式一： `{{` 与 `}}` 符号包裹起来的语句则为模板的逻辑表达式。编码可以防止数据中含有 HTML 字符串，避免引起 XSS 攻击。

```js
  <li class="lis">
    {{nas[i]}}
   
   </li>
```



2.方式二：

```js
 <li class="lis">
   
    <%=nas[i]%>
   </li>
```



## 循环输出方式（遍历）

[]: 



```js
  var data = {
            className: "xxx",
            students: ["张飞", "刘备", "诸葛亮", "甄姬", "小乔", "汪汪"]
        };
```



1.方式一： 

```js
 <% for(var i = 0; i< students.length;i++) { %>
    <li style="color:#de3232">
        <%= i+1 %>.
        <%=students[i] %>
    </li>
 <% } %>
```

2.方式二：

2.1 

```js
 {{each students value i}}    /i :索引   value:指的是students里的数据  （两个都是可以自定义命名的）
     <li>{{value}}</li>
 {{/each}}
   
   
   例：
     {{each students value i}}
		<li>{{value}}</li>
  	  {{/each}} 
          
     {{each students v index}}
         <li>{{index}}--{{v}}</li>
     {{/each}}
  
```

2.2

```js
<script type="text/html" id="template">
    {{each pre value}}
    <option value="">{{value.name}}</option>
    {{/each}}
</script>

<script>
    $(function() {
        $.ajax({
            url: 'http://127.0.0.1:5500/三级联动.json',
            dataType: 'json',
            type: 'get',
            success: function(res) {
                console.log(res);
                console.log(res.city[0].name);
                var html = template('template', {
                    pre: res.city
                });
                $('#province').html(html)
            },
            error: function() {
                console.log('请求失败')
            }
        })
    })
</script>
```

2.3 方式二的 另一种情况， each加上要遍历的数据名， 但没有写上value   则需要在输出数据的value前面需要加上$

```js
<script type="text/html" id="template">
    {{each pre}}
    <option value="">{{$value.name}}</option>
    {{/each}}
</script>

<script>
    $(function() {
        $.ajax({
            url: 'http://127.0.0.1:5500/三级联动.json',
            dataType: 'json',
            type: 'get',
            success: function(res) {
                console.log(res);
                console.log(res.city[0].name);
                var html = template('template', {
                    pre: res.city
                });
                $('#province').html(html)
            },
            error: function() {
                console.log('请求失败')
            }
        })
    })
</script>
```





## 案例:方式1 和2

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>模板引擎</title>
    <script src="./js/template-web.js"></script>
    <script src="./jq/jquery-3.5.1.min.js"></script>
    <!-- 装模板的容器为script标签内, 注意需要设置id作为标记, script标签的type 属性得是 text/html -->
    <script id="tpl" type="text/html">
        <h3>
            <%= className %>
        </h3>
        <ul>
            <% for(var i = 0; i< students.length;i++) { %>
                <li style="color:#de3232">
                    <%= i+1 %>.
                        <%=students[i] %>
                </li>
                <% } %>

                    {{each students value i}}

                    <li>{{value}}</li>

                    {{/each}}

        </ul>

    </script>
    <script id="try" type="text/html">
        <ul>

            <li>
                <%= na.name%>
            </li>
            <li>
                <%= na.age%>
            </li>
            <li>
                <%= naa.name%>
            </li>
            <li>
                <%= naa.age%>
            </li>
            <li>{{na.name}}</li>

        </ul>
    </script>
    <script id="try1" type="text/html">
        <ul>
            <%   for(var i=0;i<nas.length;i++){ %>
                <li class="lis">
                    {{nas[i]}}
                    <%=nas[i]%>
                </li>
                <%  } %>

        </ul>
    </script>
    <script>
        var data = {
            className: "xxx",
            students: ["张飞", "刘备", "诸葛亮", "甄姬", "小乔", "汪汪"]
        };

        $(function() {

            var html = template("tpl", data); // 第一个参数：模板所在的区域的id 
            $("#demo").html(html);
        })




        //----------------------------------------------
        var arr = {
            na: {
                name: 'P_looo',
                age: 18
            },
            naa: {
                name: 'Z_lyyy',
                age: 19
            }
        };
        $(function() {
            var html = template("try", arr);
            $("#demo1").html(html)
        });



        //-------------------------------------
        var arrs = {
            nas: ["P_looo", "ZGG01", "4AM", "icon"]
        };
        $(function() {
            var html = template("try1", arrs);
            $("#demo2").html(html)
        });
    </script>


    <style>
        li {
            list-style-type: none;
        }
        
        .lis {
            background-color: cadetblue;
        }
    </style>
</head>

<body>

    <div id="demo"></div>
    <div id="demo1"></div>
    <div id="demo2"></div>
</body>

</html>
```

![image-20200803163343912](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200803163343912.png)



# json

> jSON只有两种数据类型描述符，大括号{}和方括号[]，

```json
//写在Person1.json文件内

{
    "xs": ["name", "age", "gogoin"],
    "list": {
        "sk0": {
            "name": "P_looo",
            "skill": "is God",
            "friend": "老板"
        },
        "sk1": {
            "name": "Z_looo",
            "skill": "is God",
            "friend": "老板"
        }
    },
    "list1": {
        "sk0": {
            "name": "P_looo",
            "skill": "is God",
            "friend": "老板"
        },
        "sk1": {
            "name": "Z_looo",
            "skill": "is God",
            "friend": "老板"
        }
    },
    "per": [{
            "name": "P_looo",
            "skill": "is God",
            "friend": "老板"
        },
        {
            "name": "Z_looo",
            "skill": "is God",
            "friend": "老板"
        }
    ]

}
```

```js
//
$(function() {

            $("#btn").click(function() {
                $.ajax({
                    url: "Person1.json",
                    dataType: "json",
                    type: "get",
                    success: function(data) {

                        console.log(data) //输出的是从Person.json获取到的数据

                        //从这两条和json可以看出来 1. 数组存数据的才需要通过索引来获取对应的数据  2.对象存放数据的则不需要通过索引而是一层一层的往下找
                        console.log(data.list.sk0.name) // 输出P——looo
                        console.log(data.per[1].name)


                        var dataname = data.list.sk0.name;
                        var dataskill = data.per[1].name;
                        $('#Person').html("Person1对象取值:" + dataname);
                        $('#Person1').html("Person1数组取值:" + dataskill);

                    },
                    error: function(e) {
                        console.log(e);
                    }
                });
            });
```

```js
点击按钮后输出：
			Person1对象取值:P_looo
			Person1数组取值:Z_looo
//重点看数组和对象的取值不同  上面js有注释 注意参考json 数据的格式
```



## json.stringify



## json.parse















# jsonp（跨域）

https://www.cnblogs.com/hanguidong/p/9442927.html



# 轮播

### 1.新闻头条文字上下轮播

```js
    var time = setInterval(function () {
        t();
    }, 5000)

    function t() {
    var he = $(".notice_active>ul>li").height();//找到li高
    $(".notice_active>ul>li").eq(0).appendTo($(".notice_active>ul")); //复制第一个到最后一个
    $(".notice_active>ul").animate({
    "marginTop": "-" + he
    }, 500, function () {
    $(".notice_active>ul").css({
        "marginTop": 0
    })
    })
    }


```

# ES6

## ES6复习

### var  let const 

1.块级作用域

2.不存在变量提升

3.不允许重复声明

4.const :声明的是常量

### 全局对象属性

 全局对象是最顶层的对象，在浏览器环境指的是`window`对象，在Node.js指的是`global`对象。ES5之中，全局对象的属性与全局变量是等价的。 

### 变量的解构赋值

undefined 和null区别

### 字符串的扩展

### includes(), startsWith(), endsWith()

 传统上，JavaScript只有`indexOf`方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。 

```bash
var s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

### repeat()

 `repeat`方法返回一个新字符串，表示将原字符串重复`n`次 

```bash
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```

### padStart()，padEnd()

 ES7推出了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart`用于头部补全，`padEnd`用于尾部补全。 

```bash
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```

### String.raw()

## 数值扩展

### Number.isFinite(), Number.isNaN()，Math对象的扩展

## 数组扩展

### Array.from()

`Array.from`方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。

下面是一个类似数组的对象，`Array.from`将它转为真正的数组。

```bash
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

### Array.of()

 `Array.of`方法用于将一组值，转换为数组 

```bash
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

## 函数扩展

length属性，rest参数

 ES6引入rest参数（形式为“...变量名”），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。 

```bash
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

上面代码的add函数是一个求和函数，利用rest参数，可以向该函数传入任意数目的参数。

下面是一个rest参数代替arguments变量的例子。

```bash
// arguments变量的写法
const sortNumbers = () =>
  Array.prototype.slice.call(arguments).sort();

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
```

### 箭头函数

#### 基本用法

ES6允许使用“箭头”（`=>`）定义函数。

```bash
var f = v => v;
```

上面的箭头函数等同于：

```bash
var f = function(v) {
  return v;
};
```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```bash
var f = () => 5;
// 等同于
var f = function (){ return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};
```

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

```bash
var sum = (num1, num2) => { return num1 + num2; }
```

由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。

```bash
var getTempItem = id => ({ id: id, name: "Temp" });
```

箭头函数可以与变量解构结合使用。

```bash
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full( person ){
  return person.first + ' ' + person.last;
}
```

箭头函数使得表达更加简洁。

```bash
const isEven = n => n % 2 == 0;
const square = n => n * n;
```

上面代码只用了两行，就定义了两个简单的工具函数。如果不用箭头函数，可能就要占用多行，而且还不如现在这样写醒目。

箭头函数的一个用处是简化回调函数。

```bash
// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1,2,3].map(x => x * x);
```

另一个例子是

```bash
// 正常函数写法
var result = values.sort(function(a, b) {
  return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);
```

下面是rest参数与箭头函数结合的例子。

```bash
const numbers = (...nums) => nums;
```

```bash
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]
```

#### 使用注意点

箭头函数有几个使用注意点。

（1）函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。

（3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

（4）不可以使用`yield`命令，因此箭头函数不能用作Generator函数。

上面四点中，第一点尤其值得注意。`this`对象的指向是可变的，但是在箭头函数中，它是固定的。

```bash
function foo() {
  setTimeout( () => {
    console.log("id:", this.id);
  },100);
}

var id = 21;

foo.call( { id: 42 } );
// id: 42
```

上面代码中，`setTimeout`的参数是一个箭头函数，这个箭头函数的定义生效是在`foo`函数生成时，而它的真正执行要等到100毫秒后。如果是普通函数，执行时`this`应该指向全局对象`window`，这时应该输出`21`。但是，箭头函数导致`this`总是指向函数定义生效时所在的对象（本例是`{id: 42}`），所以输出的是`42`。

下面是另一个例子。

```bash
var handler = {
  id: "123456",

  init: function() {
    document.addEventListener("click",
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log("Handling " + type  + " for " + this.id);
  }
};
```

上面代码的`init`方法中，使用了箭头函数，这导致这个箭头函数里面的`this`，总是指向`handler`对象。否则，回调函数运行时，`this.doSomething`这一行会报错，因为此时`this`指向`document`对象。

```bash
function Timer () {
  this.seconds = 0
  setInterval(() => this.seconds++, 1000)
}
var timer = new Timer()
setTimeout(() => console.log(timer.seconds), 3100)
// 3
```

上面代码中，`Timer`函数内部的`setInterval`调用了`this.seconds`属性，通过箭头函数让`this`总是指向`Timer`的实例对象。否则，输出结果是0，而不是3。

`this`指向的固定化，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数根本没有自己的`this`，导致内部的`this`就是外层代码块的`this`。正是因为它没有`this`，所以也就不能用作构造函数。

所以，箭头函数转成ES5的代码如下。

```bash
// ES6
function foo() {
  setTimeout( () => {
    console.log("id:", this.id);
  },100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log("id:", _this.id);
  }, 100);
}
```

上面代码中，箭头函数转成ES5代码时，内部的`this`需要改为引用外部的`this`。

东西太多，表示GG

## 对象的扩展

### 属性的简洁表示法

ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```bash
var foo = 'bar';
var baz = {foo};
baz // {foo: "bar"}

// 等同于
var baz = {foo: foo};
```

上面代码表明，ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量。下面是另一个例子。

```bash
function f(x, y) {
  return {x, y};
}

// 等同于

function f(x, y) {
  return {x: x, y: y};
}

f(1, 2) // Object {x: 1, y: 2}
```

除了属性简写，方法也可以简写。

```bash
var o = {
  method() {
    return "Hello!";
  }
};

// 等同于

var o = {
  method: function() {
    return "Hello!";
  }
};
```

下面是一个实际的例子。

```bash
var birth = '2000/01/01';

var Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};
```



### `__proto__`属性，Object.setPrototypeOf()，Object.getPrototypeOf()

**（1）`__proto__`属性**

`__proto__`属性（前后各两个下划线），用来读取或设置当前对象的`prototype`对象。目前，所有浏览器（包括IE11）都部署了这个属性。

```bash
// es6的写法
var obj = {
  method: function() { ... }
}
obj.__proto__ = someOtherObj;

// es5的写法
var obj = Object.create(someOtherObj);
obj.method = function() { ... }
```

该属性没有写入ES6的正文，而是写入了附录，原因是`__proto__`前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的API，只是由于浏览器广泛支持，才被加入了ES6。标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的`Object.setPrototypeOf()`（写操作）、`Object.getPrototypeOf()`（读操作）、`Object.create()`（生成操作）代替。

在实现上，`__proto__`调用的是`Object.prototype.__proto__`，具体实现如下。

```bash
Object.defineProperty(Object.prototyp)
```

## Symbol

### 概述

ES5的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入Symbol的原因。

ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

Symbol值通过`Symbol`函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

```bash
let s = Symbol();

typeof s
// "symbol"
```

上面代码中，变量`s`就是一个独一无二的值。`typeof`运算符的结果，表明变量`s`是Symbol数据类型，而不是字符串之类的其他类型。

注意，`Symbol`函数前不能使用`new`命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

`Symbol`函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```bash
var s1 = Symbol('foo');
var s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```

上面代码中，`s1`和`s2`是两个Symbol值。如果不加参数，它们在控制台的输出都是`Symbol()`，不利于区分。有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。

注意，`Symbol`函数的参数只是表示对当前Symbol值的描述，因此相同参数的`Symbol`函数的返回值是不相等的。

## Proxy和Reflect

### Proxy概述

Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

```bash
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
```

上面代码对一个空对象架设了一层拦截，重定义了属性的读取（`get`）和设置（`set`）行为。这里暂时先不解释具体的语法，只看运行结果。对设置了拦截行为的对象`obj`，去读写它的属性，就会得到下面的结果。

```bash
obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
```

### Reflect概述

`Reflect`对象与`Proxy`对象一样，也是ES6为了操作对象而提供的新API。`Reflect`对象的设计目的有这样几个。

（1） 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect`对象上。现阶段，某些方法同时在`Object`和`Reflect`对象上部署，未来的新方法将只部署在`Reflect`对象上。

（2） 修改某些Object方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`。

```bash
// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

（3） 让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了函数行为。

```bash
// 老写法
'assign' in Object // true

// 新写法
Reflect.has(Object, 'assign') // true
```

（4）`Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，就能在`Reflect`对象上找到对应的方法。这就让`Proxy`对象可以方便地调用对应的`Reflect`方法，完成默认行为，作为修改行为的基础。也就是说，不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取默认行为。

```bash
Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target,name, value, receiver);
    if (success) {
      log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});
```

上面代码中，`Proxy`方法拦截`target`对象的属性赋值行为。它采用`Reflect.set`方法将值赋值给对象的属性，然后再部署额外的功能。

下面是另一个例子。

```bash
var loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
});
```

上面代码中，每一个`Proxy`对象的拦截操作（`get`、`delete`、`has`），内部都调用对应的Reflect方法，保证原生行为能够正常执行。添加的工作，就是将每一个操作输出一行日志。

有了`Reflect`对象以后，很多操作会更易读。

```bash
// 老写法
Function.prototype.apply.call(Math.floor, undefined, [1.75]) // 1

// 新写法
Reflect.apply(Math.floor, undefined, [1.75]) // 1
```

## Set和Map数据结构

### Set

#### 基本用法

ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成Set数据结构。

```bash
var s = new Set();

[2,3,5,4,5,2,2].map(x => s.add(x))

for (let i of s) {console.log(i)}
// 2 3 5 4
```

### Map

#### Map结构的目的和基本用法

JavaScript的对象（Object），本质上是键值对的集合（Hash结构），但是只能用字符串当作键。这给它的使用带来了很大的限制。

```bash
var data = {};
var element = document.getElementById("myDiv");

data[element] = metadata;
data["[Object HTMLDivElement]"] // metadata
```

## Iterator和for...of循环

### Iterator（遍历器）的概念

JavaScript原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令`for...of`循环，Iterator接口主要供`for...of`消费。

## Generator 函数

### 简介

#### 基本概念

Generator函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍Generator函数的语法和API，它的异步编程应用请看《异步操作》一章。

Generator函数有多种理解角度。从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。

执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。

形式上，Generator函数是一个普通函数，但是有两个特征。一是，`function`关键字与函数名之间有一个星号；二是，函数体内部使用`yield`语句，定义不同的内部状态（yield语句在英语里的意思就是“产出”）。

```bash
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
```

## Promise对象

### Promise的含义

Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。

`Promise`对象有以下两个特点。

（1）对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：`Pending`（进行中）、`Resolved`（已完成，又称Fulfilled）和`Rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`Pending`变为`Resolved`和从`Pending`变为`Rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，`Promise`对象提供统一的接口，使得控制异步操作更加容易。

`Promise`也有一些缺点。首先，无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。第三，当处于`Pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用stream模式是比部署`Promise`更好的选择。

### async函数

async函数与Promise、Generator函数一样，是用来取代回调函数、解决异步操作的一种方法。它本质上是Generator函数的语法糖。async函数并不属于ES6，而是被列入了ES7，但是traceur、Babel.js、regenerator等转码器已经支持这个功能，转码后立刻就能使用。

## 异步操作和Async函数

异步编程对JavaScript语言太重要。Javascript语言的执行环境是“单线程”的，如果没有异步编程，根本没法用，非卡死不可。

ES6诞生以前，异步编程的方法，大概有下面四种。

- 回调函数
- 事件监听
- 发布/订阅
- Promise 对象

ES6将JavaScript异步编程带入了一个全新的阶段，ES7的`Async`函数更是提出了异步编程的终极解决方案。

### async函数

#### 含义

ES7提供了`async`函数，使得异步操作变得更加方便。`async`函数是什么？一句话，`async`函数就是Generator函数的语法糖。

前文有一个Generator函数，依次读取两个文件。

```bash
var fs = require('fs');

var readFile = function (fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile('/etc/fstab');
  var f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

写成`async`函数，就是下面这样。

```bash
var asyncReadFile = async function (){
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

一比较就会发现，`async`函数就是将Generator函数的星号（`*`）替换成`async`，将`yield`替换成`await`，仅此而已。

`async`函数对 Generator 函数的改进，体现在以下四点。

（1）内置执行器。Generator函数的执行必须靠执行器，所以才有了`co`模块，而`async`函数自带执行器。也就是说，`async`函数的执行，与普通函数一模一样，只要一行。

```bash
var result = asyncReadFile();
```

上面的代码调用了`asyncReadFile`函数，然后它就会自动执行，输出最后结果。这完全不像Generator函数，需要调用`next`方法，或者用`co`模块，才能得到真正执行，得到最后结果。

（2）更好的语义。`async`和`await`，比起星号和`yield`，语义更清楚了。`async`表示函数里有异步操作，`await`表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性。 `co`模块约定，`yield`命令后面只能是Thunk函数或Promise对象，而`async`函数的`await`命令后面，可以是Promise对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

（4）返回值

## Class

### Class基本语法

**（1）概述**

JavaScript语言的传统方法是通过构造函数，定义并生成新对象。下面是一个例子。

```bash
function Point(x,y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
}
```

上面这种写法跟传统的面向对象语言（比如C++和Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用ES6的“类”改写，就是下面这样。

```bash
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}
```

上面代码定义了一个“类”，可以看到里面有一个`constructor`方法，这就是构造方法，而`this`关键字则代表实例对象。也就是说，ES5的构造函数Point，对应ES6的Point类的构造方法。

Point类除了构造方法，还定义了一个`toString`方法。注意，定义“类”的方法的时候，前面不需要加上`function`这个保留字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

ES6的类，完全可以看作构造函数的另一种写法。

```bash
class Point{
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```

#### 类的prototype属性和__proto__属性

大多数浏览器的ES5实现之中，每一个对象都有`__proto__`属性，指向对应的构造函数的prototype属性。Class作为构造函数的语法糖，同时有prototype属性和`__proto__`属性，因此同时存在两条继承链。

（1）子类的`__proto__`属性，表示构造函数的继承，总是指向父类。

（2）子类prototype属性的`__proto__`属性，表示方法的继承，总是指向父类的prototype属性。

```bash
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```

上面代码中，子类B的`__proto__`属性指向父类A，子类B的prototype属性的`__proto__`属性指向父类A的prototype属性。

这样的结果是因为，类的继承是按照下面的模式实现的。

```bash
class A {
}

class B {
}

// B的实例继承A的实例
Object.setPrototypeOf(B.prototype, A.prototype);

// B继承A的静态属性
Object.setPrototypeOf(B, A);
```

《对象的扩展》一章给出过`Object.setPrototypeOf`方法的实现。

```bash
Object.setPrototypeOf = function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

因此，就得到了上面的结果。

```bash
Object.setPrototy
```

## 修饰器

### 类的修饰

修饰器（Decorator）是一个表达式，用来修改类的行为。这是ES7的一个[提案](https://github.com/wycats/javascript-decorators)，目前Babel转码器已经支持。

修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。

```bash
function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable) // true
```

上面代码中，`@testable`就是一个修饰器。它修改了MyTestableClass这个类的行为，为它加上了静态属性`isTestable`

## Module

ES6的Class只是面向对象编程的语法糖，升级了ES5的构造函数的原型链继承的写法，并没有解决模块化问题。Module功能就是为了解决这个问题而提出的。

历史上，JavaScript一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如Ruby的`require`、Python的`import`，甚至就连CSS都有`@import`，但是JavaScript任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

在ES6之前，社区制定了一些模块加载方案，最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。

ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS和AMD模块，都只能在运行时确定这些东西。比如，CommonJS模块就是对象，输入时必须查找对象属性。

```bash
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于
let _fs = require('fs');
let stat = _fs.stat, exists = _fs.exists, readfile = _fs.readfile;
```

上面代码的实质是整体加载`fs`模块（即加载`fs`的所有方法），生成一个对象（`_fs`），然后再从这个对象上面读取3个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

ES6模块不是对象，而是通过`export`命令显式指定输出的代码，输入时也采用静态命令的形式。

```bash
// ES6模块
import { stat, exists, readFile } from 'fs';
```

上面代码的实质是从`fs`模块加载3个方法，其他方法不加载。这种加载称为“编译时加载”，即ES6可以在编译时就完成模块加载，效率要比CommonJS模块的加载方式高。当然，这也导致了没法引用ES6模块本身，因为它不是对象。

由于ES6模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽JavaScript的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。

除了静态加载带来的各种好处，ES6模块还有以下好处。

- 不再需要UMD模块格式了，将来服务器和浏览器都会支持ES6模块格式。目前，通过各种工具库，其实已经做到了这一点。

- 将来浏览器的新API就能用模块格式提供，不再必要做成全局变量或者`navigator`对象的属性。

- 不再需要对象作为命名空间（比如`Math`对象），未来这些功能可以通过模块提供。

- ## ES6模块加载的实质

  ES6模块加载的机制，与CommonJS模块完全不同。CommonJS模块输出的是一个值的拷贝，而ES6模块输出的是值的引用。

  CommonJS模块输出的是被输出值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个模块文件`lib.js`的例子。

  ```bash
  // lib.js
  var counter = 3;
  function incCounter() {
    counter++;
  }
  module.exports = {
    counter: counter,
    incCounter: incCounter,
  };
  ```

  上面代码输出内部变量`counter`和改写这个变量的内部方法`incCounter`。然后，在`main.js`里面加载这个模块。

  ```bash
  // main.js
  var mod = require('./lib');
  
  console.log(mod.counter);  // 3
  mod.incCounter();
  console.log(mod.counter); // 3
  ```

  上面代码说明，`lib.js`模块加载以后，它的内部变化就影响不到输出的`mod.counter`了。这是因为`mod.counter`是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。

  ```bash
  // lib.js
  var counter = 3;
  function incCounter() {
    counter++;
  }
  module.exports = {
    get counter() {
      return counter
    },
    incCounter: incCounter,
  };
  ```

  上面代码中，输出的`counter`属性实际上是一个取值器函数。现在再执行`main.js`，就可以正确读取内部变量`counter`的变动了。

  ```bash
  $ node main.js
  3
  4
  ```

  ES6模块的运行机制与CommonJS不一样，它遇到模块加载命令`import`时，不会去执行模块，而是只生成一个动态的只读引用。等到真的需要用到时，再到模块里面去取值，换句话说，ES6的输入有点像Unix系统的”符号连接“，原始值变了，`import`输入的值也会跟着变。因此，ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

  # 编程风格

  本章探讨如何将ES6的新语法，运用到编码实践之中，与传统的JavaScript语法结合在一起，写出合理的、易于阅读和维护的代码。多家公司和组织已经公开了它们的风格规范，具体可参阅[jscs.info](http://jscs.info/)，下面的内容主要参考了[Airbnb](https://github.com/airbnb/javascript)的JavaScript风格规范。

  ## 块级作用域

  **（1）let取代var**

  ES6提出了两个新的声明变量的命令：`let`和`const`。其中，`let`完全可以取代`var`，因为两者语义相同，而且`let`没有副作用。

  ```bash
  'use strict';
  
  if (true) {
    let x = 'hello';
  }
  
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  ```

  上面代码如果用`var`替代`let`，实际上就声明了一个全局变量，这显然不是本意。变量应该只在其声明的代码块内有效，`var`命令做不到这一点。

  `var`命令存在变量提升效用，`let`命令没有这个问题。

  ```bash
  'use strict';
  
  if(true) {
    console.log(x); // ReferenceError
    let x = 'hello';
  }
  ```

  上面代码如果使用`var`替代`let`，`console.log`那一行就不会报错，而是会输出`undefined`，因为变量声明提升到代码块的头部。这违反了变量先声明后使用的原则。

  所以，建议不再使用`var`命令，而是使用`let`命令取代。

  **（2）全局常量和线程安全**

  在`let`和`const`之间，建议优先使用`const`，尤其是在全局环境，不应该设置变量，只应设置常量。这符合函数式编程思想，有利于将来的分布式运算。

  ```bash
  // bad
  var a = 1, b = 2, c = 3;
  
  // good
  const a = 1;
  const b = 2;
  const c = 3;
  
  // best
  const [a, b, c] = [1, 2, 3];
  ```

`const`声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。

所有的函数都应该设置为常量。

长远来看，JavaScript可能会有多线程的实现（比如Intel的River Trail那一类的项目），这时`let`表示的变量，只应出现在单线程运行的代码中，不能是多线程共享的，这样有利于保证线程安全。

**（3）严格模式**

V8引擎只在严格模式之下，支持`let`。结合前两点，这实际上意味着，将来所有的编程都是针对严格模式的。

### 字符串

静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

```bash
// bad
const a = "foobar";
const b = 'foo' + a + 'bar';

// acceptable
const c = `foobar`;

// good
const a = 'foobar';
const b = `foo${a}bar`;
const c = 'foobar';
```

### 解构赋值

使用数组成员对变量赋值时，优先使用解构赋值。

```bash
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

函数的参数如果是对象的成员，优先使用解构赋值。

```bash
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
```

如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

```bash
// bad
function processInput(input) {
  return [left, right, top, bottom];
}

// good
function processInput(input) {
  return { left, right, top, bottom };
}

const { left, right } = processInput(input);
```

### 对象

单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。

```bash
// bad
const a = { k1: v1, k2: v2, };
const b = {
  k1: v1,
  k2: v2
};

// good
const a = { k1: v1, k2: v2 };
const b = {
  k1: v1,
  k2: v2,
};
```

对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用`Object.assign`方法。

```bash
// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;
```

如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。

```bash
// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

上面代码中，对象`obj`的最后一个属性名，需要计算得到。这时最好采用属性表达式，在新建`obj`的时候，将该属性与其他属性定义在一起。这样一来，所有属性就在一个地方定义了。

另外，对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。

```bash
var ref = 'some value';

// bad
const atom = {
  ref: ref,

  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  ref,

  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

### 数组

使用扩展运算符（...）拷贝数组。

```bash
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

使用Array.from方法，将类似数组的对象转为数组。

```bash
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

### 函数

立即执行函数可以写成箭头函数的形式。

```bash
(() => {
  console.log('Welcome to the Internet.');
})();
```

那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了this。

```bash
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);
```

箭头函数取代`Function.prototype.bind`，不应再用self/_this/that绑定 this。

```bash
// bad
const self = this;
const boundMethod = function(...params) {
  return method.apply(self, params);
}

// acceptable
const boundMethod = method.bind(this);

// best
const boundMethod = (...params) => method.apply(this, params);
```

简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。

所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。

```bash
// bad
function divide(a, b, option = false ) {
}

// good
function divide(a, b, { option = false } = {}) {
}
```

不要在函数体内使用arguments变量，使用rest运算符（...）代替。因为rest运算符显式表明你想要获取参数，而且arguments是一个类似数组的对象，而rest运算符可以提供一个真正的数组。

```bash
// bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// good
function concatenateAll(...args) {
  return args.join('');
}
```

使用默认值语法设置函数参数的默认值。

```bash
// bad
function handleThings(opts) {
  opts = opts || {};
}

// good
function handleThings(opts = {}) {
  // ...
}
```

### Map结构

注意区分Object和Map，只有模拟实体对象时，才使用Object。如果只是需要`key: value`的数据结构，使用Map结构。因为Map有内建的遍历机制。

```bash
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
```

### Class

总是用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解。

```bash
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

使用`extends`实现继承，因为这样更简单，不会有破坏`instanceof`运算的危险。

```bash
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

### 模块

首先，Module语法是JavaScript模块的标准写法，坚持使用这种写法。使用`import`取代`require`。

```bash
// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1, func2 } from 'moduleA';
```

使用`export`取代`module.exports`。

```bash
// commonJS的写法
var React = require('react');

var Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

module.exports = Breadcrumbs;

// ES6的写法
import React from 'react';

const Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

export default Breadcrumbs
```

如果模块只有一个输出值，就使用`export default`，如果模块有多个输出值，就不使用`export default`，不要`export default`与普通的`export`同时使用。

不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。

```bash
// bad
import * as myObject './importModule';

// good
import myObject from './importModule';
```

如果模块默认输出一个函数，函数名的首字母应该小写。

```bash
function makeStyleGuide() {
}

export default makeStyleGuide;
```

如果模块默认输出一个对象，对象名的首字母应该大写。

```bash
const StyleGuide = {
  es6: {
  }
};

export default StyleGuide;
```

### ESLint的使用

ESLint是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

首先，安装ESLint。

```bash
$ npm i -g eslint
```

然后，安装Airbnb语法规则。

```bash
$ npm i -g eslint-config-airbnb
```

最后，在项目的根目录下新建一个`.eslintrc`文件，配置ESLint。

```bash
{
  "extends": "eslint-config-airbnb"
}
```

现在就可以检查，当前项目的代码是否符合预设的规则。

`index.js`文件的代码如下。

```bash
var unusued = 'I have no purpose!';

function greet() {
    var message = 'Hello, World!';
    alert(message);
}

greet();
```

使用ESLint检查这个文件。

```bash
$ eslint index.js
index.js
  1:5  error  unusued is defined but never used                 no-unused-vars
  4:5  error  Expected indentation of 2 characters but found 4  indent
  5:5  error  Expected indentation of 2 characters but found 4  indent

✖ 3 problems (3 errors, 0 warnings)
```

上面代码说明，原文件有三个错误，一个是定义了变量，却没有使用，另外两个是行首缩进为4个空格，而不是规定的2个空格。



# 将本地图片转成网络url地址

 https://imgchr.com/



# Cookie、Session、Token、JWT区别

https://zhuanlan.zhihu.com/p/152224669



# VUE

## 第1章　遇见Vue.js

### 1.1　MVX模式是什么

MVC框架最早出现在Jaca领域，然后慢慢在前端开发中也被提到，后来又出现了MVP，以及现在最成熟的MVVM，下面我们来简单介绍一下各种模式。

#### 1.1.1　MVC

MVC是应用最广泛的软件架构之一，一般MVC分为：Model（模型）、Controller（控制器）和View（视图）。这主要是基于分层的目的，让彼此的职责分开，如图1-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00003.jpg)

图1-1　MVC通信方式一

View一般都是通过Controller来和Model进行联系的。Controller是Model和View的协调者，View和Model不直接联系。基本联系都是单向的。

那么，用户操作应该放在什么位置，MVC之间又会有什么变化，如图1-2所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00004.jpg)

图1-2　MVC通信方式二

用户（User）通过Controller来操作Model以达到View的变化。

#### 1.1.2　MVP

MVP是从经典的MVC模式演变而来的，它们的基本思想有相通的地方：Controller/Presenter负责逻辑的处理，Model提供数据，View负责显示。

在MVP中，Presenter完全把View和Model进行了分离，主要的程序逻辑在Presenter里实现。而且，Presenter与具体的View是没有直接关联的，而是通过定义好的接口进行交互，从而使得在变更View的时候可以保持Presenter不变。MVP通信方式如图1-3所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00005.jpg)

图1-3　MVP通信方式

#### 1.1.3　MVVM

MVVM代表框架有：知名度相对偏低的Knockout、早期的Ember.js、目前比较火热的来自Google的AngularJS，以及我们今天要讲的Vue.js。

相比前面两种模式，MVVM只是把MVC的Controller和MVP的Presenter改成了ViewModel。View的变化会自动更新到ViewModel，ViewModel的变化也会自动同步到View上显示。

这种自动同步是因为ViewModel中的属性实现了Observer，当属性变更时都能触发对应的操作，如图1-4所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00006.jpg)

图1-4　**用户操作影响**

## 第2章　数据绑定

数据绑定是将数据和视图相关联，当数据发生变化时，可以自动更新视图。本章将介绍Vue.js中数据绑定的语法。

### 2.1　语法

#### 2.1.1　插值

文本插值是最基本的形式，使用双大括号{{ }}（类似于Mustache，所以本文中称作Mustache标签），代码示例如下：

```
<span>Text: {{text}}</span>
```

例子中的标签{{text}}将会被相应的数据对象text属性的值替换掉，当text的值改变时，文本中的值也会联动地发生变化。有时候只需渲染一次数据，后续数据变化不再关心，可以通过“*”实现，代码示例如下：

```
<span>Text: {{*text}} </span>
```

双大括号标签会把里面的值全部当作字符串来处理，如果值是HTML片段，则可以使用三个大括号来绑定，代码示例如下：

```
<div>Logo: {{{logo}}}</div>
logo : '<span>DDFE</span>'
```

双大括号标签还可以放在HTML标签内，示例如下：

```
<li data-id='{{id}}'></li>
```

总之，Vue.js提供了一系列文本渲染方式，足够我们应对日常的模板渲染情况。需要注意的是，Vue指令和自身特性内是不可以插值的，如果用错了地方，Vue.js会发出警告。

#### 2.1.2　表达式

Mustache标签也接受表达式形式的值，表达式可由JavaScript表达式和过滤器构成。过滤器可以没有，也可以有多个。

表达式是各种数值、变量、运算符的综合体。简单的表达式可以是常量或者变量名称。表达式的值是其运算结果，代码示例如下：

```
<!--JS表达式 -->
{{ cents/100 }}   // 在原值的基础上除以100
{{ true? 1 : 0 }}  // 值为真，则渲染出1，否则渲染出0
{{ example.split(",") }}

<!--无效示例-->
{{var logo = 'DDFE'}}  // 这是语句，不是表达式
{{if(true) return 'DDFE'}}  // 条件控制语句是不支持的，可以使用三元式
```

类似于Linux中的管道，Vue.js允许在表达式后面添加过滤符，代码示例如下：

```
{{example | toUpperCase}}
```

这里toUpperCase就是过滤器，其本质是一个JS函数，返回字符串的全大写形式。Vue.js允许过滤器串联，代码示例如下：

```
{{example | filterA | filterB}}
```

过滤器还支持传入参数，代码示例如下：

```
{{example | filter a b}}
```

这里a和b均为参数、用空格隔开。

Vue.js还提供了许多内置的过滤器，第6章将对此进行详细介绍。

#### 2.1.3　指令

指令是带有v-前缀的特殊特性，其值限定为绑定表达式，也就是JavaScript表达式和过滤器。指令的作用是当表达式的值发生变化时，将这个变化也反映到DOM上。代码示例如下：

```
<div v-if="show">DDFE</div>
```

当show为true时，展示DDFE字样，否则不展示。还有一些指令的语法稍有不同，在指令和表达式之间插入一个参数，用冒号分隔，如v-bind指令。代码示例如下：

```
<a v-bind:href="url"></a>
<div v-bind:click="action"></div>
```

### 2.2　分隔符

Vue.js中数据绑定的语法被设计为可配置的。如果不习惯Mustache风格的语法，则可以自己设置。

我们可以在Vue.config中配置绑定的语法。Vue.config是一个对象，包含了Vue.js的所有全局配置，可以在Vue实例化前修改其中的属性。分隔符在Vue.config中源码定义如下：

```
<!--源码目录src/config.js-->
let delimiters = ['{{', '}}']
let unsafeDelimiters = ['{{{', '}}}']
```

1．delimiters

```
Vue.config.delimiters = ["<%" ,"%>"]
```

如果修改了默认的文本插值的分隔符，则文本插值的语法由{{example}}变为<%example%>。

2．unsafeDelimiters

```
Vue.config.unsafeDelimiters = ["<$", "$>"]
```

如果修改了默认的HTML插值的分隔符，则HTML插值的语法由{{{example}}}变为<$emample$>。

## 第3章　指令

指令（Directive）是特殊的带有前缀v-的特性。指令的值限定为绑定表达式，指令的职责就是当其表达式的值改变时把某些特殊的行为应用到DOM上。

### 3.1　内部指令

首先来看看和原生HTML标签相似的一组内置指令，这组指令非常容易记忆，因为仅仅是在原生标签前面加上了v-前缀，如图3-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00007.jpg)

图3-1 内部指令

#### 3.1.1　v-if

v-if指令可以完全根据表达式的值在DOM中生成或移除一个元素。如果v-if表达式赋值为false，那么对应的元素就会从DOM中移除；否则，对应元素的一个克隆将被重新插入DOM中。代码示例如下：

```
<body class="native">
  <div id="example">
    <p v-if=greeting”>Hello</p>
  </div>
</body>
<script>
var exampleVM2 = new Vue({
  el: '#example',
  data: {
    greeting: false
  }
})
</script>
```

效果如图3-2所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00008.jpg)

图3-2　v-if

因为v-if是一个指令，需要将它添加到一个元素上。但是如果想切换多个元素，则可以把<template>元素当作包装元素，并在其上使用v-if，最终的渲染结果不会包含它。代码示例如下：

```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

效果如图3-3所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00009.jpg)

图3-3　v-if

#### 3.1.2　v-show

v-show指令是根据表达式的值来显示或者隐藏HTML元素。当v-show赋值为false时，元素将被隐藏。查看DOM时，会发现元素上多了一个内联样式style="display: none"。代码示例如下：

```
<body>
  <input type="text" v-model="message" placeholder="edit me"><body class="native">
  <div id="example">
    <p v-show="greeting">Hello!</p>
  </div>
</body>
<script>
  var exampleVM2 = new Vue({
    el: '#example',
    data: {
      greeting: false
    }
  })
</script>
```

效果如图3-4所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00010.jpg)

图3-4　v-show

**注：** v-show不支持<template>语法。

在切换v-if模块时，Vue.js有一个局部编译/卸载过程，因为v-if中的模板可能包括数据绑定或子组件。v-if是真实的条件渲染，因为它会确保条件块在切换时合适地销毁与重建条件块内的事件监听器和子组件。

v-if是惰性的——如果初始渲染时条件为假，则什么也不做，在条件第一次变为真时才开始局部编译（编译会被缓存起来）。

相比之下，v-show简单得多——元素始终被编译并保留，只是简单地基于CSS切换。

一般来说，v-if有更高的切换消耗，而v-show有更高的初始渲染消耗。因此，如果需要频繁地切换，则使用v-show较好；如果在运行时条件不大可能改变，则使用v-if较好。



#### 3.1.3　v-else

顾名思义，v-else 就是JavaScript中else的意思，它必须跟着v-if或v-show，充当else功能。代码示例如下：

```
<body class="native">
  <div id="example">
    <p v-if="ok">我是对的</p>
    <p v-else="ok">我是错的</p>
  </div>
</body>
<script>
  var exampleVM2 = new Vue({
    el: '#example',
    data: {
      ok: false
    }
  })
</script>
```

将v-show用在组件上时，因为指令的优先级v-else会出现问题，所以不要这样做。代码示例如下：

```
<custom-component v-show="condition"></custom-component>
<p v-else>这可能也是一个组件</p>
```

我们可以用另一个v-show替换v-else，代码示例如下：

```
<custom-component v-show="condition"></custom-component>
<p v-show="!condition">这可能也是一个组件</p>
```

#### 3.1.4　v-model

v-model指令用来在input、select、text、checkbox、radio等表单控件元素上创建双向数据绑定。根据控件类型v-model自动选取正确的方法更新元素。尽管有点神奇，但是v-model不过是语法糖，在用户输入事件中更新数据，以及特别处理一些极端例子。代码示例如下：

```
<body id="example">
  <form>
    姓名：
    <input type="text" v-model="data.name" placeholder="">
    </br/>
    性别：
    <input type="radio" id="one" value="One" v-model="data.sex">
    <label for="man">男</label>
    <input type="radio" id="two" value="Two" v-model="data.sex">
    <label for="male">女</label>
    </br/>
    兴趣：
    <input type="checkbox" id="jack" value="book" v-model="data.interest">
    <label for="jack">阅读</label>
    <input type="checkbox" id="john" value="swim" v-model="data.interest">
    <label for="john">游泳</label>
    <input type="checkbox" id="mike" value="game" v-model="data.interest">
    <label for="mike">游戏</label>
    <input type="checkbox" id="mike" value="song" v-model="data.interest">
    <label for="mike">唱歌</label>
    <br>
    身份：
    <select v-model="data.identity">
      <option value="teacher" selected>教师</option>
      <option value="doctor" >医生</option>
      <option value="lawyer" >律师</option>
    </select>
  </form>
</body>
<script>
  new Vue({
    el: '#example',
    data: {
      data:{
        name:"",
        sex:"",
        interest:[],
        identity:''
      }
    }
   })
</script>
```

效果如图3-5所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00011.jpg)

图3-5　v-model

除了以上用法，在v-model指令后面还可以添加多个参数（number、lazy、debounce）。

1．number

如果想将用户的输入自动转换为Number类型（如果原值的转换结果为NaN，则返回原值），则可以添加一个number特性。

2．lazy

在默认情况下，v-model在input事件中同步输入框的值与数据，我们可以添加一个lazy特性，从而将数据改到在change事件中发生。代码示例如下：

```
<body id="example">
  <input v-model="msg" lazy><br/>
  {{msg}}
</body>
<script>
  var exampleVM2 = new Vue({
    el: '#example',
    data: {
      msg: '内容是在change事件后才改变的~'
    }
  })
</script>
```

我们在input输入框中输入“依然没变”，虽然触发了input事件，但是因为加入了lazy属性，msg的值一直没有发生变化。效果如图3-6所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00012.jpg)

图3-6　lazy

3．debounce

设置一个最小的延时，在每次敲击之后延时同步输入框的值与数据。如果每次更新都要进行高耗操作（例如，在input中输入内容时要随时发送AJAX请求），那么它较为有用。代码示例如下：

```
<body id="example">
  <input v-model="msg" debounce="5000"><br/>
  {{msg}}
</body>
<script>
  var exampleVM2 = new Vue({
    el: '#example',
    data: {
      msg: '内容是在5000ms后才改变的~'
    }
  })
</script>
```

在5000ms内我们将输入框的内容清空，msg的值没有马上改变，还依然保持着“内容是在5000ms后才改变的~”，效果如图3-7所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00013.jpg)

图3-7 5000ms内效果

5000ms后内容才被清空，效果如图3-8所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00014.jpg)

图3-8 5000ms后效果

指令太多，详情见官网 https://vuejs.org/ 

## 第4章　计算属性

通常我们会在模板中绑定表达式，模板是用来描述视图结构的。如果模板中的表达式存在过多的逻辑，模板会变得臃肿不堪，维护变得非常困难。因此，为了简化逻辑，当某个属性的值依赖于其他属性的值时，我们可以使用计算属性。

### 4.1　什么是计算属性

计算属性就是当其依赖属性的值发生变化时，这个属性的值会自动更新，与之相关的DOM部分也会同步自动更新。代码示例如下：

```
<div id="example">
  <input type="text" v-model="didi" />
  <input type="text" v-model="family" />
  <br>
  didi={{ didi }}, family={{ family }}, didiFamily = {{ didiFamily }}
</div>
var vm = new Vue({
  el: '#example',
  data: {
    didi: 'didi',
    family: 'family'
  },
  computed: {
    // 一个计算属性的getter
    didiFamily: function () {
      // `this` 指向 vm 实例
      return this.didi + this.family
    }
  }
})
```

当vm.didi和vm.family的值发生变化时，vm.didiFamily的值会自动更新，并且会自动同步更新DOM部分。

前面实例只提供了getter，实际上除了getter，我们还可以设置计算属性的setter。代码示例如下：

```
var vm = new Vue({
  el: '#example',
  data: {
    didi: 'didi',
    family: 'family'
  },
  computed: {
    didiFamily: {
      // 一个计算属性的 getter
      get: function () {
        // `this` 指向 vm 实例
        return this.didi + ' ' + this.family
      },
      // 一个计算属性的 setter
      set: function (newVal) {
        var names = newVal.split(' ')
        this.didi = names[0]
        this.family = names[1]
      }
    }
  }
})
```

当设置vm.didiFamily的值时，vm.didi和vm.family的值也会自动更新。

### 4.2　计算属性缓存

计算属性的特性的确很诱人，但是如果在计算属性方法中执行大量的耗时操作，则可能会带来一些性能问题。例如，在计算属性getter中循环一个大的数组以执行很多操作，那么当频繁调用该计算属性时，就会导致大量不必要的运算。

在Vue.js 0.12.8版本之前，只要读取相应的计算属性，对应的getter就会重新执行。而在Vue.js 0.12.8版本中，在这方面进行了优化，即只有计算属性依赖的属性值发生了改变时才会重新执行getter。

这样也存在一个问题，就是只有Vue实例中被观察的数据属性发生了改变时才会重新执行getter。但是有时候计算属性依赖实时的非观察数据属性。代码示例如下：

```
var vm = new Vue({
  data: {
    welcome: 'welcome to join didiFamily'
  },
  computed: {
    example: function () {
      return Date.now() + this.welcome
    }
  }
})
```

我们需要在每次访问example时都取得最新的时间而不是缓存的时间。从Vue.js 0.12.11版本开始，默认提供了缓存开关，在计算属性对象中指定cache字段来控制是否开启缓存。代码示例如下：

```
var vm = new Vue({
  data: {
    welcome: 'welcome to join didifamily'
  },
  computed: {
    example: {
      // 关闭缓存，默认为true
      cache: false, 
      get: function () {
        return Date.now() + this.welcome
      }
    }
  }
})
```

设置cache为false关闭缓存之后，每次直接访问vm.example时都会重新执行getter方法。

### 4.3　常见问题

在实际开发中使用计算属性时，我们会遇到各种各样的问题，以下是我们搜集到的一些常见问题以及解决方案。

#### 4.3.1　计算属性getter不执行的场景

从前面章节中我们了解到，当计算属性依赖的数据属性发生改变时，计算属性的getter方法就会执行。但是在有些情况下，虽然依赖数据属性发生了改变，但计算属性的getter方法并不会执行。

当包含计算属性的节点被移除并且模板中其他地方没有再引用该属性时，那么对应的计算属性的getter方法不会执行。代码示例如下：

```
<div id="example">
  <button @click='toggleShow'>Toggle Show Total Price</button>
  <p v-if="showTotal">Total Price = {{totalPrice}}</p>
</div>
new Vue({
  el: '#example',
  data: {
    showTotal: true,
    basePrice: 100
  },
  computed: {
    totalPrice: function () {
      return this.basePrice + 1
    }
  },
  methods: {
    click: function() {
      this.showTotal = !this.showTotal
    }
  }
})
```

当点击按钮使showTotal为false时，此时P元素会被移除，在P元素内部的计算属性totalPrice的getter方法不会执行。但是当计算属性一直出现在模板中时，getter方法还是会被执行。代码示例如下：

```
<div id="example">
  <button @click='toggleShow'>Toggle Show Total Price</button>
  <!-- 一直出现在模板中，不会条件性隐藏 -->
  <p>{{totalPrice}}</p>
  <p v-if="showTotal">Total Price = {{totalPrice}}</p>
</div>
```

#### 4.3.2　在v-repeat中使用计算属性

有时候从后端获得JSON数据集合后，我们需要对单条数据应用计算属性。在Vue.js 0.12之前的版本中，我们可以在v-repeat所在元素上使用v-component指令。代码示例如下：

```
<div id="items">
  <p v-repeat="items" v-component="item">
    <button>{{fulltext}}</button>
  </p>
</div>
var items = [
  { number:1, text:'one' },
  { number:2, text:'two' }
]
var vue = new Vue({
  el: '#items',
  data: { items: items },
  components: {
    item: {
      computed: {
        fulltext: function() {
          return 'item ' + this.text
        }
      }
    }
  }
})
```

在Vue.js 0.12.*版本中，Vue.js废弃了v-component指令，所以我们需要使用自定义元素组件来实现在v-repeat中使用计算属性。代码示例如下：

```
<div id="items">
  <my-item v-repeat="items" inline-template>
    <button>{{fulltext}}</button>
  </my-item>
</div>
var items = [
  { number:1, text:'one' },
  { number:2, text:'two' }
]
var vue = new Vue({
  el: '#items',
  data: { items: items },
  components: {
    'my-item': {
      replace: true,
      computed: {
        fulltext: function() {
          return 'item ' + this.text
        }
      }
    }
  }
})
```

## 第5章　表单控件绑定

在Web应用中，我们经常会使用表单向服务端提交一些数据，而通常也会在表单项中绑定一些如input、change等事件对用户输入的数据进行校验、更新等操作。在Vue.js中、我们可以使用v-model指令同步用户输入的数据到Vue实例data属性中，同时会对radio、checkbox、select等原生表单组件提供一些语法糖使表单操作更加容易。

### 5.1　基本用法

下面我们列举基本例子来看看如何使用v-model更新表单控件，具体的v-model数据绑定会在后续章节中展开介绍。

#### 5.1.1　text

设置文本框v-model为name，代码示例如下：

```
<span>Welcome {{ name }} join DDFE</span>
<br>
<input type="text" v-model="name" placeholder="join DDFE">
```

当用户操作文本框时，vm.name会自动更新为用户输入的值，同时，span内的内容也会随之改变。

等等。。。。。

### 5.2　值绑定

在通常情况下，对于radio、checkbox、select组件，通过v-model绑定的值都是字符串，checkbox除外，checkbox可能是布尔值。代码示例如下：

```
<!-- 勾选时 `picked` 的值是字符串 a -->
<input type="radio" v-model="picked" value="a">
<!-- 勾选时 `toggle` 的值是布尔值 true，否则是布尔值 false -->
<input type="checkbox" v-model="toggle">
<!-- 勾选时 `selected` 的值是字符串 abc-->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

### 5.3　v-model修饰指令

v-model用来在视图与Model之间同步数据，但是有时候我们需要控制同步发生的时机，或者在数据同步到Model之前将数据转换为Number类型。我们可以在v-model指令所在的form控件上添加相应的修饰指令来实现这个需求。

#### 5.3.1　lazy

在默认情况下，v-model在input事件中同步输入框的值与数据，可以添加一个lazy特性，从而改到在change事件中去同步。代码示例如下：

```
<input v-model="msg" lazy><br/>
{{msg}}
```

## 第6章　过滤器

在了解过滤器之前，我们需要明确一个概念——过滤器，本质上都是函数。其作用在于用户输入数据后，它能够进行处理，并返回一个数据结果。Vue.js与AngularJS中的过滤器语法有些相似，使用管道符（|）进行连接。代码示例如下：

```
{{'abc' | uppercase}}
//'abc' => 'ABC'
```

这里使用了Vue.js内置的过滤器uppercase，将字符串中的字母全部转换为大写形式。

### 6.1　内置过滤器

Vue.js内置了一系列常用的过滤器，可以直接进行调用。这些内置过滤器都相对比较简单，如果要实现比较复杂或者需要定制的过滤功能，还是要借助自定义过滤器的方式。当然，这些内置的过滤器使用时无须定义，比较适合刚上手Vue.js的新人。我们来看一下Vue.js中常用的过滤器，如图6-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00037.jpg)

图6-1　Vue.js内置的常用过滤器

#### 6.1.1　字母操作

Vue.js内置了capitalize、uppercase、lowercase三个过滤器用于处理英文字符。注：这三个过滤器仅针对英文字符串使用。

1．capitalize

capitalize过滤器用于将表达式中的首字母转换为大写形式。代码示例如下：

```
{{ 'ddfe' | capitalize }}
//'ddfe' => 'Ddfe'
```

### 6.2　自定义过滤器

大多数情况下，Vue.js中内置的过滤器并不能满足我们的需求，好在Vue.js还提供了自定义过滤器的API供用户进行功能扩展。在学习Vue.js自定义过滤器之前，我们先来看看如何在AngularJS中自定义过滤器。代码示例如下：

```
angular.module('dd.filters', [])
    .filter('reverse', function (value) {
         return value.split('').reverse().join('')
})

<p>{{ msg | capitalize | reverse: '123' }}</p>
<!--此处 reverse 过滤器带的参数'123'并不起作用，只是用于展示AngularJS的过滤器接受参数的书写形式 -->
```

Vue.js中自定义过滤器的语法与AngularJS在形式上相近，但是语法略有不同。

#### 6.2.1　fillter语法

在Vue.js中也存在一个全局函数Vue.filter用于构造过滤器：

```
Vue.filter(ID,function(){})
```

该函数接受两个参数，其中第一个参数为过滤器ID，作为用户自定义过滤器的唯一标识；第二个参数则为具体的过滤器函数。过滤器函数以值为参数，返回转换后的值。

1．单个参数

注册一个名为reverse的过滤器，作用是将字符串反转输出。代码示例如下：

```
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('');
})

<span v-text="message | reverse"></span>
<!-- 'abc' => 'cba' -->
```

2．多参数

过滤器函数除了以值为参数外，还支持接受任意数量的参数，参数之间以空格分隔。代码示例如下：

```
Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end
})

<span v-text="message | wrap 'before' 'after'"></span>
<!-- 'hello' => 'before hello after' -->
```

3．双向过滤器

上面的过滤器函数都是在Model数据输出到View层之前进行数据转化的，实际上Vue.js还支持把来自视图（input元素）的值在写回模型前进行转化，即双向过滤器。代码示例如下：

```
Vue.filter(id, {
    // model -> view
    // read 函数可选
    read: function(val){},
    
    // view -> model
    // write函数将在数据被写入 Model 之前调用
    // 两个参数分别为表达式的新值和旧值
    write: function(newVal, oldVal){}
});
```

4．动态参数

filter语法还有一个需要注意的点：动态参数。如果过滤器参数没有用引号包起来，则它会在当前vm作用域内动态计算。此外，过滤器函数的this始终指向调用它的vm。代码示例如下：

```
<input v-model="userInput">
<span>{{msg | concat userInput}}</span>

<!--此处过滤器接受的参数userInput根据用户输入动态计算-->
Vue.filter('concat', function (value, input) {
  // `input` === `this.userInput`
  return value + input
})
```

6.2.2　教你写一个filter

针对常规过滤器，6.2.1节中已经给出一个比较简单的过滤器reverse的实现，代码示例如下：

```
Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('');
})
```

需要注意两点：

- 需要给定过滤器一个唯一标识。如果用户自定义的过滤器和Vue.js内置的过滤器冲突，那么Vue.js内置的过滤器将会被覆盖；如果后注册的过滤器和之前的过滤器冲突，则之前注册的过滤器层被覆盖。
- 过滤器函数的作用是输入表达式的值，经过处理后输出。因此，定义的函数最好可以返回有意义的值。函数没有return语句不会报错，但这样的过滤器没有意义。

## 第7章　Class与Style绑定

对于数据绑定，一个常见的需求是操作元素的class列表和它的内联样式。因为它们都是 attribute，我们可以用v-bind处理它们：只需要计算出表达式最终的字符串。不过，字符串拼接麻烦又易错。因此，在v-bind用于class和style时，Vue.js专门增强了它。表达式的结果类型除了字符串以外，还可以是对象或数组。

### 7.1　绑定HTML Class

#### 7.1.1　对象语法

我们可以传给v-bind:class一个对象，以动态地切换class。注意，v-bind:class指令可以与普通的class特性共存。代码示例如下：

```
<div id='example' class="static" v-bind:class="{ 'didi-orange': isRipe, 'didi-green': isNotRipe }"></div>
var vm = new Vue({
  el: 'example',
  data: {
    isRipe: true,
    isNotRipe: false
  }
})
```

渲染为：

```
<div id='example' class="static didi-orange"></div>
```

当isRipe和isNotRipe变化时，class列表将相应地更新。例如，如果isNotRipe变为true，那么class列表将变为"static didi-orange didi-green"。（当然，一般情况下，v-bind:class绑定的对象中只有一个class会生效，这取决于用户自己的设置。）

**注：** 尽管可以用Mustache标签绑定class，比如class="{{ className }}"，但是我们不推荐这种写法和v-bind:class混用。

我们也可以直接绑定数据中的一个对象，代码示例如下：

```
<div id='example' v-bind:class="ddfe"></div>
var vm = new Vue({
  el: 'example',
  data: {
    ddfe: {
      'didi-orange': true,
      'didi-green': false
    }
  }
})
```

还可以在这里绑定一个返回对象的计算属性。这是一种常用且强大的模式。代码示例如下：

```
<div id='example' v-bind:class="ddfe"></div>
var vm = new Vue({
  el: 'example',
  data: {
    didiAge:4,
    didiMember:6000 
  }
  computed: {
    ddfe: function(){
      return {
        'didi-orange': this.didiAge>3 ? true: false,
        'didi-large': this.didiMember>1000 ? true: false
      }
    }
  }
})
```

#### 7.1.2　数组语法

我们可以把一个数组传给v-bind:class，以应用一个class列表。代码示例如下：

```
<div id='example' v-bind:class="[didiHandsome, didiBeautiful]">
var vm = new Vue({
  el: 'example',
  data: {
    didiHandsome: 'didi-handsome',
    didiBeautiful: 'didi-beautiful'
  }
})
```

渲染为：

```
<div id='example' class="didi-handsome didi-beautiful"></div>
```

如果想根据条件切换列表中的class，则可以用三元表达式。代码示例如下：

```
<div id='example' v-bind:class="[didiHandsome, isRipe ? didiOrange: '']">
```

此例始终添加didiHandsome，但是只有在isRipe为true时才会添加didiOrange。

不过，当有多个条件class时这样写有些烦琐。在Vue.js 1.0.19及以后版本中，可以在数组语法中使用对象语法。代码示例如下：

```
<div id='example' v-bind:class="[didiHandsome, { didiOrange: isRipe, didiGreen: isNotRipe }]">
```



### 7.2　绑定内联样式

#### 7.2.1　对象语法

v-bind:style的对象语法十分直观——看着非常像CSS，其实它是一个JavaScript对象。CSS属性名可以用驼峰式（camelCase）或短横分隔命名（kebab-case）。代码示例如下：

```
<div id='example' v-bind:style="{ color: didiColor, fontSize: fontSize + 'px' }"></div>
var vm = new Vue({
  el: 'example',
  data: {
    didiColor: 'orange',
    fontSize: 30
  }
})
```

通常直接绑定到一个样式对象更好，让模板更清晰。代码示例如下：

```
<div id='example' v-bind:style="ddfe"></div>
var vm = new Vue({
  el: 'example',
  data: {
    ddfe: {
      color: orange,
      fontSize: '13px'
    }
  }
})
```

同样的，对象语法常常结合返回对象的计算属性使用。代码示例如下：

```
<div id='example' v-bind:style="ddfe"></div>
var vm = new Vue({
  el: 'example',
  data: {
  didiAge:4,
    didiMember:6000 
}
  computed: {
    ddfe: function(){
    return {
      color: this.didiAge>3 ? orange: green,
      fontSize: this.didiMember>1000 ? 20px: 10px
    }
    }
  }
})
```

7.2.2　数组语法

v-bind:style的数组语法可以将多个样式对象应用到一个元素上。代码示例如下：

```
<div v-bind:style="[ddfe, didiFamily]">
```

## 第8章　过渡

过渡效果在交互体验中的重要性不言而喻。以往我们使用jQuery添加或移除元素的类，搭配CSS中定义好的样式，再引用一些JavaScript库之后，可以做出非常复杂、惊艳的动态效果，不过这一套方法仍略显烦琐。Vue.js内置了一套过渡系统，可以在元素从DOM中插入或移除时自动应用过渡效果。Vue.js会在适当的时机触发CSS过渡或动画，用户也可以提供相应的JavaScript钩子函数在过渡过程中执行自定义DOM操作。

应用过渡效果，需要在目标元素上使用transition特性。代码示例如下：

```
<div v-if="show" transition="my-transition"></div>
```

transition特性可以与以下资源一起搭配使用：

- v-if
- v-show
- v-for（只在插入和删除时触发，使用vue-animated-list插件）
- 动态组件（见“组件”一章）
- 在组件的根节点上，并且被Vue实例的DOM方法（如vm.$appendTo(el)）触发

当插入或者删除带有transition特性的元素时，Vue.js将执行以下操作：

- 尝试以ID“my-transition”查找JavaScript过渡钩子对象，该对象通过Vue.transition(id, hooks)或transitions选项注册（后文将介绍）。如果找到了，将在过渡的不同阶段调用相应的钩子。
- 自动嗅探目标元素是否有CSS过渡或动画（按照Vue.js指定的方式添加类名即可），并在合适时添加/删除CSS类名，免去了用户自己进行相关操作的烦琐。
- 如果没有找到JavaScript钩子并且也没有检测到CSS过渡/动画，DOM操作（插入/删除）将在下一帧中立即执行。

## 第9章　Method

Vue.js的事件监听一般都通过v-on指令配置在HTML中，虽然也可以在JavaScript代码中使用原生addEventListener方法添加事件监听，但Vue.js本身并不提倡如此。看上去这种方式不符合传统的“关注点分离”（separation of concern）的理念，但其实所有的Vue.js事件处理方法和表达式都严格绑定在当前视图的ViewModel上。实际上，采用它提供的v-on指令有如下几点好处：

- 通过查看HTML模板便能轻松定位JavaScript代码中对应的方法。

- 无须在JavaScript中手动绑定事件，ViewModel和DOM完全解耦，更易于测试。

- 当一个ViewModel被销毁时，所有的事件处理器都会自动被删除。

### 9.1.2　methods配置

在上一节中，当用户将click事件与某个方法绑定时，需要在Vue实例当中进行定义，所有定义的方法都放在methods属性下。针对上一节的greet方法定义代码示例如下：

```
var vm = new Vue({
  el: '#example',
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // 方法内 `this` 指向 vm
      alert('Welcome to Vue.js By DDFE!')
      // `event` 是原生 DOM 事件
      alert(event.target.tagName)
    }
  }
})
// 也可以在 JavaScript 代码中调用方法
vm.greet()
```

对于say方法，可按照如下方式定义：

```
new Vue({
  el: '#example-2',
  methods: {
    say: function (msg) {
      alert(msg)
    }
  }
})
```

需要注意的地方如下：

- methods中定义的方法内的this始终指向创建的Vue实例。

- 与事件绑定的方法支持参数event即原生DOM事件的传入。

- 方法用在普通元素上时，只能监听原生DOM事件；用在自定义元素组件上时，也可以监听子组件触发的自定义事件（详见“组件”一章）。

## 第10章　Vue实例方法

本章我们介绍Vue实例提供的一些有用的属性和方法，这些属性和方法名都以前缀$开头。

### 10.1　实例属性

在详细讲解每个属性的使用之前，我们先看一下属性总览图，如图10-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00041.jpg)

图10-1　Vue实例属性总览

#### 10.1.1　组件树访问

##### 1．$parent

用来访问当前组件实例的父实例。

##### 2．$root

用来访问当前组件树的根实例，如果当前组件没有父实例，$root表示当前组件实例本身。

##### 3．$children

用来访问当前组件实例的直接子组件实例。

##### 4．$refs

用来访问使用了v-ref指令的子组件。v-ref的详细介绍请参阅3.1.11节。

#### 10.1.2　DOM访问

##### 1．$el

用来访问挂载当前组件实例的DOM元素。

##### 2．$els

用来访问$el元素中使用了v-el指令的DOM元素。v-el的详细介绍请参阅3.1.12节。

#### 10.1.3　数据访问

##### 1．$data

用来访问组件实例观察的数据对象，该对象引用组件实例化时选项中的data属性。

2．$options

用来访问组件实例化时的初始化选项对象。

### 10.2　实例方法

#### 10.2.1　实例DOM方法的使用

在详细讲解每个方法的使用之前，我们先看一下方法总览图，如图10-2所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00042.jpg)

图10-2　Vue实例DOM方法总览

##### 1．$appendTo()

$appendTo()方法用来将el所指的DOM元素或片段插入到目标元素中。

该方法接受两个参数：

- elementOrSelector（字符串或DOM元素），该参数可以是一个选择器字符串或者DOM元素。
- callback（可选，函数），回调函数，该回调函数会在el元素被插入到目标元素后被触发。注：如果在el上应用了过渡效果，则回调会在过渡完成后被触发。

##### 2．$before()

$before()方法用来将el所指的DOM元素或片段插入到目标元素之前。

该方法接受两个参数：

- elementOrSelector（字符串或DOM元素），该参数可以是一个选择器字符串或者DOM元素。
- callback（可选，函数），回调函数，该回调函数会在el元素被插入到目标元素后被触发。注：如果在el上应用了过渡效果，则回调会在过渡完成后被触发。

##### 3．$after()

$after()方法用来将el所指的DOM元素或片段插入到目标元素之后。

该方法接受两个参数：

- elementOrSelector（字符串或DOM元素），该参数可以是一个选择器字符串或者DOM元素。
- callback（可选，函数），回调函数，该回调函数会在el元素被插入到目标元素后被触发。注：如果在el上应用了过渡效果，则回调会在过渡完成后被触发。

##### 4．$remove()

$remove()方法用来将el所指的DOM元素或片段从DOM中删除。

该方法接受一个参数：

- callback（可选，函数），回调函数，该回调函数会在el元素在DOM中被删除后触发。

注：如果在el上应用了过渡效果，则回调会在过渡完成后被触发。

##### 5．$nextTick()

$nextTick()方法用来在下次DOM更新循环后执行指定的回调函数，使用该方法可以保证DOM中的内容已经与最新数据保持同步。

该方法接受一个参数：

- callback（可选，函数），回调函数，该回调函数会在下次DOM更新循环后被执行。它和全局的Vue.nextTick方法一样，不同的是，callback中的this会自动绑定到调用它的Vue实例上。

#### 10.2.2　实例Event方法的使用

在详细讲解每个方法的使用之前，我们先看一下Vue实例事件总览图，如图10-3所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00043.jpg)

图10-3　Vue实例事件总览

##### 1．$on()

$on()方法用来监听实例上的自定义事件。

该方法接受两个参数：

- event（字符串），该参数可以是一个事件名称。
- callback（函数），回调函数，该回调函数会在执行$emit、$broadcast或者$dispatch后触发。

##### 2．$once()

$once()方法也是用来监听实例上的自定义事件，但只触发一次。

该方法接受两个参数：

- event（字符串），该参数可以是一个事件名称。
- callback（函数），回调函数，该回调函数会在执行$emit、$broadcast或者$dispatch后触发。

##### 3．$emit()

$emit()方法用来触发事件。

该方法接受两个参数：

- event（字符串），该参数可以是一个事件名称。
- args（可选），传递给监听函数的参数。

##### 4．$dispatch()

$dispatch()方法用来派发事件，即先在当前实例触发，再沿着父链一层一层向上，如果对应的监听函数返回false就停止。

该方法接受两个参数：

- event（字符串），该参数可以是一个事件名称。
- args（可选），传递给监听函数的参数。

##### 5．$broadcast()

$broadcase()方法用来广播事件，即遍历当前实例的$children，如果对应的监听函数返回false就停止。

该方法接受两个参数：

- event（字符串），该参数可以是一个事件名称。
- args（可选），传递给监听器的参数。

##### 6．$off()

$off()方法用来删除事件监听器。

该方法接受两个参数：

- event（字符串），该参数可以是一个事件名称。
- callback（可选，函数），对应的回调函数。

如果没有参数，即删除所有的事件监听器；如果只提供一个参数——事件名称，即删除它对应的所有监听器；如果提供两个参数——事件名称和回调函数，即删除对应的这个回调函数。

## 第11章　组件

组件是Vue.js最推崇的，也是最强大的功能之一，核心目标是为了可重用性高，减少重复性的开发。我们可以把组件代码按照template、style、script的拆分方式，放置到对应的.vue文件中。

Vue.js的组件可以理解为预先定义好行为的ViewModel类。一个组件可以预定义很多选项，但最核心的是以下几个：

- 模板（template）—— 模板声明了数据和最终展现给用户的DOM之间的映射关系。

- 初始数据（data）—— 一个组件的初始数据状态。对于可复用的组件来说，通常是私有的状态。

- 接受的外部参数（props）—— 组件之间通过参数来进行数据的传递和共享。参数默认是单向绑定（由上至下），但也可以显式声明为双向绑定。

- 方法（methods）—— 对数据的改动操作一般都在组件的方法内进行。可以通过v-on指令将用户输入事件和组件方法进行绑定。

- 生命周期钩子函数（lifecycle hooks）—— 一个组件会触发多个生命周期钩子函数，比如created、attached、destroyed等。在这些钩子函数中，我们可以封装一些自定义的逻辑。和传统的MVC相比，这可以理解为Controller的逻辑被分散到了这些钩子函数中。

### 11.3　生命周期

在Vue.js中，在实例化Vue之前，它们以HTML的文本形式保存在文本编辑器中。当实例化后将经历创建、编译和销毁三个主要阶段，如图11-9所示。

生命周期钩子：

#### 1．init

在实例开始初始化时同步调用。此时数据观测、事件和Watcher都尚未初始化。

#### 2．created

在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定、计算属性、方法、Watcher/事件回调。但是还没有开始DOM编译，$el还不存在。

#### 3．beforeCompile

在编译开始前调用。

#### 4．compiled

在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发DOM更新。但是不担保 $el 已插入文档。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00052.jpg)

## 第13章　与服务端通信

弃用。。。

## 第14章　路由与视图

同AngularJS一样，Vue.js也很适合用来做大型单页应用。Vue.js本身并没有提供路由机制，但是官方以插件（vue-router）的形式提供了对路由的支持。vue-router 0.7.13支持嵌套路由、组件惰性载入、视图切换动画、具名路径等特性。以下内容讲解都是基于vue-router 0.7.13版本，后面就不加版本号了。

## 第15章　vue-cli

使用Vue.js开发大型应用时，我们需要考虑代码目录结构、项目构建和部署、热加载、代码单元测试等事情。如果每个项目都要手动完成这些工作，那无疑效率是低下的，所以通常我们会使用一些脚手架工具来帮助完成这些事情。在Vue.js生态中我们可以使用vue-cli脚手架工具来快速构建项目。

## 第16章　测试开发与调试

任何实际项目的开发都不仅仅是完成编码，规范的开发流程和严谨的测试都是不可或缺的。合理使用各种工具来进行测试开发与调试，能够极大地提升编写代码的效率，使开发过程事半功倍、对于提高代码质量、稳定线上服务至关重要。

Vue.js除了是一个前端类库之外，还开发了许多配合使用的工具。比如Chrome下的调试工具、编辑器下的高亮工具等。正是这样一个完整的生态环境，使得用Vue.js开发变得更加简便。本章将为大家介绍几个常用的配合Vue.js使用的工具。

### 16.1　测试工具

#### 16.1.1　ESLint

在日常的团队开发中，为了避免出现低级bug和统一代码风格，通常会在开发前约定一套编码规范。为了保证规范的执行，可以使用Lint工具和代码风格检测工具。

ESLint就是一个Lint工具，它是由JS红宝书的作者 Nicholas C．Zakas创立的一个开源项目，旨在为大家提供一个可扩展、每条规则独立、不内置编码风格的语法检查工具。ESLint有别于JSLint的地方就是它被设计成完全可配置的，每一条规则都是一个插件，用户完全可以根据自己的需求来选择使用哪些规则。比如报错就可以设计为“警告”和“错误”两个等级，或者禁用。

下面介绍一下ESLint的配置。

在项目中配置ESLint有两种基本方法：

- 用JavaScript注解的方式将配置信息直接加到文件里。
- 使用JavaScript、JSON或YAML文件为整个目录定义配置信息。文件格式可以是.eslintrc.*或package.json。ESLint会自动查找并读取配置文件。

需要配置的有以下几块信息，所有这些配置都将细粒度地决定ESLint如何检测代码。这里以JSON格式为例，展示一下基本的配置规则。

##### 1．Enviroments

脚本将要运行的环境，每个环境都有自己预定义好的全局变量集合。通过env关键字配置Environments选项，下面的配置表示脚本将运行在浏览器（browser）和node环境。还可以配置Commonjs、jQuery等很多选项。

```
<!-- package.json -->
{ 
  "env":{
    "browser": true,
    "node": true
  } 
}
```

##### 2．Globals

在脚本运行期间需要额外加入的全局变量。当变量在当前文件中未定义却被访问时，会触发未定义规则警告。因此，如果设置了一些全局变量，则需要在ESLint的配置文件中进行配置。

```
<!-- package.json -->
{
  "globals"：{
    "varA": true,
    "varB": false
  }
}
```

上述配置表明varA、varB 都是全局变量，其中varB的值不可写（只读）。

3．Rules

ESLint提供了大量的规则，用户通过配置规则是否生效来定义自己的项目需要使用哪些规则。

```
<!-- package.json -->
{
  "rules": {
    "eqeqe": "off",
    "curly": "error"
  }
}
```

#### 17.6　总结

Vue.js的设计思想是专注而灵活，它只聚焦视图层，响应的数据绑定和组件系统是其特色。当我们采用Vue.js构建一些大型应用时，就不得不考虑Web前端工程化的一些事情了，而Scrat在工程化方面做得特别棒。Scrat和Vue.js在组件化开发思想上不谋而合，相得益彰，Scrat+Vue.js产生的化学反应是美妙的，它们必将成为开发大型项目的利器。

## 第18章　Vue.js 2.0

Vue.js 2.0 preview版本于2016年4月底发布，相对于1.x版本，Vue.js 2.0做了不少的改进和优化。除了部分API变更、模板更加灵活之外，最吸引人的恐怕就是高性能的Virtual DOM和流式服务端渲染功能了。接下来就让我们一起走进Vue.js 2.0的世界，看一看Vue.js 2.0给我们带来了哪些惊喜。

### 5．生命期钩子函数部分

在Vue.js 2.0中，Vue实例的生命周期发生了一些变化，如图18-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00093.jpg)

图18-1　Vue.js 2.0生命周期图示

- 新增beforeMount

Vue.js 2.0新增了beforeMount钩子函数，它的调用时机是在模板编译成render方法之后、创建Watcher之前。

- 新增mounted

Vue.js 2.0新增了mounted钩子函数，它的调用时机是在DOM树生成之后。

- 新增beforeUpdate

Vue.js 2.0新增了beforeUpdate钩子函数，它的调用时机是在Virtual DOM生成之后、DOM树生成之前，调用条件是这个vm实例已经mounted过。

- 新增update

Vue.js 2.0新增了update钩子函数，它的调用时机是在DOM树生成之后，调用条件是这个vm实例已经mounted过。

- 新增activated

Vue.js 2.0新增了activated钩子函数，它的调用时机是在DOM树生成之后，调用条件是keep-alive组件。

- 新增deactivated

Vue.js 2.0新增了deactivated钩子函数，它的调用时机是在Vue实例销毁时，调用条件是keep-alive组件。

- 废弃ready

在Vue.js 1.x版本中，ready钩子函数的调用时机是第一次插入DOM后。Vue.js 2.0并不一定执行在浏览器环境中，也可能是在服务端渲染，因此废弃了该钩子函数并用mounted钩子函数替代。

- 废弃beforeCompile

在Vue.js 1.x版本中，beforeCompile钩子函数的调用时机是在模板编译前。Vue.js 2.0废弃了该钩子函数并用created钩子函数替代。

- 废弃compiled

在Vue.js 1.x版本中compiled钩子函数的调用时机是在编译模板之后、DOM创建之前。Vue.js 2.0废弃了该钩子函数并用mounted钩子函数替代。

- 废弃attached

在Vue.js 1.x版本中attached钩子函数的调用时机是插入DOM时。Vue.js 2.0不一定会创建真实的DOM，因此废弃了该钩子。

- 废弃detached

在Vue.js 1.x版本中，attached钩子函数的调用时机是移除DOM时，废弃理由同上。



## 第19章　源码篇——util

Vue.js内部封装了util，提供了一些常用的工具方法。了解本章内容，可以避免开发者再额外引用第三方框架增加代码量。util一共分成6部分：env、dom、components、lang、debug和options，整体结构如图19-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00106.jpg)

图19-1　util整体结构

## 第20章　源码篇——深入响应式原理

Vue.js最显著的功能就是响应式系统，它是一个典型的MVVM框架，模型（Model）只是普通的JavaScript对象，修改它则视图（View）会自动更新。这种设计让状态管理变得非常简单而直观，不过理解它的原理也很重要，可以避免一些常见问题。下面让我们深挖Vue.js响应式系统的细节，来看一看Vue.js是如何把模型和视图建立起关联关系的。

## 第21章　源码篇——父子类合并策略

相信在前面的组件篇中已经有同学看到了组件的mixin特性，里面也提到了两种合并策略。

当混合对象中出现下面两种情况时：

- 混合对象和组件存在同名的生命周期方法时，它们都会合并到一个数组中，混合对象的生命周期方法优先执行，组件的同名生命周期方法后执行。
- 混合对象的其他选项如methods中定义了和组件同名的方法时，组件会覆盖混合对象的同名方法。

## 第22章　源码篇——缓存

其实很多同学都看过Vue.js的源码，或者已经在前面的一些源码示例章节中看到了Cache，本节我们就来讲述它。

比如在模板解析的源码中：

```
<!--源码目录：src/parsers/template.js -->
const templateCache = new Cache(1000)
// stringToFragment方法中的应用
var hit = templateCache.get(cacheKey)
// stringToFragment方法中的应用
templateCache.put(cacheKey, frag)
```

### 22.1　Cache有什么用

顾名思义，缓存一般可以用来放置一些数据，同时提供一些API来操作数据，如图22-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00133.jpg)

图22-1　Cache对象

## 第23章　源码篇——属性props

其实很多同学都使用过props配置给组件元素设置一些属性，本章我们从源码角度来分析一下相关的具体实现。

### 23.1　流程设计

我们看一下初始化props的流程，如图23-1所示。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00135.jpg)

图23-1　props初始化流程图

## 第24章　源码篇——events

前面我们介绍过通过methods对象配置来给模板DOM元素绑定事件，那么如何在Vue.js实例之间以及父子类之间通过事件来通信呢？我们可以通过events这个配置项来实现。

### 24.1　events配置是什么

其实可以理解为一个简单的配置对象：

- Key是在实例事件比如$emit调用时传入的参数。

- Value是处理函数（当然也可以是methods里面配置的方法名）。我们可以在Vue实例化时通过类似methods的配置项events。

## 第25章　Webpack

Webpack是一个模块化加载器，它同时支持AMD、CMD等加载规范。与其他模块化加载器相比，它具有以下优势：

## 第26章　Rollup

“Webpack 2输出的文件比起Rollup还是丑啊。但是Rollup针对非JS资源的插件生态不行，也没有热替换，不适合用在应用层。所以现阶段我还是用Webpack做应用层开发，用Rollup做库的打包。”

——尤小右

#### 26.1　简介

在开发一个项目时，我们会将项目拆分成多个模块，每个模块完成相对独立的功能，我们可以很方便地单独开发代码。很可能存在这种情况：项目依赖很多第三方组件，依赖组件都很小，这对于浏览器来说是非常糟糕的，增加了许多请求；对于前端开发来说，严重影响了页面加载速度。这种情况必须规避。

针对上面情况解决办法有很多，大多都是采用模块化开发方式，使用模块化打包工具将所有文件最终打包到一个单独的输出文件中，大大减少了请求的数量。Browserify和Webpack就是这样的打包工具。

使用这种打包工具很快、很好、很方便。但是我们是否注意到下面这样的问题：

## 第27章　Browserify

### 27.1　安装

全局安装，执行如下命名：

```
$ npm i -g browserify
```

除了全局安装，我们也可以将Browserify作为项目依赖在项目中进行安装，执行如下命令：

```
$ npm i browserify --save-dev
```

### 27.2　基本使用

与Node.js支持的CommonJS规范一样，Browserify通过require来加载依赖文件。假设有如下目录结构：

```
example
  |- concat.js
  |- log.js
  |- index.js
  |- index.html
```

## 第28章　vue-loader

vue-loader是基于Webpack的loader，在Vue组件化中起着决定性作用。

### 28.1　如何配置

vue-loader的配置和Webpack其他loader的配置类似，对.vue后缀增加处理。

配置如下：

```
module.exports = {
  entry: {
    app: './src/main.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}
```

其实配置还是非常简单、直观的。

## 第29章　PostCSS

PostCSS是一个用JavaScript插件来转换CSS的工具，目前已经有200名插件，这些插件可以lint CSS，支持变量、mixins、内联的图片等。

简单来说，PostCSS可以将CSS转换为JavaScript能够处理的数据格式，基于JavaScript所写的插件可以完成上述各种操作。PostCSS为这些插件提供了接口，方便其完成各自的功能，但是不会对CSS代码做任何修改。从理论上讲，PostCSS的插件可以对CSS进行任何操作，只要我们有需求，就可以写一个JavaScript插件来实现。

### 29.1　安装

PostCSS针对不同的构建工具提供了不同的安装工具。在Webpack中该工具名为postcss-loader，全局安装方式如下：

```
$ npm install -g postcss-loader
```

除此之外，当需要用到PostCSS的插件时，也可以使用npm安装。比如，大名鼎鼎的autoprefixer安装方式如下：

```
$ npm install autoprefixer
```

### 29.2　配置

PostCSS一般与Gulp、Webpack等构建工具搭配使用。在vue-loader中使用PostCSS时，需要在webpack.config.js中进行配置。当需要使用PostCSS的插件时，在vue选项中向postcss设置选项传入一个数组，比如使用CSSNext插件的配置代码示例如下：

```
// webpack.config.js
module.exports = {
  // other configs...
  vue: {
    // use custom postcss plugins
    postcss: [require('postcss-cssnext')()],
    // disable vue-loader autoprefixing.
    // this is a good idea since cssnext comes with it too.
    autoprefixer: false
  }
}
```

除了提供一个数组用于存放引用的数组外，postcss设置选项还可以接受：

- 一个可以返回插件数组的函数。代码示例如下：

```
postcss: function () {
  return [precss, autoprefixer];
}
```

- 一个对象，该对象包含将被传给PostCSS处理器的设置选项。代码示例如下：

```
postcss: {
  plugins: [...], // list of plugins
  options: {
    parser: sugarss // use sugarss parser
  }
}
```

### 29.3　命令

在命令行或者npm scripts中使用PostCSS需要额外安装postcss-cli，其安装方式如下：

```
$ npm install postcss-cli
```

语法如下：

```
postcss [options] [-o output-file|-d output-directory|-r] [input-file]
```

## 第30章　拓展篇

### 30.1　Composition Event

Composition Event，中文译为“复合事件”，是DOM 3级事件中新添加的一类事件类型，用于处理IME的输入序列。IME（Input Method Editor，输入法编辑器）可以让用户输入在物理键盘上找不到的字符。复合事件就是针对检测和处理这种输入而设计的。因为以上所述原因，复合事件很少被拉丁系语言输入的开发者所知（因为拉丁字母都能通过物理键盘输入）。当然，即使是使用非拉丁系语言比如中文作为输入的开发者，也不见得了解复合事件，因为在开发中用到该种事件类型的情况比较少见。

IME复合系统的工作原理是：缓存用户的键盘输入，直到一个字符被选中后才确定输入。缓存的键盘输入会暂时展示在输入框中，但不会真正被插入到DOM中，如图30-1所示。但是如果在复合事件的过程中改变了输入框的值（比如切换了输入法或者直接按下Enter键），复合事件将提前结束，同时缓存的键盘输入值将会插入到输入框中。

![img](http://localhost:8000/bf7b1d98-6e0d-43b5-9c9c-fe8b0ba7f209/OEBPS/Image00154.jpg)



# 小程序

## wxss（须知）

> 不支持  通配符  *
>
> *{
>
>  		padding: 0;
>	
>  		 margin: 0;
>	
>  		 box-sizing: border-box;
>
> }
>
> 所以只能自己手写

>需要加其他的继续添加就可以了 ，按钮可以不用因为按钮有自己的样式
>
>page,view,text,swiper,swiper-item,image,navigator {
>
>  			padding: 0;
>	
>  			margin: 0;
>	
>  			box-sizing: border-box;
>
>}

## tabBar的书写



> 在app.json文件中 添加tabBar
>
> tabBar：页面的底部导航

例：

```js
 "tabBar": {

        "color": "#999",		//未选中时的字体颜色
        "selectedColor": "",	//选中时的字体颜色
        "backgroundColor": "",	//背景颜色
        "position": "bottom",
        "borderStyle": "black",
        "list": [{
            "pagePath": "pages/index/index",
            "text": "首页",
            "iconPath": "icons/home.png",
            "selectedIconPath": "icons/home-o.png"
        }, {
            "pagePath": "pages/category/index",
            "text": "分类",
            "iconPath": "icons/category.png",
            "selectedIconPath": "icons/category-o.png"
        }, {
            "pagePath": "pages/cart/index",
            "text": "购物车",
            "iconPath": "icons/cart.png",
            "selectedIconPath": "icons/cart-o.png"
        }, {
            "pagePath": "pages/user/index",
            "text": "我的",
            "iconPath": "icons/my.png",
            "selectedIconPath": "icons/my-o.png"
        }]
    },
```











例：

![image-20200804180013453](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804180013453.png)

```js
 "tabBar": {
        "list": [{
            "pagePath": "pages/demo/demo",	//  路径
            "text": "首页",					//文字
            "iconPath": "img/icon_32.png",	//点击前的图片地址   （点击前为黑色） 点击了会自动跳转
            "selectedIconPath": "img/icon_32s.png"   //点击后跳转到的图片（被点击后图片为橙色）
        }, {
            "pagePath": "pages/demo02/demo02",
            "text": "热销产品",
            "iconPath": "img/icon_26.png",
            "selectedIconPath": "img/icon_26s.png"
        }, {
            "pagePath": "pages/demo03/demo03",
            "text": "商品特惠",
            "iconPath": "img/icon_25.png",
            "selectedIconPath": "img/icon_25s.png"
        }, {
            "pagePath": "pages/demo04/demo04",
            "text": "联系我们",
            "iconPath": "img/icon_42.png",
            "selectedIconPath": "img/icon_42s.png"
        }],
        "color": "#000000",
        "selectedColor": "#0094ff",
        "borderStyle": "black",
        "backgroundColor": "#caeaff"

    }
```





## 自定义组件（component）

> component="true" ==>表示当前文件夹下的为组件=> 写在要成为组件的json文件下



### 例1：

![image-20200804172024843](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804172024843.png)

> 黄色区域为自定义组件，缘由：红色框内的四个目录点击之后都会出现黄色框的悬浮栏



1.黄色框新建在pages 文件夹外的同级目录下（新建的文件名为components，子目录名为btn 内含四个基本文件）

![image-20200804172302693](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804172302693.png)

==> 新建后  该文件夹也会出现在app.json 文件pages  目录下（一定得写入）

![image-20200804172541629](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804172541629.png)

2. btn.json 添加属性使其变成组件

   ```js
   {
       "usingComponents": {},  //这条是component/btn新建时自动生成的
   
       "component": true   // 该条为成为组件的关键语句
   }
   ```

3.例：在首页添加btn自定义组件

​		需要在首页的 .json 文件内添加  组件路径和 组件名称

```js
首页.json  文件原始样貌
	 {
            "usingComponents": {
               
            }
     }
```

```js
添加后
        {
            "usingComponents": {
                // btn-component 为组件名称   组件路径：/components/btn/btn
                
                "btn-component": "/components/btn/btn"         
            }
        }
```

4.使用组件

 首页.wxml  文件  直接写组件名称     <btn-component></btn-component>

组件的其他样式属性都在btn组件文件夹 下的文件内进行书写 

### 例2

1.pages同级下创建目录（例：components）

2.在components下创建一个文件夹（设置组件  例：Tabs）

3.在Tabs右键新建component  或者其他方式也可以（里面包含了 Tabs.js  Tabs.json  Tabs.wxml  Tabs.wxss）

4.在Tabs.json 文件（需要设置为组件的json文件内）下添加 component：true   ==> 意思是设置为组件

```js
{
  "component": true,//确定设置为组件
  "usingComponents": {}//usingComponents意思是使用的组件   {} 内写的是自定义组件名（自定义命名）和组件地址（后面有往后看）
}
```

5.在需要使用组件的页面.json文件下添加

```js
{
    "usingComponents": {//这个是本来就有的，每个页面都会有
        
        //Tabs  是自定义组件名  在wxml页面写法==> <Tabs></Tabs>
        // :后面的是组件的地址  ../==>返回上一级  
        "Tabs": "../../components/Tabs/Tabs"
    }
}
```



















## （重要）组件与页面js 回调函数的区别

```js
 1 页面.js  文件中  存放事件回调函数的时候   存放在data同层级下！！！
 2 组件.js  文件中  存放事件回调函数的时候   存放在methods中！！！！
```





## iconfont （unicode方式）

> iconfont 文本图标

### 1.步骤一

![image-20200804174040046](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804174040046.png)

### 2.步骤二  

1.新建iconfont.wxss 文件 保存复制的代码  并在复制的代码url地址加上 http: 

2.并添加如下代码

```js
    .iconfont {
        font-family: "iconfont" ! important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antla l1ased;
        -webkit-text-stroke-wldth: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
```

### 3.

在需要用到iconfont 图标的.wxss 文件添加  @impot "存放iconfont.wxss文件地址"

```js
例：@import "/iconfont/iconfont.wxss";
```



### 4.

在需要用到的图标的 .wxml 文件的标签内添加 <text class="iconfont icon1"></text>

```js
	iconfont 类是必须的   icon1为自定义类名但也是必不可以少的：
    .icon1::before {
    		content: "\e6a1";
		}
//通过伪类 content  属性装载 图标的文本  图标原：&#xe6a7;    添加在content之后省略前四个字符
如下图：四个图标有四个不同的图标代码  所以除去必须的iconfont类名还需要自己定义一个类名来完成伪类装载图标代码
```

![image-20200804175224071](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804175224071.png)











![image-20200804174144892](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200804174144892.png)



## 样式引入

> @import  "样式文件相对路径"
>
> ​	1.只能写相对路径
>
> ​	2.    ../    ==>返回当前目录的上一级目录

```js
例： @import "/iconfont/iconfont.wxss";
```



## 事件绑定

### 笔记

> 事件绑定需要加关键字  bind   除了点击等事件 有特定的事件名称  其他的都是自定义名称

#####  1.需要给input标签绑定 input事件

​    	绑定关键字 bindinput

#####   2.获取输入框的值

​    	通过事件源对象来获取（默认写e）（相当于js函数事件对象）

#####   3.把输入框的值 赋值到打扰中

​    	不能直接写如下：

​     		 1.thsi.data.num=e.detail.value

​      		2.this.num=e.detail.value

​      正确写法（小程序中）（写在函数内）

​      		this.setData({

​       			 num:e.detail.value

​      		})



#####  4.给button 添加一个点击事件，手机里点击事件绑定不是onclick 

   	 1.bindtap   ==> 点击事件绑定方法

   	 2.无法在小程序的 事件函数中 直接传参 否则会将括号里的参数一起认定为是事件函数名而报错招不到函数

   	 3.要想传参就需要设定自定义属性来进行参数传递

​      		3.1（自定义属性写法==> data-xxx="{{zz}}"  data- 开头  xxx:为自定义属性名 zz:为自定义属性值 ）

​      		3.2 若自定义属性的值 不写在 {{ }} 中 将会当成字符串

​    	4.事件源中获取(事件对象中) 自定义属性

#####   5.要获取js中page下data 中属性的值 ==> this.data.属性名



>  bind  事件绑定

点击事件绑定

```js
1.
<button bindtap="handletap">+</button>   ==> handletap  为事件的自定义事件函数名  自定义命名
```

```js
2.在js的data同级下书写事件函数
//例：
     handletap(e) {
            console.log(e)
            this.setData({
                num: e.currentTarget.dataset.operation + this.data.num
            })
        },
```



输入框事件绑定

```js
<input type="text" bindinput="handleInput"/>
```

```js
//js中
	handleInput(e) {
            //e 相当于是js里的事件对象
            // console.log(e)
            this.setData({
                num: e.detail.value
            })
        },
```

## scroll-view

```js
 <scroll-view class="right_content"  scroll-y="true" scroll-x="falsh" scroll-top="{{scrollTop}}" ></scroll-view>
```



### scroll-y  ，scroll-x

> 使用时需要设置固定的高度才能使用 scroll-y
>
> 使用scroll-x 横向时  需要设置不换行等
>
> 若父盒子使用了 display：flex 布局  
>
> ​		scroll-y 情况：父盒子设置高度也可以，因为flex 布局子元素会继承父100%

![](https://s1.ax1x.com/2020/08/19/dlkfrq.png)

![](https://s1.ax1x.com/2020/08/19/dlAcTK.png)



### scroll-top

> 右侧菜单的scroll-top  是不能写死的 ，使用需要没点击一次的时候给scrollTop 赋值来相当于动态改变
>
> scrollTop 的值就一直是 0

```js
  <view class="cates_container">
        <!--左侧菜单--->
        <scroll-view class="left_menu"  scroll-y="true" >
           <view class="menu_list {{index===currentIndex?'active':''}}" 
           wx:for="{{leftMenuList}}"
           wx:key="*this"
           bindtap="handleItemTap"//这里绑定了事件
           data-index="{{index}}">
           {{item}}
           </view>
        </scroll-view>
          

        <!--右侧菜单--->
        <scroll-view class="right_content"  scroll-y="true" scroll-top="{{scrollTop}}" >
           <view class="goods_group" 
           wx:for="{{rightContent}}"
           wx:for-item="item1"
           wx:for-index="index1"
           wx:key="cat_id">
                <view class="goods_title" >
                    <text class="delimiter">/</text>
                    <text class="title">{{item1.cat_name}}</text>
                    <text class="delimiter">/</text>
                </view>
                <view class="goods_list" >
                    <navigator class="" target="" url="" hover-class="navigator-hover" open-type="navigate"
                    wx:for="{{item1.children}}"
                    wx:for-item="item2"
                    wx:for-index="index2"
                    wx:key="cat_name">
                        <image class="" mode="widthFix" src="{{item2.cat_icon}}"  />
                        <view class="goods_name" >{{item2.cat_name}}</view>     
                    </navigator>
                      
                </view>
           </view>
        </scroll-view>
```

页面js

```js
 data: {
        //左侧的菜单数据
        leftMenuList: [],
        //右侧的商品数据
        rightContent: [],
        //左侧被点击的菜单小类
        currentIndex: 0,
        //scroll-top 绑定的参数
        scrollTop: 0
    },


handleItemTap(e) {
	this.setData({
            scrollTop: 0
        })
 }

```





![](https://s1.ax1x.com/2020/08/19/dlZ2kV.png)



## image标签

```js
image图片标签
	1.src 指定要加载的图片的路径
		图片存在默认的宽度和高度320*240		原图大小是200 x 100

	2.mode决定图片内容如何和图片标签宣高做适单
		2.1 scaleToFil1  默认值  不保持纵描比缩放图片。使图片的宣高完全拉伸至填满		image常用
		2.2 aspectFit    保持宽高比  确保图片的长边显示出来	 						页面轮播图常用
		2.3 aspectFill   保持纵横比缩放图片， 只保证图片的短边能完全显示出来。 			少用
		2.4 widthFix     以前web的图片的宽度指定了之后高度会自己  按比例来调整			image常用
		2.5 bottom...    类似以前的backgroud-position

```



## swiper

```js
1轮播图外层容器swiper 
2每一个轮播项	swiper-item  ==>(每一个swiper-item 标签下都放一个需要轮播的图片  一个image外就包裹一个)
3 swiper标签存在默认样式
1 width 100%
2 height 150px
image存在默认宽度和高度320 * 240
3swiper高度无法实现由内容撑开
4先找出来原图的宽度和高度等比例给swiper 定 宽度和高度
	原图的宽度和高度1125*352px
	swiper宽度/swiper高度=原图的宽度/原图的高度
	swiper高度=swiper宽度*原图的高度/原图的宽度
	height: 100VW * 352 / 1125

以下属性都加在swiper 标签上
5 autoplay 自动轮播
6 interval 修改轮播时间
7 circular 衔接轮播（无缝轮播）
8 indicator-dots 显示指示器分页器索引器
9 indicator-color 指示器的未选择的颜色
10 indicator- active-color选中的时候的指示器的颜色


```

```js
  <view class="index_swiper">
      
        <swiper autoplay circular indicator-dota>
            <swiper-item 
            wx:for="{{swiperList}}"
            wx:key="goodsid">
                <navigator class="" target="" url="" hover-class="navigator-					hover" open-type="navigate">
                    <image class="" src="{{item.image_src}}" 											mode="aspectFit|aspectFill|widthFix" lazy-load="false" 							binderror="" bindload="" />               
                </navigator>
                                
            </swiper-item>
            
        </swiper>
        
    </view>

//  wxss 
.index_swiper swiper {
    height: 340rpx;
}

.index_swiper swiper image {
    width: 100%;
    height: 340rpx;//原图750*340
}
```



### 常用属性

 autoplay 自动轮播
 interval 修改轮播时间
 circular 衔接轮播（无缝轮播）
 indicator-dots 显示指示器分页器索引器
 indicator-color 指示器的未选择的颜色
 indicator- active-color选中的时候的指示器的颜色



### 例

```js
<swiper autoplay indicator-dots circular>
    <swiper-item class="" item-id="">   
        <image class="" src="../../img/5.jpg" mode="aspectFit|aspectFill|widthFix"  />
    </swiper-item>
     <swiper-item class="" item-id="">
        <image class="" src="../../img/6.jpg" mode="aspectFit|aspectFill|widthFix"  />
    </swiper-item>
</swiper>

```

## navigator

> 导航组件-类似于超链接标签



```js
导航组件==>类似于超链接
    0.块级元素 默认会换行
    1.url     通过url 地址来跳转相应的页面 ==> 绝对路径 相对路径 都可以
    2.target  要跳转到当前小程序 还是其他小程序的页面
            self 默认值==> 当前小程序内的页面
            miniProgram  ==>跳转到其他小程序的页面
    3.open-type 跳转方式
            3.1 navigate 默认值  保留当前页面（跳转后含有返回按钮），跳转到应用内的某个页面，				但不能跳转到tabar页面
            3.2 redirect        关闭当前页面，跳转到应用内的某个页面，但不能跳转到tabar页面
            3.3 switchTab       跳转到tabbar页面，并关闭其他所有非tabbar页面
            3.4 relaunch        关闭所有页面，打开到应用内的某个页面
```

```js
//例
<navigator   url="/pages/demo_swiper/swiper" >跳转页面</navigator>
<navigator  open-type="navigate" url="/pages/demo_swiper/swiper">跳转页面</navigator>
<navigator  open-type="redirect" url="/pages/demo_swiper/swiper">跳转页面</navigator>
<navigator  open-type="switchTab" url="/pages/demo_swiper/swiper">跳转页面</navigator>
```



## navigator 通过url  传参

```js
要传参时 加上  ？  在后面写上要传的参数

这样跳转到 goods_list 下的index 的页面生命周期函数内
	 onLoad: function(options) {
        console.log(options);
    }===> cid:"5"  就会打印出来
```



```js
 <navigator 
    wx:for="{{item1.children}}"
    wx:for-item="item2"
    wx:for-index="index2"
    wx:key="cat_name"
    url="/pages/goods_list/index?cid={{item2.cat_id}}">
     
</navigator>
```



## rich-text

> 富文本标签
>
> <!--
>     rich-text 富文本标签
>     1. nodes属性来实现
>         1.1 接收标签字符串(常用，简单明了)
>         1.2 接收对象数组（不常用，不够直观，繁琐）
> -->

```js
//wxml
	
<rich-text class="" nodes="{{html}}">
    
</rich-text>
```

```js
   // js
    data: {
        
        //1. 标签字符串   最常用的（rich-text  可存放的识别的标签div,li,a,ul,sapn等）
        //这些结构可输出渲染至页面
        
        //html: `<ul class="apps-nav clearfix"><li class="nav" data-spm-ab="apps-1"><a href="//market.m.taobao.com/app/fdilab/download-page/main/index.html?acm=lb-zebra-634493-8610359.1003.4.8191397&amp;scm=1003.4.lb-zebra-634493-8610359.OTHER_15917306779921_8191397"><img src="data:image/webp;base64,UklGRtIFAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSC0BAAANT8OwbdtIJ7nt/fuvm3SKiMiDLS0tfSHhpOWhRpaxMpexJsFFhZbtNYopea2fCotyUgtx0JEYNqDbtq0s2XR3d2MrYYvYdHd3vv8LNOh3fjtGRP8Tu2yjx2FWcfD3WauUSVaXOMRy3inAEFdtcbhb9znsCyMGMMpxhdMPU+yI42CcFzKfTbARxEHh953PsGK9gOZEF8XKbgVROFFm34JKGHjWa0HmzXtAJ7TbQGg3gdCsAaFaBEI5KKWgZOG/4AyUo4EMdP2GFnT1ohV0pYwDdOmUiw+qQaGd84MqhtVjQAya3hdWldgTCxSLIDbvvEtQRFnYLK4NVywwvYiMsTO/mb3KwGwnwMLe8vPj4lQG5ro/3zhYf0uaHWa1UoIVT4jfjqdYDfvNYraGPQAAAFZQOCB+BAAA0BYAnQEqPAA8AD6JOJdHpSOiISwYDzCgEQlsAMa1QVheDH3H8XPw5+Turf2PgFjqelPwPOV8wD9H/Mz/WD3AeYD9o/Vy/wH6ze4D9bPYA/aPrAPQA/Yj0zP2V+C/9zP3O9ph5Lo122ryda/Zofj9+p+mZ9hnogfsAj1tQXuVcitM5RQRoK4Bz6pXzH/zUc4VrcbDF0986A/R1QF3urllnqUU+UC1cMLEKOGPIeGWdCiBjsLBn+EB+lsEDEnn8ywA/v6/y7bkzLN/krBc33mDwaOzw6inxwQ2JrG4taZSSft5W/k4oFIMRWk8D/5VwIcOGueTfZ5aV1IZ/+lhUKfQfiUFyLveN4O7U1vHXMWO7V/ix06/O3zrhj/iJrPqF4FfjYv7JqXCypcE3zIXAwn+4/PMKZ51mYYKwdGEFC/YCq2e7k1K3zvTDfyJEM8j06UYQ6cbx+lSyZaGjVyZmrTOPN97ke5p+EMbmN9cJjoqWYNZ0Nruzijk4rtTJC35Y2/sBePYdqbm8jop8aLGu/LhKmU6cSjBdCjkejimS8K/q9zeptKioHz2CzkDfEeNAZNa7OMjN5jZ6fahqMTSsfF8/kZZHAhc0BKFqIPSee+POyPv3npNB6KL9RQw9QMupGBIPjM1O7VPSe5m/fvQGcj5ODMyyVuStIB8C3E7/w3dnFzUwtW/Tjxts3VtLSeWLiYHtIT6ipw5fb048qoC9FcQJap5gNhOt4/J9tkyB35CkEx7labVClYVDF4VbrxKotehrZu0CB8viRnZxoqwS6jyyvSAGb8E8F/ktk3u36OzTffqJ08g/b/6f4mWMfMfBIiVQhf4LrmCyqgUPdqxqagfg9deMHTJTZwO+snYPBQO4sQNej3UFoBH97UkJ77xXA5rDYmqUhEWN/2pikatYMXnl8gT/il8nUZ30udx/Ly/qICtacT6ITXlf4wN9BlwXJEjDd+yUzpgqAQyfeHHLRylz7SCOHBP3k2sxy0Zw1ihuNYsizlkGRwOG8dx6FtOUBQU2acvdvE9EjqIOrvzt0/oshM2wKxAiX6d2Kue6Bb02Rbe1gPoLFrMNRrAh+K0qtI/s5S4vApopBWWYzUryIawg/qyHLsAG3zfJd+7yndRi8SFc8U0kWXVaNWozdZESUbeDycER437GxzDLSFIJv+wGr9Hx9dCB9mT8xoSzovU0BlCd9CJB45NfEBuCuQ+OSKK3SPQdVWIfzzsvOzpi0yTcJ8aq9K8shP0R6SbBYLN7aBqORmktnHAx8oAer9vgel9MUebUSlFaOqRGdncFe836BHHlpop6wF7MHw7QFjCRUey6N2Xp8BDA6nMx7+/juDC7/a0gyzu59G+tFuQ9euKcxIRJ3My/tzx2PyBBma8rUDafyKangqwmHLiYwpD6/7z117KfgarAvvMpkSbNpa0qFD8pwhGzg97GDHm5AAAAFQjxvzt5qLwyHPdV9VgM+epHXH2V9GytP10q238TxwtvKy75X8zR74vXM7fZbJ/zrn2V1+/+MgADOZX4jAAAA==" alt="手机app - 淘宝" class="app-icon"></a><div class="app-qr"><img class="J_QRCode" data-src="//img.alicdn.com/tps/i4/TB1ULEoIXXXXXbXXXXXCBLiJXXX-83-83.jpg_80x80.jpg" src="//g.alicdn.com/s.gif" alt="使用手机扫描淘宝的二维码"><p>扫一扫淘宝</p></div></li></ul>`
        
        
        
        
        //2.对象数组（不直观，不方便使用）
        html: [{
            //1.div标签 name属性来指定
            name: "div",
            //2.标签上有哪些属性
            attrs: {
                //标签上的属性 class  style
                class: "my_div",
                style: "color:red"
            },
            //3. 子节点：children 要求接收的数据类型和nodes第二种渲染方式的数据类型一致
            children: [{
                name: "p",
                attrs: {},
                //放文本
                children: [{
                    type: "text",
                    text: "hellod MINA"
                }]
            }]
        }]
    },
```



## button按钮

### 1.外观

```js
//常用 
button 标签
    1.外观的属性
    2 size 控制按钮的大小
        2.1 default 默认大小
        2.2 mini 小尺寸
    3.type 用来控制按钮的颜色（只能选择三个中的一个）
        3.1 primary 绿色
        3.2 default 白色（默认）
        3.3 warn    红色 
```

### 2.开发能力

```js
button 开发能力
    open-type:
        1 contact           直接打开 客服对话功能 需要在微信小程序的后台配置
       
        2 share             转发当前的小程序到微信朋友中 （不能把小程序 								分享到 朋友圈）
        
        3 getPhoneNumber    获取当前用户的手机号码信息  （不是企业的小程序账								号，没有权限获取用户的手机号码）
                3.1  需要绑定一个事件  bindgetphonenumber
                3.2  在事件的回调函数中  通过参数（事件对象e）来获取信息
                3.3  获取到的信息  已经被加密过  需要用户自己搭建小程序的后台						服务器进行解析 手机号码  返回到小程序中 就可以看到了
        
        4 getUserInfo       获取当前用户的个人信息
                4.1 需要绑定一个事件  bindgetuserinfo
                4.2 使用方式类似获取手机号
                4.3 可以直接获取到信息  不存在加密字段


        5 launchApp在       小程序当中直接打开app
                5.1 需要先在 app中  通过app的某个链接  打开  小程序
                5.2 在小程序中 再通过 这个功能  重新打开  app

        6 openSetting       打开小程序内置的授权页面  
                6.1 授权页面只会出现用户  曾经点击过的 权限
                
        7 feedback          打开小程序内置的意见反馈页面
                7.1 只能通过真机调试
```



```js
//例
<button open-type="getPhoneNumber" bindgetphonenumber="getphonenumber">getPhoneNumber</button>

```



#### contact 实现流程

> open-type的contact的实现流程
> 	1.将小程序的appid由测试号改为自己的appid
> 	2登录微信小程序官网,添加客服。微信
> 	3.了方便演示，老师自己准备了两个账号
> 		3.1.昔通用户A
> 		3.2客服-微信B
> 	



## icon 字体图标







![image-20200812101504464](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200812101504464.png)



>  小程序中的字体图标
>
> 1. type 图标类型  success|success_no_circle|info|warn|waiting|cancel|download|search|clear
>
> 2. size 图标大小（默认23）
>
> 3. color 图标的颜色



```js
//例
<icon class="" size="60" type="success"  color="#000"></icon>
```



## radio+checkbox

> 单选框，复选框
>
> disabled=“”    选择框禁用
>
> checked=“"    默认选中(引号内有值就行)			这两个属性都适用radio，checkbox，前提引号内有值



disabled="false"

checked="false"

### radio

> 绑定事件： **bindchange**

>  radio 单选框标签
>
>   1 radio 标签 必须要和 父元素 radio-group（是个标签）来使用
>
>   2 value 选中的单选框的值
>
>   3 需要给radio-group 绑定 change事件
>
>   4 也可以设置color 改变需要改变的单选框的颜色

```js
//例：wxml 部分
	<radio-group bindchange="change">
        <radio color="red" value="man">男</radio>
        <radio value="won">女</radio>
        <radio class="" value="" disabled="true" checked="false" 			color=""></radio>
	</radio-group>
	<view>你选中的是:{{gender}}</view>


//js部分
 data: {
        gender: "",
        
    },
    change(e) {
        console.log(e);
        //1.先获取单选框的值
        let gender = e.detail.value;
        // 2. 把值 赋值给 data中的数据
        this.setData({
            //直接写 相当于gender: gender   ES6 写法
            gender
        })
    },
   
```





### checkbox

> 绑定事件：**bindchange**

>  checkbox 复选框标签
>
>   1 checkbox 标签 必须要和 父元素 checkbox-group（是个标签）来使用
>
>   2 value 选中的单选框的值
>
>   3 需要给checkbox-group 绑定 change事件
>
>   4 也可以设置color 改变需要改变的单选框的颜色



```js
//例：wxml
	<checkbox-group bindchange="checkbox">
     	<checkbox class="" value="{{item.value}}"  wx:for="				{{list}}" wx:key="id"   color="">{{item.name}}</checkbox>
	</checkbox-group>
   <view>选中的选项{{checkboxvalue}}</view>
     
//  js
 data: {
        checkboxvalue: [],
        list: [{
            id: "0",
            name: "ZGGO1",
            value: "wx"
        }, {
            id: "1",
            name: "welist",
            value: "wz"
        }, {
            id: "2",
            name: "xxlu",
            value: "wdy"
        }, {
            id: "3",
            name: "Forever",
            value: "wz"
        }]
    },
    checkbox(e) {
        console.log(e.detail.value);
        this.setData({
            checkboxvalue: e.detail.value
        })
    },

```

## wx:request  数据请求

```js
例：
	wx.request({

 		 url: 'https://test.com/getinfo',

 		 success: function(res) {

    		console.log(res)// 服务器回包信息
  }

})
```

## 请求地址的优化

> 当url 接口地址大多数前面是相同是  ，可进行优化

```js
export const request=(params)=>{
    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve,reject)=>{
      wx.request({
            ...params,   //把传入的参数解构出来  ...params   相当于把参数原封不动的写上去
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result);
            },
            fail:(erro)=>{
                reject(erro);
            }
        });
          
    })
}
```



## 小程序不支持超过es6的语法

要使用需要配置

## 用到的ES6语法

### 1.加“”的区别

​	“false”==true	==> ES6中  加了引号就相当于与值等于 true

```js
//例		==>这样写之后就下面三元运算符里的就都认为是true 给全部view添加active 类名了
tabs.forEach((v, i) => {
                    i === index ? v.isActive = true : v.isActive = 'false'
                    console.log(typeof i)
                })

//wxml
 <view class="tabs_item {{item.isActive?'active':''}}"
data-index="{{index}}"
bindtap="hanldeItemTap"
wx:for="{{tabs}}" 
wx:key="id">
        {{item.name}}
        </view>
```

### 2.{ } 的区别

```js
 //{}  
//ES6语法  ==>{ index } = e.currentTarget.dataset  === index=e.currentTarget.dataset.index
// const { index } = e.currentTarget.dataset;

//index=xx 	相当于  {index}=xx.index


//const index= xxx
//和 const {index}=xxx
//根本不是同一个变量

```

### 3.   ..    的使用

```js
export const request=(params)=>{
    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve,reject)=>{
      wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result);
            },
            fail:(erro)=>{
                reject(erro);
            }
        });
          
    })
}
```



### 4.Promise（回调地狱初步解决方法）

> resolve( )和 reject( ) 内的参数代表了 成功或者失败 传递到使用 .then  的两个回调函数内的数据

```js
export const request=(params)=>{
    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve,reject)=>{
      wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result);
            },
            fail:(erro)=>{
                reject(erro);
            }
        });
          
    })
}
```

```js
//使用 
getSwiperList() {
        request({ url: 'home/swiperdata' })
            .then(result => {
                this.setData({
                    swiperList: result.data.message
                })
            })
    }
```







### 5.expost   import

> import    就是为了在js中 引入别的js

```js
export const request=(params)=>{
    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve,reject)=>{
      wx.request({
            ...params,
            url:baseUrl+params.url,
            success:(result)=>{
                resolve(result);
            },
            fail:(erro)=>{
                reject(erro);
            }
        });
          
    })
}
```

```js
import { request } from "../../request/index.js";
```



## 用到的ES7语法

具体async  await使用  查看前面es7  文档

#### 当返回数据没有先后顺序时就没必要使用async await了，用  promise 的.then  就可以了

#### （小程序只支持es6转es5，需要配置，但在有些机型下也会出问题）



### async(解决回调地狱最终方案)

> await 只能在 async 标记的函数内部使用

### 小程序中的使用

1.在小程序的开发I具中，勾选es6转es5语法
2.下载facebook的regenerator库中的regenerator/packages/regenerator-runtime/runtimejs
3.在小程序目录下新建文件夹lib/ runtime/runtime. js，将代码拷贝进去
4.在每一个需要使用async语法的页面js文件中，都引入(不能全局引入),引入语句如下

​	import regeneratorRuntime from'. ./. . / lib/ runtime/ runtime'

例：ES6

```js
getSwiperList() {
        request({ url: 'home/swiperdata' })
            .then(result => {
                this.setData({
                    swiperList: result.data.message
                })
            })
    }
```

ES7

>  执行 const res=await request({url:'home/swiperdata'})  这句时，请求没有回来 不会往下执行

```js
async getSwiperList() {
    const res=await request({url:'home/swiperdata'})
    ==>这个res 等于获取成功之后返回的数据 ==> 就是上面返回的result
     this.setData({
                    swiperList: result.data.message
                })
    }
```















## 父向子传递数据



> 父 ==>相当于是使用组件的页面
>
> 子 ==>相当于是在父页面的组件名和组件全部文件

> type value 两个的值最好是根据传递的数据的不同来填写对应的值   



### 疑问

```js
type value 两个的值最好是根据传递的数据的不同来填写对应的值   

​	但也发现这两个值直接填写 ""  也是可以执行的==> 后期学习完善这部分（前期还是写上）  
```





### 例1 简单的父向子数据传递

1. 使用组件的页面就为父

```js
  "Tabs": "../../components/Tabs/Tabs"	 在父的json 配置了 事件名称和地址
  
```

2.

```js
<Tabs aaa="a123a"></Tabs>	在父的wxml页面 添加组件标签==> aaa 为父向子传递的数据的属性名   “”内的是							   属性值
```

3. 组件的.json文件  

   ```js
   //组件的属性列表
   properties: {}		//原始状态下 
   
   // properties  接收父向子传递的数据
   //接收的是要从父组件中接收的数据
   ```

   

```js
// type  和  value  需要根据数据的的不同而填写对应的 若为数组时==>  type:Array  value:[]
//aaa  是在父页面组件标签内 设置添加的 传递数据的属性名称  ==>需要根据传递属性名称的不同而变化

properties: {

        //要接收的数据的名称
        aaa: {
            //type  要接收的数据的类型
            type: String,
            //value  默认值     默认就是等于在使用组件页面 在组件标签内设置的属性值
            value: ""
        }

    }
```



### 例2  父向子数据传递—导航栏的复用

不复用的话只需要在组件的js文件下的  data 内写数据就可以了



增加复用率	==>步骤基本差不多

1.

```js
<Tabs_father_son tabs="{{tabs}}"></Tabs_father_son>
```

2. 在父的.json下的 data 添加导航栏不同的名称等信息

   ​	不复用的只是在组件自身的.json 文件下的data添加这些

```js
 data: {
        tabs: [{
            id: 0,
            name: "首页",
            isActive: true
        }, {
            id: 1,
            name: "原创",
            isActive: false
        }, {
            id: 2,
            name: "分类",
            isActive: false
        }, {
            id: 3,
            name: "关于",
            isActive: false
        }]
    }
```

3.

```js
子组件js页面
properties: {

        //要接收的数据的名称
        tabs: {
            //type  要接收的数据的类型
            type: Array,
            //value  默认值     默认就是等于在使用组件页面 在组件标签内设置的属性值
            value: []
        }

    }
```



## 子向父传递数据



> 1.子向父传递数据  通过事件的方式传递
>      1.1 在子组件的标签上加入一个 自定义事件
>
> ​	2.一定要在标签内添加自定义属性  例：data-index
>
> ​	3.this.triggerEvent（）

### this.triggerEvent（“1”，“2”）

```js
子向父传递数据的关键：
	1：父组件上 子组件标签内写的 事件 ==》 bind1=“自定义”   就是跟着bind后面的
    2：
```





1 在父页面 的组件标签添加自定义事件

```js
//例
<Tabs_father_son tabs="{{tabs}}" binditemChange="handleItemChange"></Tabs_father_son>

```

2 在子组件的.js文件 添加事件函数,wxml 标签里添加自定义事件

> 点击事件触发的时候
>          //      触发父组件中的自定义事件  同时传递数据给  父组件
>          //      触发代码   this.triggerEvent("父组件自定义事件的名称“，”要传递的参数")
>
> ​		//		这里的data-index  自定义属性也是也是很重要的 也是后面通过事件对象 e 传递给父组件的

```js
 <view class="tabs_item {{item.isActive?'active':''}}" 
            data-index="{{index}}" 
            bindtap="hanldeItemTap" 
            wx:for="{{tabs}}" 
            wx:key="id">
        {{item.name}}
</view>
```



```js
//例
 methods: {
        hanldeItemTap(e) {
         
            
            //  5 点击事件触发的时候
            //      触发父组件中的自定义事件  同时传递数据给  父组件
            //      触发代码   this.triggerEvent("父组件自定义事件的名称，要传递的参数")
            const { index } = e.currentTarget.dataset;
            //5 触发父组件中的自定义事件  同时子组件传递数据给父组件
            this.triggerEvent("itemChange", { index })
        }
    }
```

3  在父页面的.js文件 添加自定义事件函数（该事件不是设置为组件，所以在data同级处添加）



```js
 //自定义事件  用来接收子组件传递的数据
    handleItemChange(e) {
        // console.log(e)
        //接收传递的参数
        const { index } = e.detail;
        let { tabs } = this.data;
        tabs.forEach((v, i) => {
            i === index ? v.isActive = true : v.isActive = false;
            console.log(i)
        })
        this.setData({
            //tabs   ==> tabs:tabs
            tabs
        })
    }
```



### 为什么

为什么需要子向父传递数据呢， 其实不通过子向父传递数据也可以实现导航栏的点击切换样式的操作

，因为复用性，把导航栏的信息写在了父页面.js的data里了，所以通常来说点击变换之后 每个数据的isActive的属性值应该也一起发生变化，但不通过子向父传递数据  父.js的data数据缺不会发生变化（只是把那些数据在子组件的.js的data里存起来了），所以需要通过子向父来传递数据来更新保存点击之后 isActive属性值变化 后的全部最新数据









## slot--插槽

>  slot 标签 其实就是一个占位符  插槽
>
> ​    等到 父组件调用  子组件的时候 再传递 标签过来 这些被传递的标签
>
> ​    就会他替换 slot 插槽的位置



### 案例：点击导航栏显示不同内容

1	组件页面内的布局

```js
<view class="tabs">
    <view class="tabs_title">
        <view class="tabs_item {{item.isActive?'active':''}}" 
				data-index="{{index}}" 
				bindtap="hanldeItemTap" 
				wx:for="{{tabs}}" wx:key="id">
        	{{item.name}}
        </view>      
    </view>


//  slot  看这里就可以了   
	<view class="tabs_content">
   
    <slot></slot>

    </view>
</view>
```



2  在使用组件的页面（父组件）  的子组件标签内填写（不同方式的区别）

```js

<Tabs_father_son tabs="{{tabs}}" binditemChange="handleItemChange">
写法一：view
    <view wx:if="{{tabs[0].isActive}}">0</view>
    <view wx:elif="{{tabs[1].isActive}}">1</view>
    <view wx:elif="{{tabs[2].isActive}}">2</view>
    <view wx:else="{{tabs[3].isActive}}">3</view>
<!-- <view wx:else>3</view>  这个写法也可以，因为后面没有其他的了 -->


写法二：block
    <block wx:if="{{tabs[0].isActive}}">0</block>
    <block wx:elif="{{tabs[1].isActive}}">1</block>
    <block wx:elif="{{tabs[2].isActive}}">2</block>
    <block wx:else="{{tabs[3].isActive}}">3</block>

</Tabs_father_son>
```

写法一：

![image-20200813154426690](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200813154426690.png)



写法二：

![image-20200813154509232](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200813154509232.png)



```js
 data: {
        tabs: [{
            id: 0,
            name: "首页",
            isActive: true
        }, {
            id: 1,
            name: "原创",
            isActive: false
        }, {
            id: 2,
            name: "分类",
            isActive: false
        }, {
            id: 3,
            name: "关于",
            isActive: false
        }]
    }
```



效果

![image-20200813153221063](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200813153221063.png)



![image-20200813153236239](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200813153236239.png)





## 小程序生命周期



### 应用生命周期

> 应用指的是 小程序入口文件 ==> app.js

| 属性           | 类型     | 默认值 | 必填 | 说明                                   |
| -------------- | -------- | ------ | ---- | -------------------------------------- |
| onLaunch       | function |        | 否   | 监听小程序初始化（启动时）             |
| onShow         | function |        | 否   | 监听小程序启动或切前台（被用户看到时） |
| onHide         | function |        | 否   | 监听小程序切后台（）                   |
| onError        | function |        | 否   | 错误监听函数                           |
| onPageNotFound | function |        | 否   | 页面不存在监听函数                     |







```js
//1应用第一次启动的就会触发的事件
onLaunch() {
    // 在应用第次启动的时候 获取用户的个人信息
    console. log(”onLaunch" );
},
// 2应用被用户看到
onShow(){
    //对应用的数据或者页面效果重置
    console. log(" onShow");
},
// 3应用被隐藏了
onHide( ){ 
    // 暂停或者 清除定时器
    console.log( "Hide" );
},
// 4应用的代码发生了报错的时候就公触发
onError ( err){
    //在应用发生代码报错的时候，收集用户的错误信息，通过异步请求将错误的信息发送后台去
    console . log( "onError");
    console.log( err) ;  ==>  打印的是报错信息
}

//5页面找不到就会触发
// 应用第次启动的时候，如果找不到第个入I页面才公触发
onPageNotFound( ){
    //如果页面不存在了通过js的方式来重新跳转页面重新跳到第二个首页
    //不能跳到tabbar页面  导航组件类似
    Wx.navigateTo ({
    url：'';
});
    // console . log (”onPageNotFound");
}

```







### 页面生命周期







| 属性              | 类型     | 说明                                                         |
| ----------------- | -------- | ------------------------------------------------------------ |
| data              | Object   | 页面的初始数据（就是js里的data）                             |
| onLoad            | function | 生命周期回调一监听页面加载（一**般用来发送异步请求来初始化页面数据**） |
| onShow            | function | 生命周期回调一监听页面显示                                   |
| onReady           | function | 生命周期回调一监听页面初次渲染完成                           |
| onHide            | function | 生命周期回调一监听页面隐臧                                   |
| onUnload          | function | 生命周期回调一监听页面卸载                                   |
| onPullDownRefresh | function | 监听用户下拉动作(**可用于页面数据或效果的 重新 刷新--常用**) |
| onReachBottom     | function | 页面上拉触底事件的处理函数（**页面高度需要足够，有滚动才行**）==>(**一般用于上拉加载下一页数据--常用**) |
| onShareAppMessage | function | 用户点击右上角转发                                           |
| onPageScroll      | function | 页面滚动触发事件的处理函数（页面滚动就可以触发）             |
| [onResize]()      | function | 页面尺寸改变时触发，详见响应显示区域变化（手机横竖屏切换是触发） |
| onTabltemTap      | function | 当前是tab 页时，点击tab时触发（只存在tabBar的页面上，且点击的tabbar是页面本身时才会触发） |

#### 横屏

onResize  ==>  在app.json文件添加  pageorientation": ”auto"   就可以让全部页面实现横竖屏切换

​							如果只想要部分页面可以切换，则就在要切换的页面.json文件添加这句代码啊



## 本地存储



### web中的本地存储和 小程序中的本地存储的区别

####        1 写代码方式

​         	web:  存值：localStorage.setItem("key","vaule")  获取值：localStorage.getItem("key")



​         	小程序：  存值： wx.setStorageSync("key","value")

​                	 			 例：wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })

​              				获取：wx.getStorageSync('key')

####        2 存的时候 有没有做类型转换

​         web：  不管存入的是什么类型的数据，最终都会先调用一下 toString（），把数据变成字符串 再存入进去

​         小程序： 不存在 类型转换的操作 存什么类型的数据进去 ，获取的时候就是什么类型

 





## 上拉加载更多，下拉刷新



### 下拉刷新

```js
   0下拉刷新页面	（生命周期函数  onPullDownRefresh: function() ）

​		1触发下拉刷新事件	需要在页面的json文件中开启一个配置项enablePullDownRefresh

​		配置好之后，还需要在 onPullDownRefresh: function(）的生命周期函数内添加逻辑代码

​		2重置数据数组
​		3重置页码设置为1

​		4重新发送请求

​		5 数据请求回来 下拉刷新等待效果还在显示，需要手动关闭 等待效果

​				 wx.stopPullDownRefresh();   在请求数据的方法最后添加就可以了
```



### 上拉加载更多

```js
   用户上滑页面滚动条触底开始加载下一页数据	（生命周期函数  onReachBottom: function()）
​		1找到滚动条触底事件 微信小程序官方开发文档寻找
​		2判断还有没有 下一页数据
​				2.1获取到总页数 只有总条数
​						总页数= Math.ceil(总条数 /页容量pagesize)
​						总页数	=Math.ceil(23/10)=3
​				2.2获取到当前的页码	pagenum
​				2.3判断一下当前的页码是否大于等于总页数
​					表示没有下一页数据
​		3假如没有下一页数据弹出一个提示
​		4假如还有下一页数据来加载下一页数据
​				4.1当前的页码++
​				4.2重新发送请求
​				4.3数据请求回来	要对data中的数组进行拼接而不是全部替换! ! !
```

## 组件

### 加载和刷新时的==>加载中弹窗组件

> 一般写在 封装的请求数据方法里，这样就方便在每一个请求数据的方法内都存在了

```js
  //显示加载中
    wx.showLoading({
        title: '加载中',
        // mask  蒙版  ===> 看到加载中的窗口后用户就无法进行其他的操作
        mask: true
    });
```

```js
//关闭弹窗 
wx.hideLoading()
```

#### 例1：只有一个请求，请求数据时

```js
export const request = (params) => {
    //显示加载中
    wx.showLoading({
        title: '加载中',
        // mask  蒙版  ===> 看到加载中的窗口后用户就无法进行其他的操作
        mask: true
    });


    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (erro) => {
                reject(erro);
            },
            //无论成功或者失败都会执行的函数 自带的
            complete: () => {
                wx.hideLoading()
            }
        });

    })

}
```

#### 例2：多个请求同时请求数据时

> 多个请求时，需要注意的是 控制到最后一个的时候再 关闭  弹窗
>
> ​			多个请求触发加载中弹窗不会影响报错

```js
 		this.getSwiperList();
        this.getCateList();
        this.floorList();
```



可设置一个参数，如下ajaxTimes 初始值为  0

每调用一次来请求数据，就+1   ===> 如该例是三个  ===>所以最后ajaxTimes=3

只要在数据请求成功之后的地方 添加 ===> ajaxTimes--     ===> 然后判断  ajaxTimes -- 完 是否 =0

= 0  时就说明是最后一个请求完了  ===> 最后一个请求完就可以关闭了

```js
//同时发送异步代码的参数==> 设置默认为 0
let ajaxTimes = 0;
export const request = (params) => {
    //调用一次就+1
    ajaxTimes++;

    //显示加载中
    wx.showLoading({
        title: '加载中',
        // mask  蒙版  ===> 看到加载中的窗口后用户就无法进行其他的操作
        mask: true
    });


    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (erro) => {
                reject(erro);
            },
            //无论成功或者失败都会执行的函数 自带的
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    //关闭正在等待的图标
                    wx.hideLoading()
                }

            }
        });

    })

}
```





### 没有更多数据时的提示组件

```js
 wx.showToast({
                title: '没有更多数据了',
            })
```



## 花里胡哨的console.log（）

```js
        console.log('%c' + "刷新", "color:red; font-size:100px; background-image:linear-gradient(to right,#0094ff,pink )")

```







## 项目

| 页面名称     | 名称         |
| ------------ | ------------ |
| 首页         | index        |
| 分类页面     | category     |
| 商品列表页面 | goods_ list  |
| 商品详情页面 | goos_ detail |
| 则物车页面   | cart         |
| 收藏页面     | collect      |
| 订单页面     | order        |
| 搜索页面     | search       |
| 个人中心页面 | user         |
| 意见反馈页面 | feedback     |
| 登录页面     | login        |
| 授权页面     | auth         |
| 结算页面     | pay          |







## 后期

小程序的第三方框架（因为原生的经常更新迭代（原生版本不稳定），更新之后可能会出现问题，所以需要使用第三方框架（稳定））

1.腾讯 wepy			语法类似vue

2.美团 mpvue			语法类似vue

3.京东  taro			语法类似react

4.滴滴  chameleon

5.uni.app			语法类似vue

6.原生框架MINA（先熟系原生的怎么用，后期在使用第三方框架）



























能记不住就多忘点

# 	Git

只能跟踪文本文件的改动，比如txt文件，网页，所有程序的代码等

版本控制系统可以告诉你每次的改动，但是图片，视频这些二进制文件，虽能也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是知道图片从1kb变成2kb，但是到底改了啥，版本控制也不知道



![](https://img.mukewang.com/59c31e4400013bc911720340.png)

​         

​		

## 	方法语法	

​	以下readme.txt  作为示例演示	

| git  --version                                  | 查看当前git版本                                              |
| ----------------------------------------------- | ------------------------------------------------------------ |
| mkdir  文件名                                   | 创建 该文件名版本库                                          |
| pwd                                             | 查看当前路径                                                 |
| git init                                        | 把这个目录（当前进入的文件目录）变成git可以管理的仓库        |
| git add readme.txt（txt是文件名，这里作为例子） | 将readme.txt添加到暂存区                                     |
| git  add  .                                     | .   指的是文件夹下全部文件                                   |
| git  commit                                     | 告诉git  把文件提交到仓库                                    |
| git  commit   -m  "readme.txt提交"              | 提交注释                                                     |
| git   status                                    | 查看是否还有文件未提交（更改了未提交也算）                   |
| 有                                              | modified：文件名.后缀                                        |
| git  diff  readme.txt                           | 查看readme.txt文件两次提交那里更改了（还未添加到缓存区才能看到区别） |
|                                                 | 红色为更改前，绿色我更改后内容                               |
| git log                                         | 查询修改次数，修改时间，每次提交后的版本号，提交时的注释     |
| git reset --hard HEAD^                          | 版本回退，一个^  就是代表回退一个版本，^^两个就是回退两个版本，以此叠加 |
| git reset --hard HEAD~1                         | 1就代表回退一个版本，数字几就回退几个                        |
| cat readme.txt(例)                              | 查看文件内容                                                 |
| git  reflog                                     | 查看历史版本记录（无论回退过与否，无论git窗口关闭与否）      |
| git reset --hard  版本号                        | 通过git reflog 查询到的版本号 ，来回到如何版本号时的内容与状态 |
| rm  b.txt                                       | 直接从版本库删除                                             |
|                                                 |                                                              |
|                                                 |                                                              |





## 提交步骤

> 第一步：是使用 git add 把文件添加进去，实际上就是把文件添加到暂存区。
>
> 第二步：使用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支上。



## 工作区与暂存区的区别



> 工作区：就是你在电脑上看到的目录，比如目录下testgit里的文件(.git隐藏目录版本库除外)。或者以后需要再新建的目录文件等等都属于工作区范畴。
>
> 版本库(Repository)：工作区有一个隐藏目录.git,这个不属于工作区，这是版本库。其中版本库里面存了很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向master的一个指针HEAD。





## 1.创建版本库与添加到暂存区，仓库

### 例：



如何操作？

一：创建版本库。

什么是版本库？版本库又名仓库，英文名repository,你可以简单的理解一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改，删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻还可以将文件”还原”。

所以创建一个版本库也非常简单，如下我是D盘 –> www下 目录下新建一个testgit版本库。

![图片描述](https://img.mukewang.com/59c1d1060001909005780268.png)
pwd 命令是用于显示当前的目录。

1. 通过命令 git init 把这个目录变成git可以管理的仓库，如下：

   ![图片描述](https://img.mukewang.com/59c1d12b0001b08305270077.png)

   这时候你当前testgit目录下会多了一个.git的目录，这个目录是Git来跟踪管理版本的，没事千万不要手动乱改这个目录里面的文件，否则，会把git仓库给破坏了。如下：

   ![图片描述](https://img.mukewang.com/59c1d143000112df06120173.png)

   1. 把文件添加到版本库中。

      首先要明确下，所有的版本控制系统，只能跟踪文本文件的改动，比如txt文件，网页，所有程序的代码等，Git也不列外，版本控制系统可以告诉你每次的改动，但是图片，视频这些二进制文件，虽能也能由版本控制系统管理，但没法跟踪文件的变化，只能把二进制文件每次改动串起来，也就是知道图片从1kb变成2kb，但是到底改了啥，版本控制也不知道。

   下面先看下demo如下演示：

   我在版本库testgit目录下新建一个记事本文件 readme.txt 内容如下：11111111

   第一步：使用命令 git add readme.txt添加到暂存区里面去。如下：
   ![图片描述](https://img.mukewang.com/59c1d2080001e4bb04490080.png)
   如果和上面一样，没有任何提示，说明已经添加成功了。

   第二步：用命令 git commit告诉Git，把文件提交到仓库。
   ![图片描述](https://img.mukewang.com/59c1d2200001f05b04930121.png)
   现在我们已经提交了一个readme.txt文件了，我们下面可以通过命令git status来查看是否还有文件未提交，如下：
   ![图片描述](https://img.mukewang.com/59c1d2340001a87904690107.png)
   说明没有任何文件未提交，但是我现在继续来改下readme.txt内容，比如我在下面添加一行2222222222内容，继续使用git status来查看下结果，如下：
   ![图片描述](https://img.mukewang.com/59c1d2500001634606170171.png)
   上面的命令告诉我们 readme.txt文件已被修改，但是未被提交的修改。

接下来我想看下readme.txt文件到底改了什么内容，如何查看呢？可以使用如下命令：

git diff readme.txt 如下：
![图片描述](https://img.mukewang.com/59c1d2cb00010a0304960202.png)
如上可以看到，readme.txt文件内容从一行11111111改成 二行 添加了一行22222222内容。

知道了对readme.txt文件做了什么修改后，我们可以放心的提交到仓库了，提交修改和提交文件是一样的2步(第一步是git add 第二步是：git commit)。

如下：
![图片描述](https://img.mukewang.com/59c1d2ff00015a9606180342.png)



## 2.版本回退

> 1.
>
> git reset --hard HEAD^    几个^就退回几次
>
> git reset --hard HEAD~退回次数
>
> 2.
>
> git log  查询每次修改的注释，时间，版本号等
>
> git reflog	只显示版本号（查询版本号）
>
> git reset --hard  版本号			===>版本号是多少就退回至什么版本

版本回退：
如上，我们已经学会了修改文件，现在我继续对readme.txt文件进行修改，再增加一行

内容为33333333333333.继续执行命令如下：

![图片描述](https://img.mukewang.com/59c1d32b00012ba604570139.png)
现在我已经对readme.txt文件做了三次修改了，那么我现在想查看下历史记录，如何查呢？我们现在可以使用命令 git log 演示如下所示：
![图片描述](https://img.mukewang.com/59c1d34e0001a1ac06050304.png)
git log命令显示从最近到最远的显示日志，我们可以看到最近三次提交，最近的一次是,增加内容为333333.上一次是添加内容222222，第一次默认是 111111.如果嫌上面显示的信息太多的话，我们可以使用命令 git log –pretty=oneline 演示如下：
![图片描述](https://img.mukewang.com/59c1d3fc00013ad206040097.png)
现在我想使用版本回退操作，我想把当前的版本回退到上一个版本，要使用什么命令呢？可以使用如下2种命令，第一种是：git reset --hard HEAD^ 那么如果要回退到上上个版本只需把HEAD^ 改成 HEAD^^ 以此类推。那如果要回退到前100个版本的话，使用上面的方法肯定不方便，我们可以使用下面的简便命令操作：git reset --hard HEAD~100 即可。未回退之前的readme.txt内容如下：
![图片描述](https://img.mukewang.com/59c1d4140001a0c404490165.png)
如果想回退到上一个版本的命令如下操作：

![图片描述](https://img.mukewang.com/59c1d429000199fc04610105.png)

再来查看下 readme.txt内容如下：通过命令cat readme.txt查看
![图片描述](https://img.mukewang.com/59c1d4470001fcdc04360085.png)

可以看到，内容已经回退到上一个版本了。我们可以继续使用git log 来查看下历史记录信息，如下：
![图片描述](https://img.mukewang.com/59c1d45300012d9604800219.png)

我们看到 增加333333 内容我们没有看到了，但是现在我想回退到最新的版本，如：有333333的内容要如何恢复呢？我们可以通过版本号回退，使用命令方法如下：

git reset --hard 版本号 ，但是现在的问题假如我已经关掉过一次命令行或者333内容的版本号我并不知道呢？要如何知道增加3333内容的版本号呢？可以通过如下命令即可获取到版本号：git reflog 演示如下：
![图片描述](https://img.mukewang.com/59c1d51a0001d5fc05100122.png)

通过上面的显示我们可以知道，增加内容3333的版本号是 6fcfc89.我们现在可以命令

git reset --hard 6fcfc89来恢复了。演示如下：
![图片描述](https://img.mukewang.com/59c1d53a0001b8b305050153.png)

可以看到 目前已经是最新的版本了。



## 3.Git撤销修改和删除文件操作



### 撤销修改

> 1.若已经添加到暂存区则无法撤销，只能通过版本退回的方式撤销修改
>
> 2.若未添加到暂存区，则==>git checkout  -- readme.txt   ==> --  是一定要的，没有就会变成创建分支（readme.txt为示例）



比如我现在在readme.txt文件里面增加一行 内容为555555555555，我们先通过命令查看如下：
![图片描述](https://img.mukewang.com/59c1d5e40001806803930139.png)
在我未提交之前，我发现添加5555555555555内容有误，所以我得马上恢复以前的版本，现在我可以有如下几种方法可以做修改：

第一：如果我知道要删掉那些内容的话，直接手动更改去掉那些需要的文件，然后add添加到暂存区，最后commit掉。

第二：我可以按以前的方法直接恢复到上一个版本。使用 git reset --hard HEAD^

但是现在我不想使用上面的2种方法，我想直接想使用撤销命令该如何操作呢？首先在做撤销之前，我们可以先用 git status 查看下当前的状态。如下所示：

![图片描述](https://img.mukewang.com/59c1d5fa0001b07806400168.png)

可以发现，Git会告诉你，git checkout -- file 可以丢弃工作区的修改，如下命令：
git checkout -- readme.txt,如下所示：

![图片描述](https://img.mukewang.com/59c1d6390001419705210140.png)

命令 git checkout --readme.txt 意思就是，把readme.txt文件在工作区做的修改全部撤销，这里有2种情况，如下：

1.readme.txt自动修改后，还没有放到暂存区，使用 撤销修改就回到和版本库一模一样的状态。
2.另外一种是readme.txt已经放入暂存区了，接着又作了修改，撤销修改就回到添加暂存区后的状态。
对于第二种情况，我想我们继续做demo来看下，假如现在我对readme.txt添加一行 内容为6666666666666，我git add 增加到暂存区后，接着添加内容7777777，我想通过撤销命令让其回到暂存区后的状态。如下所示：

![图片描述](https://img.mukewang.com/59c1d6ca0001782f06160482.png)

注意：命令git checkout -- readme.txt 中的 -- 很重要，如果没有 -- 的话，那么命令变成创建分支了。

### 删除文件

> rm  b.txt     (b.txt为示例)
>
> 删除后 通过  git status  来查看
>
> commit 之前  都是可以恢复删除的文件的 ===>    git  checkout  --  b.txt



假如我现在版本库testgit目录添加一个文件b.txt,然后提交。如下：
![图片描述](https://img.mukewang.com/59c1d6de0001a31606390392.png)

如上：一般情况下，可以直接在文件目录中把文件删了，或者使用如上rm命令：rm b.txt ，如果我想彻底从版本库中删掉了此文件的话，可以再执行commit命令 提交掉，现在目录是这样的，

![图片描述](https://img.mukewang.com/59c1d78200017e8f07030192.png)

只要没有commit之前，如果我想在版本库中恢复此文件如何操作呢？

可以使用如下命令 git checkout -- b.txt，如下所示：

![图片描述](https://img.mukewang.com/59c1d7980001368e05570244.png)

再来看看我们testgit目录，添加了3个文件了。如下所示：

![图片描述](https://img.mukewang.com/59c1d7b70001308907550258.png)



## 分支

> 分支

功能分支-->开发分支-->主分支





切换分支   			git  checkout  分支名

查看分支			   git  branch

创建分支				git  branch   分支名

合并分支				git   merge  被合并的分支	（只是合并了分支的文件，分支依然可以继续使用）

删除分支				git    branch   -d   分支名称		（分支被合并后才允许删除，且需要不能在要删除																							的分支进行删除操作   -d 换成 -D强制删除）

修改存储				git stash		（在不想提交时使用，这样也不会在切换分支是将文件带到其他分支）

恢复修改				git  stash pop   （将存储的修改（文件）重新恢复） 





















## 提交到GitHub









![image-20200903112742607](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200903112742607.png)

![](https://s1.ax1x.com/2020/09/11/wYO68P.png)





### 基础方式：

git add  文件名

git  commit  -m  注释

git  push  github仓库地址   分支名



```js
git add demo.txt

git commit -m 第二次提交

git push https://github.com/Fahaxikixixi/FirstTry_demo2.git master

```

### 优化方式

因为github仓库地址太长了，我们可以用一个别名代替 这个地址

1.

git  remote  add  别名  仓库地址

```git
别名一般 写成 origin   自定义也可以
例 ： 
git  remote  add  origin  https://github.com/Fahaxikixixi/FirstTry_demo2.git 
```

remote（远端）



2.

向远端仓库推送时

```js
git push  仓库地址别名  分支
git  push  origin  master
```

优化

```js
git  push -u origin  master

添加-u  之后就会记住 远程仓库地址  和 提交文件的分支
这样第二次提交  ==>  git  push   就可以直接提交了
```



## GitHub远程仓库克隆到本地仓库

> 克隆远端数据仓库到本地 ： git   clone   仓库地址

```js
//例：
git clone https://github.com/Fahaxikixixi/FirstTry_demo2.git
```





## 拉取远程仓库中的最新版本



> git pull  远程仓库地址   分支名称



## pull   clone 的区别

```js
git pull  拉取远程仓库最新的版本，最新版本是和本地仓库版本进行比较的，所以pull 是在已经有本地仓				库的基础上进行的
git  clone  是完全克隆远程仓库，是在没有本地仓库的情况下进行的
```

```js
若远程仓库的版本高于本地的版本，此时本地时不能向远程仓库提交的==>本地必须先拉取远程仓库内容到本地然后在向远程仓库提交
```





## A，B，GitHub远程仓库，三者间的提交与克隆

> A,B  指的是不懂用户



```js
若A 创建了GitHub远程仓库

A要提交到GitHub远程仓库时，就直接进行上面  提交到GitHub的过程

B要将GitHub远程仓库数据克隆到B本地仓库，git clone GitHub远程仓库地址  就可以了

若B要改动 A的GitHub远程仓库 项目的话，就要A 在该仓库的设置中邀请B一起协作，B同意之后就获得了操作A对应仓库发操作权限，B才能获得修改改动对应A仓库内容
```



## 解决冲突

```js
冲突指的是：在多人同时开发一个项目时，如果两人同时修改了同一个文件的同一个地方，就会发生冲突
（先推送的人可以推送成功，后推送的会失败==>相当于先提交的那个人提交之后远程仓库更新了一个版本，而后推送的没有这个版本，所以就是后推送的版本低于远程仓库版本）
```



 ```js
解决：后提交的先将先提交到远程仓库的版本更新到本地，然后打开文件，就可以看见先提交的和后提交的区域和内容，将文件内注释修改区域的代码<<<<HEAD  ======  >>>>>>删除，保留前后修改的代码后重新提交到远程仓库


例：
<<<<<HEAD
先提交的修改
======
后提交的修改
>>>>>>
 ```



## ssh免密登录

```js
c盘==>用户==>本计算机用户名文件夹==>.ssh==>id_rsa.pub
id_rsa    		私钥	存在本地
id_rsa.pub		公钥   需要放在github服务器
私钥和公钥配对后才能连接
```



1.$ssh-keygen -t rsa -C 'youremail@xxx.com'    ‘  ’ ：内的地址是github对应仓库的ssh地址，然后在git弹出的一直回车就可以，在去git弹出地址找到id_rsa.pub，复制内容在github新建一个sshkey直接粘贴就可以了（该方式获得的是带github用户名仓库名的）

or

1.ssh-keygen  这样也可以获取到公钥（该方式获取的是带计算机用户名的）

2   git    remote    add    origin_ssh   git@github.com:Fahaxikixixi/Note.git

​		git    remote  add    github仓库ssh地址别名     github仓库ssh地址

3   git  push  origin_ssh master

​	 git  push   github仓库ssh地址别名   分支名





![image-20200903165031341](https://s1.ax1x.com/2020/09/11/wYO68P.png)



### 配置git和设置秘钥



因为本地要和远程仓库链接,我们就要生成一个秘钥:

```
$ssh-keygen -t rsa -C 'youremail@xxx.com'
```

回车之后显示:

[![设置秘钥](https://www.code7s.com/1/ssh.jpg)](https://www.code7s.com/1/ssh.jpg)

红框显示的就是秘钥存放的地址,在我的电脑打开这个地址,找到`id_rsa.pub`文件,用记事本打开把里面的内容复制.



然后打开github→右上角头像→setting→SSH and GPGkeys

然后创建一个ssh keys,把之前的秘钥粘贴上去保存.



查看是否连接成功:

```
$ssh -T git@github.com
```

提示 Hi username!…… 就表示成功了!

### 



## 总结：

使用ssh 免密登录会方便很多，比较容易出现问题的就是 github远程仓库  和 本地仓库间的版本问题：



若github仓库本来之前上传过（例：有a,b 两个文件的仓库TT），现在想在其他电脑上有了c文件，想把c文件上传到 有a，b文件的仓库，则需要重新配置（指的是ssh免密登录，若http方式就不需要配置），配置好github的公钥 后，先将TT仓库      git clone  到本地，在将c文件添加  01.git  add  ， 

02.git  commit  ，

03.git  remote  add 别名  TT仓库地址（这里指ssh地址）， 

04. git push  别名  分支名  ！！ 这样就可以在TT仓库看见a,b,c 三个文件了   ===>不先clone  克隆TT仓库就提交，会报错，因为只有一个c文件提交相当于TT仓库版本和现在本地版本对不上的错误





# npm



win+r ==>cmd

npm -v  查看版本

npm install   npm@latest -g   更新   -g  安装到全局  npm@  后面可以加上版本号







# VUE

## MVVM

1.M  （model）

2.V  （view）

3.VM （view-model）



![image-20200908094630838](https://s1.ax1x.com/2020/09/11/wYX98x.png)



## 插值表达式{{}}

v-cloak 



## 分支循环v-if v-show



### 1.分支结构

* v-if
* v-else 
* v-else-if
* v-show

### 2.v-if与v-show的区别

* v- if控制元素是否渲染到页面（相当于操作DOM，消耗大）
* v- show控制元素是否显示(已经渲染到了页面，多了一个display：none 来控制显示)



```js
<div id="app">
         <!--- v-if  -->
          <!--- v-if 一些不显示的，在html中也没有该结构， v-if 相当于是操纵dom   -->
        <div v-if='score>=90'>优秀</div>
        <div v-else-if='score<90&&score>=80'>良好</div>
        <div v-else-if='score<80&&score>=60'>一般</div>
        <div v-else>不及格</div>

        <!--- v-show  -->
        <!--在不显示时，html结构还在页面，只是多了一个display：none  属性===>原理控制元素是否显示-->
        <div v-show='flag'>测试v-show</div>
        <button @click='handle'>v-show</button>
    </div>

</body>
<script>
    new Vue({
        el: '#app',
        data: {
            score: 99,
            flag: true
        },
        methods: {
            handle() {
                this.flag = !this.flag
            }

        }
    })
</script>
```



### 循环结构v-for

#### v-for遍历数组

```js
<1i v-foro'item in list'>llitem}}</1i>

数组有两个参数，1.数组中的每一项  2.数组每一项的索引
<1i v-for=' (item, index) in list'>{{item}} + '---' +{{index}}</li>
```



* **key的作用 :帮助Vue区分不同的元素,从而提高性能**

```js
'' 内的一般使用数据内的id 或者index 唯一的

<1i :key='item.id' v-for=' (item, index) in list'>llitem}} + '---' {{index}}</1i>
```



```js
//v-for         
//例：数组
         <ul>
            <li v-for='(item,index) in menuLists'>
                <h5>{{item.id}}</h5>
                <h3>{{item.name}}</h3>
                <em>{{item.age}}</em>
                <h5>{{index}}</h5>
            </li>
         </ul>

//例：对象
         <ul>
            <li v-for='(value,key) in person'>
               {{key}}==={{value}}
            </li>
        </ul>

//

 var data = new Vue({
        el: '#datas',
        data: () => {
            return {          
                menuLists: [{
                    id: 1,
                    name: '呜呜呜',
                    age: 18
                }, {
                    id: 2,
                    name: '嘻嘻嘻',
                    age: 19
                }, {
                    id: 3,
                    name: '哈哈哈',
                    age: 20
                }],
                person: {
                    name: 'P_looo',
                    age: 20,
                    duck: '不必'
                }
            }
        }
```



#### 遍历对象

```js
对象有三个参数，1.对象中的每一项的值 2.属性名  3.对象每一项的索引 
<1i v-for=' (value,key,index) in list'>{{item}} + '---' +{{index}}</li>
```



* #### v-for  与 v-if 连用

```js
<div v-if='v==13' V-for='(v,k,i) in obj'>{{v +'---'+k+'---'+ i}}</div>

```



```js
 <div id="app">
     //  只有v  ==2 的才会显示出来
        <div :key='v' v-if='v==2' v-for='(item,index,v) in person'>{{item}}---{{index}}---{{v}}</div>
    </div>

</body>
<script>
    var vue1 = new Vue({
        el: '#app',
        data: {
            person: {
                val1: {
                    age: 18,
                    name: '21Y'
                },
                val2: {
                    age: 19,
                    name: 'P_looo'
                },
                val3: {
                    age: 20,
                    name: 'SOGOOO'
                }
            }
        }
       
    })
```







## 数据绑定指令

* v-text  填充纯文本

  相比插值表达式更加简洁，无闪动问题

* v-html 填充HTML片段

  1.存在安全问题

  2.访问本网站内部数据可以使用，来自第三方的数据不可以用

* v-pre 填充原始信息

  ​	显示原始信息，跳过编译过程（分析编译过程，直接显示数据填充的写法，例：{{messge}}）



## 双向数据绑定v-model

### v-model    只能用在表单元素中

> input（radio,	text,	address,	email） 	 select  	  checkbox  	textarea	



```js
v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
```





`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。



### 底层原理(input text举例)

```js
//原理解析 简洁方式
<input v-bind:value="msg" v-on:input="msg=$event.target.value ">

```

```js

//原理解析
<div id="app">
      
        <input type="text" @input='handle1' :value='msg'>
        <span>{{msg}}</span>
</div>


<script>
    var vue1 = new Vue({
        el: '#app',
        data: {
            msg: ''
        },
        methods: {       
            handle1(event) {
                this.msg = event.target.value;
            }
        }
    })
```





## 事件绑定v-on

> v-on





```js
		<button v-on:click='num++'>+</button>
  //      <!---事件绑定简写--->
		<button @click='num--'>-</button>

//<!---事件函数的调用方式-->
        //<!---直接调用-->
        <button v-on:click='fn'>+</button>
        //<!---调用函数--->
        <button @click='fn1("q",$event)'>-</button>

```



### 事件函数内容需要写在 methods内

> 函数内的需要使用 data内的数据，需要在前面加一个  **this**

```js
 var vm = new Vue({
        el: "#app",
        data: {
            num: 3
        },
        methods: {
            fn: function() {
                this.num++;
                // console.log(this);
            },
            fn1(e, a) {
                console.log(e);
                console.log(a);
                return this.num--;
            }
        }
    })
```



###  事件对象与传参



#### 事件对象

>  固定写法  $event



```js
 //1.  直接调用的方式 ,默认传递事件对象，在函数内的第一个参数默认就是事件对象
//  <!---直接调用-->
        <button v-on:click='fn'>+</button>

//2.如果是改方法调用，则事件对象必须作为最后一个参数进行传递，并且事件对象名称必须是$event
//        <!---调用函数--->
<button @click='fn1($event)'>-</button>

var vm = new Vue({
        el: "#app",
        data: {
            num: 3
        },
        methods: {  
              fn: function(s) {
                this.num++;
                console.log(s);
            },
            fn1(e) {
                console.log(e);
                return this.num--;
            }
        }
    })
```



### 传参

> 传参只能在调用函数的方式内进行传参



```js
//<!---调用函数--->
        <button @click='fn1("q",$event)'>-</button>
var vm = new Vue({
        el: "#app",
        data: {
            num: 3
        },
        methods: {
            fn1(e, a) {
                console.log(e);//q
                console.log(a);
                return this.num--;
            }
        }
    })
```



## 事件修饰符

> 语法: @事件名.修饰符="事件处理函数" 

* .stop 阻止冒泡

```js
 
//方式一
<div id="app">
        <div @click='box' id="box">box
            <div @click.stop='box1' id="box1">box1  <!--阻止冒泡-->
                <div @click="box2" id="box2">box2</div>
            </div>
        </div>
    </div>

//方式二  和js的一样，通过在函数内使用事件对象， （例：事件对象为event）

	event.stopPropagation（）
```



*  .prevent  阻止默认行为

```js
//方式一
<a v-on:click.prevent="handle"  href="www.baidu.com">跳转</a>

//方式二  在事件函数内，操作事件对象  （例：事件对象为event）
	event.preventDefault（）

```

* .capture 捕获 
* .self 事件源为自身  
* .once 只执行一次

```js
//也可以串联一起写
<a v-on:click.stop.prevent="doThat"></a>
```





##  按键修饰符:

> 键盘按相应键时触发
>
>  .enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up  .down  .left  .right
>
>  其它的键可以通过 .按键值 的方式使用
>
>  自定义按键修饰符: Vue.config.keyCodes.按键名= 按键值

 

*  .enter 回车键

  

*  .delete 删除键

  

```js
<div id="app">
        <form action="">
            <div>用户名：
                <input type="text" @keyup.delete="handle1" v-model="uname">
            </div>
            <div>密码：
                <input type="text" @keyup.enter="handle" v-model="pwd">
            </div>
            <div>
                <input type="button" @click.enter="handle" value="提交">
            </div>
        </form>
    </div>
</body>
<script>
    new Vue({
        el: "#app",
        data: {
            uname: '',
            pwd: ''
        },
        methods: {
            handle() {
                //按回车键
                console.log(this.uname + '--' + this.pwd);
            },
            handle1() {
                //按delete 
                this.uname = null;
            }
        }
    })
```





### 自定义按键修饰符

自定义按键修饰符: Vue.config.keyCodes.按键名= 按键值

```js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```



```js
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase 不可用
  mediaPlayPause: 179,
  // 取而代之的是 kebab-case 且用双引号括起来
  "media-play-pause": 179,
  up: [38, 87]
}

<input type="text" @keyup.f1="method">
```



```js
//官方方式
<div id="app">
	<input type="text" @keyup.f1='handle3' v-model="us">
</div>
</body>
<script>
    Vue.config.keyCodes.f1 = 83;
    new Vue({
        el: "#app",
        data: {
            us: ''
        },
        methods: {
            handle3(e) {
                //按 s 
                console.log(83);

            }
        }
    })
```





```js
//例  方式二
 <div id="app">
      <input type="text" @keyup='handle2'>
 	<input type="text" @keyup.83='handle3' v-model="us">
 </div>
     new Vue({
        el: "#app",
        data: {
  
            us: ''
        },
        methods: {
            handle2(e) {
                //按下按键，打印对应按键值
                console.log(e.keyCode);
            },
            handle3(e) {
                //按 s  ==>s 的按键码为 82
                console.log(83);

            }
        }
    })
```





## 属性绑定 v-bind



* v-bind 指令用法

```js
<a v-bind:href='url'>跳转</a>
```

* 缩写形式

````js
<a :href='url'>跳转</a>
````



```js
 <div id="app">
        <a :href='url'>跳转</a>
        <button @click="handle">切换</button>
    </div>

</body>
<script>
    var vue1 = new Vue({
        el: '#app',
        data: {
            url: 'https://www.baidu.com'

        },
        methods: {
            handle() {
                //修改URL地址
                this.url = 'https://www.csdn.net/'
            }
        }
    })
```



## 样式绑定v-bind



### 1.class样式处理



* ####  对象语法

```js
<div v-bind:class="{ active: isActive }"></div>  //一般类名对应的属性用is 开头

```

```js

//例

//css
  .active {
            border: 2px solid purple;
            width: 100px;
            height: 100px;
        }
        
        .error {
            background-color: royalblue;
            width: 100px;
            height: 100px;
        }

//html

<div id="app">
    //控制多个和一个属性
    	<div :class="{active:isActive}"></div>
        <div :class="{active:isActive,error:isError}"></div>
        <button @click="handle">切换</button>
    </div>

//js
 new Vue({
        el: '#app',
        data: {
            isActive: true，
            isError: false
        },
        methods: {
            handle() {
                //控制isAtive的值在true 和false 之间进行切换
                this.isActive = !this.isActive，
                this.isError = !this.isError
            }
        }
    })
```





* ####  数组语法

```js
<div v-bind:class= [activeClass, errorClass]"></div>
```



```js

//css
 .active {
            border: 2px solid purple;
            width: 100px;
            height: 100px;
        }
        
        .error {
            background-color: royalblue;
            width: 100px;
            height: 100px;
        }

//html
  <div id="app">
        <div :class="[activeClass,errorClass]"></div>
        <button @click="handle">切换</button>
    </div>

//js
 new Vue({
        el: '#app',
        data: {
            activeClass: 'active',
            errorClass: 'error'
        },
        methods: {
            handle() {
                //控制isAtive的值在true 和false 之间进行切换
                this.activeClass = ''
            }
        }
    })
```



### 2.style 样式处理



* #### 对象语法

```js
<div></div>
```





## Vue常用特性



## 表单操作



### 1.基于Vue的表单操

* Input单行文本
* textarea多行文本
* select下拉多选
* radio单选框
* checkbox多选框





### v-model    只能用在表单元素中

> input（radio,	text,	address,	email） 	 select  	  checkbox  	textarea	



```js
v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
```





`v-model` 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：

- text 和 textarea 元素使用 `value` property 和 `input` 事件；
- checkbox 和 radio 使用 `checked` property 和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。



### 表单域修饰符



* number :转化为数值
* trim :去掉开始和结尾的空格
* lazy:将input事件切换为change事件

```js
<input v-model.number="age" type="number">
```



## 自定义指令

> directive    使用这个来定义指令
>
>  
>
> el  指的是需要绑定指令的元素
>
> inserted  是钩子函数
>
> Vue.directive (指令名称，{
>
> ​		inserted:function(el){
>
> ​			el.方法（）；
>
> }
>
> })

**局部的 directives  全局directive    相差一个s**

### 例：

```js
//html 
<div id="app">
        <p>光标自动聚焦选中输入框</p>
        <input type="text" v-focus>
    </div>
</body>


//js
<script>
    /*
     *       自定义指令
     */
    Vue.directive('focus', {
        inserted: function(el) {
            //el 表示指令所绑定的元素
            el.focus();
            console.log(focus);
        }
    });
    new Vue({
        el: '#app',
        data: {
        },
        methods: {           
        }
    })
```





### Vue.directive  注册全局指令

```html
<!-- 
  使用自定义的指令，只需在对用的元素中，加上'v-'的前缀形成类似于内部指令'v-if'，'v-text'的形式。 
-->
<input type="text" v-focus>
<script>
// 注意点： 
//   1、 在自定义指令中  如果以驼峰命名的方式定义 如  Vue.directive('focusA',function(){}) 
//   2、 在HTML中使用的时候 只能通过 v-focus 来使用 
    
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  	// 当绑定元素插入到 DOM 中。 其中 el为dom元素
  	inserted: function (el) {
    		// 聚焦元素
    		el.focus();
 	}
});
new Vue({
　　el:'#app'
});
</script>
```

### Vue.directive  注册全局指令 带参数

```html
// v-color  后面会添加参数 
<input type="text" v-color='msg'>
 <script type="text/javascript">
    /*
      自定义指令-带参数
      bind - 只调用一次，在指令第一次绑定到元素上时候调用

    */
    Vue.directive('color', {
      // bind声明周期, 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      // el 为当前自定义指令的DOM元素  
      // binding 为自定义的函数形参   通过自定义属性传递过来的值 存在 binding.value 里面
      bind: function(el, binding){
        // 根据指令的参数设置背景色
        // console.log(binding.value.color)
        el.style.backgroundColor = binding.value.color;
      }
    });
    var vm = new Vue({
      el: '#app',
      data: {
        msg: {
          color: 'blue'
        }
      }
    });
  </script>
```

### 自定义指令局部指令

>   注意
>
> ​		1. **局部的 directives  全局directive    相差一个s**
>
> ​		 2.局部的是写在vue 实例里面的



- 局部指令，需要定义在  directives 的选项   用法和全局用法一样 
- 局部指令只能在当前组件里面使用
- 当全局指令和局部指令同名时以局部指令为准

```html
<input type="text" v-color='msg'>
 <input type="text" v-focus>
 <script type="text/javascript">
    /*
      自定义指令-局部指令
    */
    var vm = new Vue({
      el: '#app',
      data: {
        msg: {
          color: 'red'
        }
      },
   	  //局部指令，需要定义在  directives 的选项
      directives: {
        color: {
          bind: function(el, binding){
            el.style.backgroundColor = binding.value.color;
          }
        },
        focus: {
          inserted: function(el) {
            el.focus();
          }
        }
      }
    });
  </script>
```



### [钩子函数](https://cn.vuejs.org/v2/guide/custom-directive.html#钩子函数)

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

我们会在[稍后](https://cn.vuejs.org/v2/guide/render-function.html#虚拟-DOM)讨论[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)时介绍更多 VNodes 的细节。

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

接下来我们来看一下钩子函数的参数 (即 `el`、`binding`、`vnode` 和 `oldVnode`)。



## 计算属性

**方法名与html{{方法名 }}  需要对上，data里面不需要**

```js


<!--- 就比如 这个让字符翻转就有点复杂， 使用计算属性可以让模板更加简洁-->
        <div>{{msg.split('').reverse().join('')}}</div>

//reversedMessage  是自定义方法名
computed:{
    reversedMessage:function(){
        return this.msg.split('').reverse().join('')
    }
}
```



### 计算属性（computed）与方法（methods）的区别

> computed计算属性是有缓存的,在多次调用是，第一次执行后就缓存了，当第二次执行时就直接拿第一次执行的结果
>
> 所以在大量的复杂耗时的计算中，又要被多次调用时，就体现了这个计算属性的优势，只执行一次，调用多次也不执行（**前提是调用的data数据不改变的前提下**），只拿第一次调用后的值



1.

* 计算属性有缓存的（只要使用的data中的数据不变，因为**computed 是基于data中的数据依赖做缓存的**）
* 方法不存在缓存
* **计算属性一定要有返回值，所以要加return**

2.调用方式

```js
//computed计算属性调用 {{}}  内是不需要加（）括号的
<div>{{reverseString}}</div>

new Vue({
        el: '#app',
        data: {
            msg: 'Hello'
        },
        computed: {
            reverseString: function() {
                console.log('computed');
                //计算属性一定要有返回值，所以要加return
                return this.msg.split('').reverse().join('');
            }
        }
    })



//methods调用 {{}}  内是需要加（）括号的
<div>{{reverseString（）}}</div>

new Vue({
        el: '#app',
        data: {
            msg: 'Hello'
        },
        methods： {
            reverseString: function() {
                console.log('computed');
                return this.msg.split('').reverse().join('');
            }
        }
    })
```



### 使用计算属性（computed）实现侦听器效果，对数据的实时侦听

```js
因为computed 是依赖于数据data中的对应数据，来实现缓存的，所以也可以理解成需要对数据的实时侦听
```



```js
  <div id="app">
        <div>
            <span>姓：</span>
            <span>
               <input type="text" v-model='firstName'>
           </span>
        </div>
        <div>
            <span>名：</span>
            <span>
            <input type="text" v-model='lastName'>
        </span>
        </div>
        <div>{{fullName}}</div>
    </div>

</body>
<script>
    var vue1 = new Vue({
        el: '#app',
        data: {
            firstName: 'zz',
            lastName: '01'
           
        },
        computed: {
            fullName() {
                return this.firstName + this.lastName;
            }
        }
    })
```





## 侦听器

> 数据发生变化就通知侦听器所绑定的方法
>
> 一般用于数据处理，模板渲染

侦听data的那个数据，名称必须要与data中的一样，代表了侦听那个数据的变化



![image-20200910153722609](https://s1.ax1x.com/2020/09/11/wYXpP1.png)



### 1.侦听器的应用场景



* 数据变化时执行异步或开销比较大的操作



### 基本使用：例

```js
 <div id="app">
        <div>
            <span>姓：</span>
            <span>
               <input type="text" v-model='firstName'>
           </span>
        </div>
        <div>
            <span>名：</span>
            <span>
            <input type="text" v-model='lastName'>
        </span>
        </div>
        <div>{{fullName}}</div>
    </div>

</body>
<script>
    var vue1 = new Vue({
        el: '#app',
        data: {
            firstName: 'zz',
            lastName: '01',
            fullName: 'zz01',
        },
        watch: {
            //firstName  lastName 必须要与data中的一样，代表了侦听那个数据的变化
            //val 指的是数据改变之后的最新值
            firstName: function(val) {
                this.fullName = val + this.lastName
            },
            lastName(val) {
                this.fullName = this.firstName + val
            }
        }
    })
```



初始：

![image-20200910161003975](https://s1.ax1x.com/2020/09/11/wYOz5R.png)

![image-20200910161107638](https://s1.ax1x.com/2020/09/11/wYOvVJ.png)

添加侦听器后：

![image-20200910161003975](https://s1.ax1x.com/2020/09/11/wYOz5R.png)

![image-20200910160943964](https://s1.ax1x.com/2020/09/11/wYOxa9.png)



### 基本应用场景——验证用户名是否可用案例

```js
   <div id="app">
        <div>
            <span>用户名：</span>
			<!--lazy  是将v-model的默认input事件改成change事件-->
            <span><input type="text" v-model.lazy='uname' ></span>
            <span>{{tip}}</span>
            <span></span>
        </div>
    </div>



</body>
<script>
    //需求:输入框中输入姓名，失去焦点时调取后台接口验证是否存在,
    //如果已经存在,提示从新输入,如果不存在,提示可以使用。


    // 1.通过v-model实现数据绑定

    // 2.需要提供提示信息

    // 3.需要侦听器监听输入信息的变化
    /*
    *   侦听器
        1.采用侦听器监听用户名的变化
        2.调用后台接口进行验证
        3.根据验证的结果调整提示信息
    */

    // 4.需要修改触发的事件（指的是输入框失去焦点触发事件）


    new Vue({
        el: '#app',
        data: {
            uname: '',
            tip: ''
        },
        methods: {
            //uname形参
            checkName(uname) {
                //调用接口，但是可用使用定时任务的方式模拟接口调用

                //箭头函数是为了获取到data的数据，因为 function 的this指向的是window，不是指向vue实例的
                setTimeout(() => {
                    //模拟接口调用
                    if (uname !== '') {
                        if (uname == 'admin') {
                            this.tip = '用户名已经存在，请更换'
                        } else {
                            this.tip = '用户名可以使用'
                        }
                    } else {
                        this.tip = '请输入用户名'
                    }

                    // console.log(this.tip);
                    // console.log(this);
                }, 300)

            }
        },
        watch: {
            uname(val) {
                //调用后台接口验证用户名是否可用

                //将最新输入的用户名传入checkName函数进行验证
                this.checkName(val);

                //修改提示信息
                this.tip = '正在验证...';

            }
        }
    })
```







### 使用计算属性（computed）的实现

```js
因为computed 是依赖于数据data中的对应数据，来实现缓存的，所以也可以理解成需要对数据的实时侦听
```



```js
  <div id="app">
        <div>
            <span>姓：</span>
            <span>
               <input type="text" v-model='firstName'>
           </span>
        </div>
        <div>
            <span>名：</span>
            <span>
            <input type="text" v-model='lastName'>
        </span>
        </div>
        <div>{{fullName}}</div>
    </div>

</body>
<script>
    var vue1 = new Vue({
        el: '#app',
        data: {
            firstName: 'zz',
            lastName: '01'
           
        },
        computed: {
            fullName() {
                return this.firstName + this.lastName;
            }
        }
    })
```



## 过滤器

> 作用：格式化数据（就是处理数据），比如将字符串格式化为首字母大写，将日期格式化为指定格式等

> **一定要加return  因为一定会有返回值的**



![image-20200911091729164](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200911091729164.png)

### 1.全局过滤器

```js
//filter 为过滤器关键字  可接收两个参数  value  是接收的要处理的数据  arg 是过滤器传递的参数（如果传递了参数的话）
Vue.filter('过滤器名称'，function(value，arg){
    //return  一定要 因为一定需要返回值
   return  //过滤器业务逻辑
})
```





### 2.过滤器的使用

```js
		| 过滤器名称

<div>{{msg | upper}}</div>

<div>{{msg | upper | lower}}</div>

<div v-bind:id='id | formatId'></div>
```



### 3.局部过滤器

**注意局部的 filters  比全局的 filter  多一个s**

```js


var vue1 = new Vue({
        el: '#app',
        data: {
            msg: ''
        },
        filters: {
            //局部过滤器
            //uppers  过滤器名称（自定义）
            uppers: function(val) {
                return val.charAt(0).toUpperCase() + val.slice(1);
            }
        }
    })
```



### 4.带参数的过滤器

```js
Vue.filter('format',function(value,arg){
    //value  指的是要处理的数据   arg指的是传递的参数，需要传递更多参数直接后面加就可以了
})
```



#### 使用



```js
<div>{{date | format('yyyy-MM-dd')}}</div>
```







## 全局与局部的区别



new Vue    实例本身就是一个组件，

自定义指令 和 过滤器 都有全局和局部的

局部的只能在本组件内使用

全局的可以在如何地方使用





## 生命周期



### 1.主要阶段

* 挂载 (初始化相关属性)==>页面加载时触发以下4个函数
  ①	beforeCreate
  ②	created
  ③	beforeMount
  ④	**mounted ==>（重要）该函数被触发，就说明页面初始化完成模板加载完毕，接下来就可以添加数据了（请求接口将获取的数据填充）**
* 更新(元素或组件的变更操作)==>页面数据，也就是data 更新改变时 触发
  ①    beforeUpdate
  ②    updated
* 销毁(销毁相关属性)
  ①    beforeDestroy
  ②    destroyed



### 2.Vue实例的产生过程

①beforeCreate 在实例初始化之后,数据观测和事件配置之前被调用。
②created 在实例创建完成后被立即调用。
③beforeMount 在挂载开始之前被调用。
④mounted el被新创建的vm.$el替换,并挂载到实例上去之后调用该钩子。
⑤beforeUpdate 数据更新时调用,发生在虚拟DOM打补丁之前。
⑥updated 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
⑦beforeDestgoy 实例销毁之前调用。
⑧destroyed 实例销毁后调用。



```js
 new Vue({
        el: '#app',
        data: {
            msg: '生命周期'
        },
        methods: {
            update() {
                this.msg = 'hello!';
            },
            distroy() {
                //该方法会销毁一些资源和属性  一般是data内的
                this.$destroy();
            }
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },
        beforeUpdate() {
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
        },
        destroyed() {
            console.log('destroyed');
        },

    })
```



### 生命周期图例

![](https://cn.vuejs.org/images/lifecycle.png)





## Vue中的数组操作



### 1.变异方法(修改原有数据)

​	**Vue 对这些方法进行了响应式的处理，所以这些在使用的时候会有响应式效果**

* push( ) 添加
* pop( )删除
* shift( )
* unshift( )
* splice( )删除数组指定元素
* sort( )排序
* reverse( )翻转数组

### 2.替换数组(生成新的数组，不会对原始数组进行修改)

* filter( )对数组中的**每一项**运行回调函数，该函数返回结果是 true 的项，将组成新的数组（返回值就是这个新					的数组）。不会改变原数组

* concat( )连接两个或多个数组，返回结果为**新的数组**。不会改变原数组

* slice( )截取数组





### 3.修改响应式数据

**不仅可以作用于数组，也可以作用于对象，实现响应式修改**

* Vue.set(vm.items, indexOftem, newValue)
* vm.$set(vm.items, indexOfltem, newValue)
  ①参数一表示要处理的数组名称
  ②参数二表示要处理的数组的索引
  ③参数三表示要处理的数组的值

#### 数组使用

```js
<div id="app">
        <ul>
            <li v-for='item in list'>{{item}}</li>
        </ul>
    </div>
</body>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            list: ['21Y', 'SOGOOO', 'P_looo'],
            fname: ''
        },
        methods: {

        }
    });
    
//这两句是一样的  只是写法不一样
    Vue.set(vm.list, 1, 'zz')
	Vue.$set(vm.list, 1, 'zz')

//初始21Y, SOGOOO, P_looo
//结果 21Y，zz，P_looo
```



#### 对象的使用



```js
<div id="app">
      
        <div>{{info.name}}</div>
        <div>{{info.age}}</div>
        <div>{{info.gender}}</div>
    </div>
</body>
<script>
    // * Vue.set(vm.items, indexOftem, newValue)
    // * vm.$set(vm.items, indexOfltem, newValue)
    //   ①参数一表示要处理的数组名称
    //   ②参数二表示要处理的数组的索引
    //   ③参数三表示要处理的数组的值
    var vm = new Vue({
        el: '#app',
        data: {
            list: ['21Y', 'SOGOOO', 'P_looo'],
            fname: '',
            info: {
                name: 'lisi',
                age: 12
            }
        },
        methods: {

        }
    });
    // vm.info.gender = 'male';  该方式不能达到响应式更改

    //该方法不但可以用于数组，也可以用于对象的响应式更改  浏览器打印台  例：vm.info.gender='aa'  就可以响应式改变
    vm.$set(vm.info, 'gender', 'female')
```





## 组件化



### 1.需求：

* 能够知道组件化开发思想
* 能够知道组件的注册方式
* 能够说出组件间的数据交互方式
* 能够说出组件插槽的用法
* 能够说出Vue调试工具的用法
* 能够基于组件的方式实现业务功能





### 2.全局组件注册语法

**data 后面跟随的是函数  函数内返回一个对象**

```vue
Vue.component(组件名,{
    data:组件数据,
    template:组件模板内容
})
```



例：

```js
//定义一个名为button-counter的新组件
vue. component ( 'button-counter', {
	data: function () {
	  return {
		count: 0
	  },
	template: ' <button v-on: clilzk="count++">点击了{{ count } }次. </button>'
    })
```



### 3.局部组件注册

**components**     **比全局多个  s     **

**且只能在父组件（vue绑定的元素，这里是id=app的元素）内使用其他地方无法使用在全局组件下也不能使用局部组件，全局的随意地方都可以使用**

```js
var ComponentA = { /* ...*/ }
var ComponentB = { /* ...*/ }
var ComponentC = { /* ...*/ }
new Vue({
el: "tapp"
components: {
    组件名称：组件内容，
	'component-a': CorponentA,
	'component-b': ComponentB,
	'component-c': ComponentC,
}
})

```

例

```js
 <div id="app">
        <hello-world></hello-world>
        <hello-zz></hello-zz>
        <hello-wl></hello-wl>
    </div>

</body>
<script>
    var HelloWorld = {
        data() {
            return {
                msg: 'HelloWorld'
            }
        },
        template: '<div>{{msg}}</div>'
    };
    var Hellozz = {
        data() {
            return {
                msg: 'Hellozz'
            }
        },
        template: '<div>{{msg}}</div>'
    };
    var Hellowl = {
        data() {
            return {
                msg: 'Hellowl'
            }
        },
        template: '<div>{{msg}}</div>'
    };

    new Vue({
        el: '#app',
        data: {},
        methods: {},
        components: {
            'hello-world': HelloWorld,
            'hello-zz': Hellozz,
            'hello-wl': Hellowl
        }
    })
```







### 4.组件的使用



**如下，vue 绑定的是id为app 的元素， 实际上vue实例也是一个组件，button-counter相当于子组件**

```js
<div id='app'>
	<button-counter></button-counter>    
</div>
```

```js
//方式一

Vue.component('button-counter', {
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button @click="count++">点击了{{count}}次</button>'
    })
    var vue1 = new Vue({
        el: '#app',
        data: '',

    })
    
//方式二：将方法单独写出在methods
       Vue.component('button-counter', {
        data: function() {
            return {
                count: 0
            }
        },
        template: '<button @click="handle">点击了{{count}}次</button>',
        methods: {
            handle() {
                this.count += 2;
            }
        }
    })
    var vue1 = new Vue({
        el: '#app',
        data: '',

    })
```

### 5.组件注意事项

#### 1.data必须是一个函数且函数内一定加上return 返回一个对象

```js
Vue.component(组件名,{
    data:组件数据,	//data 是一个函数
    template:组件模板内容
})


Vue.component(组件名, {
        data: function() {//data 是一个函数
            return {
                
            }
        },
        template: 组件模板内容
        methods: {
           
        }
    })
```



#### 2.组件模板内容必须是单个根元素

* **意思就是你可以添加多个元素，但必须得一个大的元素（盒子）包裹住**



* 这样会报错，这样就不是单个根元素了，因为两个button是兄弟关系

```js
template: '<button @click="handle">点击了{{count}}次</button>
			<button @click="handle">点击了{{count}}次</button>'
```

* 这样就可以，被一个盒子包裹住，就相当于是一个根元素

```js
template: '<div>
			<button @click="handle">点击了{{count}}次</button>
			<button @click="handle">点击了{{count}}次</button>
		   </div>'
```



#### 3.组件模板内容可以是模板字符串

* 模板字符串需要浏览器提供支持（需要浏览器支持ES6语法）

模板字符串：``  





### 6.组件的命名方式

* 短横线方式（推荐）

```js
Vue.component('my-component',{})
```

* 驼峰式

  ​	驼峰的组件只能在其他组件的模板中使用，不能在html中使用

  ​	要想在html中使用就需要将大写字母改成小写，且两个单词间添加短横线

```js
Vue.component('MyComponent',{})

//html中使用改写
<my-component></my-component>
```





### 7.props

**props 的值是一个数组，里面存放的是组件之间传递的值**

```js
Vue.copponent('menu-item',{
		props: ['title'],//props  是一个数组
		terplate: '<div>{{ title }}</div>'
}
```



#### porps属性名的规则

* 在props中使用驼峰形式，模板(html)中需要使用短横线的形式
* 字符串形式的模板中没有这个限制(template)



```js
Vue . component ( 'menu-item', {
//在JavaScript中是驼峰式的
props: [ 'menuTitle'] ,
template: '<div>{{ menuTitle } }</div>'
})
<!-在htm1中是短横线方式的-->
<menu-item menu-title="nihao"></menu- item>

```



#### porps属性值类型

* 字符串string
* 数值number
* 布尔值
* 数值
* 对象





### 8.父组件向子组件传值

 **除了在子组件data内有定义的值，其他静态或者父组件内的值，都要在props 数组添加对应的属性名才能生效**



#### 1.组件内部通过props接收传递过来的值

```js
Vue.copponent('menu-item',{
		props: ['title'],//props  是一个数组
		terplate: '<div>{{ title }}</div>'
}
```



#### 2.父组件通过属性将值传递给子组件

```js
//静态方式
<menu-item title="来自父组件的数据"></menu-item>
//动态方式
<menu-item :title="title"></menu-item>

```



例：

```js
<div id="app">
    	//输出：父组件中的内容
        <div>{{pmsg}}</div>				
		//子组件本身的的数据 - 来自父组件的值---静态方式-undefined
        <menu-item title='来自父组件的值---静态方式'></menu-item>
		//子组件本身的的数据 - 来自父组件的值---动态方式-hello
        <menu-item :title='ptitle' content='hello'></menu-item>
    </div>

</body>
<script>
    /*
     *  vue实例本身就是组件也就相当于是父组件
     *
     *
     *
     */

    //子组件
    Vue.component('menu-item', {
        props: ['title', 'content'],
        data() {
            return {
                msg: '子组件本身的的数据'
            }
        },
        template: '<div>{{msg+" - "+title+"-"+content}}</div>'
    });

    //父组件
    new Vue({
        el: '#app',
        data: {
            pmsg: '父组件中的内容',
            ptitle: '来自父组件的值---动态方式'
        },
        methods: {},

    })
```







### 9.子组件向父组件传值



 子组件向父组件传值-基本使用

   \*      **props 传递数据的原则：单项数据流 （只允许父组件向子组件传递数据）**

   \*     1.子组件通过自定义事件向父组件传递信息（$emit）

   \*     2.父组件监听子组件的事件

* **子组件绑定事件触发===>事件抛向父组件===>父组件监听事件函数继续方法操作**



#### 基本使用，不传值

* $emit  是子组件 自定义事件 向父组件传递信息的 关键  是固定写法
* enlarge-text   是自定义的名称 ，
* enlarge-text 写在父组件部分的子组件上（vue el绑定的是id=app 子组件在里面，所以是父组件部分） 

```js
 <div id="app">
        <div :style='{fontSize:fontSize+"px"}'>{{msg}}</div>
        <menu-item :parr='parr' @enlarge-text='handle'></menu-item>
    </div>
</body>
<script>
    /*
     *       子组件向父组件传值-基本使用
     *           props 传递数据的原则：单项数据流 （只允许父组件向子组件传递数据）
     *          1.子组件通过自定义事件向父组件传递信息（$emit）
     *          2.父组件监听子组件的事件
     *  子组件绑定事件触发===>事件抛向父组件===>父组件监听事件函数继续方法操作
     *
     *
     */

    Vue.component('menu-item', {
        props: ['parr'],
        template: `<div><ul><li :key='index' v-for='(item,index) in parr'>{{item}}</li></ul>
                    <button @click='parr.push("ZGG01")'>点击</button>
                    <button @click='$emit("enlarge-text")'>扩大父组件中字体大小</button></div>`
    })
    new Vue({
        el: '#app',
        data: {
            msg: '父组件中的内容',
            parr: ['ZGG', '21Y', 'SOGOOO'],
            fontSize: 10
        },
        methods: {
            handle() {
                //扩大字体大小
                this.fontSize += 5;
            }
        }
    })
```



#### 传值（$event）



* 第一部分：在子组件的自定义事件中的第二个参数添加要传递的值  @click=“$emit('事件名'，要传递的值)”    
* 第二部分：在父组件部分（vue el绑定的是id=app 子组件在里面，所以是父组件部分） ，
* **参数以 $event 的固定形式填写**

```js
 <div id="app">
        <div :style='{fontSize:fontSize+"px"}'>{{msg}}</div>
///////////////////////2.传值的第二部分///////////////////////////////
        <menu-item :parr='parr' @enlarge-text='handle($event)'></menu-item>
    </div>
</body>
<script>
   

    Vue.component('menu-item', {
        props: ['parr'],
        template: `<div><ul><li :key='index' v-for='(item,index) in parr'>{{item}}</li></ul>
                    <button @click='parr.push("ZGG01")'>点击</button>
///////////////////////1.传值的第一部分///////////////////////////////
                    <button @click='$emit("enlarge-text",5)'>扩大父组件中字体大小</button>
                    <button @click='$emit("enlarge-text",10)'>扩大父组件中字体大小+10</button>
                    </div>`
    })
    new Vue({
        el: '#app',
        data: {
            msg: '父组件中的内容',
            parr: ['ZGG', '21Y', 'SOGOOO'],
            fontSize: 10
        },
        methods: {
 ///////////3.第三部分///////////////////////////////////////////
            handle(val) {
                //扩大字体大小
                this.fontSize += val;
            }
        }
    })
```





### 10.兄弟组件传值





![image-20200918095751248](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200918095751248.png)



#### 1.创建事件中心（创建一个vue实例）

hub 自定义名称

```js
var hub=new Vue()
//通过事件中心来管理事件的监听（hub.$on()），销毁（hub.$off()），触发（hub.$emit()）
```



#### 2.监听事件的使用

A组件：

​			1.template 内会有一个触发一个事件a

​			2.A组件的 生命周期函数 mounted 内添加监听事件  $on('自定义事件名称'，事件函数 ) 

​			3. 事件a写在 A的methods 内  a事件内写 事件监触发 $emit('B组件on内的自定义事件名称'，传递给B的参数)

B组件

```js
 Vue.component('text-tom', {
        props: [],
        data() {
            return {
                num: 0
            }
        },
        template: `
            <div>
                <div>TOM:{{num}}</div>
                <div>
                    <button @click='handle'>点击</button>
                </div>

            </div>
        `,
        methods: {
            handle() {
                // 触发兄弟组件的事件
                hub.$emit('jerry-event', 2);
            }
        },
        mounted() {
            //监听事件
            hub.$on('tom-event', (val) => {
                this.num += val;
            })
        }
    });




    Vue.component('text-jerry', {
        props: [],
        data() {
            return {
                num: 0
            }
        },
        template: `
            <div>
                <div>JERRY:{{num}}</div>
                <div>
                    <button @click='handle'>点击</button>
                </div>

            </div>
        `,
        methods: {
            handle() {
                // 触发兄弟组件的事件
                hub.$emit('tom-event', 1);
            }
        },
        mounted() {
            //监听事件
            hub.$on('jerry-event', (val) => {
                this.num += val;
            })
        }
    });
```









#### 例：

```js
<body>
    <div id="app">
        <div>父组件</div>
        <div>
            <button @click='handle'>销毁兄弟组件事件</button>
        </div>
        <text-tom></text-tom>
        <text-jerry></text-jerry>
    </div>
</body>
<script>
    //提供事件中心
    var hub = new Vue()



    Vue.component('text-tom', {
        props: [],
        data() {
            return {
                num: 0
            }
        },
        template: `
            <div>
                <div>TOM:{{num}}</div>
                <div>
                    <button @click='handle'>点击</button>
                </div>

            </div>
        `,
        methods: {
            handle() {
                // 触发兄弟组件的事件
                hub.$emit('jerry-event', 2);
            }
        },
        mounted() {
            //监听事件
            hub.$on('tom-event', (val) => {
                this.num += val;
            })
        }
    });




    Vue.component('text-jerry', {
        props: [],
        data() {
            return {
                num: 0
            }
        },
        template: `
            <div>
                <div>JERRY:{{num}}</div>
                <div>
                    <button @click='handle'>点击</button>
                </div>

            </div>
        `,
        methods: {
            handle() {
                // 触发兄弟组件的事件
                hub.$emit('tom-event', 1);
            }
        },
        mounted() {
            //监听事件
            hub.$on('jerry-event', (val) => {
                this.num += val;
            })
        }
    });



    new Vue({
        el: '#app',
        data: {

        },
        methods: {
            handle() {

                //销毁兄弟组件之间的事件
                hub.$off('tom-event');
                hub.$off('jerry-event');
            }
        }
    })
</script>
```





### 11.组件插槽(slot)

>  作用：父组件向子组件传递内容(指的是模板)



![image-20200918113021871](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200918113021871.png)

#### 插槽的使用

##### 1.插槽位置

```js
Vue.component('alert-box', {
	template:`
		<div class="demo-alert-box">
			<strong>Error!</strong>
			<slot></slot>
		</div>`
})

```



##### 2.插槽内容

```js
<alert-box>Something bad happened. </alert-box>
```



#### 例

 当 slot 插槽 内有内容时： 

​			1.子组件在父组件内使用，且子组件标签内添加内容，则将显示标签添加的内容，不显示插槽内容

​			2.当子组件标签内无内容时，将显示插槽内的内容



![image-20200918114609217](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200918114609217.png)







#### 1.具名插槽用法



​	**html 标签 内添加 slot 且值与 template 内slot  name 值一样**



![image-20200918135138670](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200918135138670.png)





#### 例

![image-20200918140353423](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200918140353423.png)

```js
<body>
    <div id="app">
        <base-layout>
            <h1 slot="header">标题内容</h1>
            <p>主要内容1</p>
            <p>主要内容2</p>
            <p slot="footer">底部内容</p>
        </base-layout>


    </div>
</body>
<script>
    Vue.component('base-layout', {
        props: [],
        data() {
            return {}
        },
        template: `
        <div class="container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
        `,
        methods: {}
    })
    new Vue({
        el: '#app',
        data: {},
        methods: {}
    })
```



#### 2.作用域插槽

> 应用场景：父组件对子组件的内容进行加工处理（可以获取到子组件的数据，和对子组件数据进行加工处理）





![image-20200918163443382](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200918163443382.png)



## 接口调用-fetch用法

> 基于Promise 实现



### 语法结构

```js
fetch(url).then(fn2)
		  .then(fn3)
		  ......
		  .catch(fn)
```



### fetch 的基本使用

```js
fetch(url).then(data=>{
    return data.text();//text 返回值是一个Promise 对象
}).then(res=>{
    //注意这里得到的才是最终的数据
    console.log(ret)
})
```































































































## 准备

1：安装cnpm
npm install -g cnpm –registry=http://registry.npm.taobao.org

2：安装webpack
cnpm install webpack -g

3：安装vue-cli脚手架
cnpm install vue-cli -g

4：创建初始化的webpack包
vue init webpack 项目名

5：进入项目根目录
cd 项目名称

5：npm install
进入项目之后安装依赖，安装成功

注意：在这一步可能会出现这样的错误；因为你打开的是别人的项目，项目之中肯定有node_modules模块，那么先删除掉，再执行npm install命令
解决办法：
将no such file or directory,access中指明的文件路径中的node_modules删除：
rm -r node_modules或者直接在在项目文件夹中删除

然后再重新npm install 安装

6：一切准备就绪，启动项目
npm run dev

# 技能目录

一、HTML、CSS基础、JavaScript语法基础。学完基础后，可以仿照电商网站（例如京东、小米）做首页的布局。

二、JavaScript语法进阶。包括：作用域和闭包、this和对象原型等。相信我，JS语法，永远是面试中最重要的部分。

三、jQuery、Ajax等（同源跨域问题--jsonp (https://www.cnblogs.com/2050/p/3191744.html)）。jQuery没有过时，它仍然是前端基础的一部分。

四、ES6语法。这部分属于JS新增的语法，面试必问。其中，关于 promise、async 等内容要尤其关注。

五、HTML5和CSS3。要熟悉其中的新特性。

六、canvas。面试时，有的公司不一定会问canvas，靠运气。如果时间不够，这部分的内容可以先不学。但如果你会，绝对属于加分项。

七、移动Web开发、Bootstrap等。要注意移动开发中的适配和兼容性问题。

八、前端框架：Vue.js和React。这两个框架至少要会一个。入门时，建议先学Vue.js，上手相对容易。但无论如何，同时掌握 Vue 和 React 才是合格的前端同学。

九、Node.js。属于加分项，如果时间不够，可以先不学，但至少要知道 node 环境的配置。

十、前端工程化：构建工具 Webpack、构建工具 gulp、CSS 预处理器 Sass 等。注意，Sass 比 Less 用得多，gulp 比 grunt 用得多。

十一、前端综合：HTTP协议、跨域通信、安全问题（CSRF、XSS）、浏览器渲染机制、异步和单线程、页面性能优化、防抖动（Debouncing）和节流阀（Throtting）、lazyload、前端错误监控、虚拟DOM等。

十二、编辑器相关。Sublime Text 是每个学前端的人都要用到的编辑器。另外，前端常见的IDE有两个：WebStorm 和 Visual Studio Code。WebStorm 什么都好，可就是太卡顿；VS Code就相对轻量很多。个人总结一下：用VS Code 的人越来越多，用 WebStorm 的人越来越少。具体可以看：《[第一次使用VS Code时你应该知道的一切配置](https://www.cnblogs.com/qianguyihao/p/10732375.html)》

十三、TypeScript（简称TS）。ES 是 JS 的标准，TS 是 JS 的超集。TS属于进阶内容，建议把上面的基础掌握之后，再学TS。

备注：框架有时候都很虚；熟练掌握 JavaScript 基础，才是行走江湖、驰骋千里的关键。

