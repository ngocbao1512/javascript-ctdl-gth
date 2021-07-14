console.log("Stack");
var Stack = function() {
    this.count = 0;
    this.storage = {};



    // Adds a value into the end of the stack
    this.push = function(value) {
        this.storage[this.count] =value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();
var myStack2 = new Stack();

console.log(typeof(myStack));

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("free CodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log("-----------")
console.log(myStack.count);

