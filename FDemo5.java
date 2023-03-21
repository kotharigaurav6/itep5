// program showing the concept of Function
// no argument no return type
import java.util.Scanner;
class FDemo5
{
    void addition()
    {
        Scanner sc = new Scanner(System.in);
            System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
                System.out.println("Addition : "+(a+b));
    }
    public static void main(String args[])
    {
        FDemo5 obj = new FDemo5();
        obj.addition();
    }
}