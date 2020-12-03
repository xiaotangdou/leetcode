// 实现 Trie (前缀树)

// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple"); // 返回 true
// trie.search("app"); // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app"); // 返回 true

// 说明:
// 你可以假设所有的输入都是由小写字母 a-z 构成的。
// 保证所有输入均为非空字符串。

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.treeMap = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word) {
    return;
  }

  const wordArr = word.split("");

  for (let i = 0; i < wordArr.length; i++) {
    const keyStr = wordArr.slice(0, i + 1);

    const val = new Function("obj", `return obj.${keyStr.join(".")}`)(
      this.treeMap
    );

    if (!val) {
      new Function("obj", `obj.${keyStr.join(".")}={}`)(this.treeMap);
    }
  }

  new Function("obj", `obj.${word.split("").join(".")}.isLeaf=true`)(
    this.treeMap
  );
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word) {
    return false;
  }
  try {
    const val = new Function("obj", `return obj.${word.split("").join(".")}`)(
      this.treeMap
    );

    return !!val && !!val.isLeaf;
  } catch (err) {
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) {
    return false;
  }

  try {
    const val = new Function("obj", `return obj.${prefix.split("").join(".")}`)(
      this.treeMap
    );

    return !!val;
  } catch (err) {
    return false;
  }
};

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // 返回 true
console.log(trie.search("app")); // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");
console.log(trie.search("app")); // 返回 true
