const swiper = new Swiper('.slider', {
  loop: true,
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: { slidesPerView: 3 }, // Desktop
    768: { slidesPerView: 2 },  // Tablet
    480: { slidesPerView: 1 },
    420: { slidesPerView: 1 },
    350: { slidesPerView: 1 }  // Mobile
  }
  

});


const hero = document.getElementById("home");
const contentBox = document.getElementById("content");

// Background images
const backgrounds = [
  "GxK2.jpg",
  "bad_guys_back.jpg",
  "Pacific_Rim_back.jpg",
  "avatar-back.jpg",
  "ZOOTOPIA2_back.jpg"
];

// Text content
const contents = [
  `<div class="about">
        <div class="movie-image">
          <img src="Godzilla X Kong The New Empire Poster 2 .jpg" alt="">
        </div>
        <div class="movie-info">
          <h2>Godzilla vs Kong</h2>
          <p>
            Kong and his protectors undertake a perilous journey to find his true home. 
            Along for the ride is Jia, an orphaned girl who has a unique and powerful bond with the mighty beast. 
            However, they soon find themselves in the path of an enraged Godzilla as he cuts a swath of destruction across the globe. 
            The initial confrontation between the two titans -- instigated by unseen forces -- 
            is only the beginning of the mystery that lies deep within the core of the planet.
          </p>
          <div class="movie-btn">
            <button class="btn">Action</button>
            <button class="btn">Adventure</button>
            <button class="btn">Sci-Fi</button>
            <button class="btn">Fantacy</button>
          </div>
          <div class="movie-booking-and-cinema-detail">
            <div class="cinema-detail">
              <p>Now Showing at   <span>  Cinema 1</span></p>
              <ul>
                <li>Dolby Atmos</li>
                <li>4K Digital Projection</li>
              </ul>
            </div>
            <div class="movie-booking">
              <button class="movie-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>`,
  `<div class="about">
        <div class="movie-image">
          <img src="badguys.jpg" alt="">
        </div>
        <div class="movie-info">
          <h2> Bad Guys 2 </h2>
          <p style="color: rgb(177, 174, 174)">
            Reformed criminals Mr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark and Ms. Tarantula are trying very hard to be good. 
            However, they soon find themselves hijacked into a high-stakes heist that's masterminded by a new team of delinquents 
            they never saw coming -- the Bad Girls.
          </p>
          <div class="movie-btn" style="color: rgba(255, 255, 255, 1)">
            <button class="btn">Action</button>
            <button class="btn">Animation</button>
            <button class="btn">Adventure</button>
            <button class="btn">Coedy</button>
          </div>
          <div class="movie-booking-and-cinema-detail">
            <div class="cinema-detail">
              <p>Now Showing at   <span>  Cinema 1</span></p>
              <ul>
                <li>Dolby Atmos</li>
                <li>4K Digital Projection</li>
              </ul>
            </div>
            <div class="movie-booking">
              <button class="movie-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>`,
  `<div class="about">
        <div class="movie-image">
          <img src="pacific.jpg" alt="">
        </div>
        <div class="movie-info">
          <h2 style="color: black"> Pacific Rim </h2>
          <p>
            KLong ago, legions of monstrous creatures called Kaiju arose from the sea, bringing with them all-consuming war.
             To fight the Kaiju, mankind developed giant robots called Jaegers, designed to be piloted by two humans locked together in a neural bridge. 
             However, even the Jaegers are not enough to defeat the Kaiju, and humanity is on the verge of defeat. Mankind's last hope now lies with a washed-up ex-pilot, 
             an untested trainee and an old, obsolete Jaeger.
          </p>
          <div class="movie-btn">
            <button class="btn">Action</button>
            <button class="btn">Adventure</button>
            <button class="btn">Sci-Fi</button>
            <button class="btn">Fantacy</button>
          </div>
          <div class="movie-booking-and-cinema-detail">
            <div class="cinema-detail">
              <p>Now Showing at   <span>  Cinema 2</span></p>
              <ul>
                <li>Dolby 7.1 Sounds</li>
                <li>2K Laser Projection</li>
              </ul>
            </div>
            <div class="movie-booking">
              <button class="movie-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>`,
  `<div class="about">
        <div class="movie-image">
          <img src="avatar2.jpg" alt="">
        </div>
        <div class="movie-info">
          <h2 style="color: black">Avatar</h2>
          <p>
            Jake Sully, Neytiri and their children explore the mysterious lands of Pandora. When a familiar threat resurfaces, 
            they must fight a difficult war to protect their planet.
          </p>
          <div class="movie-btn">
            <button class="btn">Action</button>
            <button class="btn">Adventure</button>
            <button class="btn">Sci-Fi</button>
            <button class="btn">Fantacy</button>
          </div>
          <div class="movie-booking-and-cinema-detail">
            <div class="cinema-detail">
              <p>Now Showing at   <span>  Cinema 1</span></p>
              <ul>
                <li>Dolby Atmos</li>
                <li>4K Digital Projection</li>
              </ul>
            </div>
            <div class="movie-booking">
              <button class="movie-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>`,
  `<div class="about">
        <div class="movie-image">
          <img src="zootopia .jpg" alt="">
        </div>
        <div class="movie-info">
          <h2 style="color: black">Zootopia</h2>
          <p>
            From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive.
             When Judy Hopps (Ginnifer Goodwin) becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. 
             Determined to prove herself, Judy jumps at the opportunity to solve a mistary.
          </p>
          <div class="movie-btn">
            <button class="btn">Action</button>
            <button class="btn">Adventure</button>
            <button class="btn">Animation</button>
            <button class="btn">Fantacy</button>
          </div>
          <div class="movie-booking-and-cinema-detail">
            <div class="cinema-detail">
              <p>Now Showing at   <span>  Cinema 2</span></p>
              <ul>
                <li>Dolby 7.1 Sounds</li>
                <li>2K Laser Projection</li>
              </ul>
            </div>
            <div class="movie-booking">
              <button class="movie-btn">Buy Ticket</button>
            </div>
          </div>
        </div>
      </div>`
];

let index = 0;

function changeSlide() {

    // Fade OUT both at same time
    hero.style.opacity = 0.6;
    contentBox.style.opacity = 0;

    setTimeout(() => {

        // ✅ Update background + text WHILE invisible
        hero.style.backgroundImage = `url(${backgrounds[index]})`;
        contentBox.innerHTML = contents[index];

        // Fade IN background immediately
        hero.style.opacity = 1;

        // After small delay fade in the text
        setTimeout(() => {
            contentBox.style.opacity = 1;
        }, 800); // delay before text fade-in

        index = (index + 1) % backgrounds.length;

    }, 1000); // matches fade-out duration
}

// Run once immediately on page load
changeSlide();

// Change every 60s
setInterval(changeSlide, 8000);