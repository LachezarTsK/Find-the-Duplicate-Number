
#include <vector>
using namespace std;

class Solution {
    
public:

    int findDuplicate(vector<int>& nums) {
        int fromStart = 0;
        int fromIntersection = findIntersection(nums);

        while (fromIntersection != fromStart) {
            fromStart = nums[fromStart];
            fromIntersection = nums[fromIntersection];
        }
        return fromStart;
    }

private:

    int findIntersection(const vector<int>& nums) {
        int slow = nums[0];
        int fast = nums[nums[0]];

        while (slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        return fast;
    }
};
