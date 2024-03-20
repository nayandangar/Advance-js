// Family

let family = [
  {
    Grandfather: {
      name: "Vashrambhai",
      age: 74,
      occupation: "Farmer",
      sons: [
        {
          son: 1,
          name: "Vinubhai",
          age: 46,
          occupation: "Shopkipper",

          sons: [
            {
              son: 1,
              name: "nayan",
              age: 25,
              hobby: ["reading ", "travalling", "cardriving"],
              degree: ["BA,MA"],
              marrige: null,
            },
            {
              son: 2,
              name: "nirav",
              age: 24,
              hobby: ["horse riding", "dancing", "cardriving"],
              marrige: null,
              degree: ["12Th pass"],
            },
          ],
        },
        {
          son: 2,
          name: "Kalubhai",
          age: 51,
          occupation: "bussnessman",
          sons: [
            {
              son: 1,
              name: "Akshay",
              age: 28,
              hobby: ["singing ,travalling "],
              marrige: "married",
              degree: ["B.Com,M.Com"],
            },
            {
              son: 2,
              name: "Arpit",
              age: 25,
              hobby: [" music", "dancing" , "camping"],
              marrige: "unmarried",
              degree: ["BCA"],
            },
          ],
        },
      ],
      address: {
        area: "katargam",
        city: "surat",
        state: "Gujrat",
        pincode: 395004,
      },
      vehicals: [
        {
          name: "Hero Splender+",
          number: "GJ-05-1790",
        },
        {
          name: "Access",
          number: "GJ-05-0505",
        },
        {
          name: "Activa",
          number: "GJ-05-3415",
        },
      ],
    },
  },
];
console.log(family[0].Grandfather.sons[0].sons[1].name);
