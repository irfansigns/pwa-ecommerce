<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script>
            window.base_url = "{{url('/')}}"
        </script>
        <!-- Scripts -->
        @routes <!-- Responsible for providing routes to inertia app  -->
        @viteReactRefresh <!-- Whenever we change anything in inertia app it refreshes the browser -->
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])<!-- Page Resolver and app.jsx loader  -->
        @inertiaHead<!-- Responsible for generating meta tags  -->
    </head>
    <body class="font-sans antialiased">
        @inertia <!-- loading inertia or reactjs app in id="app" of index.html  -->
    </body>
</html>
