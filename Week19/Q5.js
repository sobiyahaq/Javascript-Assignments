
function Inventory(){
        this.products=[];
}

function  Product(name, category, price, stock){
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
}

    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log(`Added ${product.name} to the inventory.`);
    }

    Inventory.prototype.deleteProduct= function (name){
        this.products.forEach(product => {
            if(product.name === name){
                this.products.pop(product);
                console.log(`Deleted ${product.name} from the inventory.`);
                return;
        }

        });
    }





const inventory = new Inventory();
const product1 = new Product('Laptop', 'Electronics', 899, 10); 
const product2 = new Product('Book', 'Books', 20, 50);
inventory.addProduct (product1); // Added Laptop to the inventory. 
inventory.addProduct(product2);// Added Book to the inventory.
inventory.deleteProduct('Laptop'); // Deleted Laptop from the inventory.