# 第一章：Vue基础

Vue3官方文档：https://cn.vuejs.org/guide/introduction.html

Vue2官方文档：https://v2.cn.vuejs.org/v2/guide/

## 1、Vue简介

+ JavaScript框架
+ 简化Demo操作
+ 响应式数据驱动

## 2、第一个Vue程序

+ 导入vue.js
+ 创建vue实例对象，设置el属性和data属性
+ 使用简洁的模板语法将数据渲染到页面上

```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    <!-- 页面元素，{{}}为模板语法-->
    <div id="app">
        {{message}}
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        <!-- 创建Vue实例，el-->
        let app = new Vue({
            el:"#app", <!-- 挂载点即 目标元素-->
            data:{
                message:"Hello Vue!"
            }
        });
    </script>
</body>
</html>
```

## 3、el:挂载点

通过css选择器选择元素，推荐使用id选择器。

+ **Vue实例的作用范围是什么？**

  由例子可以看出，vue实例的作用范围为：<font color='red'>el挂载点命中的元素及其子孙元素</font>

  > ```html
  > <body>
  >     {{message}}
  >     <div id="app">  
  >         {{message}}  {{message}} {{message}} 
  >         <span>hello: {{message}}</span>
  >     </div>
  >     {{message}}
  >     <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  >     <script>
  >         new Vue({
  >             el: "#app",
  >             data: {
  >                 message: "你好"
  >             }
  >         });
  >     </script>
  > </body>
  > ```
  >
  > <img src='img\image-20220923144542967.png' >

+ **是否可以使用其他选择器？**

  <font color='red'>可以：id选择器(#)，标签选择器(tag)，class选择器(.)都可以使用。【推荐使用id选择器】</font>

+ **是否可以设置其他的dom元素？**

  <font color='red'>可以，但是仅支持body内部的双标签，不支持单标签（不包含body标签和html）</font>

  > `vue.js:5076 [Vue warn]: Do not mount Vue to <html> or <body> - mount to normal elements instead.`

## 4、data:数据对象

元素中{{message}}对应vue中的data数据对象，里面的的message属性就会被data数据对象的同名属性代替

**data:数据对象支持所有的数据类型包括：数字，字符串，布尔，对象，数组等等，且数组和对象的取值方法和java一样**

> ```java
> <body>
> 
>     <div id="app">
>         {{message}} 
>         <h2>{{arr[1]}}</h2>
>         <h2>{{school.name}}</h2>
>     </div>
>     <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
>     <script>
>         new Vue({
>             el: "#app",
>             data: {
>                 message: "你好！",
>                 arr: [1,2.0,"3",true],
>                 school: {
>                     name: "小黑",
>                     mobile: 123456
>                 }
> 
>             }
>         });
>     </script>
> </body>
> ```
>
> <img src='img\image-20220923150433411.png' >

# 第二章：本地应用

vue不同于其他框架是基于dom操作页面元素，vue中使用一系列v-开头的特殊语法去操作页面，而这些v-开头的特殊语法通称为：**vue指令**

## 1、内容绑定+事件绑定

+ ***`v-text`指令*** ：设置标签的文本值（注意是全部替换了）

+ ***`{{xxx}}*** ：设置标签的文本值，差值替换

  > ```html
  > <body>
  > 
  >     <div id="app">
  >         <!-- 全部替换，可直接字符串拼接 类似于themeleaf的${}-->
  >         <h1 v-text="message + '!' + info">哈哈</h1>
  >         <!--差值替换，可以进行字符串拼接(不是data域中的数据必须加上引号，否则会报错)，类似thymeleaf的[[]]-->
  >         <h1>{{message + '!' + info}}哈哈</h1>
  >     </div>
  >     <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  >     <script>
  >         new Vue({
  >             el: "#app",
  >             data: {
  >                 message: "v-text",
  >                 info: "ヾ(•ω•`)o"
  >             }
  >         });
  >     </script>
  > </body>
  > ```
  >
  > <img src='\img\image-20220923154209018.png'>

+ ***`v-html`指令*** ：设置标签innerhtml 【这就说明会作为子元素存在】

  > ```html
  > <body>
  > 
  >     <div id="app">
  >         <p v-html="message"></p>
  >         <!-- v-html 可以将字符串解析成html，作为所属标签的子标签 -->
  >         <p v-html="info"></p>
  >     </div>
  >     <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  >     <script>
  >         new Vue({
  >             el: "#app",
  >             data: {
  >                 message: "hello world!",
  >                 info: "嘻嘻<a href='#'>hello world!</a>"
  >             }
  >         });
  >     </script>
  > </body>
  > ```
  >
  > <img src='img\image-20220923155216178.png'>

+ ***`v-on`指令*** ：为元素绑定事件

## 2、显示切换+属性绑定



## 3、列表循环+表单元素绑定



# 第三章：网络应用

# 第四章：综合应用