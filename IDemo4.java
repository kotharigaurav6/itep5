// program showing the concept of Initializer block
class IDemo4
{
        {
            int b=200;
            System.out.println("value of b : "+b);
        }
    public static void main(String args[])
    {
        int a = 100;
        System.out.println("value of a : "+a);        
        IDemo4 obj = new IDemo4();
    }
}