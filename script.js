
let url = location.href;
if (url == "https://mobile.twitter.com/home") {
  window.setTimeout(hoge, 1000);
  function hoge(){
      document.querySelectorAll('div[data-testid=ScrollSnap-List] a[href="/home"]')[1].click();
  }
} 
