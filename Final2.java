// program showing the concept of final keyword

class Final2
{
    final int a=100; // instance variable
    public static void main(String args[])
    {
        Final2 obj = new Final2();
        System.out.println("Value of a : "+obj.a);
 
        final int b = 12;
        System.out.println("Value of b : "+b);
    }
}