var domain = 'http://192.168.4.102:8080';

var data = {

	// 商品列表
	goods_list 	: domain + '/v1/pub/dicbase/list.json',

	// 商品详情
	goods 		: domain + '/v1/wechat/pub/product/list_w.json',
}

module.exports = {
  data: data
}