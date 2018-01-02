(function(you) {
  const title = '极速招聘，半天搞定',
    keyword = '有米科技技术专场',
    dateTime = '2018.1.7（周日） 13:30-17:00',
    email = 'hr@youmi.net',
    address = '广州市番禺区大学城青蓝街26号有米科技大厦17楼（地铁：四号线大学城北C出口100米）',
    miniProgram = '其他岗位投递，底部小程序欢迎来扫';
  
  const progress =  {
    step1: {
      timeRange: '13:30-14:00',
      sharer: '有米科技 CTO 蔡锐涛 Ted',
      theme: '<<纵谈AI及大数据在广告技术的应用与发展>>',
      action: function() {
        console.log(`${this.sharer} 分享 ${this.theme}`);
      }
    },

    step2: {
      time: '14:00-17:00',
      action: function() {
        console.log('面试交流');
      }
    }
  };

  const jobRequirements = () => {
    if (you.yearsOfWorking >= 2 && (you.post == '前端开发' || you.post == '后端开发')) {
      you.send(email, you.resume);
      welcome(you.come(address));
    }
  }
})(you)