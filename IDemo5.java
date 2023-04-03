// program showing the concept of Initializer block
class IDemo5
{
    int a;
        {
            a=200;
            System.out.println("value of a : "+a);
        }
    public static void main(String args[])
    {
        IDemo5 obj = new IDemo5();
        System.out.println("value of a : "+obj.a);
    }
}