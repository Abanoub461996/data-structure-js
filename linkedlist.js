// NODE CLASS

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(node){
        if(node){
            this.head=node;
            node.next=null
        }else{
            this.head=null;
        }
    }
    pushNode(data) {  //adding node at the end of the list
        let node = new Node(data);
        if(this.head){
            let temp=this.head;
            while(temp.next){
                temp = temp.next
            }
            temp.next=node;
        }else{
            this.head = node;
        }
        
    }
    find(data){ // find if the list has a node contains specific data
        let temp = this.head;
        while(temp && temp.data != data){
            temp = temp.next;
        }
        return temp;
    }
    display() {
        var temp = this.head;
        while (temp && temp.next) {
            console.log("node=>",temp);
            temp = temp.next;
        }
    }
    insert(data,ref){ //adding a new node after a specific node having it's data
        let node = new Node(data)
        let temp = this.find(ref);
        if(temp){
            node.next = temp.next;
            temp.next = node;
        }else{
            return false
        }
    }
    remove(data){
        if(!this.find(data)){
            return false
        }else{
            let temp = this.head;
            let prev = null;
            while(temp.data != data){
                prev = temp
                temp =temp.next;
            }
            if(prev){
                prev.next = temp.next;
                temp.next=null;
            }else{
                this.head = temp.next;
            }
        }
    }
}
let node1 = new Node("first Node");
let myList =new LinkedList();
// check insert function
myList.pushNode(node1)

myList.pushNode("2nd node")
myList.pushNode("3rd node")
myList.pushNode("4th node")
// check find function
// if(myList.find("rd node")){
//     console.log("found");
// }else{
//     console.log("notFound");
// }


// the display function to show each node (data and next)
// myList.display()

var cities = new LinkedList();
cities.pushNode("head")
// cities.insert("Conway","head");
// cities.insert("Russellville", "Conway");
// cities.insert("Alma", "Russellville");
cities.remove("head")
console.log(cities);