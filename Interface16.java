// program showing the concept of Interface
interface Moveable{
    default void show(){
        System.out.println("Show method called of movable");
    }
}
interface Showable{
    default void show(){
        System.out.println("Show method called of showable");
    }
}
class Interface16 implements Showable,Moveable
{
    public void show(){
        System.out.println("Show method called");
    }
    public static void main(String args[])
    {
           Moveable obj = new Interface16();
           obj.show();
           Showable obj1 = new Interface16();
           obj1.show();           
    }
}