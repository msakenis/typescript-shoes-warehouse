export function getChosenProduct(id, products) {
  const product = products.filter((product) => product.id === +id)[0]; // this filter just to emulate db, ussually you fetch one product only. Back-End must do the most of the job

  return product;
}
