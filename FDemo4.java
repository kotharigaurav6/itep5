// program showing the concept of Function
class Demo
{
    void view()
    {
        System.out.println("view method called");
        FDemo4 obj=new FDemo4();
        obj.draw();
    }
}
class FDemo4
{
    void draw()
    {
        System.out.println("draw method called");
    }
    void show()
    {
        System.out.println("show method called");
        Demo obj = new Demo();
        obj.view();
    }
    public static void main(String args[])
    {
        FDemo4 obj = new FDemo4();
        obj.show();
        Demo obj1 = new Demo();
        obj1.view();
        System.out.println("The End");
    }
}