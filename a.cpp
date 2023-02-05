class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
         vector <int> :: iterator iter;
        vector <int> a{0,0};
        int x,y;
        for (int i=0;i<nums.size();i++){
            x = nums[i];
            y = target-x;

            iter = find (nums.begin(),nums.end(),y);
        
            if (iter != nums.end()){
 
                if ((iter-nums.begin() )!=i){
                    a[0] = i;
                    a[1] = iter-nums.begin();
                    break;

                }
                else{
                    continue;
                }
            }
            


        }
        return a;
    }
    
};