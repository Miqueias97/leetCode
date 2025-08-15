function twoSum(nums: number[], target: number): number[] | null {
  const itemsIndex = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (itemsIndex.has(num)) {
      return [itemsIndex.get(num)!, i];
    }
    const result = target - num;
    itemsIndex.set(result, i);
  }
  return null;
}
