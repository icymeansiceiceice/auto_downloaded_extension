let submitBtn = document.getElementById('login');

if (submitBtn) {
  submitBtn.addEventListener('submit', function (e) {
    e.preventDefault();

    let params = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(params, gotTab);

    function gotTab(tab) {
      let id = document.getElementById('thincID').value;
      let pass = document.getElementById('thincPassword').value;
      let sDate = document.getElementById('startDate').value;
      let eDate = document.getElementById('endDate').value;

      let data = {
        number: id,
        password: pass,
        startDate: sDate,
        endDate: eDate
      };

      chrome.tabs.sendMessage(tab[0].id, data);
    }
  });
}
