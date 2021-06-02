const houses = require("../db.json");
let globalID = 4;

function updatePrice(house, type) {
  if (type === "plus") {
    house.price += 10000;
  } else if (type === "minus") {
    house.price -= 10000;
  }
}

const controller = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },

  createHouse: (req, res) => {
    const { address, price, imageURL } = req.body;
    const newHouse = {
      id: globalID,
      address,
      price,
      imageURL,
    };

    houses.push(newHouse);
    res.status(200).send(houses);
  },

  deleteHouse: (req, res) => {
    const { id } = req.params;
    const index = houses.findIndex((house) => house.id === +id);
    houses.splice(index, 1);

    res.status(200).send(houses);
  },

  updateHouse: (req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    const house =
      houses[(index = houses.findIndex((house) => house.id === +id))];

    updatePrice(house, type);
    res.status(200).send(houses);
  },
};

module.exports = controller;
