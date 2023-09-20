//Скрипт смены группы товаров

//Находим список групп товаров в навигации
const navGoods = document.querySelector('.list-goods');
//Создаём массивоподобную коллекцию классов групп товаров
const goods = document.querySelectorAll('.goods__link');
//Определяем количество групп товоров
const goodsCount = goods.length;

//Функция смены активного элемента меню
const changeActivElement = (index) => {
  for (let goods__link of goods) {
    goods__link.classList.remove('goods__link--current')
  }
  goods[index].classList.add('goods__link--current')
}

//Колбэк функция переключения слайдера на кликнутую позицию в индикаторе
//Для каждого элемента массивоподобной коллекции точек индикатора
goods.forEach((goods__link, index) => {
  //При клике на любую пункт меню товаров получаем индекс кликнутого пункта меню
  goods__link.addEventListener('click', () => {
  //Запускаем функцию смены активного элемента
  changeActivElement(index);
  })
})
