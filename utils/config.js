






//配置域名,域名只修改此处。
//如果wordpress没有安装在网站根目录请加上目录路径,例如："www.watch-life.net/blog"
var DOMAIN = "www.xxxxxxxx.net";
var WEBSITENAME="李大玄"; //网站名称
var PAGECOUNT='10'; //每页文章数目
var WECHAT='微信号：dahuzi'; //客服联系方式,如 微信号： 或 邮箱：

//是否启用小程序扫描二维码登录网站,  true 启用  false  不启用
//未安装微慕登录插件不要启用,插件下载地址：https://shops.minapper.com/2167.html
const enableScanLogin =false 
//////////////////////////////////////////////////////

//是否启用微慕视频号插件,  true 启用  false  不启用
//未安装微慕视频号插件不要启用,插件下载地址：https://shops.minapper.com/2192.html
const enableChannels = !false
//////////////////////////////////////////////////////


//微慕小程序端版本,请勿修改
const minapperVersion=4.53
const minapperSource="free"
//////////////////////////////////////////////////////

export default {
  getDomain: DOMAIN,
  getWebsiteName: WEBSITENAME,  
  getPageCount: PAGECOUNT,
  getWecat: WECHAT,
  enableScanLogin,
  minapperVersion,
  minapperSource,
  enableChannels
}