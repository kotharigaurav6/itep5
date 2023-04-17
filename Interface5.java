// program showing the concept of Interface
interface Showable{
    void show(); 
}
interface Moveable extends Showable{
    void move(); 
}
class Interface5 implements Moveable
{
    public void show(){
        System.out.println("show method called");
    }
    public void move(){
        System.out.println("move method called");
    }
    public static void main(String args[])
    {
        Moveable obj = new Interface5();
        obj.show();
        obj.move();
    }
}