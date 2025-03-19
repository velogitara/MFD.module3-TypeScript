interface TotalPriceParams {
    price: number;
    discount: number;
    isInstallment?: boolean;
    months?: number;
}

const totalPrice = ({
    price,
    discount,
    isInstallment = false,
    months,
}: TotalPriceParams): number => {
    const discountPrice = price * (1 - discount / 100);
    if (isInstallment) {
        const m = months ?? 12;
        return discountPrice / m;
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
});
console.log(oneTimePrice); // 80000
