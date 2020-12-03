// 反转链表

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  insert(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(val);
  }
}

var reverseList = function (head) {
  let reverseListHead = new ListNode(head.val);
  let currentNode = head;

  while (currentNode.next) {
    currentNode = currentNode.next;
    const preReverseListHead = reverseListHead;
    reverseListHead = new ListNode(currentNode.val);
    reverseListHead.next = preReverseListHead;
  }

  return reverseListHead;
};

const list = new List();

list.insert(1);
list.insert(2);
list.insert(3);

console.log(list);
