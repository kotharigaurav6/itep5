// program showing the concept of Method Overriding | run time polymorphism
class Parent
{
    protected void showData()
    {
        System.out.println("show method of Parent class called..!!");
    }
}
class Child extends Parent
{
    @Override
    public void showData()
    {
        System.out.println("show method of Child class called..!!");
    }
}
class Overriding4
{
    public static void main(String args[])
    {
        Parent obj = new Child(); // upcasting
        obj.showData();
    }
}