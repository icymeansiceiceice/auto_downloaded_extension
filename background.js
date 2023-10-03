let login = document.getElementById('login');

if(login){
    login.addEventListener('submit',function(e){
        e.preventDefault();
        let params = {
            active : true,
            currentWindow:true
        }
        chrome.tabs.query(params,gotTab);
        function gotTab(tab){
            let name = document.getElementById('name').value;
            let pass = document.getElementById('password').value;
            let data = {
                name : name,
                password : pass
            }
            chrome.tabs.sendMessage(tab[0].id,data);
        }
    })
}

