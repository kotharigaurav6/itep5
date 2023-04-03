// program showing the concept of Initializer block
class IDemo8
{
    int a;
        {
            a=200;
            System.out.println("value of a : "+a);
        }
        {
            a=300;
            System.out.println("value of a : "+a);
        }
    public static void main(String args[])
    {
        IDemo8 obj = new IDemo8();
        System.out.println("value of a : "+obj.a);
    }
}