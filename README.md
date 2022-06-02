# Daotion web-interface



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



**废弃和暂时无用的特性**

ROUTE_MAP : 用于映射pages目录路径和路由关系
