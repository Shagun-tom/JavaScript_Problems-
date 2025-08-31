const prev = document.getElementById('prev');
const img = document.getElementById('img');
const next = document.getElementById('next');

const image = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbWY5Tc92EgoRVQcM5JcfQ2zRhD5zl54kpw&s",
    "https://4kwallpapers.com/images/walls/thumbs_2t/19863.png",
    "https://i.pinimg.com/1200x/0c/42/9d/0c429dd6f34f0c93123fd029152010d0.jpg",
    "https://images8.alphacoders.com/134/thumb-350-1347725.webp",
    "https://www.artsindia.com/cdn/shop/articles/Dark_Art.jpg?v=1679966404",
    "https://i.pinimg.com/736x/ef/05/3e/ef053e0ecc13810b1b0158817e983c8a.jpg",
    
];

let curr = 0;

prev.addEventListener('click', () => {
  console.log("Prev clicked!");
  curr = (curr - 1 + image.length) % image.length;
  img.src = image[curr];
});

next.addEventListener('click', function(){
   curr = (curr+1)%image.length;
   img.src= image[curr];
});