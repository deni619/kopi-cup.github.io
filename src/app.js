document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta", img: "21.jpg", price: 70000 },
      { id: 2, name: "Arabica", img: "22.jpg", price: 80000 },
      { id: 3, name: "Liberika", img: "23.jpg", price: 75000 },
      { id: 4, name: "Excelsa", img: "24.jpg", price: 60000 },
      { id: 5, name: "Primo Passo", img: "25.jpg", price: 90000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quntity: 0,
    add(newItem) {
      console.log(newItem);
    },
  });
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
