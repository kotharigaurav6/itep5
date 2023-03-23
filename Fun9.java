// program showing the concept of Function
import java.util.Scanner;
class Fun9
{
    int a,b; // instance variable
    void setData(int a1,int b1)
    {
        a=a1;
        b=b1;
    }
    void add()
    {
        System.out.println("Sum : "+(a+b));
    }
    void sub()
    {
        System.out.println("Sub : "+(a-b));
    }
    void mul()
    {
        System.out.println("Multiply : "+(a*b));
    }
    void div()
    {
        System.out.println("Divide : "+(a/b));
    }

    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

          Fun9 obj = new Fun9();
          obj.setData(a,b);
          obj.add();      
          obj.sub();      
          obj.mul();      
          obj.div();      
    }   
}