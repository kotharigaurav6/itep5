/*
1
22
333
4444
55555
*/
import java.util.Scanner;
class Demo2
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int row = sc.nextInt();

        for(int i=1;i<=row;i++)
        {
            for(int j=1;j<=i;j++)
            {
                System.out.print(i);
            }
            System.out.println();
        }
    }
}