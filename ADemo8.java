// program showing the concept of array
import java.util.Scanner;
class Demo8
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array : ");
        int size = sc.nextInt();

        char arr[]=new char[size];

        System.out.println("Enter Array elements: ");
        for(int i=0;i<size;i++)
        {
            arr[i] = sc.next().charAt(0);
        }
        
        System.out.println("Array elements are : ");
        // for each loop
        for(char a : arr)
        {
                System.out.print("\t"+a);            
        }
    }
}