/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
let app = new Vue({
  el:"#player",
  data:{
    //查询关键字
    query:"",
    //查询结果
    musicList:[],
    //歌曲连接
    playIngUrl:"",
    //歌曲封面
    playIngImg:"",
    //歌曲mv
    mvUrl:"",
    //歌曲评论集合
    comList:[],
    //播放属性
    isPlaying:false
  },
  methods:{
    //搜索歌曲
    searchMusic:function(){
      let that =this;
      //获取歌曲列表
      axios.get("https://autumnfish.cn/search?keywords=" + that.query).then(
        function(response){
          // console.log(response);
          // console.log(response.data.result.songs)
          that.musicList = response.data.result.songs;
        }
      ).catch(function(error){})
    },
    //播放歌曲
    playMusic:function(songId){
      let that =this;
      //获取歌曲mp3
      axios.get("https://autumnfish.cn/song/url?id=" + songId).then(
        function(response){
          // console.log(response);
          // console.log(response.data.data[0].url);
          that.playIngUrl = response.data.data[0].url;
        }
      ).catch(function(err){})
      //获取歌曲封面
      axios.get("https://autumnfish.cn/song/detail?ids=" + songId).then(
        function(response){
          // console.log(response);
          // console.log(response.data.songs[0].al.picUrl);
          that.playIngImg = response.data.songs[0].al.picUrl;
          
        }
      ).catch(function(err){})
      //获取歌曲评论
      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + songId).then(
        function(response){
          // console.log(response);
          // console.log(response.data.hotComments);
          that.comList = response.data.hotComments;
        }
      ).catch(function(err){})
      
      that.isPlaying=true;
    },
    //切换播放状态
    switchPlay:function(tag){
      console.log(tag);
      this.isPlaying = tag;
    },
    //播放mv
    mvPlay:function(mvid){
      let that = this;
      //获取歌曲mv
      axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(
        function(response){
          // console.log(response);
          // console.log(response.data.data.url);
          that.mvUrl = response.data.data.url;
        }
      ).catch(function(err){})
    },
    //退出mv界面
    cancle:function(){
      if(confirm("确定关闭?")){
        this.mvUrl="";
      }
     
    }
  }
});