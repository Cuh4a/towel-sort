// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (typeof matrix != "undefined" &&
        matrix != null &&
        matrix.length != null &&
        matrix.length > 0) {
        let array = matrix.reduce((accum, item, index) => {
            if (index % 2 == 0) {
                accum.push(item);
            } else if (index % 1 == 0) {
                accum.push(item.reverse());
            }
            return accum;
        }, [])
        array.forEach(element => element.map(el => arr.push(el)));
        return arr;
    } else {
        return [];
    }
}
