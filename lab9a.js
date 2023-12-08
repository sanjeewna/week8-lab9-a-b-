const toursData = [
    {
      id: 1,
      date: "august 26th, 2024",
      title: "Adventure",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "china",
      duration: 6,
      cost: 2100,
    },
    {
      id: 2,
      date: "october 1th, 2024",
      title: "best of java",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "indonesia",
      duration: 11,
      cost: 1400,
    },
    {
      id: 3,
      date: "september 15th, 2024",
      title: "explore hong kong",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "hong kong",
      duration: 8,
      cost: 5000,
    },
    {
      id: 4,
      date: "december 5th, 2024",
      title: "kenya highlights",
      info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
      location: "kenya",
      duration: 20,
      cost: 3300,
    },
  ];

//   const chinaTours = toursData.filter(tour => tour.location === "china");
// console.log("China Tours:", chinaTours);

// const longDurationTours = toursData.filter(tour => tour.duration > 10);
// console.log("Long Duration Tours:", longDurationTours);
// const expensiveTours = toursData.filter(tour => tour.cost > 2000);
// console.log("Expensive Tours:", expensiveTours);

const premiumTours = toursData.filter(tour => tour.duration > 10 && tour.cost > 2000);
console.log("Premium Tours:", premiumTours);