// program showing the concept of final keyword
/*
        Final Keyword : 
            a) Variable : cannot update value
            b) Method : we cannot override final method
            c) Class : we cannot extends final class
*/
class Final4
{
    public static void main(String args[])
    {
        // final int arr[] = {1,2,3,4,5};
        // arr[2] = 34;
        // for(int a : arr)
        // {
        //     System.out.print("\t"+a);
        // }

        // final int arr[] = {1,2,3,4,5};
        // int arr1[] = {111,222,333,444,555};
        // arr1 = arr;
        // for(int a : arr1)
        // {
        //     System.out.print("\t"+a);
        // }

        final int arr[] = {1,2,3,4,5};
        int arr1[] = {111,222,333,444,555};
        arr = arr1;
        for(int a : arr)
        {
            System.out.print("\t"+a);
        }

    }
}





