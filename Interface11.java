// program showing the concept of Interface
interface Moveable{
    int age=18;
    void show();
}
class Interface11
{
    public static void main(String args[])
    {
        Moveable obj = new Moveable(){
            public void show(){
                System.out.println("show method called & age : "+age);
            }
        };
        obj.show();
    }
}