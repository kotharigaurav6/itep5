// program showing the concept of super keyword
class GrandParent
{
    void show(){
        System.out.println("grand parent class");
    }
}
class Parent extends GrandParent
{
    // void show(){
    //     super.show();
    //     System.out.println("parent class");
    // }
}
class Child extends Parent
{
    void show(){
        System.out.println("child class");
    }
    void display()
    {
        super.show();
    }
}
class Super4{
    public static void main(String args[])
    {
        Child obj = new Child();
        obj.display();
    }
}