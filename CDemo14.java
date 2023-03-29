// program showing the concept of this keyword
class MyClass
{
    MyClass getInstance()
    {
        return this;
    }
    void getMessage()
    {
        System.out.println("This is an example of this keyword");
    }
}
class CDemo14
{
    public static void main(String args[])
    {
        MyClass obj = new MyClass();
        MyClass object = obj.getInstance();
        object.getMessage();
    }
}