// program showing the concept of constructor

class CDemo2
{
    CDemo2() // constructor
    {
        System.out.println("default constructor | No argument constructor called");
    }
    public static void main(String args[])
    {
        new CDemo2(); // anonymous object
        new CDemo2();
        new CDemo2();
    }
}