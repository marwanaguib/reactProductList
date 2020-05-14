export default {
  products: {
    count: 7,
    pageIndex: 0,
    departments: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Toys" },
      { id: 3, name: "Cloths" },
    ],
    filters: {},
    items: [
      { id: 1, name: "Product1", price: "100", promo: "10%", isActive: 1 },
      { id: 2, name: "Product2", price: "110", promo: "10%", isActive: 0 },
      { id: 3, name: "Product3", price: "80", promo: "10%", isActive: 1 },
      { id: 4, name: "Product4", price: "100", promo: "10%", isActive: 1 },
      { id: 5, name: "Product5", price: "110", promo: "10%", isActive: 1 },
      { id: 6, name: "Product6", price: "100", promo: "10%", isActive: 1 },
      { id: 7, name: "Product7", price: "100", promo: "10%", isActive: 1 },
    ],
  },
  shared: {
    errorMsg: "",
    isLoading: false,
  },
};
