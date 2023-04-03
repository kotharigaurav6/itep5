// program showing the concept of Singleton class (Eager Initialization)
class Singleton{
    static private Singleton instance;
    private Singleton(){}
    static{
        instance  = new Singleton();
    }
    static Singleton getInstance()
    {
        return instance;
    }
    int a=100;
    static void display()
    {
        System.out.println("display method called...");
        System.out.println("instance created : "+instance);
    }
}
class SingletonDemo2
{
    public static void main(String args[])
    {
        Singleton.display();
        Singleton instance = Singleton.getInstance();
        System.out.println("value of a : "+instance.a);

        instance.a += 50;
        System.out.println("value of a : "+instance.a);

        Singleton instance1 = Singleton.getInstance();
        System.out.println("value of a : "+instance1.a);
    }
}