// program 

class Product
{
    int pid;
    double price;
    String name;

    Product(int pid,double price,String name)
    {
        this.pid=pid;
        this.price=price;
        this.name=name;
    }
    void display()
    {
        System.out.println("\nProduct Id : "+pid);
        System.out.println("Product Price : "+price);
        System.out.println("Product Name : "+name);
    }
}
class AODemo1
{
    public static void main(String args[])
    {
        Product p1 = new Product(1234,2000.32,"Fan");
        Product p2 = new Product(1235,4567.45,"Cooler");
        
        p1.display();
        p2.display();
    }
}

/*
       Product p1,p2,p3,p4,p5......,p50;
        Product p[] <------ array

        int a1,a2,a3,a4,a5.....,a50;
        int arr[] <------- array

         0    1   2   3   4    <---- indexing
        ---------------------
        | 1 | 2 | 4 | 5 | 6 | <--- data(elements)
        ---------------------
      arr[0]arr[1] [2] [3] [4].. 

         0    1   2   3   4    <---- indexing
        ---------------------
        | 0 | 0 | 0 | 0 | 0 | <--- data(elements)
        ---------------------
      arr[0]arr[1] [2] [3] [4].. 

                0           1   2   3   4    <---- indexing
        -----------------------------------
        | Product@5de4554 |   |   |   |   | <--- objects
        -----------------------------------
                p[0]      p[1] [2] [3] [4].. 


                0           1   2   3   4    <---- indexing
        -----------------------------------
        |       null     |   |   |   |   | <--- objects
        -----------------------------------
                p[0]      p[1] [2] [3] [4].. 

*/