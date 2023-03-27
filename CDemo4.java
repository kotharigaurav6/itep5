// program showing the concept of constructor

class CDemo4
{
    CDemo4() // constructor
    {
        int a=10;
        double b = 56.67;
        String c = "abc";
            System.out.println("default constructor | No argument constructor called");
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("c : "+c);
    }
    public static void main(String args[])
    {
      CDemo4 cobj = new CDemo4();
    }
}