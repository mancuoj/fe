# 二叉树

别只会抄，别只会刷，多总结 👿

- [二叉树刷题](https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-66994/dong-ge-da-334dd/)
- [力扣题库](https://leetcode.cn/tag/binary-tree/problemset/)


## Traverse

暴论：只要涉及递归，就可以抽象为二叉树的问题。可以根据它们关键操作的位置来区分为前中后序，比如快排就可以看作前序遍历，归并排序就可以看作后序遍历。

```java
void traverse(TreeNode root) {
  if (root == null) {
      return;
  }

  // 前序位置
  traverse(root.left);
  // 中序位置
  traverse(root.right);
  // 后序位置
}

```


## Iteration

`traverse` 其实就是一个能够遍历二叉树所有节点的函数，推广到数组 or 链表的递归遍历也是一样的。

```java
// 递归遍历数组
void traverse(int[] arr, int i) {
  if (i == arr.length) {
      return;
  }

  // 前序位置
  traverse(arr, i + 1);
  // 后序位置
}

// 递归遍历单链表
void traverse(ListNode head) {
  if (head == null) {
      return;
  }

  // 前序位置
  traverse(head.next);
  // 后序位置
  // 这时候如果让你倒序打印一条单链表上所有节点的值，你只需要在后序位置加上打印即可
  print(head.val);
}
```

看图更好理解，其实就是代码执行时机不同。

![](/algo/bt.jpeg)

## Inorder, Preorder, Postorder

- 前序位置的代码会在刚进入一个二叉树节点时执行
- 后序位置的代码会在将要离开一个二叉树节点时执行
- 中序位置的代码会在一个二叉树左子树都遍历完，即将开始遍历右子树时执行


## Solution

- 遍历一遍二叉树得到答案
- 分解问题，通过递归子树推导得到答案