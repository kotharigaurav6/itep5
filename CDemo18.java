// program to swap two numbers 
import java.util.Scanner;
class CDemo18
{
    int a,b;
    void setData(int a,int b)
    {
        this.a=a;
        this.b=b;
    }
    void swap(CDemo18 obj)
    {
        int temp = obj.a;
        a=obj.b;
        b=temp;
    System.out.println("After swapping in swap : \na : "+a+"\nb : "+b);
    }
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        CDemo18 obj = new CDemo18();
        System.out.println("Before swapping in main : \na : "+a+"\nb : "+b);
        obj.setData(a,b);
        obj.swap(obj);
        System.out.println("After swapping in main : \na : "+obj.a+"\nb : "+obj.b);
    }
}