// program showing the concept of Interface
interface Moveable{
    static void show(){
        printData();
        System.out.println("Show method called of movable");
    }
    static void move(){
        printData();
        System.out.println("Move method called of movable");
    }
    private static void printData(){
        System.out.println("Statement 1");
        System.out.println("Statement 2");
        System.out.println("Statement 3");
    }
    default void display(){
        show();
        move();
    }
}
class Interface18 implements Moveable
{
    public static void main(String args[])
    {
           Moveable obj = new Interface18();
           obj.display();
    }
}