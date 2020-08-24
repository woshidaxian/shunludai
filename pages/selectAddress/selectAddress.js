// pages/selectAddress/selectAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressData:[
      {
        index: 1,
        name:'朱天杨',
        sex:'女士',
        phone:'13566527512',
        school:'浙江水利水电学院',
        address:'生活区5号楼122',
        default: true
      },
      {
        index: 2,
        name: '朱天杨',
        sex: '女士',
        phone: '13566527512',
        school: '浙江水利水电学院',
        address: '生活区5号楼122',
        default: false
      },
      {
        index: 3,
        name: '朱天杨',
        sex: '女士',
        phone: '13566527512',
        school: '浙江水利水电学院',
        address: '生活区5号楼122',
        default: false
      }
    ]
  },
  // 编辑按钮
  editorBtn:function(event){
    // 获取当前响应按钮位次
    // 以便修改对应需要修改的地址
    console.log(event.currentTarget.dataset);
  },
  newaddress:function(){
    wx.navigateTo({
      url: '/pages/addAddress/addAddress',
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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