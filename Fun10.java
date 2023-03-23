// program showing the concept of Function
// this can be used to represent current class data member
import java.util.Scanner;
class Fun10
{
    int a,b; // instance variable
    void setData(int a,int b)
    {
        this.a=a;
        this.b=b;
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

          Fun10 obj = new Fun10();
          obj.setData(a,b);
          obj.add();      
          obj.sub();      
          obj.mul();      
          obj.div();      
    }   
}