//  start toggle menu  nav 
const menu = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

menu.addEventListener ('click', ()=>{
    //animate links
    navList.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    menu.classList .toggle("#toggle");
});

// end tiggle mennu  nav //


// start testomnial //
//local reviews data - load initial item 
const reviews =[
    {
        id=1,
        name:"susan smith",
        job:"web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v158688334/person-1_rfzshl.jp",
        text:"I'm baby meggings twee health goth +1.Bicyle rights tumeric chartreuse before they sold out chambray pop-up.Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },

    {
        id=2,
        name="anna johnson",
        job:"web designer",
        img:"https://res.cloudinary.com/diqqf3eq2/iage/upload/v1586883409-2_np9x5l.jpg",
        text: "HTMLParamElement;slaldllmlm;SVGAnimatedLength;addEventListenerlocalStorage;date;FontFaceSetLoadEvent;localStorage;DataTransfer",
    },

    {
        id=3,
        name:"albert ensteisn",
        job:"software developer",
        img:"#",
        text:" ahdkladaljdkaldnklandnaldnla aklska kjakad kadkladn lankada dlkadlk adl ladlkadlk lkdlad ladla al dlkadlahdahdlha lkdalkdlkahdahd",
    },

    {
        id=4,
        name:"Robert junior",
        job:"ux designer",
        img:"#",
        text:" ahdkladaljdkaldnklandnaldnla aklska kjakad kadkladn lankada dlkadlk adl ladlkadlk lkdlad ladla al dlkadlahdahdlha lkdalkdlkahdahd",
    }
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn  = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textConten = item.name;
    job.textContent = item.job; 
    info.textContent = item.text;
});


//show next btn
nextBtn.addEventListener('click', function () {
   currentItem++;
   if(currentItem > reviews.length - 1){
       currentItem = 0;
   }
   showPerson(currentItem);
});

// show prev  btn
prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
 });

// end  testimonial //
 // scroll up button//






 //   slide 
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const slides = document.querySelectorAll(".slide");
  const slideIcons = document.querySelectorAll(".slide-icon");
  const numberOfSlides = slides.lenght;
  var slideNumber = 0;

  // image slide next button
  nextBtn.addEventListener("click",()=> {
     slideNumber++;

     if(slideNumber > (numberOfSlide-1)){
         slideNumber = 0;
     }

     slides[slideNumber].classList.add("active");
     slideIcons[slideNumber].classList.add("active");
  });

  

// footer  //
// date footer
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

