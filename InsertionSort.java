// program showing the concept of Insertion sort
import java.util.Scanner;
class InsertionSort
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++)
        {
            arr[i] = sc.nextInt();
        }

        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++)
        {
            System.out.print("\t"+arr[i]);
        }

        /*main insertion sort logic*/
        int t,c,d;
        boolean flag = false;
        for(c=1;c<size;c++)
        {
           t = arr[c];
            for(d=c-1;d>=0;d--)
            {
                if(arr[d]>t)
                {
                    arr[d+1]=arr[d];
                    flag=true;
                }
                else 
                    break;
            }     
            if(flag)
                arr[d+1]=t;
        }
        
        System.out.println("\nArray elements in ascending order : ");
        for(int i=0;i<size;i++)
        {
            System.out.print("\t"+arr[i]);
        }
    }
}