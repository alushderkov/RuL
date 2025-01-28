async function firstPageOnLoad() {

    try {

        const response = await fetch('/api/firstPageOnLoad');
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        const jsonData = await response.json();

        document.getElementsByClassName('field__block-text')[0].innerHTML = jsonData.task;
        document.getElementsByClassName('field__block-text')[1].innerHTML = jsonData.rule;


    } catch(error) {
        console.error('Ошибка:', error);
    }

}

document.addEventListener('DOMContentLoaded', firstPageOnLoad);