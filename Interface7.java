// program showing the concept of Interface
abstract class Showable implements Moveable{
    abstract void show(); 
    public void move(){
        System.out.println("move method called");
    }
}
interface Moveable{
    void move(); 
}
class Interface7 extends Showable  
{
    void show(){
        System.out.println("show method called");
    }
    // public void move(){
    //     System.out.println("move method called");
    // }
    public static void main(String args[])
    {
        Showable obj = new Interface7();
        obj.show();
        obj.move();
    }
}