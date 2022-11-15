class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class CircularLinkedList{
    constructor(node){
        if(node){
            this.head=node;
            node.next=this.head;
        }else{
            this.head=null;
        }
    }
    
    pushNode(data) {  //adding node at the end of the list
        let node = new Node(data);
        if(this.head){
            let temp=this.head;
            while(temp.next.data != this.head.data){
                temp = temp.next
            }
            temp.next=node;
            node.next=this.head;
        }else{
            this.head = node;
        }
        
    }
    remove3rd(){
        let temp = this.head;
        let prev = null;
        let count=1;
        while(temp.next != prev ){
            if(count==3){
                prev.next=temp.next;
                temp.next=null;
                temp = prev.next;
                count=1;
            }
            prev = temp;
            temp =temp.next;
            count++
        }
        console.log([temp.data,prev.data]);
    }
}

let node = new Node(1)
let soldiers = new CircularLinkedList(node)
for(let i = 2; i<41;i++){
    let node = new Node(i);
    soldiers.pushNode(i)
}
soldiers.remove3rd()