var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onChange = checkPw;
pw2.onChange = comparePw;

function checkId() {
    if(userId.value.length < 4 || userId.value.length > 15){
        alert("4~15자리의 영문과 숫자를 사용하세요");
        userId.querySelector();
    }
}


function checkPw() {			
    if (pw1.value.length < 8) {
alert("비밀번호는 8자리 이상이어야 합니다.");  // 오류 메시지 표시
pw1.value = "";  // ‘비밀번호’ 필드 지움
        pw1.focus();  // 비밀번호를 다시 입력할 수 있게 포커싱
    }
}

function comparePw() {						
    if(pw1.value != pw2.value) {
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";  // ‘비밀번호 확인’ 필드 지움
        pw2.focus();   // 비밀번호를 다시 입력할 수 있게 포커싱
    }
}