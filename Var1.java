// program showing the concept of varargs (variable arguments)

class Var1
{
    void testData(int...var)
    {
        System.out.println("\nNo. of arguments : "+var.length);
        for(int element : var)
        {
            System.out.print("\t"+element);
        }
    }
    public static void main(String args[])
    {
        Var1 obj= new Var1();
        obj.testData();
        obj.testData(new int[]{45,56});
        obj.testData(1,2,3,4,5,6,7,8);
        obj.testData(1,2,3);
    }
}