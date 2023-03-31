// program showing the concept of static keyword
class SDemo
{
    static{
      System.out.println("This is an example of static block inside SDemo");
    }
}
class Static4
{
    static{
      System.out.println("This is an example of static block inside Static4");
    }
        SDemo s = new SDemo();
    public static void main(String args[])
    {
        Static4 obj = new Static4();        
        System.out.println("Main method...");
    }
}





