// program showing the concept of static keyword
class Static2
{
    void show()
    {
        System.out.println("Hello");
    }
    static{
        Static2 obj = new Static2();
        obj.show();
        System.out.println("Statement 1");
    }
    public static void main(String args[])
    {
        System.out.println("Statement 2");
    }
    static{
        System.out.println("Statement 3");
    }
}





