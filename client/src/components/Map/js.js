const test = (category) => {
  switch (category) {
    case (category = "beach"):
      return console.log("success");

    case (category = "car"):
      return console.log("success");

    case (category = "default"):
      return console.log("success");

    case (category = "drinks" || "liquor"):
      return console.log("success");

    case (category = "disco"):
      return console.log("success");

    case (category = "food"):
      return console.log("success");

    case (category = "games"):
      return console.log("success");

    case (category = "general"):
      return console.log("success");

    case (category = "home"):
      return console.log("success");

    case (category = "karaoke" || "sing"):
      return console.log("success");

    case (category = "outdoor"):
      return console.log("success");

    case (category = "park"):
      return console.log("success");

    case (category = "party"):
      return console.log("success");

    case (category = "theme-park"):
      return console.log("success");

    case (category = "zoo"):
      return console.log("success");

    default:
      break;
  }
};

console.log(test("beach"));
