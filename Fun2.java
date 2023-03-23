// program showing the concept of Function
class Fun2
{
    /* function definition */
    int showArray(int arr[])
    {
        System.out.println("Array elements are : ");
        int sum=0;
        for(int a : arr)
        {
            sum+=a;
            System.out.print("\t"+a);
        }
        return sum;
    }
    public static void main(String args[])
    {
        Fun2 obj = new Fun2();
        int arr[] = {1,2,3,4,5};
        System.out.println("\nSum : "+obj.showArray(arr)); // function calling
    }   
}