class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] numsF = new int[2 * nums.length];
        for(int index= 0; index <  nums.length ;index++){
            numsF[index] = nums[index];
            numsF[index+nums.length] = nums[index];
        }
        return numsF;

    }
}