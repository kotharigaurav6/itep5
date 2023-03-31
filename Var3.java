// program showing the concept of varargs (variable arguments)

class Var3
{
    void testData(String a,int...var)
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
        Var3 obj= new Var3();
        obj.testData("Andrew");
        obj.testData("Anderson",new int[]{45,56});
        obj.testData("Simon",2,3,4,5,6,7,8);
        obj.testData("Sim",2,3);
    }
}