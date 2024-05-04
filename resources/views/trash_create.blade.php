<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 10px;
        }
        form {
            margin-bottom: 20px;
        }
        input[type="text"],
        input[type="file"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ced4da;
            border-radius: 5px;
            box-sizing: border-box;
        }
        button {
            background: linear-gradient(#13563a, #35b661);
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        .back{
            background: linear-gradient(#561313, #b63535);
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        #map {
            width: 100%;
            height: 400px;
            margin-top: 20px;
            border-radius: 10px;
            border: 1px solid #ced4da;
        }
    </style>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=a4bec681-89bc-4176-bc7a-332f82e03309" type="text/javascript"></script>
    <script src="http://127.0.0.1:8000/js/geolocation_control.js" type="module"></script>
    <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
</head>
<body>
<div class="container">
    <div class="form-container">
        <div class="card">
            <div class="card-header">{{ __('Create Trash') }}</div>
            <div class="card-body">
                <form method="POST" action="{{ route('trash.store') }}" enctype="multipart/form-data">
                    @csrf

                    <label for="photo">Photo:</label><br>
                    <input type="file" id="photo" name="photo" required><br>

                    <label for="address">Address:</label><br>
                    <input type="text" id="address" name="address" required><br>

                    <label for="request_comment">Request Comment:</label><br>
                    <textarea id="request_comment" name="request_comment" required></textarea><br>

                    <label for="city">City:</label><br>
                    <input type="text" id="city" name="city" required><br><br>

                    <label for="price">Price:</label><br>
                    <input type="text" id="price" name="price" required><br><br>
                    <input type="hidden" id="trash_status" name="trash_status" value="1"><br><br>

                    <button class="back" type="button" onclick="window.location.href = '/'">Back</button>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

        <div id="map"></div>
    </div>
</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
