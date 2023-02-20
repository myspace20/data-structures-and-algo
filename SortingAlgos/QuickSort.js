// # Quick sort in Python
// # function to find the partition position
// def partition(array, low, high):
//   # choose the rightmost element as pivot
//   pivot = array[high]
//   # pointer for greater element
//   i = low - 1
//   # traverse through all elements
//   # compare each element with pivot
//   for j in range(low, high):
//     if array[j] <= pivot:
//       # if element smaller than pivot is found
//       # swap it with the greater element pointed by i
//       i = i + 1
//       # swapping element at i with element at j
//       (array[i], array[j]) = (array[j], array[i])
//   # swap the pivot element with the greater element specified by i
//   (array[i + 1], array[high]) = (array[high], array[i + 1])
//   # return the position from where partition is done
//   return i + 1
// # function to perform quicksort
// def quickSort(array, low, high):
//   if low < high:
//     # find pivot element such that
//     # element smaller than pivot are on the left
//     # element greater than pivot are on the right
//     pi = partition(array, low, high)
//     # recursive call on the left of pivot
//     quickSort(array, low, pi - 1)
//     # recursive call on the right of pivot
//     quickSort(array, pi + 1, high)
// data = [8, 7, 2, 1, 0, 9, 6]
// print("Unsorted Array")
// print(data)
// size = len(data)
// quickSort(data, 0, size - 1)
// print('Sorted Array in Ascending Order:')
// print(data)
var partition = function (array, low, high) {
    var _a, _b;
    var pivot = array[high];
    var i = low - 1;
    for (var j = 0; j <= high; j++) {
        if (array[j] <= pivot) {
            i = i++;
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        _b = [array[high], array[i + 1]], array[i + 1] = _b[0], array[high] = _b[1];
    }
    return i + 1;
};
var myArray = [2, 10, 5, 7];
var logPart = partition(myArray, 0, myArray.length);
console.log(logPart);
