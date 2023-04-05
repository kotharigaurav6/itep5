// program showing the concept of Inheritance
class Parent
{
    void show()
    {
        System.out.println("show method called");
    }
}
class Child extends Parent
{
    void display()
    {
        System.out.println("display method called");
    }
}
class Inheritance1
{
    public static void main(String args[])
    {
        Child obj = new Child();
        obj.show();
        obj.display();
    }
}