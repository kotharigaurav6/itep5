// program showing the concept of varargs (variable arguments)

class Var2
{
    void testData(int a,int...var)
    {
        System.out.println("\nNo. of arguments : "+(var.length+1));
        System.out.print("\t"+a);
        for(int element : var)
        {
            System.out.print("\t"+element);
        }
    }
    public static void main(String args[])
    {
        Var2 obj= new Var2();
        obj.testData(1);
        obj.testData(2,new int[]{45,56});
        obj.testData(1,2,3,4,5,6,7,8);
        obj.testData(1,2,3);
    }
}