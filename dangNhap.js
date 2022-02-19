let btn1= document.querySelector(".btn1")
console.log(btn1.innerHTML);
btn1.addEventListener('click',function (){
    let usernameSU=localStorage.getItem("username")
    let passwordSU=localStorage.getItem("password")
    let username1= document.getElementById("username1").value
    let password1= document.getElementById("password1").value
    if (username1===usernameSU && password1 ===passwordSU){
        alert("Đăng nhập thành công")
        var time = new Date();
        localStorage.time = time;
        time = Date.parse(localStorage.a);
        window.location.replace("./home.html")
    } else{
        alert("Kiểm tra lại thông tin đăng nhập")
    }
})