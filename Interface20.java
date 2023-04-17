// program showing the concept of Interface
interface Outer_Interface{
    void display();
    interface Inner_Interface extends Outer_Interface{
        public default void display(){
            System.out.println("display method called");
        }
    }
}
class Interface20 implements Outer_Interface.Inner_Interface
{
        public static void main(String args[])
        {
           Outer_Interface.Inner_Interface obj = new Interface20();
           obj.display();
    }
}