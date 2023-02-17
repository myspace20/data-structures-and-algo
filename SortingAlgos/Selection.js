var selectionSort = function (nums) {
    var _a;
    for (var i = 0; i <= nums.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j <= nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        _a = [nums[minIndex], nums[i]], nums[i] = _a[0], nums[minIndex] = _a[1];
    }
    return nums;
};
console.log(selectionSort([2, 1, 5, 4, 7]));
