// program showing the concept of jagged array
import java.util.Scanner;
class Jagged2{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows : ");
        int row = sc.nextInt();
        int arr[][] = new int[row][];
        for(int i=0;i<arr.length;i++)
        {
            System.out.println("Enter columns for "+(i+1)+" row : ");
            int col = sc.nextInt();
            arr[i] = new int[col];
            System.out.println("Enter elements for "+(i+1)+" row : ");
            for(int j=0;j<col;j++)
            {
                arr[i][j] = sc.nextInt();
            }
        }

        System.out.println("Array elements are : ");
        for(int ar[] : arr)
        {
            for(int a : ar)
            {
                System.out.print("\t"+a);
            }
            System.out.println();
        }
    }
}