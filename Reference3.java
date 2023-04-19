// program showing the concept of Method Reference
import java.util.Scanner;
@FunctionalInterface
interface Operation
{
    void operation();
    default void myFun(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum : "+(a+b));
    }
}
class Reference3 implements Operation{
    public void operation(){}
    public static void main(String args[]){
        Operation obj1 = new Reference3();
        Operation obj = obj1::myFun;
        obj.operation();        
    }
}