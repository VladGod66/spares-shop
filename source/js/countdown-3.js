//Программа обратного таймера до события

//Находим элемент вывода старой цены и читаем цену
const oldPrice3 = document.querySelector('.action-3 .action__old-price');
//Находим элемент вывода новой цены
let newPrice3 = document.querySelector('.action-3 .action__new-price');
//Находим элемент вывода сообщения
const message3 = document.querySelector('.countdown-3 .countdown__text');
//Находим элемент отображения таймера
const timer3 = document.querySelector('.countdown-3 .countdown__wrapper');

//Определяем дату и время окончания отсчёта обратного таймера
const targetDate3 = new Date('2023-11-21T00:00:00');

//Функция однократного расчёта времени до события
function updateCountdown() {
  //Получаем текущую дату
  const now = new Date();
  //Рассчитываем оставшееся врямя до окончания отсчёта
  const remainingTime = targetDate3 - now;
  //Если акция завершена
  if (remainingTime <= 0) {
    //Возвращаем доакционную цену
    newPrice3.textContent = oldPrice3.textContent;
    //Убираем акционную цену
    oldPrice3.style.display = 'none';
    //Выоводим сообщение об окончании акции
    message3.textContent = 'Акция закончилась...';
    //Удаляем таймер
    timer3.style.display = 'none';
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
  document.getElementById('days-3').innerText = days.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся часов до события
  document.getElementById('hours-3').innerText = hours.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся минут до события
  document.getElementById('minutes-3').innerText = minutes.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся секунд до события
  document.getElementById('seconds-3').innerText = seconds.toString().padStart(2, '0');
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);
