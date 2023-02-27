/*
1
23
456
78910
*/
import java.util.Scanner;
class Demo3
{
    public static void main(String args[])
    {
        int a=1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int row = sc.nextInt();

        for(int i=1;i<=row;i++)
        {
            for(int j=1;j<=i;j++)
            {
                System.out.print(a++);
            }
            System.out.println();
        }
    }
}