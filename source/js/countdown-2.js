//Программа обратного таймера до события

//Находим элемент вывода сообщения
const message2 = document.querySelector('.countdown-2 .countdown__text');
//Находим элемент отображения таймера
const timer2 = document.querySelector('.countdown-2 .countdown__wrapper');

//Определяем дату и время окончания отсчёта обратного таймера
const targetDate2 = new Date('2023-11-07T00:00:00');

//Функция однократного расчёта времени до события
function updateCountdown() {
  //Получаем текущую дату
  const now = new Date();
  //Рассчитываем оставшееся врямя до окончания отсчёта
  const remainingTime = targetDate2 - now;
  //Если акция завершена останавливаем счётчик
  if (remainingTime <= 0) {
    message2.textContent = 'Акция закончилась...';
    timer2.style.display = 'none';
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
  document.getElementById('days-2').innerText = days.toString().padStart(2, '0');
  //Вставляем в DOM количество о-2').innerText = hours.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся минут до события
  document.getElementById('minutes-2').innerText = minutes.toString().padStart(2, '0');
  //Вставляем в DOM количество оставшихся секунд до события
  document.getElementById('seconds-2').innerText = seconds.toString().padStart(2, '0');
}

// Обновляем счетчик каждую секунду
setInterval(updateCountdown, 1000);
