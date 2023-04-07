// program showing the concept of method overriding
class Parent
{
    void shape()
    {
        System.out.println("It's a Shape");
    }
}
class Circle extends Parent{
    @Override
    void shape()
    {
        System.out.println("Circle shape called");
    }    
}
class Rectangle extends Parent{
    @Override
    void shape()
    {
        System.out.println("Rectangle shape called");
    }    
}
class Square extends Parent{}

class Overriding6
{
    public static void main(String args[])
    {
        Parent obj;
        obj = new Circle();
        obj.shape();
        obj = new Rectangle();
        obj.shape();
        obj = new Square();
        obj.shape();
    }
}