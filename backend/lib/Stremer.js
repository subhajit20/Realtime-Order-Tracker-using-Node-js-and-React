const fs = require("fs");
const path = require("path");
let prods = [];

function readData(filename) {
    const fileread = fs.createReadStream(path.join(__dirname, "..", filename));

    if (prods.length == 0) {
        fileread.on("data", (data) => {
            prods = [...JSON.parse(data).products];
        });
        return prods;
    } else {
        return prods;
    }
}

function sendProductData(ws) {
    let i = 0;
    const prods = readData("items.json");
    if (prods.length > 0) {
        let id = setInterval(() => {
            if (i >= prods.length) {
                clearInterval(id);
                return;
            } else {
                ws.send(
                    JSON.stringify({
                        id: prods[i].id,
                        title: prods[i].title,
                        description: prods[i].description,
                        price: prods[i].price,
                        discountPercentage: prods[i].discountPercentage,
                        rating: prods[i].rating,
                        stock: prods[i].stock,
                        brand: prods[i].brand,
                        category: prods[i].catgory,
                        thumbnail: prods[i].thumbnail,
                    })
                );
                i++;
            }
        }, 200);
    } else {
        ws.send("No Data");
    }
}

module.exports = sendProductData;