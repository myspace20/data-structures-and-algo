

const selectionSort = (nums: Array<number>): Array<number> => {

    for (let i: number = 0; i <= nums.length - 1; i++) {

        let minIndex = i;

    
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }

        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }

    return nums
}


console.log(selectionSort([2, 1, 5, 4, 7]))