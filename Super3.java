// program showing the concept of super keyword
class GrandParent
{
    GrandParent(){
        System.out.println("Grand Parent class constructor called");
    }
}
class Parent extends GrandParent
{
    Parent(){
        System.out.println("Parent class constructor called");
    }
}
class Child extends Parent
{
    Child(){
        super();
        System.out.println("Child class constructor called");
    }
}
class Super3{
    public static void main(String args[])
    {
        Child obj = new Child();
    }
}