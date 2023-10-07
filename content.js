chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    let id = document.getElementById('IDToken1');
    let password = document.getElementById('IDToken2');
    let submit = document.querySelector('.button');
    id.value = message.number;
    password.value = message.password;
    submit.click();

    let startDate = message.startDate;
    let endDate = message.endDate;

    chrome.storage.local.set({ startDate: startDate, endDate: endDate }, function() {
        console.log('Data saved to local storage');
    });
});