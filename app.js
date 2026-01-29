document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta", img: "1.jpg", price: 70000 },
      { id: 2, name: "Arabica", img: "2.jpg", price: 80000 },
      { id: 3, name: "Liberika", img: "3.jpg", price: 75000 },
      { id: 4, name: "Excelsa", img: "4.jpg", price: 60000 },
      { id: 5, name: "Primo Passo ", img: "5.jpg", price: 90000 },
    ],
  }));
});
