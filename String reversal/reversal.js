const reversal = (word) => {
    if (word) {
        let transform = Array.from(word).reverse().join("");
        for (let transforms in transform) {
           console.log(transform[transforms]);
        }

    } else {
        return null;
    }

};

reversal("Emmanuel");