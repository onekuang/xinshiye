//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    map_width: 380
    , map_height: 380
    , images: {}
    , moblie: '0769-89772871'
    , movies: [
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
    , hot: [
      {
        url: "",
        text: "热点轮播1"
      },
      {
        url: "",
        text: "热点轮播2"
      },
      {
        url: "",
        text: "热点轮播3"
      },
      {
        url: "",
        text: "热点轮播4"
      }
    ]
  }
  , imageLoad: function (e) {
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
  , onShareAppMessage: function () {
    return {
      title: '新视野网络',
      desc: '用心为中小企业服务',
      path: '/page/user?id=123'
    }

  }
  //show current position
  , onLoad: function () {
    var that = this;
    // 获取定位，并把位置标示出来

    
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);
      that.setData({
        longitude: 113.745560
        , latitude: 23.024480
        , markers: [
          {
            id: 0
            , iconPath: "../image/ic_position.png"
            , longitude: 113.745560
            , latitude: 23.024480
            , width: 40
            , height: 40
          }
        ]
      })
    })

    //set the width and height
    // 动态设置map的宽和高

  }
  //获取中间点的经纬度，并mark出来

  , regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是用户选择的位置
    if (e.type == 'end') {
  //    this.getLngLat()
    }
  }
  , click: function () {
    wx.openLocation({
      latitude: getApp().globalData.locationInfo.latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude: getApp().globalData.locationInfo.longitude, // 经度，浮点数，范围为180 ~ -180。
      name: '鸿禧商业大厦', // 位置名
      address: '东莞市莞太大道篁村路段23号', // 地址详情说明
      scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
    });
  }
  , markertap(e) {
    console.log(e)
  }
})
