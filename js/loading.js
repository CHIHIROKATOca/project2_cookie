window.onload = function(){
    setTimeout(function(){
        var contents = document.getElementById("contents");
        var loading = document.getElementById("showloading");
        loading.style.display = "none";
        contents.style.display = "block";
    },3000);
};