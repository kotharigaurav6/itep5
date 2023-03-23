// program showing the concept of Function
import java.util.Scanner;
class Fun7
{
    void add(int a,int b)
    {
        System.out.println("Sum : "+(a+b));
    }
    void sub(int a,int b)
    {
        System.out.println("Sub : "+(a-b));
    }
    void mul(int a,int b)
    {
        System.out.println("Multiply : "+(a*b));
    }
    void div(int a,int b)
    {
        System.out.println("Divide : "+(a/b));
    }

    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

          Fun7 obj = new Fun7();
          obj.add(a,b);      
          obj.sub(a,b);      
          obj.mul(a,b);      
          obj.div(a,b);      
    }   
}