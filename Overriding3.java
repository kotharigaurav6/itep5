// program showing the concept of Method Overriding | run time polymorphism
class Parent
{
    String name="Andrew Anderson";
    void showData()
    {
        System.out.println("show method of Parent class called..!!");
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
    void displayData()
    {
        System.out.println("display method of Child class called..!!");
    }
}
class Overriding3
{
    public static void main(String args[])
    {
        Parent obj = new Child(); // upcasting
        obj.showData();
        System.out.println("Parent name : "+obj.name);
        
        Child cobj = (Child)obj;// downcasting
        System.out.println("Child name : "+cobj.name);
        cobj.displayData();       
    }
}