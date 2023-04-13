// program showing the concept of Nested class in java (non-static nested class | Inner class)

class NDemo6 // Enclosing class
{
    static int a=100;
    double b=200;
    private String name="Andrew";
    /* Non-static nested class */
    class Nested_class{
        void display(){
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("name : "+name);
            showData();
        }
    }
    void showData()
    {
        System.out.println("Inside showData");
            System.out.println("a : "+a);
            System.out.println("b : "+b);
            System.out.println("name : "+name);
    }
    public static void main(String args[]){
        // NDemo6 obj1 = new NDemo6();
        // Nested_class obj = obj1.new Nested_class();
        
        Nested_class obj = new NDemo6().new Nested_class();
        obj.display();
    }
}