var input = document.getElementById('userinput');
var when = document.getElementById('dat');
var money = document.getElementById('cost');
var button = document.getElementById('enter');
var ol = document.getElementById('ord');
var button2 = document.getElementById("totamt");


money.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Tab') {
        return; 
    }
    if (isNaN(event.key)) {
        event.preventDefault(); 
    }
});


button.addEventListener('click', function(){
    var data = `Event: ${input.value} Date: ${when.value} cost: ${money.value}`;

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(data));
    
    var closeButton = document.createElement('button');
    closeButton.innerHTML = '\u00D7'; // Unicode for '×'
    closeButton.className = 'close';
    closeButton.onclick = function() {
        this.parentElement.remove(); 
    };
    li.appendChild(closeButton); 

    ol.appendChild(li);
});

button2.addEventListener("click", function() {
    var listItems = ol.getElementsByTagName("li");
    var total = 0;

    for (var i = 0; i < listItems.length; i++) {
        var text = listItems[i].textContent;
        var regex = /cost:\s*([\d.]+)/; 
        var match = regex.exec(text); 
        if (match) {
            var value = parseFloat(match[1]); 
            total += value; 
        }
    }

    alert("The total expenditure is: " + total.toFixed(2)); 
});
