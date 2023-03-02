/*
*
**
***
****
***
**
*
*/
import java.util.Scanner;
class Demo7
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();

        for(int i=1;i<=(row/2)+1;i++)
        {
            for(int j=1;j<=i;j++)
            {
                    System.out.print("*");
            }
            System.out.println();
        }       
        for(int i=row/2;i>=1;i--)
        {
            for(int j=1;j<=i;j++)
            {
                    System.out.print("*");
            }
            System.out.println();
        }       
 
    }
}