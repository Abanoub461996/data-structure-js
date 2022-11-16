function HashTable(size) {
     this.size = size;
     this.keys = this.initArray(size);
     this.values = this.initArray(size);
     this.limit = 0;
}

// Using Linear Probing

HashTable.prototype.put = function(key, value) {
if (this.limit >= this.size) throw 'hash table is full'
 var hashedIndex = this.hash(key);

// Linear probing
while (this.keys[hashedIndex] != null) {
hashedIndex++;
// so if the hashindex is 13 and it goes to 14 => 14%13 =1 loop from the start
hashedIndex = hashedIndex % this.size;

}

this.keys[hashedIndex] = key;
this.values[hashedIndex] = value;
this.limit++;
}

HashTable.prototype.get = function(key) {
    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;
        hashedIndex = hashedIndex % this.size;
    }
    return this.values[hashedIndex];
}


// Using quadratic Probing

// HashTable.prototype.put = function(key, value) {
//     if (this.limit >= this.size) throw 'hash table is full'
//      var hashedIndex = this.hash(key),squareIndex = 1;
    
//     // quadratic probing
//     while (this.keys[hashedIndex] != null) {
//         hashedIndex += Math.pow(squareIndex,2);
//         hashedIndex = hashedIndex % this.size;
//         squareIndex++;
//     }
    
//     this.keys[hashedIndex] = key;
//     this.values[hashedIndex] = value;
//     this.limit++;
//     }
    
// HashTable.prototype.get = function(key) {
//     var hashedIndex = this.hash(key),squareIndex = 1;

//     // quadratic probing
//     while (this.keys[hashedIndex] != key) {
//         hashedIndex += Math.pow(squareIndex,2);
//         hashedIndex = hashedIndex % this.size;
//         squareIndex++;
//     }
//     return this.values[hashedIndex];
// }



// common part  
// SINGLE HASH
// HashTable.prototype.hash = function(key) {
// // Check if int
//     if (!Number.isInteger(key)) throw 'must be int';
//     return key % this.size;
// }

HashTable.prototype.hash = function(key) {
    // Check if int
    if (!Number.isInteger(key)) throw 'must be int';
    hashedKey = key % this.size
    return this.secondHash(hashedKey);
}

HashTable.prototype.secondHash = function(hashedKey) {
    var R = this.size - 2; // new prime number to modulus with
    return R - hashedKey % R;
}


HashTable.prototype.initArray = function(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}

var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "forty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");
exampletable.put(169, "new");
console.log(exampletable.get(7));



console.log(exampletable);
