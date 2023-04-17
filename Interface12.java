// program showing the concept of Interface
interface Moveable{
    int age=18;
    void show();
}
class Interface12
{
    public static void main(String args[])
    {
        // lambda expression
        Moveable obj = ()->System.out.println("show method called & age : "+Moveable.age);
        obj.show();
    }
}