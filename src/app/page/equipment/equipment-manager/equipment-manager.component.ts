import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
@Component({
    selector: 'equipment-manager',
    templateUrl: 'equipment-manager.component.html',
    styleUrls:['equipment-manager.component.css']
})

export class EquipmentManagerComponent implements OnInit {
    
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
     //上传图片
     fileList = [];
      previewImage = '';
      previewVisible = false;
      loading = false;
      avatarUrl: string;
    
      constructor(private msg: NzMessageService) {}
      handlePreview = (file: UploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
      }
      // beforeUpload = (file:UploadFile) => {
      //   return new Observable((observer: Observer<boolean>) => {
      //     const isJPG = file.type === 'image/jpeg';
        //   if (!isJPG) {
        //     this.msg.error('You can only upload JPG file!');
        //     observer.complete();
        //     return;
        //   }
          // const isLt2M = file.size / 1024 / 1024 < 2;
          // if (!isLt2M) {
          //   this.msg.error('Image must smaller than 2MB!');
          //   observer.complete();
          //   return;
          // }
          // check height
        //   this.checkImageDimension(file).then(dimensionRes => {
        //     // if (!dimensionRes) {
        //     //   this.msg.error('Image only 300x300 above');
        //     //   observer.complete();
        //     //   return;
        //     // }
    
        //     observer.next(isJPG && isLt2M && dimensionRes);
        //     observer.complete();
        //   });
      //   });
      // }
    
    //   private getBase64(img: File, callback: (img: string) => void): void {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result.toString()));
    //     reader.readAsDataURL(img);
    //   }
    
    //   private checkImageDimension(file: File): Promise<boolean> {
    //     return new Promise(resolve => {
    //       const img = new Image(); // create image
    //       img.src = window.URL.createObjectURL(file);
    //       img.onload = () => {
    //         const width = img.naturalWidth;
    //         const height = img.naturalHeight;
    //         window.URL.revokeObjectURL(img.src);
    //         resolve(width === height && width >= 300);
    //       };
    //     });
    //   }
    ngOnInit() { }
}