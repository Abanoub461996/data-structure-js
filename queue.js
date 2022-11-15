class Queue{
    dataStore;
    front;
    back;
    constructor(data){

        if(data){
            this.front = this.dataStore[0];
            this.back = this.dataStore[this.dataStore.length-1];
        }else{
            this.dataStore = [];
            this.front=0;
            this.back=0;
        }
    }
    enqueue(element) {
        this.dataStore.push(element);
        this.front= this.dataStore[0]
        this.back = this.dataStore[this.dataStore.length-1];
        return this.dataStore.length;
    }
    // dequeue(){
    //     let temp = this.dataStore.shift();
    //     this.back = this.dataStore[this.dataStore.length-1];
    //     this.front = this.dataStore[0];
    //     return temp;
    // }
   
    isEmpty(){
        return this.dataStore.length == 0;
    }
}
// read the dancers sheet 
document.getElementById('inputfile').addEventListener('change', function() {
    let dancers = [];
    var fr=new FileReader();
    fr.onload=function(){
        arr = fr.result.split("\n")
        for (var i = 0; i < arr.length; ++i) {
            dancers.push(arr[i].trim());
        }
        seperateDancers(dancers)
        coupling()
    }
    fr.readAsText(this.files[0]);
})
// Dancers object
class Dancer{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
}
class Pairs{
    constructor(female, male){
        this.female = female;
        this.male = male;
    }
}

let females = new Queue();
let males = new Queue;
function seperateDancers(dancers) {
    for (var i = 0; i < dancers.length; i++) {
        var dancer = dancers[i].split(" ");
        var sex = dancer[0];
        var name = dancer.splice(1,2).join(" ");
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

let coupling = function () {
    while(!females.isEmpty() && !males.isEmpty()){
        let pair = new Pairs(females.dequeue(), males.dequeue())
        console.log(pair.male.name,"and",pair.female.name,"will dance together")
    }
    if(!females.isEmpty()){
        console.log(females.front.name,"is waiting!")
    }
    if(!males.isEmpty()){
        console.log(males.front.name,"is waiting!")
    }
}

// EX1. Sorting 
// function distribute(nums, queues, n, digit) {
//     for (var i = 0; i < n; ++i) {
       
//         if (digit == 1) {
//             queues[nums[i]%10].enqueue(nums[i]);
//         }
//         else {
//             queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
//         }
//     }
// }
// function collect(queues, nums) {
//     var i = 0;
//     for (var digit = 0; digit < queues.length; ++digit) {
//         while (!queues[digit].isEmpty()) {
//             nums[i++] = queues[digit].dequeue();
//         }
//     }
// }
// // generate random numbers array input
// var nums = [];
// for (var i = 0; i < 5; ++i) {
//     nums[i] = Math.floor(Math.floor(Math.random() * 101));
// }
// // generate 9 queues to use for sorting the array
// var queues = [];
// for (var i = 0; i <10; ++i) {
//     queues[i] = new Queue();
// }


// // Sorting the nums array in 2 steps
// distribute(nums, queues, nums.length, 1);
// collect(queues, nums);
// distribute(nums, queues,nums.length,10)
// collect(queues, nums);
// // console.log("after radix sort: =>",nums);



//EX2. Priority Queue
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
Queue.prototype.dequeue = function () {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}
Queue.prototype.toString = function () {
    let arr= this.dataStore.map(element => {
        return JSON.parse(JSON.stringify(element))
    });
    console.log(arr);
    return arr.join(" ")
}
var ed = new Queue();

ed.enqueue(new Patient("Smith",5));
ed.enqueue(new Patient("Jones", 4));
ed.enqueue(new Patient("Fehrenbach", 6));
ed.enqueue(new Patient("Brown", 1));
ed.enqueue(new Patient("Ingram", 1));
ed.toString()
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
ed.toString()
// // another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
ed.toString()
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
ed.toString()
