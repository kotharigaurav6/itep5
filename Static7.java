// program showing the concept of static keyword
class SDemo
{
    static String name1 = "Mathew";
    static void display()
    {
        System.out.println("Hello "+name1);
    }
    static{
      System.out.println("This is an example of static block inside SDemo");
    }
}
class Static7
{
    static void display()
    {
        System.out.println("Hello "+name);
    }
    static String name="Andrew Anderson";
    public static void main(String args[])
    {
        display();
        Static7.display();
        SDemo.display();
    }
}





