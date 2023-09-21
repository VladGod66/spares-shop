//Скрипт изменения категорий поиска

//Находим список категорий поиска
const searchCats = document.querySelector('.search__list');
//Создаём массивоподобную коллекцию классов категорий поиска
const categories = searchCats.querySelectorAll('.search__link');
//Находим блоков поиска
const searchBloks = document.querySelector('.search-blocks');
//Создаём массивоподобную коллекцию классов блоков поиска
const blocks = searchBloks.querySelectorAll('.search__request')

//Функция смены активного элемента поиска
const changeActivCat = (index) => {
  //Для всех ссылок на категории поиска
  for (let search__link of categories) {
    //Удаляем класс активной категории поиска
    search__link.classList.remove('search__link--active')
  }
  //Добавляем класс активной группы для кликнутой категории поиска
  categories[index].classList.add('search__link--active')

  //Для всех ссылок на блоки поиска
  for (let search__request of blocks) {
    //Удаляем класс активной категории поиска
    search__request.classList.remove('search__request--active')
  }
  //Добавляем класс активной группы для кликнутой категории поиска
  blocks[index].classList.add('search__request--active')
}

//Колбэк функция переключения активной категории поиска на кликнутую группу
//Для каждого элемента массивоподобной коллекции групп товаров
categories.forEach((search__link, index) => {
  //При клике на любой пункт меню товаров получаем индекс кликнутого пункта меню
  search__link.addEventListener('click', () => {
  //Запускаем функцию смены активной группы
  changeActivCat(index);
  })
})

