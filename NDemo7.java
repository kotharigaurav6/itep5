// program showing the concept of Nested class in java (non-static nested class | Inner class)

class Enclosing_class // Enclosing class
{
    static int a=100;
    double b=200;
    private String name="Andrew";
    /* Non-static nested class */
    class Nested_class // member class
    {
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
}
class NDemo7{
    public static void main(String args[]){
        Enclosing_class.Nested_class obj = new Enclosing_class().new Nested_class();
        obj.display();
    }
}