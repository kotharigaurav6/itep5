// program showing the concept of super keyword
class Parent
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
class Super2{
    public static void main(String args[])
    {
        Child obj = new Child();
    }
}