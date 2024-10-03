/**
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 */


const mergeTwoSortedLists = (list1, list2) => {
    const maxLength = list1.length > list2.length ? list1.length : list2.length;
    const result = [];
    for (let i = 0; i < maxLength; i++) {
        const l1 = list1[i];
        const l2 = list2[i];
        if (l2 >= l1) {
            result.push(l1)
            result.push(l2)
        } else if (l1 || l1 === 0) {
            result.push(l1)
        } else if (l2 || l2 === 0) {
            result.push(l2)
        }
    }
    return result
}
console.log(mergeTwoSortedLists([1, 2, 4], [1, 3, 4]))
console.log(mergeTwoSortedLists([], []))
console.log(mergeTwoSortedLists([], [0]))
