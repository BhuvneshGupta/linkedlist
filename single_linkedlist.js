function node(value){
	this.value = value;
	this.next = null;
}

function singleList(){
	this.head = null;
	this.length = 0;
}

singleList.prototype.add = function(value){
	let nN = new node(value);
	let cN = this.head;

	// if head is null then assign new node to head
	if(!cN){
		this.head = nN;
		this.length++;
		return;
	}

	while(cN.next){
		cN = cN.next;
	}

	cN.next = nN;
	this.length++;

	return;
}

singleList.prototype.search = function(value){
	let cN = this.head;

	if(!cN){
		return 0;
	}

	while(cN.next){
		if(cN.value == value){
			return 1;
		}

		cN = cN.next;
	}

	if(cN.value == value){
		return 1;
	}

	return 0;
}

// remove element from specific position
singleList.prototype.remove = function(position){
	let count = 1;
	let length = this.length;
	let cN = this.head;
	let pN = null;

	if(position < 1 || position > length || length == 0){
		return "cant remove, wrong position";
	}

	while(count <= position){
		if(count == position){
			if(count == 1){
				this.head = cN.next;
			}
			else{
				pN.next = cN.next;
			}
			return;
		}

		pN = cN;
		cN = cN.next;
		count++;
	}

	this.length--;
}

singleList.prototype.list = function(){
	let cN = this.head;

	if(!cN){
		console.log("empty list");
		return;
	}

	while(cN.next){
		console.log("\n node value = ", cN.value);
		cN = cN.next;
	}

	console.log("\n node value = ", cN.value);
}

singleList = new singleList();
console.log("list before any node added");
singleList.list();

console.log("\n adding node");
singleList.add(15);
singleList.add(20);
singleList.add(30);

console.log("list after nodes added");
singleList.list();

console.log("is there a node of value 30");
let yes = singleList.search(30);
if(yes){
	console.log("found")
}
else{
	console.log("not found")
}

singleList.remove(1);
console.log("list after node removed from 2nd position");
singleList.list();
