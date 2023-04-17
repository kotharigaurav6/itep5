// program showing the concept of Interface
interface Moveable{
    int age=18;
    void show();
}
class Demo implements Moveable{
        public void show(){
                System.out.println("show method called & age : "+age);
            }
}
class Interface10
{
    public static void main(String args[])
    {
        Moveable obj = new Demo();
        obj.show();
    }
}