class Solution {
     fun twoSum(nums: IntArray, target: Int): IntArray {
        val map = HashMap<Int, Int>()
        nums.forEachIndexed { index, num ->
            val complement = target - num
            if (map.containsKey(complement)) {
                return intArrayOf(map[complement]!!, index)
            }
            map[num] = index
        }
        return intArrayOf() 
    }
}