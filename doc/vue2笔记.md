# 1、初识vue

+ 一个vue实例只能对应一个挂载容器(元素)，同样一个挂载容器(元素)实例只能对应vue实例，即**一一对应**。

  > ```html
  > <body>
  >     <div class="root">
  >         <!-- {{xxx}}插值语法 -->
  >         <h1>hello, {{msg}} , {{date}}</h1>
  >     </div>
  >     <!-- 第二个容器会失效-->
  >     <div class="root">{{msg}}</div>
  >     <script>
  >         Vue.config.productionTip=false; //设置为 false 以阻止 vue 在启动时生成生产提示。
  >         //创建vue实例
  >         new Vue({
  >             el:".root",
  >             data:{
  >                 msg:"vue"
  >             }
  >         });
  >         //第二个vue实例 就会失效
  >         new Vue({
  >             el:"#root",
  >             date:{
  >                 date:"2022"
  >             }
  >         });
  >     </script>
  > </body>
  > ```

+ `{{xxx}}`插值表达式中可以写：**vue实例中data域中数据和js表达式**

  > *区分js表达式和js代码：*
  >
  > 1. **js表达式**：一个表达式会生成一个值，可以放在任何一个需要值的地方。
  >
  >    > + a
  >    > + a+b
  >    > + add(1,2)
  >    > + x==y?1:2
  >
  > 2. **js代码**
  >
  >    > + if(){}
  >    > + for(){}

