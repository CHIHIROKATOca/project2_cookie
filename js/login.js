onload = function() {

    const submit = document.querySelector('input[type="button"]');

    submit.addEventListener("click", ()=>{
        const username = document.querySelector("#usernameLogin");
        // const password = document.querySelector("#passwordLogin");
        let d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        document.cookie = `username = ${username.value};expires=${d.toUTCString()}`;
        // document.cookie = `password = ${password.value};expires=${d.toUTCString()}`;
    })


}