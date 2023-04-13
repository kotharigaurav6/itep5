// program showing the concept of Nested class in java (static nested class)

class Enclosing_class // Enclosing class
{    
    static int a = 100;
    static protected double b = 34.45;
    static private String name = "Andrew";
    
    /*static nested class*/
    static class Nested_class{    
        void display(){
            System.out.println("display method called");
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("name : "+name);
        }
    }
}
class NDemo5
{
    public static void main(String args[])
    {   
        Enclosing_class.Nested_class obj = new Enclosing_class.Nested_class();
        obj.display();      
        System.out.println(obj); 
    }
}