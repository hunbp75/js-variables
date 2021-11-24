let products = [

     {category: "konyhai",
      name: "turmix2000",
      price: 5000,
      stock: 10, 
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
}

window.addEventListener("load", inventory);