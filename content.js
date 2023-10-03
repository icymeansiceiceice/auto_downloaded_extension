chrome.runtime.onMessage.addListener(getMessage);

function getMessage(message,sender,sendResponse){
        let username = document.getElementById('inputEmail');  
        let password = document.getElementById('inputPassword');
        username.value='Aye Chan Htun Naing';
        password.value = 'l5ygn';

        let submit = document.querySelector('.btn-signin');
        setTimeout(()=>{
                submit.click() ,5000
            });
}

