## Работа с файлами

* В JavaScript не возможность работать с файловой системой на прямую, но есть возможность над работай с файлами, 
которые выбрал пользователь. Пример: Указал в поле `<input type="file"/>` или переташил в поле `drag and drop`.
* Список прикрепленных файлов находится в свойстве элемента (`<input type="file"/>`) `files`, который является коллекцией 
имеет ред свойств:
    * `name` - название файла.
    * `size` - размер 
    * `type` - mime type файла
* Для обработки файлов существует конструктор `FileReader()`, экземпляр класса имеет след. методы и свойства:
    * `onload` - событие, которое срабытывает после обработки файла. 
    * `result` - содержит результат чтения файла.
    * `readAsText(file, encoding)` - чтение файла и преобразование его в обычный текст. Результат поподает в свойство `result`.
        * `file` - объект файла.
        * `encoding` - кодировка файла. По умолчанию стоит `utf-8`.
    * `readAsBinaryString` - преобразование содержимое файла в бинарные данные.
    * `readAsArrayBuffer` - преобразует содержимое файла в объект `Array` с бинарными данными.
    * `readAsDataURL` - сеарилизует файл в объект `BASE64`.