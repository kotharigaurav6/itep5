// program showing the concept of two dimensional array
import java.util.Scanner;
class Demo3
{
    public static void main(String args[])
    {
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter rows and columns : ");
       int r = sc.nextInt();
       int c = sc.nextInt();

       int arr[][]=new int[r][c];     
       System.out.println("Enter Array elements : ");
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<c;j++)
            {
               arr[i][j] = sc.nextInt();     
            }
        }

       System.out.println("Array elements are : ");
    /*
        for(int i=0;i<3;i++)
        {
            for(int j=0;j<3;j++)
            {
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
    */
    /*
        for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr[i].length;j++)
            {
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
    */
        for(int ar[] : arr)
        {
            for(int a : ar)
            {
                System.out.print(a+"\t");
            }
            System.out.println();
        }
    }
}

