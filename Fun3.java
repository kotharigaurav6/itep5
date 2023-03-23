// program showing the concept of Function
class Fun3
{
    /* function definition */
    int[] showArray()
    {
        int arr[] = {1,2,3,4,5};
        return arr;
    }
    public static void main(String args[])
    {
        Fun3 obj = new Fun3();
        int arr[] = obj.showArray();
        System.out.println("Array elements are : ");
        for(int a : arr)
        {
            System.out.print("\t"+a);
        }
    }   
}