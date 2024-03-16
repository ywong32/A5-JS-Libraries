const config ={
    type: "carousel",
    perView: 3,
    breakpoints:{
    650: { perView: 1 },
    1200: { perView: 2 }
    }
};
new Glide('.glide',config).mount();

const config2 ={
    type: "carousel",
    perView: 3,
    breakpoints:{
    650: { perView: 1 },
    1200: { perView: 2 }
    }
};
new Glide('.glide2',config2).mount();

const config3 ={
    type: "carousel",
    perView: 3,
    breakpoints:{
    650: { perView: 1 },
    1200: { perView: 2 }
    }
};
new Glide('.glide3',config3).mount();
