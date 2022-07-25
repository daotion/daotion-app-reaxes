/**
 * webpack
 * feat: dev模式自动开启实验特性exp,prod自动关闭exp,除非特别说明
 * feat: prod模式自动使用server_production,除非request请求特别说明
 * feat: method为server时,node_env默认为dev,除非特别说明;
 * feat: server模式自动使用server_dev,除非request请求特别说明
 * feat: _real_address_ 放在header里,指向nginx转发后的真实地址
 * feat: server和build皆可指定
 * feat: 相对地址拼上env_config的server_host,绝对地址则直接请求
 * feat: 如果全局指定了mock,则requeter在没有指定mock时默认开启,否则默认关闭,除非参数特别说明
 * 
 */
var 
	node_env,
	env,
	method,
	mock,
	experimental;

if(!experimental){
	
}

if(node_env === "development"){
	
}

/**
 * npm start =>> {
 *    __ENV__ : [server_yang,server_dev,server_production],
 *    __NODE_ENV__ : [development,production],
 *    __EXPERIMENTAL__ : boolean,
 * } 
 */

/**
 * requester
 * feat: 
 * feat: 
 */
/**
 * 测试用例
 * npm start 
 */


/**
 * env config
 * server_yang: 杨徐晓本地服务器
 * server_development: 阿里云服务器-测试环境
 * server_production: 亚马逊服务器-正式环境
 */

;[
	{
		/*env_key*/
		"env" : "server_dev" ,
		/*告知requester开发环境的path_rewrite前缀*/
		"proxy_path_dev" : "/server_dev" ,
		/*webpack proxy的拦截路径*/
		"proxy_path_server" : "/server" ,
		/*请求服务器的域名/ip*/
		"server_host" : "https://121.199.23.234:8199" ,
		/*webpack的proxy配置*/
		"path_rewrite" : {
			"^/server_dev" : ""
		} ,
		/*webpack proxy的secure配置,false时可以接受证书无效*/
		"secure" : false
	} ,
	{
		"env" : "server_yang" ,
		"proxy_path_dev" : "/server_yang" ,
		"proxy_path_server" : "/server" ,
		"server_host" : "https://192.168.0.4:8199" ,
		"path_rewrite" : {
			"^/server_yang" : ""
		} ,
		"secure" : false
	} ,
	{
		"env" : "server_production" ,
		"env_comment" : "生产环境是亚马逊" ,
		"proxy_path_dev" : "/server_production" ,
		"proxy_path_server" : "/server" ,
		"server_host" : "https://app.daotesting.com/" ,
		"path_rewrite" : {
			"^/server" : ""
		} ,
		"secure" : false
	}
];
