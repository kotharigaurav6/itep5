// program to swap two numbers ()
import java.util.Scanner;
class CDemo16
{
    void swap(int a,int b)
    {
        int temp = a;
        a=b;
        b=temp;
    System.out.println("After swapping in swap : \na : "+a+"\nb : "+b);
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        CDemo16 obj = new CDemo16();
        System.out.println("Before swapping in main : \na : "+a+"\nb : "+b);
        obj.swap(a,b);
        System.out.println("After swapping in main : \na : "+a+"\nb : "+b);
    }
}