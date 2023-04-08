// program showing the concept of abstract class
abstract class Parent
{
    abstract void shape();
//    final abstract void shape(); // error : illegal combination of modifiers: abstract and final
}
class AbstractDemo1 extends Parent
{
    void shape()
    {
        System.out.println("shape method called");
    }
    public static void main(String args[])
    {
        Parent obj = new AbstractDemo1();
        obj.shape();
    }
}