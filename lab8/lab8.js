function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    out.innerHTML = `
        <div class="frame">
            <div>Дата и время для локали России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время для локали Марокко: ${today.toLocaleString('ar-MA')}</div>
            <div>Дата и время для локали Болгарии: ${today.toLocaleString('bg-BG')}</div>
            <div>Дата и время для локали Албании: ${today.toLocaleString('sq-AL')}</div>
            <div>Дата и время для локали Уэльс: ${today.toLocaleString('cy-GB')}</div>
            <div>Дата и время для локали Греции: ${today.toLocaleString('el-GR')}</div>
            <div>Текущий год: ${today.getFullYear()}</div>
            <div>Текущий месяц: ${today.getMonth()}</div>
            <div>Текущая дата: ${today.getDate()}</div>
            <div>День недели: ${weekDays[today.getDay()]}</div>
        </div>

    `;
}
