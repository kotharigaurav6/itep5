// program showing the concept of static keyword
class SDemo
{
    static{
      System.out.println("This is an example of static block inside SDemo");
    }
}
class Static5
{
    static{
      System.out.println("This is an example of static block inside Static4");
    }
    public static void main(String args[])
    {
        SDemo s1 = new SDemo();
        System.out.println("Main method...");
        SDemo s2 = new SDemo();
    }
}





