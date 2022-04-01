
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let fromStart = 0;
    let fromIntersection = findIntersection(nums);

    while (fromIntersection !== fromStart) {
        fromStart = nums[fromStart];
        fromIntersection = nums[fromIntersection];
    }
    return fromStart;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
function findIntersection(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    return fast;
}
