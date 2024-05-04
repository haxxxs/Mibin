<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Карты</title>
        <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a4bec681-89bc-4176-bc7a-332f82e03309" type="text/javascript"></script>
        <script src="http://127.0.0.1:8000/js/geolocation_control2.js" type="module"></script>
        <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
        <style>
            html, body, #map {
                width: 100%; height: 100%; padding: 0; margin: 0;
            }
        </style>




{{--                <script src="https://api-maps.yandex.ru/v3/?apikey=a4bec681-89bc-4176-bc7a-332f82e03309&lang=ru_RU"></script>--}}
{{--        <script>--}}
{{--            initMap();--}}
//
{{--            async function initMap() {--}}
{{--                await ymaps3.ready;--}}

{{--                const {YMap, YMapDefaultSchemeLayer} = ymaps3;--}}

{{--                const map = new YMap(--}}
{{--                    document.getElementById('map'),--}}
{{--                    {--}}
{{--                        location: {--}}
{{--                            center: [37.588144, 55.733842],--}}
{{--                            zoom: 10--}}
{{--                        }--}}
{{--                    }--}}
{{--                );--}}

{{--                map.addChild(new YMapDefaultSchemeLayer());--}}
{{--            }--}}
{{--            var location = ymaps3.geolocation.get();--}}

{{--            // Асинхронная обработка ответа.--}}
{{--            location.then(--}}
{{--                function(result) {--}}
{{--                    // Добавление местоположения на карту.--}}
{{--                    myMap.geoObjects.add(result.geoObjects)--}}
{{--                },--}}
{{--                function(err) {--}}
{{--                    console.log('Ошибка: ' + err)--}}
{{--                }--}}
{{--            );--}}
{{--        </script>--}}

    </head>


    <body class="font-sans antialiased dark:bg-black dark:text-white/50">
    <div id="map" style="width: 600px; height: 400px"></div>
as
    </body>

</html>
