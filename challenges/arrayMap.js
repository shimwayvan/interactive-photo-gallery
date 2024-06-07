function subarraySum(arr, target) {
    let sum = 0;
    const map = new Map();
    map.set(0, -1);
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (map.has(sum - target)) {
            return true;
        }
        
        map.set(sum, i);
    }
    
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(subarraySum(arr, target)); // Output: true
