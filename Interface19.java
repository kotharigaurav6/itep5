// program showing the concept of Interface
interface Outer_Interface{
    void display();
//    interface Inner_Interface{
    interface Inner_Interface extends Outer_Interface{
        void show();
    }
}
class Interface19 implements Outer_Interface,Outer_Interface.Inner_Interface
{
    public void show(){
        System.out.println("show method called");
    }
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[])
    {
           Outer_Interface.Inner_Interface obj = new Interface19();
           obj.show();
//           Outer_Interface obj1 = new Interface19();
           obj.display();
    }
}