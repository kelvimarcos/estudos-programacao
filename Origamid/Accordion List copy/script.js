function initTabNav() {

    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {

        tabContent[0].classList.add('ativo');



        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {

const accordionList = document.querySelectorAll('.js-accordion dt');

const ativeClass = 'ativo';

if (accordionList.length) {

accordionList[0].classList.add('ativeClass');
accordionList[0].nextElementSibling.classList.add('ativeClass');

function activeAcordion() {
    this.classList.toggle('ativeClass');
    this.nextElementSibling.classList.toggle('ativeClass');
}

accordionList.forEach((item) => {

    item.addEventListener('click', activeAcordion);


})
}
}

initAccordion();