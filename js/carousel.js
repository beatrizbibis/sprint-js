// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._arr = arr;
                Carousel.Next(); // Executa o primeiro item
                Carousel._interval = setInterval(function () {
                    Carousel.Next();
                }, 2000); // Alterna a cada 2 segundos
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {
        if (!Carousel._arr || Carousel._arr.length === 0) return;

        const item = Carousel._arr[Carousel._sequence];

        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        if (carouselDiv) {
            carouselDiv.innerHTML = `<a href="${item.url}"><img src="img/${item.image}" alt="${item.title}"></a>`;
        }

        if (titleDiv) {
            titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        }

        // Incrementa o índice e volta ao zero no final
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}

