/**
 * 随机 获取 小值 和 大值之间的数字
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @returns {Number}
 */
export function getRandom (min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}
