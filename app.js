// LISTS 


function List() {
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.listSize = 0;
    this.clear = clear;
    this.find = find;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(value){
    return this.dataStore.indexOf(value)
}
function remove(el){
    if(this.find(el) > -1){
        this.dataStore.splice(this.find(el),1);
        this.listSize--
        return true
    }
    return false;
}
function insert(element,after) {
    if(this.find(after) == -1) return false
    this.dataStore.splice(this.find(after)+1,0,element);
    return this.listSize++
}
function clear() {
    this.pos =0;
    this.listSize =0;
    delete this.dataStore;
}
function contains(element){
    return(this.find(element) >-1 ? true : false)
}
let list1 = new List()
list1.append(5)
list1.append(2)
list1.insert(11,5)


// movies Kiosk
// let movies = [];
// var movieList = new List();
// // function to import an array from a file and store it in a list type of data 
// document.getElementById('inputfile').addEventListener('change', function() {
//     var fr=new FileReader();
//     fr.onload=function(){
//         document.getElementById('output')
//         .textContent=fr.result;
//         movies = fr.result.split("\n")
//         for (var i = 0; i < movies.length; ++i) {

//         movieList.append(movies[i].trim());
//         }
//     }
//     fr.readAsText(this.files[0]);
//     console.log(fr);
// })



