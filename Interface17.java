// program showing the concept of Interface
interface Moveable{
    default void show(){
        printData();
        System.out.println("Show method called of movable");
    }
    default void move(){
        printData();
        System.out.println("Move method called of movable");
    }
    private void printData(){
        System.out.println("Statement 1");
        System.out.println("Statement 2");
        System.out.println("Statement 3");
    }
}
class Interface17 implements Moveable
{
    public static void main(String args[])
    {
           Moveable obj = new Interface17();
           obj.show();
           obj.move();
    }
}