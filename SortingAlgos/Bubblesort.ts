const bubbleSort = (nums: Array<number>) : Array<number> => {

    let swapped: boolean = false

    for (let i = 0; i < nums.length - 1; i++) {

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp

                swapped = true
            }
        }

        if (swapped) break
    }

    return nums


}


const nums = [1, -1, 3, 2, 5, 7]


console.log(bubbleSort(nums))