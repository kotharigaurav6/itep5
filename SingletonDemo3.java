// program showing the concept of Singleton class (Lazy Initialization)
class Singleton{
    static private Singleton instance;
    private Singleton(){}
    static Singleton getInstance()
    {
        System.out.println("\n-----> instance status : "+instance);
        if(instance==null)
        {
            System.out.println("Inside getInstance() inside if : "+instance);
            instance = new Singleton();
            System.out.println("object created : "+instance);
        }
        System.out.println("Outside getInstance(): "+instance);
        return instance;
    }
    int a=100;
    static void display()
    {
        System.out.println("display method called...");
        System.out.println("instance created : "+instance);
    }
}
class SingletonDemo3
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