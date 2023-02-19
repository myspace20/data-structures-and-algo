var bubbleSort = function (nums) {
    var swapped = false;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped)
            break;
    }
    return nums;
};
var nums = [1, -1, 3, 2, 5, 7];
console.log(bubbleSort(nums));
