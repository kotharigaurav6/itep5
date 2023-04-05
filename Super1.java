// program showing the concept of super keyword
class Parent
{
    String name = "Andrew Anderson";
    void showName(){
        System.out.println("Parent name : "+name);
    }
}
class Child extends Parent
{
    String name = "Mathew Math";
    void showName(){
        System.out.println("Child name : "+name);
    }
    void display(){
        System.out.println("Parent Name : "+super.name);
        System.out.println("Child Name : "+name);
            super.showName();
            showName();
    }
}
class Super1
{
    public static void main(String args[])
    {
        Child obj = new Child();
        obj.display();
    }
}