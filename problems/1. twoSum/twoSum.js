var twoSum = function (nums, target) {
  const itemsIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (itemsIndex.has(num)) {
      return [itemsIndex.get(num), i];
    }
    const result = target - num;
    itemsIndex.set(result, i);
  }

  return null;
};
