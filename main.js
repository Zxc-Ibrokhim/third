function saveText() {
    let text = document.getElementById('nameInput').value;
    localStorage.setItem('text', text);
    displayText();
}

function displayText() {
    let savedText = localStorage.getItem('text');
    if (savedText) {
        let outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';

        let words = savedText.split(' ');

        words.forEach((word, index) => {
            let span = document.createElement('span');
            span.innerText = word + ' ';
            span.className = 'font' + ((index % 3) + 1); // Циклично применяем классы
            outputDiv.appendChild(span);
        });
    }
}

// Выводим сохраненный текст при загрузке страницы
window.onload = function() {
    displayText();
}