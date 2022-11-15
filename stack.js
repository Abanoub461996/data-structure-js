

// STACK 

function Stack(data) {
    this.dataStore =[];
    if(data){this.dataStore = data;}
    this.length = this.dataStore.length
    this.peek =peek;
    this.push = push;
    this.pop = pop;
    this.isEmpty = isEmpty;
    this.buffer = buffer;
    this.search = search;
    this.clear = clear;
}
function peek() {
    return this.dataStore[this.dataStore.length -1];
}
function push(element) {
    this.length++

    return this.dataStore.push(element)
}
function pop() {
    this.length--
    return this.dataStore.pop();
}

function isEmpty() {
    if(this.dataStore.length==0){
        return true
    }
    return false;
}

function buffer(){
    return this.dataStore.slice()
}

function search(element) {
    let bufferArray = this.buffer();
    let bufferStack = new Stack(bufferArray);
    while (!bufferStack.isEmpty()) {
        if(bufferStack.pop()==element){
            return true
        }
    }return false;
}

function clear() {
    this.dataStore.length = 0
    return this.dataStore
}

let stack = new Stack([1,8,5,7])

// Examples 
// EX1. Palindromes detection function
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length > 0) {
        rword =rword.concat(s.pop()) 
    }
    if (word == rword) {
    return true;
    }
    else {
        return false;
    }
}
// console.log(isPalindrome("mhm"));


// EX2. Balanced Parentheses.

function areBracketsBalanced(expr){
    let stack = [];
  
    // it has to be for loop not another loop method, to make sure it brakes on the switch case
    for(let i = 0; i < expr.length; i++){
        let el = expr[i];
        if(el =='('||el=='{'||el=='['){
            stack.push(el);
        }
        if (stack.length == 0)return false;
        let check;
        console.log(stack,el);
        switch (el){
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;
      
            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;
      
            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    };
    
    // Check Empty Stack
    return (stack.length == 0);
}
let expr = "([{()}])";
  
// console.log(areBracketsBalanced(expr))
  
// EX3. infix expressions to postfix expressions

var stackarr = [];
 
// Variable topp initialized with -1
var topp = -1;
function push(e) {
    topp++;
    stackarr[topp] = e;
}
function pop() {
    if (topp == -1)
        return 0;
    else {
        var popped_ele = stackarr[topp];
        topp--;
        return popped_ele;
    }
}
function operator(op) {
    if (op == '+' || op == '-' ||
        op == '^' || op == '*' ||
        op == '/' || op == '(' ||
        op == ')') {
        return true;
    }
    else
        return false;
}
function precedency(pre) {
    if (pre == '@' || pre == '(' || pre == ')') {
        return 1;
    }
    else if (pre == '+' || pre == '-') {
        return 2;
    }
    else if (pre == '/' || pre == '*') {
        return 3;
    }
    else if (pre == '^') {
        return 4;
    }
    else
        return 0;
}

function InfixtoPostfix(infixval) {
 
    // Postfix array created
    var postfix = [];
    var temp = 0;
    push('@');
 
    // Iterate on infix string
    for (var i = 0; i < infixval.length; i++) {
        var el = infixval[i];
 
        // Checking whether operator or not
        if (operator(el)) {
            if (el == ')') {
                while (stackarr[topp] != "(") {
                    postfix[temp++] = pop();
                }
                pop();
            }
 
            // Checking whether el is (  or not
            else if (el == '(') {
                push(el);
            }
 
            // Comparing precedency of el and
            // stackarr[topp]
            else if (precedency(el) > precedency(stackarr[topp])) {
                push(el);
            }
            else {
                while (precedency(el) <=
                    precedency(stackarr[topp]) && topp > -1) {
                    postfix[temp++] = pop();
                }
                push(el);
            }
        }
        else {
            postfix[temp++] = el;
        }
        console.log(i,">",el,"=>",stackarr, postfix);
    }
 
    // Adding character until stackarr[topp] is @
    while (stackarr[topp] != '@') {
        postfix[temp++] = pop();
    }
 
    // String to store postfix expression
    var st = "";
    for (var i = 0; i < postfix.length; i++)
        st += postfix[i];
 
    // To print postfix expression in HTML
    console.log(st)
}
InfixtoPostfix('((a+b)*c)')