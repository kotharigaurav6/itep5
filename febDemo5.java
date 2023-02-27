// program to interchange first and last digit of any number 
import java.util.Scanner;
class Demo5
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        int num = sc.nextInt();
        int temp=num;
        int count=0;
        while(temp>0)
        {
            count++;
            temp=temp/10;
        }
        System.out.println("Number of digits : "+count);
        //System.out.println("res : "+(int)Math.pow(10,count-1)); 
        int first = num/(int)Math.pow(10,count-1);
        int middle = (num%(int)Math.pow(10,count-1))/10;
        int last  = num%10;

        System.out.println("First digit : "+first);
        System.out.println("Middle digit : "+middle);
        System.out.println("Last digit : "+last);

        int result = (count==1) ? num : last*(int)Math.pow(10,count-1) + middle*10 + first;
        System.out.println("Result : "+result);
    }
}