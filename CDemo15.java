// program showing the concept of this keyword
class MyClass
{
    String name="Andrew";
    MyClass getInstance()
    {
        this.name = "Mathew";
        return this;
    }
    void getMessage()
    {
        System.out.println("This is an example of this keyword");
    }
}
class CDemo15
{
    public static void main(String args[])
    {
        MyClass obj = new MyClass();
        System.out.println("Name : "+obj.name);
        MyClass object = obj.getInstance();
        System.out.println("Name : "+object.name);
        object.name="Jackson";
        System.out.println("Name : "+obj.name);
//        object.getMessage();
    }
}