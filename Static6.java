// program showing the concept of static keyword
class SDemo
{
    static String name1 = "Mathew";
    static{
      System.out.println("This is an example of static block inside SDemo");
    }
}
class Static6
{
    static String name="Andrew Anderson";
    public static void main(String args[])
    {
        System.out.println("Name : "+name);
        System.out.println("Name : "+Static6.name);
        System.out.println("Name : "+SDemo.name1);
    }
}





