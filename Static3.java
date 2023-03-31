// program showing the concept of static keyword
class Static3
{
    static int a;
    static{
        a = 200;
        System.out.println("Statement 1 : "+a);
    }
    public static void main(String args[])
    {
        System.out.println("Statement 2");
    }
    static{
        System.out.println("Statement 3 : "+a);
    }
}





