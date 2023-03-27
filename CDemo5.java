// program showing the concept of constructor

class CDemo5
{
    int a;
    double b;
    String c;
    CDemo5() // constructor
    {
        int a=10;
        double b = 56.67;
        String c = "abc";
            System.out.println("default constructor | No argument constructor called");
    }
    void display()
    {
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("c : "+c);
    }
    public static void main(String args[])
    {
      CDemo5 cobj = new CDemo5();
      cobj.display();  
    }
}