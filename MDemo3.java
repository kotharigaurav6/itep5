/*
    *
   **
  ***
 ****
*****
*/
import java.util.Scanner;
class Demo3
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();

        for(int i=row;i>=1;i--)
        {
            for(int j=1;j<=row;j++)
            {
                if(j>=i)    
                    System.out.print("*");
                else
                    System.out.print(" ");
            }
            System.out.println();
        }       
    }
}