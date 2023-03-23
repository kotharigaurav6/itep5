// program showing the concept of recursion
import java.util.Scanner;
class Recursion
{
    int fact(int n)
    {
        if(n==0)
            return 1;
        else
            return n*fact(n-1);
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        Recursion obj = new Recursion();
        System.out.println("Factorial : "+obj.fact(num));
    }
}