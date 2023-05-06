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

![](/algo/bt.jpeg =500x)

## Inorder, Preorder, Postorder

![](/algo/order.jpeg =300x)

- 前序位置的代码会在刚进入一个二叉树节点时执行，1 234 567
- 后序位置的代码会在将要离开一个二叉树节点时执行（遍历完左右子树后），342 765 1
- 中序位置的代码会在一个二叉树左子树都遍历完，即将开始遍历右子树时执行，324 1 765，主要用在 BTS 中

因为后序位置的特殊之处，它既可以获取函数的参数，也可以获取子树的返回值，这就非常的有用。

## Example

- 遍历一遍二叉树得到答案
- 分解问题，通过递归子树推导得到答案

一个例子，返回前序遍历结果的两种方法

```java
ist<Integer> res = new LinkedList<>();

// 使用遍历框架，返回前序遍历结果
List<Integer> preorderTraverse(TreeNode root) {
  traverse(root);
  return res;
}

void traverse(TreeNode root) {
  if (root == null) {
      return;
  }
  // 前序位置
  res.add(root.val);
  traverse(root.left);
  traverse(root.right);
}
```

使用分解问题的思路：前序遍历结果 = 根节点 + 左子树前序遍历结果 + 右子树前序遍历结果

```java
List<Integer> preorderTraverse(TreeNode root) {
  List<Integer> res = new LinkedList<>();
  if (root == null) {
      return res;
  }

  res.add(root.val);
  res.addAll(preorderTraverse(root.left));
  res.addAll(preorderTraverse(root.right));
  return res;
}
```
