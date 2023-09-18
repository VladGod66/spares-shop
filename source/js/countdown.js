//Программа обратного таймера до события

//Находим элемент вывода старой цены и читаем цену
const oldPrice = document.querySelector('.action .action__old-price');
//Находим элемент вывода новой цены
let newPrice = document.querySelector('.action .action__new-price');
//Находим элемент вывода сообщения
const message = document.querySelector('.countdown .countdown__text');
//Находим элемент отображения таймера
const timer = document.querySelector('.countdown .countdown__wrapper');
//Определяем дату и время окончания отсчёта обратного таймера
const targetDate = new Date('2023-10-01T00:00:00');

//Функция однократного расчёта времени до события
function updateCountdown() {
  //Получаем текущую дату
  const now = new Date();
  //Рассчитываем оставшееся врямя до окончания отсчёта
  let remainingTime = targetDate - now;
  //Если акция завершена останавливаем счётчик
  if (remainingTime <= 0) {
    newPrice.textContent = oldPrice.textContent;
    oldPrice.style.display = 'none';
    message.textContent = 'Акция закончилась...';
    timer.style.display = 'none';
  }

  //Расчитываем сколько полных суток осталось до события
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  //Расчитываем сколько полных часов в последних (неполных) сутках осталось до события
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //Расчитываем сколько полных минут в последнем (неполном) часе осталось до события
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  //Расчитываем сколько полных секунд в последней (неполноой) минуте осталось до события
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  //Вставляем в DOM количество оставшихся суток до события
  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся часов до события
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся минут до события
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся секунд до события
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);
