// program showing the concept of Nested class in java (non-static nested class | Inner class | Anonymous Class)
abstract class Example // abstract class
{
    abstract void display();
} 
class NDemo11{
    void show()
    {
         /*Anonymous class*/
        Example obj = new Example(){
            void display(){
                System.out.println("display method called");
            }
        };
        obj.display();
    }
    public static void main(String args[]){
       NDemo11 obj = new NDemo11();
       obj.show();
    }
}