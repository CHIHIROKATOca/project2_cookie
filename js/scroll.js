window.addEventListener( "scroll" ,function(){

    let scroll = window.pageYOffset;
    
    if( scroll > 2000 ){ 
      document.getElementById("nav").style.backgroundColor = "rgba(53, 48, 45, 1)";
    }else if( scroll > 1000 ){
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 1)';
    }else if( scroll > 500 ){
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 1)';
    }else if( scroll > 0 ){
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 0.5)';
    }else{
      document.getElementById("nav").style.backgroundColor = 'rgba(53, 48, 45, 0)';
    }
  });

  function changeColor() {
   
    document.getElementById("nav").style.backgroundColor = "#35302d";
    
}


function showElementAnimation() {
  var element = document.getElementsByClassName('js-fadein');
  if(!element) return; // 要素がなかったら処理をキャンセル
                      
  var showTiming = window.innerHeight > 768 ? 200 : 80; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset; //スクロール量を取得
  var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
                    
  for(var i=0;i<element.length;i++) { 
    var elemClientRect = element[i].getBoundingClientRect(); 
    var elemY = scrollY + elemClientRect.top; 
    if(scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if(scrollY + windowH < elemY) {
    // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

