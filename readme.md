# 说明文档
## `vhelpcli`: 一个帮助你快速搭建和开发前端项目的CLI

> 想不起来其他名字，以这个命名吧~

如何安装？

```shell
npm install vhelpcli -g
```

## 创建项目

目前支持Vue，后期会支持React，Angular考虑中~

vue项目模块已经帮你配置：

* 常用的目录结构（你可以在此基础上修改）
* vue.config.js（其中配置了别名，你可以自行修改和配置更多）
* axios（网络请求axios的安装以及二次封装）
* vue-router（router的安装和配置，另外有路由的动态加载，后面详细说明）
* vuex（vuex的安装和配置，另外有动态加载子模块，后面详细说明）

创建项目

```shell
vhelpcli create your_project_name
```

自动拉取项目模板、安装项目依赖、打开浏览器 `http://localhost:8080/`、自动启动项目



## 项目开发

项目开发目前提供三个功能：

* 创建Vue组件
* 创建Vue页面，并配置路由
* 创建Vuex子模块



### 创建Vue组件：

````shell
vhelpcli addcpn YourComponentName # 例如vhelpcli add NavBar，默认会存放到src/components文件夹中
vhelpcli addcpn YourComponentName -d src/pages/home # 也可以指定存放的具体文件夹
````



### 创建Vue页面，并配置路由

```shell
vhelpcli addpage YourPageName # 例如vhelpcli addpage Home，默认会放到src/pages/Home.vue中，并且会创建src/page/router.js
vhelpcli addpage YourPageName -d src/views/home # 也可以指定文件夹，但需要手动集成路由
```



### 创建Vuex子模块

```shell
vhelpcli addstore YourVuexChildModuleName # 例如vhelpcli addstore home，默认会放到src/store/modules/index.js和types.js
vhelpcli addstore YourVuexChildModuleName -d src/vuex/modules/home # 也可以指定文件夹
```

### 创建Vue3页面

```shell
vhelpcli addPage3 YourPageName #例如vhelpcli addPage3 Home，默认会放到src/views/Home.vue中，并且会创建src/router/home.ts
vhelpcli addPage3 YourPageName -d src/views/home #指定存放文件夹
```

