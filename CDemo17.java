// program to swap two numbers 
import java.util.Scanner;
class CDemo17
{
    int a,b;
    void setData(int a,int b)
    {
        this.a=a;
        this.b=b;
    }
    void swap(int a,int b)
    {
        int temp = a;
        this.a=b;
        this.b=temp;
    System.out.println("After swapping in swap : \na : "+this.a+"\nb : "+this.b);
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        CDemo17 obj = new CDemo17();
        System.out.println("Before swapping in main : \na : "+a+"\nb : "+b);
        obj.setData(a,b);
        obj.swap(obj.a,obj.b);
        System.out.println("After swapping in main : \na : "+obj.a+"\nb : "+obj.b);
    }
}