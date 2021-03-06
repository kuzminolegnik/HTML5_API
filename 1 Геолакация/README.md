## Геолакация

* Геолокация позволяет определять географическое место положение пользователя.
Является встроенным свойством объекта `navigator.geolocation`:
    * `getCurrentPosition(successCallback, errorCallback, params)` - определение позиции. Функция выполняется асинхронно.
    *Браузер запращивает разрешение на ипользование апи у пользователя.*
        * `successCallback` - параметр функция обратного вызова получает объект `position`в качестве параметра, который имеет два свойства:
            * `timestamp` - временная метка обратного вызова.
            * `coords` - объект с координатами положения:
                * `latitude` - широта.
                * `longitude` - долгота.
                * `accuracy` - точность измеряемая в метрах.
        * `errorCallback` - параметр функция обратного вызова на случай если не одалось определить положение пользователя.
            * `positionError` - объект ошибки, который содержит:
                * `code` - код ошибки. Возможные ошибки:
                    * `1` - пользователь не одобрил запрос на получения геоположения 
                    * `2` - техническая ошибка. Аналог 500 ошибки сервера
                    * `3` - превышено время ожидания.
                * `message` - описание ошибки.
        * `params` - обект опций определения геолакации.
            * `enableHighAccuracy` - вкл/выкл высокоточное определение положения.
            * `timeout` - максимально время запроса в мс.
            * `maximumAge` - кеширование данных о месте положения клиента в мс.
    * `watchPosition(successCallback, errorCallback, params)` - полный аналог метода `getCurrentPosition` с той лиш разницей, 
    что он вызывается переодически (включается отслеживание клиента) и возвращает дескриптор цикла.
    * `clearWatch(descriptorWatch)` - удаляет отслеживание позиции.
        * `descriptorWatch` - дескриптор, который возврашает метод `watchPosition`
* Для более удобного отображения для пользователей можно использовать карты [GOOGLE](https://developers.google.com/maps/documentation/javascript/?hl=ru)
 и [YANDEX](https://tech.yandex.ru/maps/jsapi/)