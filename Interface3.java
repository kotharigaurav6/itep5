// program showing the concept of Interface
@FunctionalInterface // annotation
interface Showable{
    void show(); 
}
class Interface3 implements Showable
{
    public void show(){
        System.out.println("show method called");
    }
    public static void main(String args[])
    {
        Showable obj = new Interface3();
        obj.show();
    }
}