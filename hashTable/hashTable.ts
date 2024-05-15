class HashTable {
  data: any[];
  constructor(size: number) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    console.log(hash);
    return hash;
  }

  set(key: string, value: any) {
    const address = this._hash(key);
    this.data[address] = [];
    this.data[address] = [key, value];
  }

  get(key: string) {
    const address = this._hash(key);
    return this.data[address][1];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("a", 20);

console.log(myHashTable.get("a"));
