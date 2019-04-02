var gInterval;

document.getElementById('btn1').addEventListener('click', function() {
    var cleardata;
    clearInterval(gInterval);
    function action() {
        var dataFrom = document.getElementById('txtbx1').value;        
        if (dataFrom == "") {
            var para = generateP();
            document.body.appendChild(para);
        } else {
            var char = dataFrom[0];
            dataFrom = dataFrom.substring(1, dataFrom.length);
            document.getElementById('txtbx2').value += char;
            document.getElementById('txtbx1').value = dataFrom;
        }
        cleardata = dataFrom;
    }
    var interval = setInterval(function() {
        action();
        if(cleardata == ""){
            clearInterval(interval);
        }
    }, 1000);
    gInterval = interval;
    pauseTransfer(interval);
});

document.getElementById('btn3').addEventListener('click', function() {
    var cleardata;
    clearInterval(gInterval);
    function action() {
        var dataFrom = document.getElementById('txtbx2').value;
        if (dataFrom == "") {
            var para = generateP();
            document.body.appendChild(para);
        } else {
            var reverse =dataFrom.split("").reverse().join("");
            var char = reverse[0];
            reverse = reverse.substring(1, reverse.length);
            dataFrom = reverse.split("").reverse().join("");
            var temp = document.getElementById('txtbx1').value;
            temp = char + temp;
            document.getElementById('txtbx1').value = temp;
            document.getElementById('txtbx2').value = dataFrom;
        }
        cleardata = dataFrom;
    }
    var interval = setInterval(function () {
        action();
        if (cleardata == "") {
            clearInterval(interval);
        }
    }, 1000);
    gInterval = interval;
    pauseTransfer(interval);
});

function pauseTransfer(data) {
    document.getElementById('btn2').addEventListener('click', function () {
        clearInterval(data);
    });
}

function generateP() {
    var para = document.createElement('p');
    para.setAttribute('class', 'gen-para');
    return para;
}

