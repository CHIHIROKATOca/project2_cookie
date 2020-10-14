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
       //split data from cookie
       const cookieInfo = document.cookie;
       const cookieArray = cookieInfo.split(';');
       const username = cookieArray[0].split('=')[1].toUpperCase();
       //add the data from cookie to html
       console.log(username)
       const userSpan =  document.querySelector('.username-login span');
       userSpan.textContent = `Welcome! ${username}`;
       console.log(username)
   }
