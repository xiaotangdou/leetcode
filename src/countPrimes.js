/**
 * 计数质数
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * @example
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 */

// var countPrimes = function (n) {
//   let count = 0;

//   for (let i = 2; i < n; i++) {
//     let single = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         single = false;
//         break;
//       }
//     }
//     if (single) {
//       count++;
//     }
//   }

//   return count;
// };

var countPrimes = function (n) {
  // 假设都是质数
  // 如果 A 不是质数那么 A 一定是小于它的两个数的乘积
  // 2 4 6 8 9 10
  const isPrime = new Array(n).fill(true);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;

      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return count;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
