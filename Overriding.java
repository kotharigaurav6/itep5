// program showing the concept of Method Overriding
class Parent
{
    void showData()
    {
        System.out.println("show method of Parent class called..!!");
    }
}
class Child extends Parent
{
    @Override // annotation
    void showData()
    {
        System.out.println("show method of Child class called..!!");
    }
}
class Overriding
{
    public static void main(String args[])
    {
        Child cobj = new Child();
        cobj.showData();
    }
}