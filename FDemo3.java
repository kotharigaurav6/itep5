// program showing the concept of Function
class FDemo3
{
    void show()
    {
        System.out.println("show method called");
    }
    public static void main(String args[])
    {
        // FDemo3 obj1 = new FDemo3();
        // FDemo3 obj2 = new FDemo3();
        // obj1.show();
        // obj2.show();

        // FDemo3 obj1 = new FDemo3(),obj2 = new FDemo3();
        // obj1.show();
        // obj2.show();
    
        FDemo3 obj;
        obj = new FDemo3();
        obj.show();

        obj = new FDemo3();
        obj.show();

    }
}