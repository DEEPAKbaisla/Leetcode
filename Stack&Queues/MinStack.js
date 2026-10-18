/**Leetcode 155. Min Stack https://leetcode.com/problems/min-stack/
 * this is problem about stack, we need to implement a stack with push, pop, top and getMin functiona all in 0(1) time complexity.
 * so while pushing the value into stack we will also push the minimum value in the stack at that time, so that when we pop the value from stack we can get the minimum value in 0(1) time complexity.
 * 
 */
var MinStack = function() {
    this.s=[]
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.s.length ===0){
        this.s.push([value,value])
    }else{
        let minNum= Math.min(value,this.s[this.s.length-1][1])
        this.s.push([value,minNum])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1]
};

