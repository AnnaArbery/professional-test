## Проект тестирование с регистрацией

`react` `webpack` `eslint` `react-form-hook` `redux-toolkit` `taiwind` `firebase`

Форма с валидацией - необходимо заполнить данные о себе, после этого появлется тест с выбором утвеждений из предложенного списка и таблица с оценкой определенных позиций.  
На последнем шаге так же можно проверить введенные данные в модалке единым списком и отослать. Данные отправляются в `firebase` (настройкой ограничений по домену git-проекта).

`npm run start` - запуск разработки  
`npm run build` - запуск сборки  
`npm run analyz` - анализ сборки
`npm run analyz` - анализ сборки

### Переменные окружения

URL_STEPS="./store/steps.json"  
URL_TABS="./store/tabs.json"  
URL_CONTENT="./store/content.json"  
FIREBASE_API_KEY  
FIREBASE_AUTH_DOMAIN  
FIREBASE_PROJECT_ID  
FIREBASE_STORAGE_BUCKET  
FIREBASE_MESSAGING_SENDER_ID  
FIREBASE_APP_ID

### Дополнительные ветки:

`react-datapick` - тяжелый скрипт датапикера  
`jsCalendar` - самый легкий скрипт датапикера, но с необходимостью доп.настроек

### Доработать

./src/components/UI/DatepickerCal/DatepickerCal.tsx - типизация ref c datapicker  
./src/hooks/useClickOutside.ts - типизация ref, target  
./src/hooks/useScript.ts - типизация созданного document.querySelector, аттрибутов  
./src/hooks/useFetchRedux.ts - cb
