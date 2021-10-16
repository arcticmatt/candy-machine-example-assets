const Mustache = require("mustache");
const fs = require("fs");

const view = {
  number: 0
};

const template = `{
  "name": "Rectangle NFT #{{numberPlus1}}",
  "image": "{{number}}.png",
  "seller_fee_basis_points": 10,
  "symbol": "",
  "properties": {
    "files": [
      {
        "uri": "{{number}}.png",
        "type": "image/png"
      }
    ],
    "creators": [{"address": "3sdsSwWWjjGA7HpPBQfGaXRE2HqmdKicMXHRapqLAu4L", "share": 100}]
  }
}
`;

for (let i = 0; i < 10; i++) {
  const view = {number: i, numberPlus1: i + 1};
  const content = Mustache.render(template, view);
  fs.writeFileSync(`./assets/${i}.json`, content)
}