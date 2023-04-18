// program showing the concept of lambda expression
@FunctionalInterface
interface Drawable
{
    void draw();
}
class Lambda1{
    public static void main(String args[]){
        Drawable obj = ()->System.out.println("draw method called");
        obj.draw();
    }
}