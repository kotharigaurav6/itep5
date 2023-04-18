// program showing the concept of lambda expression
@FunctionalInterface
interface Drawable
{
    void draw();
}
class Lambda2{
    static int a = 100;
    int b = 200;
    void show(){
        System.out.println("show method called");
    }
    static void draw(){
        System.out.println("draw method called");
    }
    public static void main(String args[]){
        Drawable obj = ()->{
                System.out.println("statement 1");
                System.out.println("statement 2 and a : "+a);
                Lambda2 obj1 = new Lambda2();
                System.out.println("statement 3 and b : "+obj1.b);
                obj1.show();
                draw();
            };
        obj.draw();
    }
}