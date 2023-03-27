// program showing the concept of constructor

class CDemo3
{
    CDemo3() // constructor
    {
        System.out.println("default constructor | No argument constructor called");
    }
    public static void main(String args[])
    {
      //  CDemo3 c1 = new CDemo3(),c2 = new CDemo3(),c3 = new CDemo3();

      CDemo3 cobj;
       cobj = new CDemo3();
       cobj = new CDemo3();
       cobj = new CDemo3();  
    }
}