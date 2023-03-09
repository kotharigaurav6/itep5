// program showing the concept of array

class Demo5
{
    public static void main(String args[])
    {
        int arr[]=new int[]{1,2,3,4,5};
        System.out.println("Array elements are : ");
        // for each loop
        for(int a : arr)
        {
                System.out.print("\t"+a);            
        }
    }
}