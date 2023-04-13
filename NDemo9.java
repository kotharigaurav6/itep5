// program showing the concept of Nested class in java (non-static nested class | Inner class | Local class)
import java.util.Scanner;
class Enclosing_class // Enclosing class
{
    int num;
    void display(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number : ");
        num = sc.nextInt();

        class Nested_class // Local class
        {
            void show()
            {
               for(int i=1;i<=10;i++)
               {
                 System.out.println(num+" x "+i+" = "+(num*i));
               }   
            }
        }
        Nested_class obj= new Nested_class();
        obj.show();
    }
}
class NDemo9{
    public static void main(String args[]){
        Enclosing_class obj = new Enclosing_class();
        obj.display();
    }
}