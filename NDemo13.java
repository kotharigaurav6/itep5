// program showing the concept of Nested class in java (non-static nested class | Inner class | Anonymous Class)
abstract class Example // abstract class
{
   abstract void display();
} 
class NDemo13{
    void show()
    {
         /*Anonymous class*/
        Example obj = new Example(){
            int a;
            void display(){
                System.out.println("display method called a : "+a);
            }
        };
        obj.display();
    }
    public static void main(String args[]){
       NDemo13 obj = new NDemo13();
       obj.show();
    }
}