// program showing the concept of Function
// with argument with return type
import java.util.Scanner;
class FDemo8
{
    int addition(int a,int x)
    {
        return a+x;
    }
    public static void main(String args[])
    {
        FDemo8 obj = new FDemo8();
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
        System.out.println("Addition : "+obj.addition(a,b));
    }
}