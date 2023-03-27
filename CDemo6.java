// program showing the concept of constructor

class CDemo6
{
    int a=100;
    double b;
    String c;
    CDemo6() // constructor
    {
//         a=10;
         b = 56.67;
         c = "abc";
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
      CDemo6 cobj = new CDemo6();
      cobj.display();  
    }
}