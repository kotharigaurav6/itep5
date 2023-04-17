// program showing the concept of Interface
interface Moveable{
    default void show(){
        System.out.println("Show method called");
    }
}
interface Showable{
    void display();
}
interface Drawable extends Showable,Moveable{}
class Interface15 implements Drawable
{
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[])
    {
           Drawable obj = new Interface15();
            obj.show();
            obj.display();
    }
}