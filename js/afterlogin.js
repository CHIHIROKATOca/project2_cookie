onload = function(){
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