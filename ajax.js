/* 此项目创建于2016/5/12 */




/*

  function ajax(method,url,async, fn){

    //创建一个Ajax对象
    var ajax = new XMLHttpRequest() || ActiveXObject("Microsoft.XMLHTTP");

    //选择方式提交到url,并选择是否异步
    ajax.open(method, url +"?"+ new Date().getTime(), async);

    //提交
    ajax.send();

    //当状态值发生改变的时候
    ajax.onreadystatechange = function(){
      if( ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }
    }

  }


*/





function ajax(type){
  var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
  this.get = function(url, mess, fn){


    //ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.open("GET", url + "?" + mess + "&" + new Date().getTime(), true);
    ajax.send();

    ajax.onreadystatechange = function(){

      if(ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }else if(ajax.readyState == 4 && ajax.status != 200){
        fn(ajax.status);
      }
    }

  }


  this.post = function(url, mess, fn){

    //var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    ajax.send(mess);

    ajax.onreadystatechange = function(){

      if(ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }else if(ajax.readyState == 4 && ajax.status != 200){
        fn(ajax.status);
      }

    }
  }



}

function Ajax(type){
  return new ajax(type);
}



