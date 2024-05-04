// ymaps.ready(function () {
//     var map = new ymaps.Map('map', {
//         center: [55.751574, 37.573856],
//         zoom: 9,
//         controls: ['geolocationControl']
//     });
// });
//

ymaps.ready(function () {


    var map;
    ymaps.geolocation.get().then(function (res) {
        var mapContainer = $('#map'),
            bounds = res.geoObjects.get(0).properties.get('boundedBy'),
            // Рассчитываем видимую область для текущей положения пользователя.
            mapState = ymaps.util.bounds.getCenterAndZoom(
                bounds,
                [mapContainer.width(), mapContainer.height()]
            );
        console.log(bounds);
        createMap(mapState);
    }, function (e) {
        // Если местоположение невозможно получить, то просто создаем карту.
        createMap({
            center: [55.751574, 37.573856],
            zoom: 2
        });
    });

    function createMap (state) {
        map = new ymaps.Map('map', state);
    }

    var geolocation = ymaps.geolocation;


    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        map.geoObjects.add(result.geoObjects);

        let locationText = result.geoObjects.get(0).properties.get('text');
        console.log(locationText);
        console.log(1, result.geoObjects.get(0).properties.get('boundedBy'));
        console.log(1, result.geoObjects.get(0).properties.getAll());
    });
});











// var location = ymaps.geolocation;
// var myMap = new ymaps.Map('map', {
//     center: [55.76, 37.64],
//     zoom: 10
// }, {
//     searchControlProvider: 'yandex#search'
// });
//
// // Получение местоположения и автоматическое отображение его на карте.
// location.get({
//     mapStateAutoApply: true
// })
//     .then(
//         function(result) {
//             // Получение местоположения пользователя.
//             var userAddress = result.geoObjects.get(0).properties.get('text');
//             var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
//             // Пропишем полученный адрес в балуне.
//             result.geoObjects.get(0).properties.set({
//                 balloonContentBody: 'Адрес: ' + userAddress +
//                     '<br/>Координаты:' + userCoodinates
//             });
//             myMap.geoObjects.add(result.geoObjects)
//         },
//         function(err) {
//             console.log('Ошибка: ' + err)
//         }
//     );
//
