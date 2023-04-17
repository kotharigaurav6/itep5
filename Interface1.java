// program showing the concept of Interface

interface Showable{
    void show(); // public abstract void show();
}
class Interface1 implements Showable
{
    public void show(){
        System.out.println("show method called");
    }
    public static void main(String args[])
    {
        Showable obj = new Interface1();
        obj.show();
    }
}