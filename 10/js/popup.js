function openPop() {
    var newWin = window.open("popup.html","","width=400 , height=400");
    if(newWin == null){
        alert("팝업이 차단되어 있습니다. 팝업차단을 해체하고 새로고침 해주세요");
    }
}

window.onload = openPop;
