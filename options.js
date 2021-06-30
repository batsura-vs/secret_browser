var btn = document.getElementById('click')
btn.addEventListener('click', function () {
    chrome.storage.sync.set({
        key: document.getElementById('key').value
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.style.display = 'block'
        setTimeout(function () {
            status.style.display = 'none';
        }, 1000);
    })
})
window.onload = function () {
    chrome.storage.sync.get({
        key: '12345678'
    }, function (items) {
        document.getElementById('key').value = items.key;
    });
}
