var app = getApp()

Page({
  data: {
    map_width: 380
    , map_height: 380
    , images: {}
    , moblie: '0769-89772871'
  }
  ,imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 718,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 718 / ratio;    //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  }
  //show current position
  , onLoad: function () {
    var that = this;
    // 获取定位，并把位置标示出来
    wx.openLocation({
      latitude: 22.545538, // 纬度，浮点数，范围为90 ~ -90
      longitude: 114.054565, // 经度，浮点数，范围为180 ~ -180。
      name: '鸿禧商业大厦', // 位置名
      address: '东莞市莞太大道篁村路段23号', // 地址详情说明
      scale: 10, // 地图缩放级别,整形值,范围从1~28。默认为最大
    });
    //set the width and height
    // 动态设置map的宽和高
    

  }
  //获取中间点的经纬度，并mark出来
  
  , regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是用户选择的位置
    if (e.type == 'end') {
    //  this.getLngLat()
    }
  }
  , markertap(e) {
    console.log(e)
  }
})