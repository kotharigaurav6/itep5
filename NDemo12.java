// program showing the concept of Nested class in java (non-static nested class | Inner class | Anonymous Class)
abstract class Example // abstract class
{
    abstract void display();
} 
class NDemo12{
    void show()
    {
         /*Anonymous class*/
        new Example(){
            void display(){
                System.out.println("display method called");
            }
        }.display();
    }
    public static void main(String args[]){
       NDemo12 obj = new NDemo12();
       obj.show();
    }
}