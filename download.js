chrome.storage.local.get(['startDate', 'endDate'], function(result) {
    let sDate = new Date(result.startDate);
    let eDate = new Date(result.endDate);
    sDate = sDate.toLocaleDateString('en-US');
    eDate = eDate.toLocaleDateString('en-US');
    let validDate = (startDate, endDate, row) => {
        if (convertDate(row) >= startDate && convertDate(row) <= endDate) {
            return true;
        }
        return false;
    }
    let convertDate = (row) => {
        let extract = row.split(' ');
        return new Date(extract[0]).toLocaleDateString('en-US');
    }
    let validFile = (row) => {
        if (row.includes('_statistics_')) {
            return true;
        }
        return false;
    }
    var tableRows = document.getElementsByClassName('table_display')[1].rows;
    download();
    async function download() {
        for (var cur = 1; cur < tableRows.length; cur++) {
            if (validFile(tableRows[cur].cells[1].innerHTML)) {
                if (validDate(sDate, eDate, tableRows[cur].cells[2].innerHTML)) {
                    tableRows[cur].cells[5].querySelector('a').click();
                    await new Promise((resolve) => setTimeout(resolve, 10000));
                }
            }
        }
    }
}); 
// Remove data from local storage 
chrome.storage.local.remove(['startDate', 'endDate'], function () { console.log('Data removed from local storage'); });