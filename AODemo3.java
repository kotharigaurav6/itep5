// program showing the concept of array of object
import java.util.Scanner;
class Product
{
    int pid;
    double price; 
    String name;

    void getProductDetails()
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Product Id : ");
        pid = sc.nextInt();

        System.out.println("Enter Product Price : ");
        price = sc.nextDouble();
            sc.nextLine();
        System.out.println("Enter Product Name : ");
        name = sc.nextLine();
    }
    void display()
    {
        System.out.println("\nProduct Id : "+pid);
        System.out.println("Product Price : "+price);
        System.out.println("Product Name : "+name);
    }
    String maxPrice(Product p[])
    {
       double price = p[0].price;
       String name=null;
       for(int i=0;i<p.length;i++)
       {
            if(price<=p[i].price)
            {
                price = p[i].price;
                name = p[i].name;
            }
       } 
       System.out.println("\nHighest Price : "+price);
       return name;
    }
}
class AODemo3
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Number of products : ");
        int num = sc.nextInt();

        Product p[] = new Product[num];
        
        for(int i=0;i<p.length;i++)
        {
            p[i] = new Product();
            p[i].getProductDetails();
        }        
        for(Product pobj : p)
        {
            pobj.display();
        }
        Product pobj = new Product();        
        System.out.println("Highest Price Product name : "+pobj.maxPrice(p));

    }
}

