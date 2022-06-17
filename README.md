# Daotion web-interface

**`全新架构Reaxes`**

同一个reaxel内的lifecycle生命周期不保证调用顺序,所以lifecycle.updated()注等钩子注册的函数们不应该相互有依赖关系 ,就像hooks callbacks 

**目录结构**
pages下以大写字母开头的是路由级别的由业务组件和svg组件(或包含Reaxes)组合而成的页面组件
_BussinessComponents下放的是与业务强相关的组件,供pages使用,其中可以包含Reaxes
common/XComponents是与业务无关的通用组件, 使用时直接通过@@XComponents引用.编写XComponent时必须提供完善的TS类型声明,使用文档,示例.


**提交与PR规范**

https://www.notion.so/Git-commit-review-306f8f6cf43d4d8e8aff96c2f2802a9b

#### Notes
生成图标库:
https://openbase.com/js/blockies-identicon

react-list : 一个用于无限滚动的react库

#### TROUBLE

如果np i 时报错 , npm update



**持久化登录态方案**

链接钱包成功后缓存钱包信息(含ens) , 当刷新页面时读入 , 并异步更新ens信息.

如果钱包是未登录状态则不会读入持久化信息.

如果于钱包登录状态离线,则断开DAOtion链接

**TODOs**

gnosis可以监听到metamask的挂起状态并提示,阅读源码并实现此技术

https://github.com/safe-global/safe-react/tree/dev/src/components

**废弃和暂时无用的特性**

ROUTE_MAP : 用于映射pages目录路径和路由关系



```
Root:host/*<redirect↓> 
|- /home<index>         desc:主页all-DAO-list
|- /profile             desc:用户个人信息
|- /DAO:DAOID<redirect↓>           desc:点击DAO-list后,直接跳转到DAO:DAOID/info
   |- /DAO:DAOID/<index>info
   
   |- /DAO:DAOID/plugin:PLUGINID<redirect↓>        desc:点击某个plugin时会跳入plugin,默认重定向到plugin-tab[0]
      |- /DAO:DAOID/plugin:PLUGINID/:TABID<index>:tabs[0]
      
   |- /DAO:DAOID/plugin-center        desc:插件中心页
      |- /DAO:DAOID/plugin-center/:PLUGINID         desc:点击插件后进入插件详情
```


```jsx
Layout = [<Sider_DAO_List/>,<Header/>];
Home = [<Layout/>,<DAO_list/>];
Profile = [<Layout/>,<Profile/>];
/*DAO的主页*/
DAOID_info = [<Layout/>,<DAO_Plugin_List/>,<DAO_Info/>];
/*plugin-widget页面*/
DAO_Plugin_Page = [<Layout/>,<DAO_Plugin_List/>,<DAO_Plugin_Main/>];
DAO_Plugin_Center = [<Layout/>,<DAO_Plugin_List/>,<DAO_Plugin_Center/>];
/*plugin详情页*/
DAO_Plugin_Center_Info = [<Layout/>,<DAO_Plugin_List/>,<DAO_Plugin_Info/>];


;<Layout path="/*" contains>
   <Home path="home"/>
   <Profile path="profile"/>
   
</Layout>;
```
