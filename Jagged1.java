// program showing the concept of jagged array
class Jagged1{
    public static void main(String args[])
    {
        int arr[][] = new int[4][];
        arr[0] = new int[]{11,22,33,44,55};
        arr[1] = new int[]{44,55};
        arr[2] = new int[]{11,33,44,55};
        arr[3] = new int[]{11,55,66,22,33,44,55};
        System.out.println("Array elements are : ");
        for(int i=0;i<arr.length;i++)
        {
            for(int j=0;j<arr[i].length;j++)
            {
                System.out.print("\t"+arr[i][j]);
            }
            System.out.println();
        }
    }
}