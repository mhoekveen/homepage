const fetchOptions = {
    cache: 'no-cache', //always get up-to-date info
    mode: 'cors'
};
const fetchTimeout = 2000;

//Checks if a certain server is up
//"up" means that the endpoint responds
//with some non error response.
function checkServer(url) {
    return new Promise(function(resolve, reject) {
        const timeout = setTimeout(function() {
            reject();
        }, fetchTimeout);

        fetch(url, fetchOptions)
        .then(function(data){
            clearTimeout(timeout);
            if(data.ok) resolve();
            else reject();
        })
        .catch(function(error) {
            reject();
        });
    });
}

//Check if a service is online at a certain URL
//Uses netdata, with "groups.processes" chart.
//Assumes a service runs in a group with the same name
//and only that service uses the group.
function checkService(url, service, el) {
    //Get 1 second of process count for the given service user
    var call = url + '?chart=groups.processes&after=0&before=-1&points=1&dimension=' + service;
    return new Promise(function(resolve, reject) {
        const timeout = setTimeout(function() {
            reject();
        }, fetchTimeout);
        fetch(call)
        .then(response => response.json())
        .then(function(data){
            clearTimeout(timeout);
            var processes = data.data[0][1];
            if (processes >= 1) resolve();
            else reject();
        })
        .catch(function(error) {
            reject();
        });
    });
}

//Looks at each defined element in the .status div
//If service attribute is defined, check the netdata endpoint
//Else, just ping the endpoint for a get response
function loadStati() {
    var stati = document.getElementsByClassName('status');
    Array.from(stati).forEach((status) => {
        status.className = "status";
        var service = status.getAttribute("service");
        var promise = null;
        if (service){
            promise = checkService(status.getAttribute("url"), service, status);
        } else {
            promise = checkServer(status.getAttribute("url"));
        }
        promise.then(function(data){
            status.className += " up";
        })
        .catch(function(error) {
            status.className += " down";
        });
    });
}