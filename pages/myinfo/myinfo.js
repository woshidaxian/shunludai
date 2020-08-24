// pages/myinfo/myinfo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    starFlag:3
  },
  goBalance:function(){
    wx.navigateTo({
      url: '/pages/myWallet/myWallet',
    })
  },
  logOut:function(){
    wx.clearStorage({
      complete: (res) => {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.setData({
          imgsrc: res.userInfo.avatarUrl,
          aco:res.userInfo.nickName
        })
        if(res.userInfo.gender==1){
          that.setData({
            sexImg:'/img/nan.png'
          })
        }else if(res.userInfo.gender==2){
          that.setData({
            sexImg:'/img/nv.png'
          })
        }else{
          return false;
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})