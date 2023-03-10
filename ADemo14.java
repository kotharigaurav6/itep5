// program to find out the frequency of elements
import java.util.Scanner;
class ADemo14
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        int arr[]=new int[size];
        int frequency[]=new int[arr.length];

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
         System.out.println("\nArray elements : ");
       
        int counted = -1;
        for(int i=0;i<size;i++)
        {
            int count=1;
            for(int j=i+1;j<size;j++)
            {
                if(arr[i]==arr[j])
                {
                   count++;
                   frequency[j]=counted;     
                }
            }
            if(frequency[i]!=counted)
            {
                frequency[i] = count;
                System.out.println("element : "+arr[i]+"\tFrequency : "+frequency[i]);
            }
        }     
    }
}
