// program showing the concept of Multidimensional

class Multidimensional{
    public static void main(String args[])
    {

        //<datatype> <array_name>[][][]=new <datatype>[no. of 2d array][no. of rows][no. of columns];
        int arr[][][] = {
            {
                {1,2,3},
                {2,3,4},
                {4,5,6}
            },
            {
                {5,6,7},
                {6,7,8},
                {6,7,8}
            }
        };

        System.out.println("Array elements are : ");
        for(int ar[][] : arr)
        {
            for(int a[] : ar)
            {
                for(int element : a)
                {
                    System.out.print("\t"+element);
                }
                System.out.println();
            }
            System.out.println();
        }
    }
}
/*
        0       1       2       3       4       1d array

        00      01      02          2d array 
        10      11      12
        20      21      22
                                    multidimensional
        000     001     002
        010     011     012
        020     021     022

        100     101     102
        110     111     112
        120     121     122

*/


