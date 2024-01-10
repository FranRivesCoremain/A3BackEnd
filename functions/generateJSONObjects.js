import fs from 'fs'

function generateJSONObjects(numberOfObjects) {
  let id = -1;
  let phoneProvinceCodes = ["945", "967", "965", "950", "984", "920", "981", "93", "91", "953", "971", "982", "948", "951", "988", "976", "923"];
  const letters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz".split('');

  let array = [];
  for (let i = 0; i < numberOfObjects; i++) {
    let object = {
      "id": (++id).toString(), // id
      "campo1": "B" + Math.floor(Math.random() * 100000000).toString(), // CIF
      "campo2": "6" + Math.floor(Math.random() * 100000000), // Mobile phone number
      "campo3": phoneProvinceCodes[Math.floor(Math.random() * phoneProvinceCodes.length)] + Math.floor(Math.random() * 1000000), // regular phone number
      "campo4": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo5": Array.apply(null, Array(Math.ceil(Math.random() * 15))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join("") + " " + Array.apply(null, Array(Math.ceil(Math.random() * 15))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join("") + " " + Array.apply(null, Array(Math.ceil(Math.random() * 15))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish names and surnames
      "campo6": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join("") + " " + Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo7": Math.ceil(Math.random() * 70).toString(), // random number from 1 to 70
      "campo8": Math.floor(Math.random() * 100000000).toString() + Math.floor(Math.random() * 100000000).toString(), // random 16 digit number,
      "campo9": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo10": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo11": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo12": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo13": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo14": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo15": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo16": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo17": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo18": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo19": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo20": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo21": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo22": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo23": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo24": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo25": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo26": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo27": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo28": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo29": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo30": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo31": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo32": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo33": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo34": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo35": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo36": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo37": Array.apply(null, Array(Math.ceil(Math.random() * 10))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish
      "campo38": Math.floor(Math.random() * 100000000).toString() + Math.floor(Math.random() * 100000000).toString(), // random 16 digit number,
      "campo39": Math.floor(Math.random() * 100000000).toString() + Math.floor(Math.random() * 100).toString(), // random 10 digit number,,
      "campo40": Array.apply(null, Array(Math.ceil(Math.random() * 15))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join("") + " " + Array.apply(null, Array(Math.ceil(Math.random() * 15))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join("") + " " + Array.apply(null, Array(Math.ceil(Math.random() * 15))).map(() => letters[Math.floor(Math.random() * letters.length)].toString()).join(""), // gibberish names and surnames
    };
    array.push(object);
  }

  fs.writeFileSync("./objects.json", JSON.stringify(array, null, 2));
}

generateJSONObjects(482);