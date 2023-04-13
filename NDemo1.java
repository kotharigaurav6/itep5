// program showing the concept of Nested class in java (static nested class)

class NDemo1 // Enclosing class
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
    /* Member function of enclosing class */
    void showData(){
            System.out.println("showData method called");
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("name : "+name);
    }
    public static void main(String args[])
    {   
        Nested_class obj = new Nested_class();
        obj.display();   
         System.out.println(obj);     
        NDemo1 obj1 = new NDemo1();
        obj1.showData();
    }
}