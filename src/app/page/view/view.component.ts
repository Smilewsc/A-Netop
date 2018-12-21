import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'storeView',
    templateUrl: 'view.component.html',
    styleUrls:['view.component.css']
})

export class ViewComponent implements OnInit {
    constructor() { }
    public chartOption = {
            grid:{
            bottom:'10%',
            borderWidth:1
            },
            color:['#F7A35B','#3598DB','#00A65A','#DBDBDB'],
            tooltip: {
            trigger:'axis',
            axisPointer:{
            type:'cross',
            label: {
            backgroundColor: '#283b56'
            }
            }
            },
            title:{
                text:' 设备在线趋势（最近7天）',
                left:'center',
                textStyle:{
                   //文字颜色
                   color:'#000',
                   //字体风格,'normal','italic','oblique'
                   fontStyle:'normal',
                   //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                   fontWeight:'bold',
                   //字体系列
                   fontFamily:'sans-serif',
                   //字体大小
           　　　　 fontSize:14
               }
           },
            legend: {
            data:['总数','在线数','在线率'],
            top:20,
            },
            xAxis: [
            {
            type: 'category',
            data: ['11-27','11-28','11-29','11-30','12-01','12-02','12-03'],
            axisPointer: {
            type: 'shadow'
            }
            }
            ],
            yAxis: [
            {
            type: 'value',
            name: '设备在线率',
            nameLocation:'middle',
            nameTextStyle: {
            color:'#F7A35B',
            fontSize:'15px'
            },
            nameGap:55,
            // boundaryGap: ['30%', '30%'],
            min: 0,
            max: 100,
            axisLine:{
            show:false,
            },
            interval: 20,
            axisLabel: {
            formatter: '{value} %',
            margin:10,
            color:'#00A65A',
            },
            axisPointer:{
            lineStyle:{
            type:"dashed"
            }
            }
            },
            {
            type: 'value',
            name: '设备数量',
            nameLocation:'middle',
            nameTextStyle: {
            color:'#3598DB',
            fontSize:'12px'
            },
            min: 0,
            max: 250,
            axisLine:{
            show:false,
            },
            interval: 50,
            axisLabel: {
            formatter: '{value} 台',
            margin:6,
            color:'#3598DB'
            }
            }
            ],
            series: [
            {
            name: '总数',
            type: 'bar',
            yAxisIndex: 1,
            data: [230, 230,230,230,230,230,230],
            itemStyle:{
            color:'#3598DB',
            
            },
            barMaxWidth:'10',
            // barGap: '20%',
            // barCategoryGap: '1%',
            },
            {
            name: '在线数',
            type: 'bar',
            yAxisIndex: 0,
            data: [110/230*100, 120/230*100,130/230*100,140/230*100,142/230*100,144/230*100,145/230*100],
            itemStyle:{
            color:'#00A65A',
            },
            barMaxWidth:'10',
            // barGap: '20%',
            // barCategoryGap: '1%',
            },
            {
            name: '在线率',
            type: 'line',
            yAxisIndex: 1,
            data: [148, 149,149,150,152,153,154],
            itemStyle:{
            color:'#F7A35B',
            }
            }
            ]
    };
    public waringOption={
        tooltip: {
            trigger:'axis',
            axisPointer:{
            type:'cross',
            label: {
            backgroundColor: '#283b56'
            }
            }
            },
        title:{
            text:' 设备报警趋势（最近7天）',
            left:'center',
            textStyle:{
               //文字颜色
               color:'#000',
               //字体风格,'normal','italic','oblique'
               fontStyle:'normal',
               //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
               fontWeight:'bold',
               //字体系列
               fontFamily:'sans-serif',
               //字体大小
       　　　　 fontSize:14
           }
       },
       grid:{

        bottom:'10%'
        },
        xAxis: {
            type: 'category',
            data: ['11-27', '11-28', '11-29', '11-30', '12-1', '12-2', '12-3']
        },
        yAxis: {
            min:0,
            max:6,
            interval: 1,
            axisLabel: {
            formatter: '{value}k',
            margin:10,
            color:'#00A65A',
            },
            type: 'value',
            name:'报警数量（个）',
            nameLocation:'middle',
            nameTextStyle: {
                color:'#95CEFF',
                fontSize:'15px'
                },
            nameGap:'30',
            color:'#10AC64',
            axisLine:{
            show:false,
            }
        },
        series: [{
            data: [5.723,5.502,3.789,4.894,2.127],
            type: 'bar',
            barWidth : 30,
            itemStyle:{
                normal:{
                    color:'#95CEFF'
                }
            },
        }]
    };
    public mwOption={
        tooltip: {
            trigger:'axis',
            axisPointer:{
            type:'cross',
            label: {
            backgroundColor: '#283b56'
              }
             }
            },
            title:{
                text:'本月报警排行榜',
                left:'center',
                textStyle:{
                   //文字颜色
                   color:'#000',
                   //字体风格,'normal','italic','oblique'
                   fontStyle:'normal',
                   //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                   fontWeight:'bold',
                   //字体系列
                   fontFamily:'sans-serif',
                   //字体大小
           　　　　 fontSize:14
               }
           },
        grid:{
            bottom:'10%',
            borderWidth:1
            },
        xAxis: {
            type: 'category',
            data: ['0218003', '0218004', '0218005', '0218006', '0218007', '0218008', '0218009'],
            axisLabel:{
                rotate:'30',
                }
        },
        yAxis: {
            min:0,
            max:200,
            interval:50,
            axisLabel: {
            formatter: '{value}',
            margin:10,
            },
            type: 'value',
            name:'报警数量（个）',
            nameLocation:'middle',
            nameTextStyle: {
            color:'#95CEFF',
            fontSize:'15px'
            },
            nameGap:'30',
            axisLine:{
            show:false,
            }
        },
        series: [{
            data: [20, 62, 91, 34, 20, 130, 120],
            type: 'line',
            itemStyle: {
                normal: {
                    color: "#7CB5EC",
                    lineStyle: {
                        color: "#7CB5EC"
                    }
                }
            }
        }]
    };       
    ngOnInit() {
        
     }
}