/**leetcode 1021. Remove Outermost Parentheses https://leetcode.com/problems/remove-outermost-parentheses/
 * we have to maintain level like if level> 1 then we will add the parentheses to answer string, if level=1 then we will not add the parentheses to answer string.
 * time complexity  O(n) 
 *  space complexity  O(n)
 */

var removeOuterParentheses = function(s) {
    let stack=[]
    let ans =""
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            stack.push(s[i])
            if(stack.length>1){
                ans+=s[i]
            }
        }
        else{
            if(stack.length>1){
                ans+=s[i]
            }
            stack.pop()
        }
    }
    return ans
    
};