// program showing the concept of Method Overriding | run time polymorphism
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
        super.showData();
    }
}
class Overriding1
{
    public static void main(String args[])
    {
        Parent obj = new Child(); // upcasting
        obj.showData();
    }
}