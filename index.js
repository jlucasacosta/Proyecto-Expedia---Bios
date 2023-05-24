const functionBuy = () => {
  alert("Compraste");
};

const myCar = { make: "Ford", model: "Mustang", year: 1969 };

const vestuario = {
    vaquero: {
        marca: "Levis",
        color: "Negro"
    }, 
    championes: "Nike",
    remera: "Adidas", 
    gorro: "Lana"
}

const destinationChange = () => {
    let title = document.querySelector('h1');

    console.log("value title", title)

    title.textContent = 'Nuevo valor visto en clase';

    let test = document.querySelector('h6');

    console.log("value test", test);
}

