window.onload = ()=> {
  let url = location.href;
  if (url == "http://mobile.twitter.com/home") {
    window.setTimeout(hoge, 1000);

    function hoge(){
        document.querySelectorAll('div[data-testid=ScrollSnap-List] a[href="/home"]')[1].click();
    }
  } 
}
