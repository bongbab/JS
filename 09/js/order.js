var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function(){
    if(check.checked == true){
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("shippingAddr").value = document.querySelector("#billingAddr").value;
    }
    else {
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }// 체크가 해제되었을 때 check값이 true가 아닐 경우 사용자가 직접 내용을 입력할 수 있게 폼요소를 비워두는 것
});