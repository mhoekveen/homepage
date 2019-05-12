function getStatus(url, el) {
    fetch(url)
    .then(function(data){
        el.className += " up";
    })
    .catch(function(error) {
        console.log(error);
        el.className += " down";
    });
}

function checkService(url, service, el) {
    //Get 1 second of process count for the given service user
    var call = url + '?chart=groups.processes&after=0&before=-1&points=1&dimension=' + service;
    fetch(call)
    .then(response => response.json())
    .then(function(data){
        var processes = data.data[0][1];
        if (processes >= 1) el.className += " up";
        else el.className += " down";
    })
    .catch(function(error) {
        console.log(error);
        el.className += " down";
    });
}

function loadStati() {
    var stati = document.getElementsByClassName('status');
    Array.from(stati).forEach((status) => {
        status.className = "status";
        var service = status.getAttribute("service");
        if (service){
            checkService(status.getAttribute("url"), service, status);
        } else {
            getStatus(status.getAttribute("url"), status);
        }
    });
}