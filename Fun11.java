// program showing the concept of Function
// this can be used to represent current class member function
import java.util.Scanner;
class Fun11
{
    int a,b; // instance variable // data menbers
    void setData(int a,int b) // member functions
    {
        this.a=a;
        this.b=b;
            this.add();
            sub(); // this.sub();
            this.mul();
            div(); // this.div();
    }
    void add()  // member functions
    {
        System.out.println("Sum : "+(a+b));
    }
    void sub()  // member functions
    {
        System.out.println("Sub : "+(a-b));
    }
    void mul()  // member functions
    {
        System.out.println("Multiply : "+(a*b));
    }
    void div()  // member functions
    {
        System.out.println("Divide : "+(a/b));
    }

    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

          Fun11 obj = new Fun11();
          obj.setData(a,b);
    }   
}