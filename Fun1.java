// program showing the concept of Function
class Fun1
{
    void showArray(int arr[])
    {
        System.out.println("Array elements are : ");
        for(int a : arr)
        {
            System.out.print("\t"+a);
        }
    }
    public static void main(String args[])
    {
        Fun1 obj = new Fun1();
        int arr[] = {1,2,3,4,5};
        obj.showArray(arr); // function calling
    }   
}