# Выполнение тестового задания

ТЗ - pdf в корне репозитория

Функционал добавления элемента на страницу реализовал с использованием класса самого элемента. Анимация управляется из скрипта на JS.
Canvas не стал использовать так как его использование в этом задании мне показалось не очень уместным. С SVG не так тесно взаимодействовал для того чтобы реализовать на нем нужный функционал.

Блок имеет API для управления состоянием - в экземпляре класса можно вызвать соответствующий метод (hide, show, startAnimation, etc.) и будет произведено соответствующее действие.
В самом кассе создаются элементы для управления его состоянием. В принципе их можно вынести из класса, но так как задача небольшая, решил не проводить дальнейшую декомпозицию.

Адаптацию под ориентацию экрана реализовал через медиа-запросы. Постарался не забыть про БЭМ.
По семантике - числовое поле сделано через инпут, а для тогглов кнопка и чекбокс мне показались не очень подходящими элементами, поэтому сделал на дивах. При необходимости могу сделать чекбокс.

Мои контакты:
- телевон: 89039797681
- email: boy-ram@mail.ru
- tg: @hwitr_jice

С уважением, Сархан Байрамов