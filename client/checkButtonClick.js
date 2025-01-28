const ToF = document.getElementsByClassName('ToF')[0];
const sendButton = document.getElementsByClassName('sendButton')[0];
const editableInput = document.getElementById('editableInput');
const task = document.getElementsByClassName('field__block-text')[0];
const rule = document.getElementsByClassName('field__block-text')[1];
let page = 0;

editableInput.addEventListener('focus', () => {
    if (editableInput.innerText === editableInput.getAttribute('placeholder')) {
        editableInput.innerText = '';
    }
});
editableInput.addEventListener('blur', () => {
    if (!editableInput.innerText.trim()) {
        editableInput.innerText = editableInput.getAttribute('placeholder');
    }
});

const maxLength = 100;

editableInput.addEventListener('input', () => {
    // Если длина текста превышает допустимую
    if (editableInput.innerText.length > maxLength) {
        // Обрезаем текст до допустимой длины
        editableInput.innerText = editableInput.innerText.slice(0, maxLength);
        // Перемещаем курсор в конец текста
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(editableInput);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
});

sendButton.addEventListener('click', async () => {

    const dataToSend = {
        editableInput: editableInput.innerText,
        page,
    };

    try {

        const response = await fetch ('/api/checkButtonClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке данных');
        }

        const jsonData = await response.json();
        console.log('Ответ сервера:', jsonData);

        ToF.innerHTML = jsonData.ToF;
        editableInput.innerText = editableInput.getAttribute('placeholder'); 
        task.innerHTML = jsonData.task;
        rule.innerHTML = jsonData.rule;
        page = jsonData.page; 

    } catch (error) {
        console.error('Ошибка:', error);
    }

});