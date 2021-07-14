/* Queues */
console.log("-----------------Queue");
function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    // remove the first element 
    this.defrontqueue = function() {
        return collection.shift();
    };
    // remove k element in the last of array
    this.delastque = function(k) {
        collection.splice(collection.length-k,k);
    }
    // remove a value in array 
    this.dequeue = function(element) {
        var index = collection.indexOf(element);
        collection.splice(index,1);
    }
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('h');
q.enqueue('k');
q.enqueue("h");
q.enqueue("j");
q.print();
q.defrontqueue();
console.log(q.front());
q.print(); 
q.delastque(2);
q.print();
q.dequeue("h");
q.print();


console.log("priorityqueue");
function PriorityQueue() {
    var collection = [];
    // this  method will print out all element of array collection 
    this.printCollection = function() {
        (console.log(collection));
    };
    // this method use to push a new element into collection
    this.enqueue = function(element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i < collection.length; i++) {
                if (element[i] < collection[i][1]) {
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            // neu ko add vao vi tri i duoc thi mac dinh add vao cuoi 
            if (!added) {
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    }
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes',2]);
pq.enqueue(['Quincy Larson',3]);
pq.enqueue(['Ewa Mitulska-wojcik',1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
