const partition = (array:Array<number> , low:number, high:number): number=>{
    
    let pivot = array[high]
    
    let i = low - 1
    
    for(let j = low; j < high;  j++){
        
        if(array[j] <= pivot){
            
            i++
            
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    // return the position from where partition is done
    return (i + 1);
}


  const quickSort = (array:Array<number> , low:number, high:number):Array<number> => {
    if (low < high) {

      // find pivot element such that
      // elements smaller than pivot are on the left
      // elements greater than pivot are on the right
      let pi = partition(array, low, high);
      
      // recursive call on the left of pivot
      quickSort(array, low, pi - 1);

      // recursive call on the right of pivot
      quickSort(array, pi + 1, high);
    }
    
    return array
  }

const array = [2, 5, 8, 4, 3, 30,122,1]

const low = 0 

const high = array.length


console.log(quickSort(array, low, high-1))