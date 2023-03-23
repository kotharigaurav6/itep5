// program showing the concept of Function
class Fun4
{
    /* function definition */
    int[][] showArray()
    {
        int arr[][] = {{1,2},{3,4}};
        return arr;
    }
    public static void main(String args[])
    {
        Fun4 obj = new Fun4();
        int arr[][] = obj.showArray();
        System.out.println("Array elements are : ");
        for(int ar[] : arr)
        {
            for(int a : ar)
            {
                System.out.print("\t"+a);
            }
            System.out.println();
        }
    }   
}