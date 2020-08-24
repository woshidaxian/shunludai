Page({
  data: {
    money: "1.5",
    showView: true,
    isChioes1: false,
    isChioes2: false,
    isChioes3: false,
    isChioes4: false,
    isChioes5: false,
    isChioes6: false,
  },
  btn_chaoshi:function(){
    this.setData({
      isChioes1: true,
      isChioes2: false,
      isChioes3: false,
      isChioes4: false,
      isChioes5: false,
      isChioes6: false,
    })
  },
  btn_shitang:function(){
    this.setData({
      isChioes1: false,
      isChioes2: true,
      isChioes3: false,
      isChioes4: false,
      isChioes5: false,
      isChioes6: false,
    })
  },
  btn_kuaidi:function(){
    this.setData({
      isChioes1: false,
      isChioes2: false,
      isChioes3: true,
      isChioes4: false,
      isChioes5: false,
      isChioes6: false,
    })
  },
  btn_wenju:function(){
    this.setData({
      isChioes1: false,
      isChioes2: false,
      isChioes3: false,
      isChioes4: true,
      isChioes5: false,
      isChioes6: false,
    })
  },
  btn_shuiguo:function(){
    this.setData({
      isChioes1: false,
      isChioes2: false,
      isChioes3: false,
      isChioes4: false,
      isChioes5: true,
      isChioes6: false,
    })
  },
  btn_naicha:function(){
    this.setData({
      isChioes1: false,
      isChioes2: false,
      isChioes3: false,
      isChioes4: false,
      isChioes5: false,
      isChioes6: true,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 生命周期函数--监听页面加载 
    showView: (options.showView == "true" ? true : false)
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({ showView: (!that.data.showView) })
  },
  selectAddress:function(){
    wx.navigateTo({
      url: '/pages/selectAddress/selectAddress',
    })
  },
  submitbtn:function(){
    wx.navigateTo({
      url: '../payment/payment',
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