let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Show();
                Carousel.StartTimer();
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static StartTimer() {
        clearInterval(Carousel._interval);
        Carousel._interval = setInterval(function () {
            Carousel.Next();
        }, 5000);
    }

    static Show() {
        let item = Carousel._arr[Carousel._sequence];

        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        if (carouselDiv && item) {
            let imgSrc = item.image.startsWith("img/") ? item.image : `img/${item.image}`;
            carouselDiv.innerHTML = `
                <button class="carousel-btn prev-btn" onclick="Carousel.Prev()">&#10094;</button>
                <a href="${item.url}">
                    <img src="${imgSrc}" alt="${item.title}" class="carousel-img" />
                </a>
                <button class="carousel-btn next-btn" onclick="Carousel.Next()">&#10095;</button>
            `;
        }

        if (titleDiv && item) {
            titleDiv.innerHTML = `
                <a href="${item.url}">${item.title}</a>
            `;
        }
    }

    static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Show();
        Carousel.StartTimer();
    }

    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Show();
        Carousel.StartTimer();
    }
}