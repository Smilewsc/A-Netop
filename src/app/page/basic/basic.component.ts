import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { style } from '@angular/animations';
import * as $ from 'jQuery';
import { A11yModule } from '@angular/cdk/a11y';

//切换语言
type Language = 'en' | 'de';

@Component({
    selector: 'storeBasic',
    templateUrl: 'basic.component.html',
    styleUrls: ['basic.component.css']
})

export class BasicComponent implements OnInit {
  text1:any="";
  areaState:string;
  area:any=[
      {
        value:"上海",
        lable:"上海"
      },
      {
        value:"市区",
        lable:"市区"
      },
      {
        value:"区外",
        lable:"区外"
      }
    ]  
    deviceState:string;
    device:any=[
        {
            value:"未派发",
            lable:"未派发"
        },
        {
            value:"已派发",
            lable:"已派发"
        },
        {
            value:"已安装",
            lable:"已安装"
        }
        
  ]
  serviceState:string;
  service:any=[
      {
          value:"正常",
          lable:"正常"
      },
      {
          value:"维修中",
          lable:"维修中"
      },
      {
          value:"报废",
          lable:"报废"
      }
      
  ]

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
   
    index = 0;
    tabs = [ 'Tab 1', 'Tab 2' ];

  closeTab(tab: string): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
  }

  ngOnInit() { 
  }

  jump(){

    let content=this.text1;
    $(".snav-bar li:contains("+content+")").click();
  }
    // ngAfterContentInit(){
    //  $(".tabs-ccn").hide();
    // }
    
    // drawDiv(e){
    //   document.getElementById(e+"_div").style.display="";
      
    // }

    // hideDiv(e){
    //   document.getElementById(e).style.display="none";
    //   $(".tb").remove();
    // }
  }


 