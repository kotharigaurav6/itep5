// program showing the concept of Nested class in java (static nested class)

class NDemo3 // Enclosing class
{    
    /*static nested class*/
    static class Nested_class{
        static int a = 100;
        static protected double b = 34.45;
        static private String name = "Andrew";
    
        static void display(){
            System.out.println("display method called");
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("name : "+name);
        }
    }
    public static void main(String args[])
    {   
        Nested_class.display();       
    }
}