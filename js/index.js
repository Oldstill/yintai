//banner效果
// 鼠标移动到按钮上切图，和换背景
window.onload=function(){
//banner效果
  	var btns=document.getElementsByClassName("btn");
  	var tu=document.getElementsByClassName("banner-item");
  	var banner_box=document.getElementsByClassName("banner-box")[0];
  	for (var i = 0; i < btns.length; i++) {
  		btns[i].index=i;
  		btns[i].onmouseover=function(){
  			num=this.index;
  			for (var i = 0; i < btns.length; i++) {
  				tu[i].style.zIndex="1";
          btns[i].style.backgroundColor="#211616";
  			};
          tu[this.index].style.zIndex="2";
          btns[this.index].style.backgroundColor="#e5004f";
  		}
  	}
  	//自动切换效果
  	var num=0;
  	var t=setInterval(move,3000)
  	function move(){
          num++;
          if (num==tu.length) {
              num=0;
          };
  	 for (var i = 0; i < btns.length; i++){
  		tu[i].style.zIndex="1";
  		btns[i].style.backgroundColor="#211616"
  	};
        tu[num].style.zIndex="2";
        btns[num].style.backgroundColor="#e5004f"
      	}
      banner_box.onmouseover=function(){
          clearInterval(t)
      }
      banner_box.onmouseout=function(){
      	t=setInterval(move,3000)
      }
     //banner文字
      var left1s=getClass("left1");
      var bannertext=getClass("banner1");
      for (var i = 0; i < left1s.length; i++) {
         left1s[i].index=i;
         hover(left1s[i],function(){
         bannertext[this.index].style.display="block";
         },function(){
          bannertext[this.index].style.display="none";
          })
        }
        for (var i = 0; i < bannertext.length; i++) {
          bannertext[i].index=i;
          hover(bannertext[i],function(){
          bannertext[this.index].style.display="block";
         },function(){
          bannertext[this.index].style.display="none";
          })
        };
    // banner箭头效果
    var banners=$(".banner")[0];
    var bannerbtn=$(".bannerbtn");
    var banner_l=$(".banner-l")[0];
    var banner_r=$(".banner-r")[0];
    var flag=true;
      banners.onmouseover=function(){
        bannerbtn[0].style.display="block";
        bannerbtn[1].style.display="block";
      }
      banners.onmouseout=function(){
       bannerbtn[0].style.display="none";
       bannerbtn[1].style.display="none";
      }
      // 鼠标移入移出箭头变色
      banner_l.onmouseover=function(){
           banner_l.style.backgroundPosition="left bottom";
      }
      banner_l.onmouseout=function(){
             banner_l.style.backgroundPosition="left top";
      }
       banner_r.onmouseover=function(){
        if (flag) {
          banner_r.style.backgroundPosition="right bottom";
         }
      }
       banner_r.onmouseout=function(){
           banner_r.style.backgroundPosition="right top";
      }
       //箭头、按钮点击效果
      banner_r.onclick=moveRight;
      banner_l.onclick=moveLeft;
      function moveRight(){
        move();
      }
      function moveLeft(){
        num--;
        if(num==-1){
          num=0;
      }
      for (var i = 0; i < btns.length; i++){
      tu[i].style.zIndex="1";
      btns[i].style.backgroundColor="#211616"
    };
      tu[num].style.zIndex="2";
      btns[num].style.backgroundColor="#e5004f"
      }
//特卖效果
    var an=document.getElementsByClassName("tm1-1");
    var tam1box=document.getElementsByClassName("tm1-box");
       for (var i = 0; i < an.length; i++) {
        an[i].index=i;
        an[i].onmouseover=function(){
       for (var i = 0; i < an.length; i++) {
         tam1box[i].style.display="none";
         an[i].style.borderBottom="5px solid #333";
         // an[i].style.fontWeight=" "
         	};
         tam1box[this.index].style.display="block";
         // an[this.index].style.fontWeight="bold"
         an[this.index].style.borderBottom="5px solid #e5004f";
           }
           };

        function border(obj,time){
          obj.style.position="resative";
          var div1=document.createElement("div")    //创建DIV
          var div2=document.createElement("div")
          var div3=document.createElement("div")
          var div4=document.createElement("div")
          div1.style.cssText="position:absolute;background:#555;left:-1px;top:-1px;height:1px";
          div2.style.cssText="position:absolute;background:#555;left:-1px;top:-1px;width:1px";
          div3.style.cssText="position:absolute;background:#555;right:-1px;bottom:-1px;height:1px";
          div4.style.cssText="position:absolute;background:#555;right:-1px;bottom:-1px;width:1px";
         //追加到obj
          obj.appendChild(div1);
          obj.appendChild(div2);
          obj.appendChild(div3);
          obj.appendChild(div4);
          var width=parseInt(getStyle(obj,"width"))+2;
          var height=parseInt(getStyle(obj,"height"))+2;
          //鼠标移入事件
          obj.onmouseover=function(){
           animate(div1,{width:width},time)
           animate(div2,{height:height},time)
           animate(div3,{width:width},time)
           animate(div4,{height:height},time)
          }
          // 鼠标移出事件
           obj.onmouseout=function(){
           animate(div1,{width:0},time)
           animate(div2,{height:0},time)
           animate(div3,{width:0},time)
           animate(div4,{height:0},time)
          }
        }
        var tm3=$(".tm3");
        for (var i = 0; i < tm3.length; i++) {
            border(tm3[i],500)
        };
        var tm4=$(".tm4")
        for (var i = 0; i < tm4.length; i++) {
            border(tm4[i],500)
        };    
 //银泰百货
     var an1=document.getElementsByClassName("hot1-1");
     var hot2box=document.getElementsByClassName("hot2");
       for (var i = 0; i < an1.length; i++) {
        an1[i].index=i;
        an1[i].onmouseover=function(){
       for (var i = 0; i < an1.length; i++) {
         hot2box[i].style.display="none";
         an1[i].style.borderBottom="3px solid #333";
             	};
         hot2box[this.index].style.display="block";    
         an1[this.index].style.borderBottom="3px solid #e5004f";
           }
           }
      //边框特效  
      function border(obj,time){
          obj.style.position="resative";
          var div1=document.createElement("div")    //创建DIV
          var div2=document.createElement("div")
          var div3=document.createElement("div")
          var div4=document.createElement("div")
          div1.style.cssText="position:absolute;background:#555;left:-1px;top:-1px;height:1px";
          div2.style.cssText="position:absolute;background:#555;left:-1px;top:-1px;width:1px";
          div3.style.cssText="position:absolute;background:#555;right:-1px;bottom:-1px;height:1px";
          div4.style.cssText="position:absolute;background:#555;right:-1px;bottom:-1px;width:1px";
         //追加到obj
          obj.appendChild(div1);
          obj.appendChild(div2);
          obj.appendChild(div3);
          obj.appendChild(div4);
          var width=parseInt(getStyle(obj,"width"))+2;
          var height=parseInt(getStyle(obj,"height"))+2;
          //鼠标移入事件
          obj.onmouseover=function(){
           animate(div1,{width:width},time)
           animate(div2,{height:height},time)
           animate(div3,{width:width},time)
           animate(div4,{height:height},time)
          }
          // 鼠标移出事件
           obj.onmouseout=function(){
           animate(div1,{width:0},time)
           animate(div2,{height:0},time)
           animate(div3,{width:0},time)
           animate(div4,{height:0},time)
          }
        }
        var hot=$(".hot2-1");
        for (var i = 0; i < hot.length; i++) {
            border(hot[i],500)
        };
//时尚名品效果
      var tarbox=$(".tar");
      var leftbtns=$(".leftbtn");
      var rightbtns=$(".rightbtn");
      var tarbtn0=$(".tar-btn0");
      var tarbtn1=$(".tar-btn1");
      var tartu=$(".tar-1");
      var flag=true;
     function Lunbo(tarbox,leftbtns,rightbtns,tarbtn0,tarbtn1,tartu){
        //鼠标移入移出按钮显现，消失
      tarbox.onmouseover=function(){
      	animate(leftbtns,{left:0},30);
      	animate(rightbtns,{right:0},30)
      }
      tarbox.onmouseout=function(){
      	animate(leftbtns,{left:-30},30);
      	animate(rightbtns,{right:-30},30)
      }
      // 鼠标移入移出箭头变色
      leftbtns.onmouseover=function(){
           leftbtns.style.backgroundPosition="left bottom";
      }
      leftbtns.onmouseout=function(){
             leftbtns.style.backgroundPosition="left top";
      }
       rightbtns.onmouseover=function(){
       	if (flag) {
           rightbtns.style.backgroundPosition="right bottom";
         }
      }
       rightbtns.onmouseout=function(){
           rightbtns.style.backgroundPosition="right top";
      }
      //箭头、按钮点击效果
      rightbtns.onclick=moveRight;
      leftbtns.onclick=moveLeft;
      tarbtn0.onclick=moveLeft;
      tarbtn1.onclick=moveRight;
      function moveRight(){
      	flag=false;
      	animate(tartu,{left:-390});
      	tarbtn0.style.backgroundColor="#666";
        tarbtn1.style.backgroundColor="#e5004f";
      }
      function moveLeft(){
      	flag=true
      	animate(tartu,{left:0});
      	tarbtn1.style.backgroundColor="#666";
        tarbtn0.style.backgroundColor="#e5004f";
      }
      }
      for (var i = 0; i<tarbox.length; i++) {
        Lunbo(tarbox[i],leftbtns[i],rightbtns[i],tarbtn0[i],tarbtn1[i],tartu[i])
      };
      //边框特效  
      function border(obj,time){
          obj.style.position="resative";
          var div1=document.createElement("div") //创建DIV
          var div2=document.createElement("div")
          var div3=document.createElement("div")
          var div4=document.createElement("div")
          div1.style.cssText="position:absolute;background:#555;left:-1px;top:-1px;height:1px";
          div2.style.cssText="position:absolute;background:#555;left:-1px;top:-1px;width:1px";
          div3.style.cssText="position:absolute;background:#555;right:-1px;bottom:-1px;height:1px";
          div4.style.cssText="position:absolute;background:#555;right:-1px;bottom:-1px;width:1px";
         //追加到obj
          obj.appendChild(div1);
          obj.appendChild(div2);
          obj.appendChild(div3);
          obj.appendChild(div4);
          var width=parseInt(getStyle(obj,"width"))+2;
          var height=parseInt(getStyle(obj,"height"))+2;
          //鼠标移入事件
          obj.onmouseover=function(){
           animate(div1,{width:width},time)
           animate(div2,{height:height},time)
           animate(div3,{width:width},time)
           animate(div4,{height:height},time)
          }
          // 鼠标移出事件
           obj.onmouseout=function(){
           animate(div1,{width:0},time)
           animate(div2,{height:0},time)
           animate(div3,{width:0},time)
           animate(div4,{height:0},time)
          }
        }
        var tar=$(".tar1");
        for (var i = 0; i < tar.length; i++) {
            border(tar[i],500)
        };
     
      //无限轮播
      var scroller=$(".scroller");
      var left=$(".floor-l");
      var right=$(".floor-r");
      for (var i = 0; i < scroller.length; i++) {
        lunbo(scroller[i],left[i],right[i])
      }
      function lunbo(scroller,left,right){
      right.onclick=function(){
        animate(scroller,{marginLeft:-160},300,function(){
          var first=getFirst(this);
          this.appendChild(first);
          this.style.marginLeft=0;
        })
      }
        var flag=true;
        left.onclick=function(){
         if (!flag) {return;};
         flag=false;
          var last=getLast(scroller);
          var first=getFirst(scroller);
          scroller.insertBefore(last,first);
          scroller.style.marginLeft="-160px";
          animate(scroller,{marginLeft:0},300,function(){
          flag=true;
          })
        }
      }

// 右侧导航栏效果
      var selfs=getClass("self");
      var self1s=getClass("self1")[0];
      var zzs=getClass("zz");
      var zz1s=getClass("zz1")[0];
      for (var i = 0; i < selfs.length; i++){
          selfs[i].index=i;
          selfs[i].onmouseover=function(){
          zzs[this.index].style.opacity="1"
              };
          selfs[i].onmouseout=function(){
          zzs[this.index].style.opacity="0";
          }
          }
       self1s.onmouseover=function(){
             zz1s.style.opacity="1"
        }
      self1s.onmouseout=function(){
       zz1s.style.opacity="0";
      }     
//回到顶部
       var totop=document.getElementById("totop");
       totop.onclick=function(){
       var obj=document.body.scrollTop==0?document.documentElement:document.body;
         animate(obj,{scrollTop:0})
       }

// 导航的滚动条效果
     var self_box=$(".self-box")[0];
     document.documentElement.scrollTop=1
     var flag1=true;
     var flag2=true;
     if (document.documentElement.scrollTop==1) {
          var scrollTopobj=document.documentElement;
          }else{
          var scrollTopobj=document.body 
          }
     addEvent(window,"scroll",function(){
           var st=scrollTopobj.scrollTop;
           if (st>650) {
            if (flag1) {
             flag1=false;flag2=true;
            animate(self_box,{width:50,height:550},100)
             };
           }else{
            if (flag2) {;
            flag1=true;flag2=false;
            animate(self_box,{width:0,height:0},100)
               }
           }
     })
//楼层跳转效果
         var floor=$(".bags-box");
         var floorbtn=$(".self");
         for (var i = 0; i < floorbtn.length; i++) {
          floorbtn[i].index=i;
          floorbtn[i].onclick=function(){
          var ot=floor[this.index].offsetTop;
            animate(scrollTopobj,{scrollTop:ot})
          }
          }
         addEvent(window,"scroll",function(){
          var up=scrollTopobj.scrollTop;
            for (var i = 0; i < floor.length; i++) {
         var op=floor[i].offsetTop;
           if (up+100>op){
            for (var j = 0; j < floorbtn.length; j++) {
               zzs[j].style.opacity="0";
            };
              zzs[i].style.opacity="1";
           };
        };
         })
// top效果
        var tops=$(".top2")[0];
        var top3s=$(".top3")[0];
        var wechat=$(".wechat")[0];
        var appphone=$(".appphone")[0];
        var my=$(".yitai")[0];
        var myList=$(".top-linkitem")[0];
       //微信效果   
        hover(tops,function(){
        wechat.style.display="block";
        },function(){
        wechat.style.display="none";
          },200);
        hover(wechat,function(){
          wechat.style.display="block";
         },function(){
          wechat.style.display="none";
          },200);
       // 手机银泰效果
        hover(top3s,function(){
        appphone.style.display="block";
        },function(){
        appphone.style.display="none";
          },200);
        hover(appphone,function(){
          appphone.style.display="block";
         },function(){
          appphone.style.display="none";
          },200);
       //我的银泰效果
        hover(my,function(){
        myList.style.display="block";
        },function(){
        myList.style.display="none";
          },200);
        hover(myList,function(){
          myList.style.display="block";
         },function(){
          myList.style.display="none";
          },200);
//按需加载
  var onloads=$(".onload");
  // console.log(onloads)
  var onls=[];
  for (var i = 0; i <onloads.length; i++) {
    onls.push(onloads[i].offsetTop)
  };
  var doc=getDoc()
  doc.scrollTop=1;
  h=document.documentElement.clientHeight;
  addEvent(window,"scroll",function(){
    var op=doc.scrollTop;
    // console.log(op)
    for (var i = 0; i < onloads.length; i++) {
      if(op+h>onls[i]&&onloads[i].getAttribute("flag")!="true"){
         var imgs=$("img",onloads[i]);
        // console.log(imgs)
        for (var j = 0; j < imgs.length; j++) {
         imgs[j].src=imgs[j].getAttribute("asrc")
       }
       onloads[i].setAttribute("flag",true);
      }
    };
  })
} 