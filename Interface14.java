// program showing the concept of Interface
interface Moveable{
    void show();
}
interface Showable{
    void show();
}
interface Drawable extends Showable,Moveable{}
class Interface14 implements Drawable
{
    public void show(){
        System.out.println("Show method called");
    }
    public static void main(String args[])
    {
           Drawable obj = new Interface14();
            obj.show();
    }
}