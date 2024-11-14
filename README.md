## Проект тестирование с регистрацией

`react` `webpack` `eslint` `react-form-hook` `redux-toolkit` `taiwind` `firebase`

Форма с валидацией - необходимо заполнить данные о себе, после этого появлется тест с выбором утвеждений из предложенного списка и таблица с оценкой определенных позиций.  
На последнем шаге так же можно проверить введенные данные в модалке единым списком и отослать. Данные отправляются в `firebase` (настройкой ограничений по домену git-проекта).

`npm run start` - запуск разработки  
`npm run build` - запуск сборки  
`npm run analyz` - анализ сборки

### Переменные окружения

URL_STEPS  
URL_TABS  
URL_CONTENT  
FIREBASE_API_KEY  
FIREBASE_AUTH_DOMAIN  
FIREBASE_PROJECT_ID  
FIREBASE_STORAGE_BUCKET  
FIREBASE_MESSAGING_SENDER_ID  
FIREBASE_APP_ID

### Дополнительные ветки:

`react-datapick` - тяжелый скрипт датапикера  
`jsCalendar` - самый легкий скрипт датапикера, но с необходимостью доп.настроек
