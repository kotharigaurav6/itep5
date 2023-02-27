/*
*
**
***
****
*****
*/
import java.util.Scanner;
class Demo1
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
                System.out.print("*");
            }
            System.out.println();
        }
    }
}