// program showing the concept of selection sort
import java.util.Scanner;
class ADemo11
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

        for(int i=0;i<size;i++)
        {
            for(int j=i+1;j<size;j++)
            {
                if(arr[i]>arr[j])
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j]=temp;
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
