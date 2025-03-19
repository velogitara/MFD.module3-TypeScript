interface BasicPice {
  price: number;
  discount: number;
}
interface Installment extends BasicPice {
  isInstallment: true;
  months: number;
}
interface OnePayment extends BasicPice {
  isInstallment: false;
  month?: never;
}
type TotalPriceParams = Installment | OnePayment;

const totalPrice = (p: TotalPriceParams): number => {
  const discountPrice = p.price * (1 - p.discount / 100);
  if (p.isInstallment) {
    return discountPrice / p.months;
  }
  return discountPrice;
};

const installmentPrice = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(installmentPrice); // 6250

const oneTimePrice = totalPrice({
  price: 200000,
  discount: 60,
  isInstallment: false,
});
console.log(oneTimePrice); // 80000
