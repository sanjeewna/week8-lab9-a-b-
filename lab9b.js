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

//   const tourTitles = toursData.map(tour => tour.title);
// console.log("Tour Titles:", tourTitles);

// const tourDurationsInHours = toursData.map(tour => tour.duration * 24);
// console.log("Tour Durations (in Hours):", tourDurationsInHours);

// const tourSummaries = toursData.map(tour => ({
//     title: tour.title,
//     location: tour.location,
//     duration: tour.duration,
//   }));
//   console.log("Tour Summaries:", tourSummaries);

const nr=10;
const totalCosts = toursData.map(tour => ({
  title: tour.title,
  totalCost: nr * tour.cost,
}));
console.log("Total Costs:", totalCosts);