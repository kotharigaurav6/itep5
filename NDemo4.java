// program showing the concept of Nested class in java (static nested class)

class NDemo4 // Enclosing class
{    
    /*static nested class*/
    static class Nested_class{
         int a = 100;
         protected double b = 34.45;
         private String name = "Andrew";
    
        void display(){
            System.out.println("display method called");
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("name : "+name);
        }
    }
    public static void main(String args[])
    {   
        Nested_class obj = new Nested_class();
        obj.display();       
    }
}