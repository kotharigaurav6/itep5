// program showing the concept of constructor

class CDemo1
{
    CDemo1() // constructor
    {
        System.out.println("default constructor | No argument constructor called");
    }
    public static void main(String args[])
    {
        new CDemo1(); // anonymous object
    }
}