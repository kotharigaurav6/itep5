// program showing the concept of Method Reference(Reference to a static method)
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    void operation();
    static void myFun(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum : "+(a+b));
    }
}
class Reference2{
    public static void main(String args[]){
        Operation obj = Operation::myFun;
        obj.operation();        
    }
}