// program showing the concept of Bubble sort
import java.util.Scanner;
class ADemo12
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        int arr[]=new int[size];

        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++)
        {
            arr[i] = sc.nextInt();
        }
        System.out.println("\nArray elements are : ");
        for(int i=0;i<size;i++)
        {
            System.out.print("\t"+arr[i]);
        }

        for(int i=0;i<size-1;i++)
        {
            for(int j=0;j<size-1-i;j++)
            {
                if(arr[j]>arr[j+1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }    
        System.out.println("\nArray elements in ascending order : ");
        for(int i=0;i<size;i++)
        {
            System.out.print("\t"+arr[i]);
        }
        
    }
}
