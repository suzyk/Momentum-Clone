const images = ["background1.jpg", "background2.jpg", "background3.jpg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];
//console.log(todaysImage);

const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;
//console.log(bgImage);
document.body.appendChild(bgImage);


