// pages/my/my.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp()

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '0769-89772871',
    phone2: '150-1717-7987',
    map_width: '100%',
    map_height: 200,

    tabs: ["关于我们", "企业文化", "联系我们"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    longitude:'',
    latitude:''
    
  },
  // 拨打电话
  contact(e) {
    console.log(e)
    let phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone
    })
  },
  tabClick: function (e) {
      this.setData({
          sliderOffset: e.currentTarget.offsetLeft,
          activeIndex: e.currentTarget.id
      });
  },  

  onLoad: function () {
    var that = this;
    
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
                sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
            });
        }
    });








    // 获取定位，并把位置标示出来

    
    app.getLocationInfo(function (locationInfo) {
      // console.log('map', locationInfo);
      that.setData({
        longitude: 113.745560, 
        latitude: 23.024480, 
        markers: [
          {
            id: 0, 
            iconPath: "../../image/ic_position.png", 
            longitude: 113.745560, 
            latitude: 23.024480, 
            width: 40, 
            height: 40
          }
        ]
      })
    })

    //set the width and height
    // 动态设置map的宽和高

  }
  //获取中间点的经纬度，并mark出来

  // , regionchange(e) {
  //   // 地图发生变化的时候，获取中间点，也就是用户选择的位置
  //   if (e.type == 'end') {
  // //    this.getLngLat()
  //   }
  // }
  , click: function () {
    wx.openLocation({
      latitude: getApp().globalData.locationInfo.latitude, // 纬度，浮点数，范围为90 ~ -90
      longitude: getApp().globalData.locationInfo.longitude, // 经度，浮点数，范围为180 ~ -180。
      name: '鸿禧商业大厦', // 位置名
      address: '东莞市南城区莞太路鸿禧商业大厦603', // 地址详情说明
      scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
    });
  }
  , markertap(e) {
    console.log(e)
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '新视野网络科技',
      path: '/pages/start/start',
      imageUrl: 'https://www.xsygood.com/wximage/article01.jpg',
      success: function(res) {
        wx.showToast({
          title:'分享成功'
        })
        console.log(res)
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title:'分享失败..',
          icon:'none'
        })
        console.log(res)
      }
    }
  }



})