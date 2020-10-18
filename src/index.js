module.exports = function check(str, bracketsConfig) {
        let stack = [];
        stack.empty = function () {
            return stack == 0;
        }
        stack.top = function () {
            return stack[stack.length - 1];
        }
        for(let i = 0; i < str.length; i++) {
            if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
                stack.push(str[i])
            } else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
                if (stack.empty()) {
                    return false
                } else {
                    stack.pop();
                }
            }
        }
        return stack.empty();

}
