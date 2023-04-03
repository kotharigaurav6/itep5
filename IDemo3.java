// program showing the concept of block
class IDemo3
{
    void show(){
        System.out.println("Before block");    
        {
            int b=200;
            System.out.println("value of b : "+b);
        }
        System.out.println("After block");    
    }
    public static void main(String args[])
    {
        int a = 100;
        System.out.println("value of a : "+a);
        IDemo3 obj = new IDemo3();
        obj.show();
    }
}