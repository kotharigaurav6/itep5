// program showing the concept of Interface
abstract class Showable{
    abstract void show(); 
}
interface Moveable{
    void move(); 
}
class Interface6 extends Showable implements Moveable 
{
    void show(){
        System.out.println("show method called");
    }
    public void move(){
        System.out.println("move method called");
    }
    public static void main(String args[])
    {
        Moveable obj = new Interface6();
        obj.move();
        Showable obj1 = new Interface6();
        obj1.show();
    }
}