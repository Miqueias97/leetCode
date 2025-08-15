class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        itemsIndex = dict()
        for index, i in enumerate(nums):
            if i in itemsIndex:
                itemIndex = itemsIndex[i]
                return [itemIndex, index]
            
            result = target - i
            itemsIndex[result] = index

        return None