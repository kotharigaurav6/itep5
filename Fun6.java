// program showing the concept of Function
import java.util.Scanner;
class Fun6
{
    void operation(int a,int b)
    {
        System.out.println("Sum : "+(a+b));
        System.out.println("Sub : "+(a-b));
        System.out.println("Multiply : "+(a*b));
        System.out.println("Divide : "+(a/b));
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

          Fun6 obj = new Fun6();
          obj.operation(a,b);      
    }   
}