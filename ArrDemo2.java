// program showing the concept of two dimensional array

class Demo2
{
    public static void main(String args[])
    {
       int arr[][]={
            {1,2,3},
            {2,3,4},
            {4,5,6}
       };     
       System.out.println("Array elements are : ");
    /*
        for(int i=0;i<3;i++)
        {
            for(int j=0;j<3;j++)
            {
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
    */
    /*
        for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr[i].length;j++)
            {
                System.out.print(arr[i][j]+"\t");
            }
            System.out.println();
        }
    */
        for(int ar[] : arr)
        {
            for(int a : ar)
            {
                System.out.print(a+"\t");
            }
            System.out.println(ar);
        }
    }
}

