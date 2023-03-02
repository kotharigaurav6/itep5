/*
    *
   * *
  *   *
 *     *
* * * * *
*/
import java.util.Scanner;
class Demo6
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();

        for(int i=1;i<=row;i++)
        {
            for(int sp=1;sp<=row-i;sp++)
            {
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++)
            {
                if(j==1 || j==i || i==row)                
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }       
    }
}