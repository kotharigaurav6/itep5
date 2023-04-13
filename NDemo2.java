// program showing the concept of Nested class in java (static nested class)

class NDemo2 // Enclosing class
{
    static int a = 100;
    static protected double b = 34.45;
    static private String name = "Andrew";
    
    /*static nested class*/
    static class Nested_class{
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