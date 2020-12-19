const calculateBill = (price, vat, tip) => {

    if (typeof (price, vat, tip) === 'number') {
        return "£" + (price + (price * vat / 100) + tip);
    } else {
        return "error"
    }

};

module.exports = calculateBill;