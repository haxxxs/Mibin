<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>

    <style>
        #map {
            width: 100%;
            height: 100vh;
        }
    </style>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a4bec681-89bc-4176-bc7a-332f82e03309" type="text/javascript"></script>
</head>
<body>
<div class="container">
    <div class="form-container">
        <div id="map"></div>
    </div>
</div>
<script>
    ymaps.ready(init);

    function init() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var userCoords = [position.coords.latitude, position.coords.longitude];

                var map = new ymaps.Map('map', {
                    center: userCoords,
                    zoom: 10
                });

                var addresses = {!! json_encode($addresses) !!};
                var userPlacemark = new ymaps.Placemark(userCoords, {}, {
                    preset: 'islands#redIcon'
                });
                map.geoObjects.add(userPlacemark);

                var routePoints = [userCoords]; // Массив для хранения точек маршрута

                // Функция для построения маршрута через все выбранные точки
                function buildRoute() {
                    // Передаем координаты точек маршрута в формате, понятном Directions API
                    var multiRoute = new ymaps.multiRouter.MultiRoute({
                        referencePoints: routePoints
                    }, {
                        // Включаем оптимизацию маршрута
                        routingMode: 'pedestrian',
                        // Убираем метки на карте
                        wayPointVisible: false,
                        // Убираем все дополнительные объекты
                        boundsAutoApply: true
                    });

                    map.geoObjects.remove(multiRoute); // Удаляем предыдущий маршрут (если есть)
                    map.geoObjects.add(multiRoute); // Добавляем новый маршрут
                }

                // Обработчик клика по метке
                function onPlacemarkClick(coords) {
                    routePoints.push(coords); // Добавляем координаты метки в массив точек маршрута
                    buildRoute(); // Строим маршрут
                }

                // Создаем метки для остальных точек
                addresses.forEach(function(address) {
                    ymaps.geocode(address)
                        .then(function(res) {
                            var firstGeoObject = res.geoObjects.get(0);
                            var coords = firstGeoObject.geometry.getCoordinates();

                            var placemark = new ymaps.Placemark(coords, {}, {
                                preset: 'islands#greenIcon'
                            });

                            placemark.events.add('click', function() {
                                onPlacemarkClick(coords); // Обработка клика по метке
                            });

                            map.geoObjects.add(placemark);
                        });
                });
            });
        } else {
            var map = new ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 10
            });
        }
    }

</script>
</body>
</html>
