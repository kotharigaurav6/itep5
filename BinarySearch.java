// program showing the concept of Binary Search
import java.util.Scanner;
class BinarySearch
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        int arr[] = new int[size];
        System.out.println("Enter Array elements in ascending order : ");
        for(int i=0;i<size;i++)
        {
            arr[i] = sc.nextInt();
        }

        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++)
        {
            System.out.print("\t"+arr[i]);
        }

        /*main binary search logic*/
        System.out.println("Enter element to be search : ");
        int search = sc.nextInt();
        
        int first=0,last=size-1,middle=(first+last)/2;

        while(first<=last)
        {
            if(arr[middle]<search)
                first = middle+1;
            else if(arr[middle]==search)
            {
                System.out.println("Element found at position : "+(middle+1));
                break;
            }
            else
                last = middle-1;       
        middle = (first+last)/2;
        }
        if(first>last)
            System.out.println("Element not found");
    }
}