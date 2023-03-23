class Fun8
{
    int a,b; // instance variable ---> multiple copies
             //  obj1--->a,b
             //  obj2--->a,b
    public static void main(String args[])
    {
          Fun8 obj1 = new Fun8();
          Fun8 obj2 = new Fun8();
            obj1.a=100;
            obj1.b=200;
            System.out.println("value : "+obj1.a);
            System.out.println("value : "+obj1.b);

            System.out.println("\nvalue : "+obj2.a);
            System.out.println("value : "+obj2.b);
    }   
}