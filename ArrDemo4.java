// program showing the concept of two dimensional array
import java.util.Scanner;
class Demo4
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
        for(int i=0;i<r;i++)
        {
            for(int j=0;j<c;j++)
            {
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
    System.out.println("sum : "+(arr[0][0]+arr[0][c-1]+arr[r-1][0]+arr[r-1][c-1]));    
    }
}
/*
    r = 3
    c = 3
      arr[0][0]     arr[0][c-1]   
            00  01  02
            10  11  12
            20  21  22
      arr[r-1][0]   arr[r-1][c-1]  
*/






