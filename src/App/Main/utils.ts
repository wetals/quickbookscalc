export const formatCurrency = (value: number, currency = "GBP") => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency
  }).format(value);
};
