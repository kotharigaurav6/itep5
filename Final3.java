// program showing the concept of final keyword

class Final3
{
    public static void main(String args[])
    {
        int arr[] = {1,2,3,4,5};
        for(final int a : arr)
        {
            System.out.print("\t"+a);
        }
    }
}