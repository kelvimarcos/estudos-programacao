


const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent sect ion');

function activeTab(index) {
    tabContent[index].classList.add('ativo');

    
    };