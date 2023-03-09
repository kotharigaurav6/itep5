// program showing the concept of array

class Demo3
{
    public static void main(String args[])
    {
        int arr[]={1,2,3,4,5};
            //arr[2] = 100;
        int arr1[]={100,200,300,400,500,600,700};

        arr=arr1;

        System.out.println("Array elements are : ");
        // for each loop
        for(int a : arr)
        {
                System.out.print("\t"+a);            
        }
        
    }
}