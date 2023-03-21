// program showing the concept of Function
// no argument with return type
import java.util.Scanner;
class FDemo6
{
    int addition()
    {
        Scanner sc = new Scanner(System.in);
            System.out.println("Enter values of a and b : ");
            int a = sc.nextInt();
            int b = sc.nextInt();
        return a+b;
    }
    public static void main(String args[])
    {
        FDemo6 obj = new FDemo6();
        System.out.println("Addition : "+obj.addition());
    }
}