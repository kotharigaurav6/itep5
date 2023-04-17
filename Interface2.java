// program showing the concept of Interface

interface Showable{
    void show(); // public abstract void show();
    void display();
}
class Interface2 implements Showable
{
    public void show(){
        System.out.println("show method called");
    }
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[])
    {
        Showable obj = new Interface2();
        obj.show();
        obj.display();
    }
}