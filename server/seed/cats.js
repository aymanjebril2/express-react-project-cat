import db from "../db/index.js";
import Cat from "../models/cat.js";
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const cats = [
    {
      name: "Sir Chonk",
      chonkyness: "Oh Lawd He Comin'",
      imagelink: "https://i.redd.it/vzps93vfh1n21.jpg",
      biography:
        "Sir Chonk was born behind the Times Square Dave and Buster's and somehow raised entirely on scraps from restaurants featured in Diners, Drive-ins, and Dives. With a body long haunted by the ghosts of Flavortown, Sir Chonk smells like an armpit full of White Castle sliders.",
    },
    {
      name: "Meatloaf the Cat",
      chonkyness: "A Heckin' Chonker",
      imagelink:
        "http://37prime.com/news/wp-content/uploads/2014/01/IMG_2306.jpg",
      biography:
        "Once the runt of the litter, Meatloaf the Cat became accustomed to singing for his scraps. Out of his small fuzzy body boomed the voice of a powerful and passionate man, his meows bellowing like a bat out of hell. Meatloaf the cat will do anything for love, but then he will bite your hand.",
    },
    {
      name: "Miss Sinister",
      chonkyness: "Mega Chonker",
      imagelink: "https://i.imgur.com/4UPddmW.jpg",
      biography:
        "Separated from her family as a kitten, Miss Sinister vowed vengeance upon the perpetrators: humans. Do not be swayed by her enticingly fuzzy belly and seemingly friendly demeanor. If you touch her, you will know what unhappiness is.",
    },
    {
      name: "John",
      chonkyness: "A Fine Boi",
      imagelink: "https://i.imgur.com/PJB6lKd.jpg",
      biography: "He a good boi",
    },
    {
      name: "Chonkelicious",
      chonkyness: "Mega Chonker",
      imagelink: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/source.mp4",
      biography: "He's a googling chonker",
    },
    {
      name: "Chonky charles",
      chonkyness: "A Fine Boi",
      imagelink: "https://images.app.goo.gl/9BFQjuy2JtYGU52w7",
      biography: "Lala",
    },
    {
      name: "Billy",
      chonkyness: "A Fine Boi",
      imagelink:
        "http://www.photobackgroundhd.com/wp-content/uploads/2018/10/Cute-Cats-Wallpapers-hd-image.jpg",
      biography: "Chonk to be",
    },
    {
      name: "Greg",
      chonkyness: "Hefty Chonk",
      imagelink:
        "https://ca-times.brightspotcdn.com/dims4/default/6c818b8/2147483647/strip/true/crop/1611x906+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fca-times.brightspotcdn.com%2Ffd%2Fef%2F05c1aab3e76c3d902aa0548c0046%2Fla-la-hm-pet-issue-18-jpg-20150615",
      biography:
        "Abandoned at an early age, and born at an even earlier one, Greg quickly learned how to survive.  If you're trying to get chonk, you gotta eat.",
    },
  ];
  await Cat.insertMany(cats);
  console.log("Created some cats!");
};

const run = async () => {
  await main();
  db.close();
};

run();
