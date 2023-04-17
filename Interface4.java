// program showing the concept of Interface
interface Showable{
    void show(); 
}
interface Moveable{
    void move(); 
}
class Interface4 implements Showable,Moveable
{
    public void show(){
        System.out.println("show method called");
    }
    public void move(){
        System.out.println("move method called");
    }
    public static void main(String args[])
    {
        Showable obj = new Interface4();
        obj.show();
        Moveable obj1 = new Interface4();
        obj1.move();
    }
}