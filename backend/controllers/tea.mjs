
async function newTea(req, res) {
    try {
        //const products = await Product.find({});
        //res.status(200).json(products);
        res.json({ message: 'POST new tea.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


async function newTea2(req, res) {
    res.json({ message: 'POST new tea.' });
}

export { newTea, newTea2 };