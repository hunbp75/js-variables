let products = [

     {category: "konyhai",
      name: "turmix2000",
      price: 5000,
      stock: 4, 
      attachements: ["fej", "motor"]
    },
     {category: "tisztálkodószer",
      name: "sampon",
      price: 999,
      stock: 30, 
      attachements: ["kupak"]
    },
     {category: "tusfürdő",
      name: "axe",
      price: 699,
      stock: 168, 
      attachements: ["kókusz", "szagtalnító"]
    }
];

let customer ="Ádám";

function main() {
    console.log("It works");
    let product = products[2];
    let answer = window.confirm("do you want a " + product.name); 
    if (answer === false) {
        let answer = window.confirm("but it has " + product.attachements.join(","));
        if (answer === true) {
            console.log(product);
        }
    }
}

function inventory() {

    let stock = products[2].stock;
    let price = products[2].price; 
    let sumValue = stock * price;
    let div = document.createElement("div");
    div.innerText = products[2].name + " : " + sumValue + " Ft" ;
    document.body.append(div);

    stock = products[0].stock;
    price = products[0].price;
    sumValue = stock * price;
    div = document.createElement("div");
    div.innerText = products[0].name + " : " + sumValue + " Ft" ;
    document.body.append(div);

    stock = products[1].stock;
    price = products[1].price;
    sumValue = stock * price;
    div = document.createElement("div");
    div.innerText = products[1].name + " : " + sumValue + " Ft" ;
    document.body.append(div);   
    
    stock = products[0].stock;
    let available = stock >= 5;
    div = document.createElement("div");
    if (available) {
        div.innerText = products[0].name + "elérhető";
    }   
    else {
            div.innerText = products[0].name + "nem elérhető";
        }
        document.body.append(div);

    let special = customer === "Ádám";
    if (!available && special) {
        div.innerText = div.innerText + " ( de neki mégis )";
    }
}


window.addEventListener("load", inventory);