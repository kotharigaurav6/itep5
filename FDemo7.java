// program showing the concept of Function
// with argument no return type
import java.util.Scanner;
class FDemo7
{
    void addition(int a,int x)
    {
        System.out.println("Addition : "+(a+x));
    }
    public static void main(String args[])
    {
        FDemo7 obj = new FDemo7();
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
        obj.addition(a,b);
    }
}