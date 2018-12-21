import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { style } from '@angular/animations';

//切换语言
type Language = 'en' | 'de';

@Component({
    selector: 'storeBsc',
    templateUrl: 'bsc.component.html',
    styleUrls: ['bsc.component.css']
})

export class BscComponent implements OnInit {

  constructor(private translate: TranslateService){
    //增加语言类型
    translate.addLangs(['zh_cn', 'en','zh_tw']);
    //设置默认语言
    translate.setDefaultLang('zh_cn');
    //获取浏览器语言
    let broswerLang = translate.getBrowserLang();
    translate.use(broswerLang.match(/en|zh-cn/) ? broswerLang : 'zh-cn');
  }
  
  //通过点击事件改变语言
  switchLanguage = (lang) => {
    console.log(lang);
    this.translate.use(lang);
  }
    show(id){
      if(document.getElementById(id).style.display == "none"){
        document.getElementById(id).style.display="";
      }else{  
        document.getElementById(id).style.display = "none";
      }
    }
    //切换颜色
      setColor(color){
        var nav=document.querySelectorAll('.nav')  as NodeListOf<HTMLElement>;
        var menu=document.querySelectorAll('.ant-menu') as NodeListOf<HTMLElement>;
               
          if(color == '5'){
            for(var i=0;i<nav.length;i++){
               nav[i].style.backgroundColor="#a54545";
            }
            for(var i=0;i<menu.length;i++){
               menu[i].style.backgroundColor='#cf5656';
            }
          }else if(color =='3'){
              for(var i=0;i<nav.length;i++){
                nav[i].style.backgroundColor="#0F6D98";
             }
              for(var i=0;i<menu.length;i++){
                menu[i].style.backgroundColor='#1596D1';
             } 
          }else if(color =='4'){
              for(var i=0;i<nav.length;i++){
                nav[i].style.backgroundColor="#647178";
             }
              for(var i=0;i<menu.length;i++){
                menu[i].style.backgroundColor='#90A3AD';
             } 
          }else if(color =='2'){
              for(var i=0;i<nav.length;i++){
                nav[i].style.backgroundColor="#25323c";
             }
              for(var i=0;i<menu.length;i++){
                menu[i].style.backgroundColor='#486174';
             }
          }else if(color =='6'){
            for(var i=0;i<nav.length;i++){
              nav[i].style.backgroundColor="#a72162";
           }
            for(var i=0;i<menu.length;i++){
              menu[i].style.backgroundColor='#df2c83';
           }
          }else if(color =='1'){
            for(var i=0;i<nav.length;i++){
              nav[i].style.backgroundColor="#48a991";
           }
            for(var i=0;i<menu.length;i++){
              menu[i].style.backgroundColor='#4fb99f';
            }
          }    
        }
    // setColor(color){
    //   var nav=document.getElementsByClassName('nav');
    //   var body=document.getElementsByTagName('body');
    //   var box1=document.querySelectorAll('a,.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active,.ing-star-inserted');
    //   if(color == '5'){
    //     for(var i=0;i<nav.length;i++){
    //       nav[i].style.backgroundColor="#a54545";
    //     }
    //     var box= document.querySelectorAll('.add-user,.dc-user,button,.ant-menu');
    //     for(var i=0;i<box.length;i++){
    //       box[i].style.backgroundColor=''#cf5656;
    //     }
    //     for(var i=0;i<box1.length;i++){
    //       box1[i].style.color='#f46565';
    //     }
        
    //   }else{
        
    //   }
    // }
    // shows(){
      
    //   if(document.getElementById("zyf").style.display== "none"){
    //     document.getElementById("zyf").style.display="";
    //   }else{  
    //     document.getElementById("zyf").style.display = "none";
    //   }
    // }
    index = 0;
    tabs = [ 'Tab1', 'Tab2' ];
    
  
    closeTab(tab: string): void {
      this.tabs.splice(this.tabs.indexOf(tab), 1);
    }
  
     newTab(): void {
       this.tabs.push('New Tab');
       this.index = this.tabs.length - 1;
     }

    ngOnInit() { 
    }
  }