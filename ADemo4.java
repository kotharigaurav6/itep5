// program showing the concept of array

class Demo4
{
    public static void main(String args[])
    {
        int arr[]={1,2,3,4,5};
        for(int i=0;i<arr.length;i++)
        {
            arr[i] = arr[i]+100;
        }
        System.out.println("Array elements are : ");
        // for each loop
        for(int a : arr)
        {
                System.out.print("\t"+a);            
        }
    }
}