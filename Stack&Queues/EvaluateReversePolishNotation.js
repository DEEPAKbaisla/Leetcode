/**leetcode 150. Evaluate Reverse Polish Notation https://leetcode.com/problems/evaluate-reverse-polish-notation
 * reverse plish notation is --> 3 4 + 2 * 7 /  --> ((3 + 4) * 2) / 7
 * we will use a stack to evaluate the expression, for each token if it is a number we will push it to the stack, if it is an operator we will pop two elements from the stack, perform the operation and push the result back to the stack.
 * time complexity  O(n) 
 *  space complexity  O(n)
 */

var evalRPN = function(tokens) {
    let stack=[]
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]==="+" ||tokens[i]==="-"||tokens[i]==="*"||tokens[i]==="/" ){
            let a=stack.pop()
            let b=stack.pop()
            let ans =Math.trunc(eval(`${Number(b)}${tokens[i]}(${Number(a)})`))
            stack.push(ans) 
        }
        else{
            stack.push(tokens[i])
        }
    }
    return Number(stack.pop())
};


