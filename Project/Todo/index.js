function AddEvent() {
    var text = document.getElementById("text").value;
    var box = document.querySelector('.box');
    var bottomDiv = document.querySelector('.bottom');
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var paragraph = document.createElement('p');
    paragraph.textContent = text;
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            paragraph.style.textDecoration = 'line-through';
        } else {
            paragraph.style.textDecoration = 'none';
        }
    });
    
    cardDiv.appendChild(checkbox);
    cardDiv.appendChild(paragraph);
    bottomDiv.appendChild(cardDiv);
    box.appendChild(bottomDiv);
}
