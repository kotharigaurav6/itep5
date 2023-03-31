// program showing the concept of final keyword

class Final1
{
    final int a; // instance variable
    Final1()
    {
        a = 200;
    }     
    public static void main(String args[])
    {
        Final1 obj = new Final1();
        System.out.println("Value of a : "+obj.a);
    }
}