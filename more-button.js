let showMoreButtons = document.querySelectorAll('.more__button');

showMoreButtons.forEach((button) => {
    button.addEventListener('click', function(evt){
        evt.preventDefault(); 
        let targetId = evt.target.getAttribute("data-elem-id");
        
        changeButton(button, targetId); // визуал кнопки
        showOrHideElements(targetId); // поиск и скрытие элементов
    });
});

// визуал кнопки
function changeButton(currentButton, targetId) {
    let buttonName;
    
    if (targetId === "brandsList") {
        buttonName = "Показать всё";
    }

    if (targetId === "infoText") {
        buttonName = "Читать далее";
    }

    // currentButton.textContent = currentButton.textContent === 'Скрыть' ? buttonName : 'Скрыть';

    if (currentButton.textContent === 'Скрыть') {
        currentButton.textContent = buttonName;
    } else {
        currentButton.textContent = 'Скрыть';
    }

    currentButton.classList.toggle('more__button--show');  
    currentButton.classList.toggle('more__button--hide');  
}

 // поиск и скрытие элементов
 function showOrHideElements(targetId) {
    if (targetId === 'brandsList') {
        let hiddenElements = document.getElementById(targetId).children;
        for (let i = 8; i < hiddenElements.length; i++){
            hiddenElements[i].classList.toggle('hidden');
        }
    } else {
    let hiddenElements = document.getElementById(targetId);
    hiddenElements.classList.toggle('hidden');
    }

    // let hiddenElements = [];

    // if (targetId === 'brandsList') {
    //     let elements = document.getElementById(targetId).children;
    //     for (let i = 8; i < elements.length; i++){
    //         hiddenElements.push(elements[i]);
    //     }
    // } else {
    //     hiddenElements.push(document.getElementById(targetId));
    // }

    // hiddenElements.forEach(e => {
    //     e.classList.toggle('hidden');
    // })
}