import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
    constructor() { //我厉害吧
    }
    choose(){
        // $("#qx").click(function(){
            var zt = getAttrVal("qx");
            $("#tcontent tr").each(function (e) {
                if( zt== "selected"){				
                    if($("#tcontent tr").eq(e).attr("class")=="selected"){
                        $(this).children("td:first").click();
                    }
                    //$("#qx").attr("class",'select');
                    setAttrVal("qx",'select');
                    $("#qx2").hide();
                    $("#qx").show();
                }else{
                    if($("#tcontent tr").eq(e).attr("class")!="selected"){
                        $(this).children("td:first").click();
                    }
                    //$("#qx").attr("class",'selected');
                    setAttrVal("qx",'selected');
                    $("#qx2").show();
                    $("#qx").hide();
                }
                
            });
        // });
    }
    ngOnInit() {
        

           
        $("#tcontent tr").each(function (e) {
            $(this).children("td:first").click(function(){
                if(getQxZt($("#tcontent tr").eq(e).attr("class"))){
                    setAttrVal("qx",'selected');
                    $("#qx2").show();
                    $("#qx").hide();
                }else{
                    setAttrVal("qx",'select');
                    $("#qx").show();
                    $("#qx2").hide();
                }
                if($("#tcontent tr").eq(e).attr("class") == "selected"){
                    $("#tcontent tr").eq(e).children("td:first").html();
                    $("#tcontent tr").eq(e).css("background","");
                    $("#tcontent tr").eq(e).children("td").css("color","");
                    $("#tcontent tr").eq(e).attr("class","select");
                }else{
                    $("#tcontent tr").eq(e).children("td:first").html(`<img style="width:26px ;heigth:26px" src="../../../assets/icon/kuang.svg" />`);
                    $("#tcontent tr").eq(e).css("background","#4cb299");
                    $("#tcontent tr").eq(e).children("td").css("color","#fff");
                    $("#tcontent tr").eq(e).attr("class","selected");
                }
            });
        }); 
       
    }  
}
function getAttrVal(id:string){
    var a =document.getElementById(id);
    return a.getAttribute("class");
}

function setAttrVal(id:string,val:string){
    var a =document.getElementById(id);
    a.setAttribute("class",val);;
}

function getQxZt(zt){
    if(zt == "selected" || zt==null || zt == undefined){
        return false;
    }
    var i = 0;
    $("#tcontent tr").each(function (e) {
        if($("#tcontent tr").eq(e).attr("class")!="selected"){
            i++;
        }
    });
    return i<=1?true:false;
}