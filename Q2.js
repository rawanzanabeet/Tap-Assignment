function miss_num(array) {
    const n = array.length;
    const math_rule_sum = (n * (n + 1)) / 2;
    const array_sum = array.reduce((sum, num) => sum + num, 0);
    return math_rule_sum - array_sum;
}

const nums1 = [3, 0, 1];
console.log(miss_num(nums1)); 

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(miss_num(nums2)); 

const nums3 = [0, 1];
console.log(miss_num(nums3)); 