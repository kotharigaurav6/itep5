// program showing the concept of Garbage collector
class Garbage
{
    int a=100;
    protected void finalize()
    {
        System.out.println("finalize method called");
    }
    public static void main(String args[])
    {
        Garbage obj = new Garbage();
        System.out.println("obj : "+obj);
        System.out.println("value of a : "+obj.a);
        
        obj = null;
        System.out.println("obj : "+obj);
        System.out.println("value of a : "+obj.a);
      
        System.gc();
    }
}