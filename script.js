console.log("Hello world" );
const btn = document.getElementById("myButton");
btn.onclick = function() {
    alert("تم تشغيل الحدث عبر خاصية onclick");
};
const btn2 = document.getElementsByClassName("sss")[0];
btn2.onclick = function() {
    alert("صوره");
};