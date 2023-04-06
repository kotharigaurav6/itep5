// program showing the concept of Method Overriding | run time polymorphism
class Parent
{
    String name="Andrew Anderson";
    void showData()
    {
        System.out.println("show method of Parent class called..!!");
    }
    void displayData()
    {
        System.out.println("display method of Parent class called..!!");
    }
}
class Child extends Parent
{
    String name="Simon Sim";
    @Override // annotation
    void showData()
    {
        System.out.println("show method of Child class called..!!");
        super.showData();
    }
}
class Overriding2
{
    public static void main(String args[])
    {
        Parent obj = new Child(); // upcasting
        obj.showData();
        System.out.println("Parent name : "+obj.name);
        obj.displayData();       
    }
}