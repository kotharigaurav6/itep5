// program to print table of a number
import java.util.Scanner;
class Demo3
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Number : ");
        int num = sc.nextInt();
        // int t; 
        // for(int i=1;i<=10;i++)
        // {
        //     t = num*i;
        //     System.out.println(num+" x "+i+" = "+t);
        // }    

        for(int i=1;i<=10;i++)
        {
            System.out.println(num+" x "+i+" = "+(num*i));
        }    

    }
}