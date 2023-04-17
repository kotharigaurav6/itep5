// program showing the concept of Interface
interface Moveable{
    int a=100; 
}
interface Showable{
    int a=200;
    int b=300; 
}
class Interface8 implements Showable,Moveable
{
    public static void main(String args[])
    {
        System.out.println("value of b : "+b);
        System.out.println("value of a in Moveable : "+Moveable.a);
        System.out.println("value of a in Showable : "+Showable.a);
    }
}