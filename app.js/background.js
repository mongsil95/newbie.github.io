const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${randomImg}`;

document.body.appendChild(image);
