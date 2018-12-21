import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'storeBackstage',
    templateUrl: 'backstage.component.html',
    styleUrls:["backstage.component.css"]
})

export class BackstageComponent implements OnInit {
    constructor(private translate: TranslateService){
        translate.addLangs(['zh_cn', 'en','zh_tw']);
        translate.setDefaultLang('zh_cn');
        let broswerLang = translate.getBrowserLang();
        translate.use(broswerLang.match(/en|zh-cn/) ? broswerLang : 'zh-cn');
      }
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

    ngOnInit() { }
}