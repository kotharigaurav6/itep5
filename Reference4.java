// program showing the concept of Method Reference(Reference to an instance method)
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    void operation();
}
class Reference4{
    void myFun(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum : "+(a+b));
    }
    public static void main(String args[]){
        Reference4 obj1 = new Reference4();
        Operation obj = obj1::myFun;
        obj.operation();        
    }
}