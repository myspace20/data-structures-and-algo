var partition = function (array, low, high) {
    var pivot = array[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            var temp_1 = array[i];
            array[i] = array[j];
            array[j] = temp_1;
        }
    }
    var temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    // return the position from where partition is done
    return (i + 1);
};
var quickSort = function (array, low, high) {
    if (low < high) {
        // find pivot element such that
        // elements smaller than pivot are on the left
        // elements greater than pivot are on the right
        var pi = partition(array, low, high);
        // recursive call on the left of pivot
        quickSort(array, low, pi - 1);
        // recursive call on the right of pivot
        quickSort(array, pi + 1, high);
    }
    return array;
};
var array = [2, 5, 8, 4, 3, 30, 122, 1];
var low = 0;
var high = array.length;
console.log(quickSort(array, low, high - 1));
