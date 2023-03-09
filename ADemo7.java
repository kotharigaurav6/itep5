// program showing the concept of array
import java.util.Scanner;
class Demo7
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        int arr[]=new int[size];

        System.out.println("Enter Array elements: ");
        for(int i=0;i<size;i++)
        {
            arr[i] = sc.nextInt();
        }
        
        System.out.println("Array elements are : ");
        // for each loop
        for(int a : arr)
        {
                System.out.print("\t"+a);            
        }
    }
}