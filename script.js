var animation;
        function init() {
            img = document.getElementById("myimg");
            img.style.position = 'absolute';
            img.style.left = '0px';

        }
        window.onload = init;
        function start() {
            img.style.left = parseInt(img.style.left) + 10 + 'px';
            animation = setTimeout(start, 50);
        }
        function reverse() {
            img.style.left = parseInt(img.style.left) + -10 + 'px';
            animation = setTimeout(reverse, 50);
        }
        function stop() {
            clearTimeout(animation);
            img.style.left = 'paused';
        }