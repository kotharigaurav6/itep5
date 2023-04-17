// program showing the concept of Interface
interface Moveable{
    void show();
}
class Interface9
{
    public static void main(String args[])
    {
        // Moveable obj = new Moveable(){
        //     public void show(){
        //         System.out.println("show method called");
        //     }
        // };
        // obj.show();

        new Moveable(){
            public void show(){
                System.out.println("show method called");
            }
        }.show();
    }
}