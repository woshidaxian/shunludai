// pages/addressSelect/addressSelect.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    onoff1:false,
    onoff2:false,
    onoff3:false,
    triangle1:"▲",
    triangle2:"▲",
    triangle3:"▲",
    value_school:"学校",
    value_place:"地点",
    value_dorm:"寝室楼筛选",
    schoolData:[
      {
        id:1,
        sch_value:"浙江水利水电学院"
      }
    ],
    placeData:[
      {
        id:1,
        pl_value:"生活区"
      },
      {
        id:2,
        pl_value:"教学区"
      }
    ],
    dormData:[
      {
        id:1,
        dorm_value:"1号楼"
      },
      {
        id:2,
        dorm_value:"2号楼"
      },
      {
        id:3,
        dorm_value:"3号楼"
      },
      {
        id: 4,
        dorm_value: "4号楼"
      },
      {
        id: 5,
        dorm_value: "5号楼"
      },
      {
        id: 6,
        dorm_value: "6号楼"
      },
      {
        id: 7,
        dorm_value: "7号楼"
      },
      {
        id: 8,
        dorm_value: "8号楼"
      },
      {
        id: 9,
        dorm_value: "9号楼"
      },
      {
        id: 10,
        dorm_value: "10号楼"
      },
      {
        id: 11,
        dorm_value: "11号楼"
      },
      {
        id: 12,
        dorm_value: "12号楼"
      },
      {
        id: 13,
        dorm_value: "13号楼"
      },
      {
        id: 14,
        dorm_value: "14号楼"
      },
      {
        id:15,
        dorm_value:"15号楼"
      }
    ]
  },
  btn_school:function(){
    this.setData({
      triangle1: "▼",
      triangle2: "▲",
      triangle3: "▲",
      onoff1: true,
      onoff2:false,
      onoff3:false
    })
  },
  // 选地点
  btn_place:function(){
    if(this.data.value_school=="学校"){
      wx.showModal({
        title: '提示',
        content: '请先选择学校！！！',
      })
      this.setData({
        triangle1: "▲",
        onoff2: false,
        onoff1: false,
        onoff3: false
      })
    }else{
      this.setData({
        triangle2: "▼",
        onoff2:true,
        onoff1:false,
        onoff3:false
      })
    }
  }, 
  // 选寝室楼
  btn_dorm:function(){
    if (this.data.value_place == "地点") {
      wx.showModal({
        title: '提示',
        content: '请先选择地点！！！',
      })
      this.setData({
        triangle1: "▲",
        triangle2: "▲",
        onoff3:false,
        onoff1:false,
        onoff2:false
      })
    }else{
      this.setData({
        triangle3: "▼",
        onoff3:true,
        onoff2:false,
        onoff1:false
      })
    }
  },
  btn_school_s:function(event){
    var that = this;
    that.setData({
      value_school: that.data.schoolData[event.currentTarget.dataset.id-1].sch_value,
      onoff1:false,
      triangle1: "▲",
      value_place: "地点",
      value_dorm:"寝室楼筛选"
    })
  },
  btn_place_s:function(event){
    this.setData({
      onoff2:false,
      triangle2: "▲",
      value_place: this.data.placeData[event.currentTarget.dataset.id - 1].pl_value,
      value_dorm: "寝室楼筛选"
    })
  },
  btn_dorm_s:function(event){
    this.setData({
      onoff3:false,
      triangle3: "▲",
      value_dorm:this.data.dormData[event.currentTarget.dataset.id-1].dorm_value
    })
    var Opage = getCurrentPages();
    var OprevPage = Opage[Opage.length-2];
    OprevPage.setData({
      school:this.data.value_school,
      val_1:this.data.value_place,
      val_2:this.data.value_dorm
    })
    wx.navigateBack();
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